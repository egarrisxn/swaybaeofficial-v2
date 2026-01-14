"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { ActionState } from "@/types";

export async function getUserData() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let suggestedName: string | null = null;

  if (user && user.user_metadata) {
    if (
      user.app_metadata?.provider === "discord" &&
      user.user_metadata?.preferred_username
    ) {
      suggestedName = user.user_metadata.preferred_username;
    } else {
      suggestedName =
        user.user_metadata.full_name ||
        user.user_metadata.user_name ||
        user.user_metadata.name ||
        null;
    }
    if (suggestedName) suggestedName = suggestedName.trim();
  }

  let commentsQuery = supabase
    .from("community_comments")
    .select("*")
    .order("created_at", { ascending: false });

  if (user) {
    commentsQuery = commentsQuery.or(`approved.eq.true,user_id.eq.${user.id}`);
  } else {
    commentsQuery = commentsQuery.eq("approved", true);
  }

  const { data: comments, error: commentsError } = await commentsQuery;

  if (commentsError) {
    console.error("Error fetching comments:", commentsError.message);
  }

  return { user, suggestedName, comments };
}

export async function userSubmitComment(
  _prevState: ActionState | undefined,
  formData: FormData
): Promise<ActionState> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: undefined,
      message: "You must be logged in to leave a comment.",
    };
  }

  let finalName: string | null = null;

  if (user.user_metadata) {
    if (
      user.app_metadata?.provider === "discord" &&
      user.user_metadata?.preferred_username
    ) {
      finalName = user.user_metadata.preferred_username;
    } else {
      finalName =
        user.user_metadata.full_name ||
        user.user_metadata.user_name ||
        user.user_metadata.name ||
        null;
    }
    if (finalName) finalName = finalName.trim();
  }

  const message = formData.get("message") as string;

  if (!message || message.trim() === "") {
    return { success: false, message: "Message cannot be empty." };
  }

  const { error } = await supabase.from("community_comments").insert({
    user_id: user.id,
    name: finalName,
    message: message,
    approved: false,
  });

  if (error) {
    console.error("Error submitting comment:", error.message);
    return {
      success: false,
      message:
        "Failed to submit comment due to a server error. Please try again.",
    };
  }

  revalidatePath("/community");

  return {
    success: true,
    message: "Comment submitted successfully! Awaiting admin approval.",
  };
}

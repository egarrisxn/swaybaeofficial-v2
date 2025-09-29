"use server";

import { revalidatePath } from "next/cache";

import { createAdminClient } from "@/lib/supabase/admin";

import type { ActionState } from "@/types";

export async function adminApproveComment(
  _prevState: ActionState | undefined,
  commentId: string
): Promise<ActionState> {
  const supabaseAdmin = createAdminClient();

  const { error } = await supabaseAdmin
    .from("community_comments")
    .update({ approved: true })
    .eq("id", commentId);

  if (error) {
    console.error("Error approving comment:", error.message);
    return { success: false, message: "Failed to approve comment." };
  }

  revalidatePath("/admin");
  revalidatePath("/community");

  return { success: true, message: "Comment approved successfully!" };
}

export async function adminDeleteComment(
  _prevState: ActionState | undefined,
  commentId: string
): Promise<ActionState> {
  const supabaseAdmin = createAdminClient();

  const { error } = await supabaseAdmin
    .from("community_comments")
    .delete()
    .eq("id", commentId);

  if (error) {
    console.error("Error deleting comment:", error.message);
    return { success: false, message: "Failed to delete comment." };
  }

  revalidatePath("/admin");
  revalidatePath("/community");

  return { success: true, message: "Comment deleted successfully!" };
}

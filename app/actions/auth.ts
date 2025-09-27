"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SITE_URL } from "@/lib/env";

export async function userLogout() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  revalidatePath("/community", "layout");
  redirect("/");
}

export async function authWithDiscord() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: `${SITE_URL}/api/auth/callback`,
    },
  });

  if (error) throw new Error(`Error signing in: ${error.message}`);

  if (data.url) {
    redirect(data.url);
  }
}

export async function authWithTwitch() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "twitch",
    options: {
      redirectTo: `${SITE_URL}/api/auth/callback`,
    },
  });

  if (error) throw new Error(`Error signing in: ${error.message}`);

  if (data.url) {
    redirect(data.url);
  }
}

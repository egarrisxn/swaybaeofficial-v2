"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : (process?.env?.NEXT_PUBLIC_SITE_URL ??
      process?.env?.NEXT_PUBLIC_VERCEL_URL ??
      "https://swaybae.net");

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

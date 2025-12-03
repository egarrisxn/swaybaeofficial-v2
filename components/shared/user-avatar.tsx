"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useImage } from "@/hooks/use-user/image";
import { useName } from "@/hooks/use-user/name";

export default function UserAvatar() {
  const usersName = useName();
  const profileImage = useImage();

  const initials = usersName
    ?.split(" ")
    ?.map((word) => word[0])
    ?.join("")
    ?.toUpperCase();

  return (
    <Avatar>
      {profileImage && <AvatarImage src={profileImage} alt={initials} />}
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}

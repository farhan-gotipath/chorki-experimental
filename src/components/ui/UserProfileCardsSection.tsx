import React from "react";
import UserProfileCard from "./UserProfileCard";

export default function UserProfileCardsSection() {
  return (
    <div className="flex items-center gap-3 w-full overflow-x-auto">
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
    </div>
  );
}

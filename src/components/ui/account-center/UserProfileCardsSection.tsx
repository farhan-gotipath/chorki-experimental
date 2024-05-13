import React from "react";
import UserProfileCard from "./UserProfileCard";
import AddUserProfileCard from "./AddUserProfileCard";

export default function UserProfileCardsSection() {
  return (
    <div className="flex items-center gap-2 w-full overflow-x-auto">
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
      <UserProfileCard />
      <AddUserProfileCard />
    </div>
  );
}

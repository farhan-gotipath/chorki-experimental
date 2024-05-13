import PencilOutlineIcon from "@/icons/PencilOutlineIcon";
import React from "react";
import UserProfileCardsSection from "./UserProfileCardsSection";

export default function AccountCenterCard() {
  return (
    <div className="bg-neutral-800 max-w-md mx-auto p-4 rounded-2xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base text-white font-semibold">Account Center</h2>
          <div className="flex items-center gap-2">
            <PencilOutlineIcon />
            <p className="text-xs font-medium">Manage Profiles</p>
          </div>
        </div>

        <UserProfileCardsSection />
      </div>
    </div>
  );
}

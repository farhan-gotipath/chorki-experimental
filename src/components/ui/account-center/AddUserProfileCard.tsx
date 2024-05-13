import PlusOutlineIcon from "@/icons/outline/PlusOutlineIcon";
import React from "react";

export default function AddUserProfileCard() {
  return (
    <>
      <div className="h-full bg-gray-700 rounded-xl p-6 cursor-pointer">
        <PlusOutlineIcon className="w-8 h-8 fill-zinc-400" />
      </div>
      <p className="truncate text-xs text-white font-medium text-center">
        Add Profile
      </p>
    </>
  );
}

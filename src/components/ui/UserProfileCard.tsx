import Image from "next/image";
import React from "react";

export default function UserProfileCard() {
  return (
    <Image
      src="/images/sample-user-img.svg"
      alt="Sample User Image"
      width={500}
      height={500}
      className="w-20 h-20 cursor-pointer border-2 object-cover aspect-square border-black rounded-xl"
      // ring-2 ring-offset-2
    />
  );
}

// ring is for active cards only. Will need conditional rendering when it's dynamic.

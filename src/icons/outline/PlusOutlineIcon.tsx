import { DEFAULT_ICON_CLASSES } from "@/constants/defaultIconClasses";
import { cn } from "@/lib/utils";
import { IconProps } from "@/types/icons/IconProps";
import React from "react";

export default function PlusOutlineIcon({ className, ...props }: IconProps) {
  const iconClassName = cn(DEFAULT_ICON_CLASSES, className);
  return (
    <svg
      className={iconClassName}
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12H18"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M12 6V18"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}

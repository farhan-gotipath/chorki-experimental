import React from "react";

export interface IconProps extends Partial<HTMLOrSVGElement> {
  className?: React.ComponentProps<"div">["className"];
  //   [key: string]: any;
}

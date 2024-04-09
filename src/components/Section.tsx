import React from "react";
import { twMerge } from "tailwind-merge";

export default function Section({
  id,
  className,
  fitHeight,
  children
}: {
  id?: string;
  className?: string;
  fitHeight?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className={twMerge(
        fitHeight ? "min-h-fit" : "min-h-screen",
        "flex w-full flex-col gap-4 p-6 pt-20",
        className
      )}
    >
      {children}
    </div>
  );
}

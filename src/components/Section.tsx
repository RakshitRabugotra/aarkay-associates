import React from "react";
import { twMerge } from "tailwind-merge";

export default function Section({
  id,
  className,
  children,
  padded
}: {
  id?: string;
  className?: string;
  padded?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      id={id}
      className={twMerge(
        "min-h-screen p-6",
        "flex w-full flex-col gap-4",
        padded ? "pt-20" : "",
        className
      )}
    >
      {children}
    </div>
  );
}

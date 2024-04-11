import React from "react";
import { twMerge } from "tailwind-merge";

export default function Heading({ className, children } : {className?: string; children: React.ReactNode }) {
    return <div className={twMerge("heading font-semibold text-5xl leading-tight",  "inline-flex justify-between", className)}>{children}</div>;
}
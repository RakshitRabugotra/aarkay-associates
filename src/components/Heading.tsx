import React from "react";
import { twMerge } from "tailwind-merge";

export default function Heading({ className, children } : {className?: string; children: React.ReactNode }) {
    return <h1 className={twMerge("heading font-semibold text-5xl leading-tight", className)}>{children}</h1>;
}
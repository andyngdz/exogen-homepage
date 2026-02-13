"use client";

import React from "react";

interface PrismBorderProps {
  children: React.ReactNode;
  className?: string;
}

export function PrismBorder({ children, className = "" }: PrismBorderProps) {
  return (
    <div className={`relative group p-px overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-flow pointer-events-none" />
      <div className="absolute inset-0 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
      <div className="relative rounded-xl bg-zinc-950 overflow-hidden h-full w-full">
        {children}
      </div>
    </div>
  );
}

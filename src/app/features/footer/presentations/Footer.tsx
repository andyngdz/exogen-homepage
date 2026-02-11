"use client";

import { Link } from "@heroui/react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <Image
                src="/logo.png"
                alt="ExoGen Logo"
                fill
                className="object-contain"
                sizes="24px"
              />
            </div>
            <span className="text-sm text-zinc-500">
              ExoGen — Open source, MIT License
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/andyngdz/exogen"
              isExternal
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://github.com/andyngdz/exogen/issues"
              isExternal
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Issues
            </Link>
            <Link
              href="https://github.com/andyngdz/exogen/releases"
              isExternal
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Releases
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

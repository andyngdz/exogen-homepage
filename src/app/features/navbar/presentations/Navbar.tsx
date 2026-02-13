"use client";

import {
  Button,
  Navbar as HeroNavbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Download", href: "#download" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroNavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll={false}
      isBlurred
      isBordered
      maxWidth="xl"
      classNames={{
        base: "bg-black/80 backdrop-blur-md border-b border-white/8",
        wrapper: "px-4 sm:px-6",
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.png"
                alt="ExoGen Logo"
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">
              ExoGen
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="https://github.com/andyngdz/exogen"
            isExternal
            variant="bordered"
            size="sm"
            className="border-white/15 text-white hover:bg-white/5 text-sm font-normal"
            startContent={<Github className="w-4 h-4" />}
          >
            GitHub
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-black/95 pt-6">
        {navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              href={item.href}
              className="w-full text-zinc-400 hover:text-white text-lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            href="https://github.com/andyngdz/exogen"
            isExternal
            className="w-full text-zinc-400 hover:text-white text-lg"
          >
            GitHub
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroNavbar>
  );
}

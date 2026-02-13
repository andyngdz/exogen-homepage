export interface Platform {
  name: string;
  icon: React.ReactNode;
  formats: string;
  href: string;
}

export const RELEASES_URL = "https://github.com/andyngdz/exogen/releases/latest";

export const platforms: Omit<Platform, "icon">[] = [
  {
    name: "Windows",
    formats: ".exe installer",
    href: RELEASES_URL,
  },
  {
    name: "macOS",
    formats: ".dmg installer",
    href: RELEASES_URL,
  },
  {
    name: "Linux",
    formats: ".AppImage, .deb, .rpm",
    href: RELEASES_URL,
  },
];

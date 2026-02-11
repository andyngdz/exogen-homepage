import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ExoGen — Generate AI Images Locally",
  description:
    "A privacy-focused desktop application for generating AI images locally using Stable Diffusion. 100% private, free forever, and fully offline.",
  openGraph: {
    title: "ExoGen — Generate AI Images Locally",
    description:
      "Generate stunning AI images on your own machine. Private, free, and offline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

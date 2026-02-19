import { AntigravitySwarm } from "@/components/AntigravitySwarm";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exogenart.com"),
  title: "ExoGen — Generate AI Images Locally",
  description:
    "A privacy-focused desktop application for generating AI images locally using Stable Diffusion. 100% private, free forever, and fully offline.",
  openGraph: {
    title: "ExoGen — Generate AI Images Locally",
    description:
      "Generate stunning AI images on your own machine. Private, free, and offline.",
    type: "website",
    images: [
      {
        url: "/background.jpeg",
        width: 1200,
        height: 630,
        alt: "ExoGen — Generate AI Images Locally",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExoGen — Generate AI Images Locally",
    description:
      "Generate stunning AI images on your own machine. Private, free, and offline.",
    images: ["/background.jpeg"],
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
        className={`${inter.variable} antialiased bg-black text-foreground`}
      >
        <AntigravitySwarm />
        <div className="relative z-10">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}

"use client";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { platforms, RELEASES_URL } from "@/features/download/services/downloadData";
import { Button, Card, CardBody, Link } from "@heroui/react";

import { LinuxIcon, MacOSIcon, WindowsIcon } from "@/components/PlatformIcons";

const icons: Record<string, React.ReactNode> = {
  Windows: <WindowsIcon />,
  macOS: <MacOSIcon />,
  Linux: <LinuxIcon />,
};

export default function Download() {
  return (
    <section id="download" className="section-border py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Download ExoGen
          </h2>
          <p className="text-zinc-500 text-lg">
            Available for Windows, macOS, and Linux
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {platforms.map((platform) => (
            <FadeIn key={platform.name}>
              <Card
                className="bg-transparent border border-white/8 hover:border-white/15 transition-colors duration-300"
                radius="lg"
                shadow="none"
              >
                <CardBody className="p-6 flex flex-col items-center text-center gap-4">
                  <div className="text-white">{icons[platform.name]}</div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">
                      {platform.name}
                    </h3>
                    <p className="text-xs text-zinc-500">{platform.formats}</p>
                  </div>
                  <Button
                    as={Link}
                    href={platform.href}
                    isExternal
                    size="sm"
                    variant="bordered"
                    className="border-white/15 text-white text-sm w-full"
                  >
                    Download
                  </Button>
                </CardBody>
              </Card>
            </FadeIn>
          ))}
        </FadeInStagger>

        <FadeIn delay={0.4}>
          <p className="text-center text-sm text-zinc-600 mt-8">
            Or view all releases on{" "}
            <Link
              href={RELEASES_URL}
              isExternal
              className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 text-sm"
            >
              GitHub
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

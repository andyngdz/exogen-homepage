"use client";

import { FadeIn } from "@/components/FadeIn";
import { Button, Link } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Github } from "lucide-react";

interface LatestReleaseApiResponse {
  latestVersion?: string;
}

async function fetchLatestRelease(): Promise<string | undefined> {
  const response = await axios.get<LatestReleaseApiResponse>(
    "/api/releases/latest"
  );
  return response.data.latestVersion;
}

export default function Hero() {
  const { data: latestVersion } = useQuery({
    queryKey: ["latest-release"],
    queryFn: fetchLatestRelease,
  });

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {latestVersion ? (
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/3 text-sm text-zinc-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {latestVersion} - Now available
            </div>
          </FadeIn>
        ) : null}

        <FadeIn delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Generate AI Images.
            <br />
            <span className="text-zinc-500">Locally.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Private. Free. No cloud required.
            <br className="hidden sm:block" />
            Your prompts and images never leave your computer.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as={Link}
              href="#download"
              size="lg"
              color="primary"
              className="font-medium px-8"
            >
              Download
            </Button>
            <Button
              as={Link}
              href="https://github.com/andyngdz/exogen"
              isExternal
              size="lg"
              variant="bordered"
              className="border-white/15 text-white font-medium px-8"
              startContent={<Github className="w-[18px] h-[18px]" />}
            >
              GitHub
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

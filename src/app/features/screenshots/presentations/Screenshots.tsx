"use client";

import Image from "next/image";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { PrismBorder } from "@/components/PrismBorder";
import { screenshots } from "@/features/screenshots/services/screenshotsData";

const mediaFocusStyle = {
  objectPosition: "left top",
  transform: "scale(2)",
  transformOrigin: "top left",
} as const;

export default function Screenshots() {
  return (
    <section id="screenshots" className="section-border py-32 sm:py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn className="max-w-2xl mb-24">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            See it in action
          </h2>
          <p className="text-zinc-400 text-lg sm:text-xl leading-relaxed">
            Follow the core workflow from generation controls to model discovery in a clean,
            focused interface designed for the agentic era.
          </p>
        </FadeIn>

        <FadeInStagger className="space-y-32 sm:space-y-40">
          {screenshots.map((screenshot) => (
            <FadeIn key={screenshot.title} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Text Column - Always Left - 40% */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                    {screenshot.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    {screenshot.description}
                  </p>
                </div>

                {/* Media Column - Always Right - 60% */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-3xl bg-zinc-900/50 shadow-2xl backdrop-blur-sm border border-white/5 overflow-hidden">
                    <PrismBorder className="shadow-2xl shadow-black/50 rounded-3xl">
                      <div className="relative aspect-16/10 bg-zinc-950 w-full h-full">
                        {screenshot.type === 'video' && (screenshot.videoMp4Src || screenshot.videoSrc) ? (
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            style={mediaFocusStyle}
                            poster={screenshot.src}
                          >
                            {screenshot.videoMp4Src && <source src={screenshot.videoMp4Src} type="video/mp4" />}
                            {screenshot.videoSrc && <source src={screenshot.videoSrc} type="video/webm" />}
                          </video>
                        ) : (
                          <Image
                            src={screenshot.src || ''}
                            alt={screenshot.alt}
                            fill
                            className="object-cover"
                            style={mediaFocusStyle}
                            sizes="(max-width: 1024px) 100vw, 60vw"
                          />
                        )}
                      </div>
                    </PrismBorder>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

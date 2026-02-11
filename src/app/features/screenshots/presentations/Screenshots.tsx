"use client";

import Image from "next/image";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { Card, CardBody } from "@heroui/react";
import { screenshots } from "../services/screenshotsData";

export default function Screenshots() {
  return (
    <section id="screenshots" className="section-border py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">
            Preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            See it in action
          </h2>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((screenshot) => (
            <FadeIn key={screenshot.alt}>
              <Card
                className="bg-transparent border border-white/8 overflow-hidden hover:border-white/15 transition-colors duration-300"
                radius="lg"
                shadow="none"
              >
                <CardBody className="p-0">
                  <div className="relative aspect-16/10 bg-zinc-950">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-zinc-400">
                      {screenshot.caption}
                    </p>
                  </div>
                </CardBody>
              </Card>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}


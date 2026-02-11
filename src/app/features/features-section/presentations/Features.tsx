"use client";

import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { features } from "@/features/features-section/services/featuresData";
import { Card, CardBody } from "@heroui/react";

export default function Features() {
  return (
    <section id="features" className="section-border py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4 font-medium">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Why ExoGen
          </h2>
        </FadeIn>
porn
        <FadeInStagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          faster
        >
          {features.map((feature) => (
            <FadeIn key={feature.title}>
              <Card
                className="bg-transparent border border-white/8 hover:border-white/15 transition-colors duration-300"
                radius="lg"
                shadow="none"
              >
                <CardBody className="p-6">
                  <feature.icon className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-base font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

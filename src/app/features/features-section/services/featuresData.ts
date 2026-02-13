import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Download,
  Layers,
  ScanSearch,
  ShieldCheck,
  Zap,
} from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "100% Private",
    description:
      "Everything runs locally on your machine. Your prompts and images never leave your computer.",
  },
  {
    icon: BadgeDollarSign,
    title: "Free Forever",
    description:
      "No API costs, no subscriptions. Completely free and open-source under the MIT license.",
  },
  {
    icon: Zap,
    title: "GPU Accelerated",
    description:
      "CUDA support for lightning-fast generation. CPU mode available as a fallback.",
  },
  {
    icon: Layers,
    title: "LoRA Support",
    description:
      "Apply LoRA models for fine-tuned styles and characters with adjustable weights.",
  },
  {
    icon: Download,
    title: "HuggingFace Models",
    description:
      "Browse and download Stable Diffusion models directly from HuggingFace.",
  },
  {
    icon: ScanSearch,
    title: "Hires Upscaling",
    description:
      "Enhance images with Hires.fix using Real-ESRGAN or traditional upscalers.",
  },
];

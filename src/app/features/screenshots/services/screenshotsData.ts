export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

export const screenshots: Screenshot[] = [
  {
    src: "/screenshots/screenshot-1.svg",
    alt: "ExoGen main interface showing image generation",
    caption: "Generate images with customizable parameters",
  },
  {
    src: "/screenshots/screenshot-2.svg",
    alt: "ExoGen model browser with HuggingFace integration",
    caption: "Browse and download models from HuggingFace",
  },
  {
    src: "/screenshots/screenshot-3.svg",
    alt: "ExoGen generation history and gallery",
    caption: "View your generation history in a beautiful gallery",
  },
];


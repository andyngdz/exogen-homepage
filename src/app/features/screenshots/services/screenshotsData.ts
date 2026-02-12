export interface Screenshot {
  src?: string;
  videoSrc?: string;
  videoMp4Src?: string;
  type: "image" | "video";
  alt: string;
  title: string;
  description: string;
}

export const screenshots: Screenshot[] = [
  {
    type: "video",
    videoSrc: "/screenshots/dashboard_1080p.webm",
    videoMp4Src: "/screenshots/dashboard_1080p.mp4",
    src: "/screenshots/dashboard.png", // Fallback
    alt: "ExoGen dashboard showing image generation workflow",
    title: "An AI IDE Core",
    description: "Generate images with customizable parameters, samplers, and model settings in a focused environment.",
  },
  {
    type: "image",
    src: "/screenshots/model_search.png",
    alt: "ExoGen model browser with model search results",
    title: "Discover better models fast",
    description: "Browse and download models from HuggingFace without leaving the app.",
  },
];

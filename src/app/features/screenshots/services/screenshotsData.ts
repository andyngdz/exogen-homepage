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
    videoMp4Src: "/screenshots/dashboard.mp4",
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
  {
    type: "video",
    videoMp4Src: "/screenshots/img-2-img.mp4",
    alt: "ExoGen image to image workflow with source and generated outputs",
    title: "Refine with image-to-image",
    description: "Start from an existing image and iterate quickly with guided transformations and prompt control.",
  },
];

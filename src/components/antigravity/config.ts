import type { SwarmConfig } from "./types";

export const SWARM_CONFIG: SwarmConfig = {
  cursor: {
    radius: 0.065,
    strength: 3,
    dragFactor: 0.015,
  },
  halo: {
    outerOscFrequency: 2.6,
    outerOscAmplitude: 0.42,
    radiusBase: 1.25,
    radiusAmplitude: 0.2,
    shapeAmplitude: 0.75,
    rimWidth: 0.58,
    outerStartOffset: 0.2,
    outerEndOffset: 1,
    scaleX: 1.2,
    scaleY: 1,
  },
  particles: {
    baseSize: 0.016,
    activeSize: 0.034,
    blobScaleX: 1,
    blobScaleY: 0.6,
    rotationSpeed: 0.1,
    rotationJitter: 0.2,
    cursorFollowStrength: 1,
    oscillationFactor: 1,
    colorBase: "#0a1330",
    colorOne: "#4285f5",
    colorTwo: "#eb4236",
    colorThree: "#faba03",
  },
};

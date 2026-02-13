import * as THREE from "three";

import type { SwarmConfig } from "./types";

export function createUniforms(config: SwarmConfig) {
  return {
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uOuterOscFrequency: { value: config.halo.outerOscFrequency },
    uOuterOscAmplitude: { value: config.halo.outerOscAmplitude },
    uHaloRadiusBase: { value: config.halo.radiusBase },
    uHaloRadiusAmplitude: { value: config.halo.radiusAmplitude },
    uHaloShapeAmplitude: { value: config.halo.shapeAmplitude },
    uHaloRimWidth: { value: config.halo.rimWidth },
    uHaloOuterStartOffset: { value: config.halo.outerStartOffset },
    uHaloOuterEndOffset: { value: config.halo.outerEndOffset },
    uHaloScaleX: { value: config.halo.scaleX },
    uHaloScaleY: { value: config.halo.scaleY },
    uParticleBaseSize: { value: config.particles.baseSize },
    uParticleActiveSize: { value: config.particles.activeSize },
    uBlobScaleX: { value: config.particles.blobScaleX },
    uBlobScaleY: { value: config.particles.blobScaleY },
    uParticleRotationSpeed: { value: config.particles.rotationSpeed },
    uParticleRotationJitter: { value: config.particles.rotationJitter },
    uParticleOscillationFactor: { value: config.particles.oscillationFactor },
    uParticleColorBase: { value: new THREE.Color(config.particles.colorBase) },
    uParticleColorOne: { value: new THREE.Color(config.particles.colorOne) },
    uParticleColorTwo: { value: new THREE.Color(config.particles.colorTwo) },
    uParticleColorThree: { value: new THREE.Color(config.particles.colorThree) },
  };
}

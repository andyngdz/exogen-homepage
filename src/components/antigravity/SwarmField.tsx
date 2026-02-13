"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import { SWARM_CONFIG } from "./config";
import { createParticleAttributes } from "./createParticleAttributes";
import { createUniforms } from "./createUniforms";
import { SWARM_FRAGMENT_SHADER, SWARM_VERTEX_SHADER } from "./shaders";
import { usePointerTracking } from "./usePointerTracking";

const COUNT_X = 100;
const COUNT_Y = 55;
const COUNT = COUNT_X * COUNT_Y;

export function SwarmField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial | null>(null);
  const { viewport } = useThree();
  const { pointerRef, hoveringRef } = usePointerTracking();

  const geometry = useMemo(() => new THREE.PlaneGeometry(1, 1), []);
  const uniforms = useMemo(() => createUniforms(SWARM_CONFIG), []);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms,
        vertexShader: SWARM_VERTEX_SHADER,
        fragmentShader: SWARM_FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
      }),
    [uniforms],
  );

  useEffect(() => {
    materialRef.current = material;
    return () => {
      materialRef.current = null;
    };
  }, [material]);

  useEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) return;

    const { offsets, randoms } = createParticleAttributes(COUNT_X, COUNT_Y);
    mesh.geometry.setAttribute("aOffset", new THREE.InstancedBufferAttribute(offsets, 3));
    mesh.geometry.setAttribute("aRandom", new THREE.InstancedBufferAttribute(randoms, 1));
  }, []);

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state) => {
    const mat = materialRef.current;
    if (!mat) return;

    mat.uniforms.uTime.value = state.clock.getElapsedTime();

    if (!hoveringRef.current) return;

    const pointer = pointerRef.current ?? state.pointer;
    const t = state.clock.getElapsedTime();
    const jitterRadius = Math.min(viewport.width, viewport.height) * SWARM_CONFIG.cursor.radius;
    const jitterX = (Math.sin(t * 0.35) + Math.sin(t * 0.77 + 1.2)) * 0.5;
    const jitterY = (Math.cos(t * 0.31) + Math.sin(t * 0.63 + 2.4)) * 0.5;

    const targetX =
      ((pointer.x * viewport.width) / 2 + jitterX * jitterRadius * SWARM_CONFIG.cursor.strength) *
      SWARM_CONFIG.particles.cursorFollowStrength;
    const targetY =
      ((pointer.y * viewport.height) / 2 + jitterY * jitterRadius * SWARM_CONFIG.cursor.strength) *
      SWARM_CONFIG.particles.cursorFollowStrength;

    const current = mat.uniforms.uMouse.value as THREE.Vector2;
    current.x += (targetX - current.x) * SWARM_CONFIG.cursor.dragFactor;
    current.y += (targetY - current.y) * SWARM_CONFIG.cursor.dragFactor;
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, COUNT]} />;
}

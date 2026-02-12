"use client";

import { Canvas } from "@react-three/fiber";

import { SwarmField } from "./antigravity/SwarmField";

export function AntigravitySwarm() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <SwarmField />
      </Canvas>
    </div>
  );
}

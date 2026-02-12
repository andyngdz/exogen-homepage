export function createParticleAttributes(countX: number, countY: number) {
  const count = countX * countY;
  const offsets = new Float32Array(count * 3);
  const randoms = new Float32Array(count);

  const gridWidth = 18;
  const gridHeight = 10;
  const jitter = 0.18;

  let i = 0;
  for (let y = 0; y < countY; y += 1) {
    for (let x = 0; x < countX; x += 1) {
      const u = x / (countX - 1);
      const v = y / (countY - 1);

      let px = (u - 0.5) * gridWidth;
      let py = (v - 0.5) * gridHeight;

      px += (Math.random() - 0.5) * jitter;
      py += (Math.random() - 0.5) * jitter;

      offsets[i * 3 + 0] = px;
      offsets[i * 3 + 1] = py;
      offsets[i * 3 + 2] = 0;
      randoms[i] = Math.random();
      i += 1;
    }
  }

  return { offsets, randoms };
}

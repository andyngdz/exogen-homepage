import { useEffect, useRef } from "react";

export function usePointerTracking() {
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const hoveringRef = useRef(true);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    const handleLeave = () => {
      hoveringRef.current = false;
    };

    const handleEnter = () => {
      hoveringRef.current = true;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
    };
  }, []);

  return { pointerRef, hoveringRef };
}

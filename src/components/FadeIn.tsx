"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createContext, useContext, useMemo } from "react";

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: "-100px" };

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & {
  delay?: number;
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  const variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      visible: { opacity: 1, y: 0, transition: { duration, delay, ease: "easeOut" as any } },
    }),
    [shouldReduceMotion, delay, duration]
  );

  return (
    <motion.div
      variants={variants}
      initial={isInStaggerGroup ? undefined : "hidden"}
      whileInView={isInStaggerGroup ? undefined : "visible"}
      viewport={isInStaggerGroup ? undefined : viewport}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({
  children,
  faster = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.08 : 0.12 }}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
}

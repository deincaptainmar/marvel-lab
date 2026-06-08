"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: RevealDirection;
  once?: boolean;
};

function getMotion(direction: RevealDirection) {
  if (direction === "down") {
    return { x: 0, y: -36, scale: 0.98 };
  }

  if (direction === "left") {
    return { x: 36, y: 0, scale: 0.98 };
  }

  if (direction === "right") {
    return { x: -36, y: 0, scale: 0.98 };
  }

  if (direction === "scale") {
    return { x: 0, y: 0, scale: 0.92 };
  }

  return { x: 0, y: 40, scale: 0.96 };
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const motionStart = getMotion(direction);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: motionStart.x,
        y: motionStart.y,
        scale: motionStart.scale,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once,
        amount: 0.18,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
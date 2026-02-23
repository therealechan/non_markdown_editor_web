"use client";

import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

import { cn } from "@/lib/utils";

export interface MousePointerClickIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface MousePointerClickIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MousePointerClickIcon = forwardRef<
  MousePointerClickIconHandle,
  MousePointerClickIconProps
>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const isControlledRef = useRef(false);

    useImperativeHandle(ref, () => {
      isControlledRef.current = true;
      return {
        startAnimation: () => controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    const handleMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseEnter?.(e);
        } else {
          controls.start("animate");
        }
      },
      [controls, onMouseEnter]
    );

    const handleMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (isControlledRef.current) {
          onMouseLeave?.(e);
        } else {
          controls.start("normal");
        }
      },
      [controls, onMouseLeave]
    );

    return (
      <div
        className={cn(className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            animate={controls}
            d="m9 9 5 12 1.8-5.2L21 14Z"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            variants={{
              normal: { scale: 1, opacity: 1 },
              animate: { scale: [1, 1.1, 1], opacity: [1, 0.8, 1] },
            }}
          />
          <motion.path
            animate={controls}
            d="M7.2 2.2 8 5.1"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            variants={{
              normal: { opacity: 1 },
              animate: { opacity: [1, 0.4, 1] },
            }}
          />
          <motion.path
            animate={controls}
            d="m5.1 8-2.9-.8"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.15 }}
            variants={{
              normal: { opacity: 1 },
              animate: { opacity: [1, 0.4, 1] },
            }}
          />
          <motion.path
            animate={controls}
            d="M14 4.1 12 6"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
            variants={{
              normal: { opacity: 1 },
              animate: { opacity: [1, 0.4, 1] },
            }}
          />
          <motion.path
            animate={controls}
            d="m6 12-1.9 2"
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.15 }}
            variants={{
              normal: { opacity: 1 },
              animate: { opacity: [1, 0.4, 1] },
            }}
          />
        </svg>
      </div>
    );
  }
);

MousePointerClickIcon.displayName = "MousePointerClickIcon";

export { MousePointerClickIcon };

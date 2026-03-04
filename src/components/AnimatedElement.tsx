import React from "react";
import { useInView } from "@/hooks/use-in-view";

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "scale-in";
  delay?: number;
  stagger?: boolean;
}

/**
 * Component that animates its children as they enter the viewport
 * @param animation - Type of animation: "fade-up", "fade-down", or "scale-in"
 * @param delay - Additional delay in milliseconds
 * @param stagger - Whether to stagger child animations
 */
export const AnimatedElement = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  stagger = false,
}: AnimatedElementProps) => {
  const ref = useInView();

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  const dataAttr = stagger ? "data-animate-group" : `data-animate=${animation}`;

  return (
    <div
      ref={ref}
      className={className}
      data-animate={!stagger ? animation : undefined}
      data-animate-group={stagger ? "" : undefined}
      style={style}
    >
      {children}
    </div>
  );
};

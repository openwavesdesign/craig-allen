import { useEffect, useRef } from "react";

interface UseInViewOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

/**
 * Hook to add animations when elements enter the viewport
 * @param threshold - Intersection observer threshold (default: 0.1)
 * @param rootMargin - Intersection observer root margin (default: "0px 0px -50px 0px")
 * @returns ref to attach to the element to animate
 */
export const useInView = (
  { threshold = 0.1, rootMargin = "0px 0px -50px 0px" }: UseInViewOptions = {}
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
};

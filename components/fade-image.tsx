"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

interface FadeImageProps extends Omit<ImageProps, "onLoad"> {
  fadeDelay?: number;
}

export function FadeImage({ className, fadeDelay = 0, alt, ...props }: FadeImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // An image may finish loading before hydration (cached / prerendered HTML),
    // in which case the load event fires before React attaches onLoad and the
    // image would stay at opacity-0 forever. Recover via HTMLImageElement.complete.
    const img = ref.current?.querySelector("img");
    if (img instanceof HTMLImageElement && img.complete && img.naturalWidth > 0) {
      setIsLoaded(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, fadeDelay);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [fadeDelay]);

  return (
    <div ref={ref} className="relative h-full w-full">
      <Image
        {...props}
        alt={alt}
        className={`${className || ""} transition-all duration-700 ease-out ${
          isVisible && isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

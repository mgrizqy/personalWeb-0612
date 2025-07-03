'use client';

import ReactLenis from "lenis/react";

function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  
  const lenisOptions = {
    lerp: 0.1, // Linear interpolation, lower is smoother
    duration: 1.5, // Animation duration
    smoothTouch: true, // Enable smooth scrolling for touch devices
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollProvider;
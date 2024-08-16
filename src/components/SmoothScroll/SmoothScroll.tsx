'use client';
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const options = {
    lerp: 0.1,
    smoothTouch: true,
    smoothMouse: true,
    smoothScroll: true,
    smoothKeys: true,
    ScrollSmoother: true,

  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
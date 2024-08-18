import React, { useEffect, useRef, ReactNode, ReactElement, cloneElement } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: ReactElement;
}

export default function Magnetic({ children }: MagneticProps): ReactElement {
  const magnetic = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 1)" });
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 1)" });

    magnetic.current?.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magnetic.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.55);
      yTo(y * 0.55);
    });

    magnetic.current?.addEventListener("mouseleave", () => {
      xTo(0);
      yTo(0);
    });
  }, []);

  return cloneElement(children, { ref: magnetic });
}

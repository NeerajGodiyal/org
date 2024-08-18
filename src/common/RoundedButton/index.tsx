import React, { useEffect, useRef, ReactNode, ReactElement } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic';
import styles from './style.module.scss';

interface RoundedButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  [key: string]: any;
}

export default function RoundedButton({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}: RoundedButtonProps): ReactElement {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null); // Initialize as null
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current!.tweenFromTo('enter', 'exit'); // Use non-null assertion operator (!)
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current!.play(); // Use non-null assertion operator (!)
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
      </div>
    </Magnetic>
  );
}

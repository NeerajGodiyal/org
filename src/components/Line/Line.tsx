import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const LineAnimation: React.FC<{ direction?: 'right' | 'left' }> = ({ direction = 'left' }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        controls.start({
          width: '100%', // Animate width to cover full width of the parent
          transition: { duration: 1, ease: 'linear'}, // Adjust duration as needed
        });
      } else {
        controls.start({
          width: '0%', // Reset width when not in view
        });
      }
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [controls]);

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100%',
        visibility: 'visible',
        height: '2px',
        
      }}
    >
      <motion.span
        style={{
          height: '2px',
          backgroundColor: 'gray', // Replace with $col-boulder if using SCSS variables
          position: 'absolute',
          left: 0,
          top: 0,
          width: '0%', // Start width at 0%
          display: 'inline-block',
          transformOrigin: direction === 'right' ? 'right top' : 'left top',
        }}
        animate={controls}
      />
    </div>
  );
};

export default LineAnimation;

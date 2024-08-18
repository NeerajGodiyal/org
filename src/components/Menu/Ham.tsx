import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Rounded from '../../common/RoundedButton';

export default function Ham() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (button.current) {
      gsap.to(button.current, {
        scale: 1,
        duration: 0.25,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: header.current,
          start: 'top 10%',
          end: 'bottom top',
          onLeave: () => {
            gsap.to(button.current, { scale: 1 });
          },
          onEnterBack: () => {
            gsap.to(button.current, { scale: 0 });
            setIsActive(false);
          },
        },
      });
    }
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        
      
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button} dark:bg-pink-400 bg-black text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-pink-600`}
        >
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ''}`}></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </>
  );
}
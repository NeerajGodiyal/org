'use client'
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Text_Opacity } from '../Text_Opacity/Text_Opacity';
import  Line  from '../Line/Line';

const phrases: string[] = [
  `We are a gaming tournament organizer community that hosts tournaments for various games , 
    we are a community of gamers who are passionate about gaming and want to create a platform for gamers to showcase their skills and compete with each other.
    We host tournaments for various games like PUBG, Free Fire, Call of Duty, Valorant, etc.

  `,

];

const phrases1: string[] = [
  `Pubg Pc tournamet  event of prize pool $1k
  Team of 4 players can participate in the tournament

  `,

];

const animation = {
  initial: { y: "100%" },
  enter: (i: number) => ({
    y: "0",
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.015 * i,
    },
  }),
};

const MaskText: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases.map((phrase, index) => (
        <div key={index} className={styles.lineMask}>
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
};



export const MaskText1: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.body}>
      {phrases1.map((phrase, index) => (
        <div key={index} className={styles.lineMask}>
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={inView ? "enter" : ""}
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
};



















const Text_Mask: React.FC = () => {
  return (
    <div className={styles.container}>
        <Text_Opacity />
        <Line />
      <MaskText />
      
      
    </div>
  );
};

export default Text_Mask;
export { MaskText };

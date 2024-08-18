import styles from './styles.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../animation';
import Magnetic from '@/common/Magnetic'; // Import the Magnetic component

interface LinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

export default function Index({ data, isActive, setSelectedIndicator }: LinkProps) {
  const { title, href, index } = data;

  return (
    <Magnetic>
      <motion.div
        className={styles.link}
        onMouseEnter={() => {
          setSelectedIndicator(href);
        }}
        custom={index}
        variants={slide}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div variants={scale} animate={isActive ? 'open' : 'closed'} className={styles.indicator}></motion.div>
        <Link href={href} legacyBehavior>
          <div className={styles.linkText}>{title}</div>
        </Link>
      </motion.div>
    </Magnetic>
  );
}
import React, { useState } from 'react';
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from 'next/link'; // Import Next.js Link component with a different name
import Curve from './Curve';
import Footer from './Footer';


const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
    >
      <div className={styles.body}>
        <div onMouseLeave={() => setSelectedIndicator(pathname)} className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
          (<Link
            href={data.href}
            key={index}
            className={selectedIndicator === data.href ? 'active-link' : ''}
            onClick={() => setSelectedIndicator(data.href)}>

            {data.title}

          </Link>)
          
))}
        </div>
        
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
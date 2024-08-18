'use client'
import Footer from '@/components/Footer/Footer1';
import { useEffect } from "react";
import Lenis from '@studio-freight/lenis';


export default function Home() {

    useEffect(() => {
        const lenis = new Lenis();
    
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
      }, []);

  return (
    <main>
      <Footer />
      
    </main>
  );
}
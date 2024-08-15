import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ThemeSwitcher from '../hooks/ThemeSwitcher';
import {
  SunIcon,
  MoonIcon,
} from '../Icon/Icon';

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  router: ReturnType<typeof useRouter>; // Use the type from useRouter
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, title, className = '' }) => {
  const pathname = usePathname();

  return (
    <Link href={href} >
      
      <span className={`${className} relative group`}>
        {title}
        <span
          className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${pathname === href ? 'w-full' : 'w-0'} dark:bg-light
          `}
        >
          &nbsp;
        </span>
      </span>
    </Link>
  );
};

interface CustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
  router: ReturnType<typeof useRouter>; // Use the type from useRouter
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({ href, title, className = '', toggle }) => {
  const pathname = usePathname();
  const handleClick = () => {
    toggle(); // Call the toggle function passed as a prop
  };
  return (
    <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${pathname === href ? 'w-full' : 'w-0'} dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};


const Navbar = () => { 
  
  const [mode, setMode] = ThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden text-dark dark:text-light '>
        <nav>
          <CustomLink href='/' title='Home' className='mr-4 ' router={useRouter()} />
          <CustomLink href='/about' title='About' className='mx-4' router={useRouter()} />
          <CustomLink href='/blog' title='Blogs' className='mx-4' router={useRouter()} />
          <CustomLink href='/contact' title='Contact' className='ml-4' router={useRouter()} />
        </nav>
        

          <button
            onClick={() => setMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'))}
            className={`ml-16 flex items-center justify-center rounded-full p-2 ${
              mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            {mode === 'dark' ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />}
          </button>
        
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href='/' title='Home' className='' toggle={handleClick} router={useRouter()} />
            <CustomMobileLink href='/about' title='About' className='' toggle={handleClick} router={useRouter()} />
            <CustomMobileLink href='/blog' title='Blog' className='' toggle={handleClick} router={useRouter()} />
            <CustomMobileLink href='/contact' title='Contact' className='' toggle={handleClick} router={useRouter()} />
          </nav>
          

            <button
              onClick={() => setMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'))}
              className={`ml-4 flex items-center justify-center rounded-full p-1 ${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
            >
              {mode === 'dark' ? <SunIcon className={'fill-dark'} /> : <MoonIcon className={'fill-dark'} />}
            </button>
          
        </motion.div>
      ) : null}
    </header>
  );
};
export default Navbar;
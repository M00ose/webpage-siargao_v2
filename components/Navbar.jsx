'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { navVariants } from '../utils/motion.js';

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className='absolute top-10 left-10 z-30'
    >
      <div className='mx-auto flex justify-between items-start gap-8'>
        <Image 
          src='/logo.png'
          alt="logo"
          width={48}
          height={48}
          className="object-contain z-10"
        />
      </div>
    </motion.div>
  )
}

export default Navbar
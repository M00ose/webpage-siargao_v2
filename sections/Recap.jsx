'use client'
import React from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { slideIn, textVariant } from '../utils/motion.js';
import Footer from '../components/Footer';

const Recap = () => {
  return (
    <motion.section 
      initial='hidden'
      whileInView='show'
      className='relative snap-start flex flex-col justify-center items-center h-full min-h-screen w-screen max-w-screen overflow-hidden'
    >
        <motion.div variants={textVariant(0.2)} className='flex-1 flex flex-col gap-8 lg:gap-24 items-center justify-center md:flex-row p-12 min-w-[400px] max-w-[1200px] text-center z-40'>
            <h2 className='pt-24 sm:pt-0 text-2xl sm:text-3xl lg:text-4xl text-white text-center md:text-start'>Look back at all the events and watch the official aftermovie to see how the island celebrated its epic return!</h2>
            <div className='h-[250px] w-[50vw] min-w-[50vw] max-w-[90vw] rounded-lg shadow-lg object-fit overflow-hidden'>
            <ReactPlayer
                key="Aftermovie"
                title="Aftermovie"
                alt="Aftermovie"
                url='https://www.youtube.com/watch?v=BcniKiedP-w'
                controls
                width={'inherit'}
                height={'inherit'}
            />  
            </div>
            
        </motion.div>

        <motion.div
          variants={slideIn("left","tween",0.5,0.5)} 
          className='invisible md:visible absolute  bottom-10 left-5 h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] z-20'
        >
          <Image 
              key="clapboard"
              src="/clapboard.png"
              alt="clapboard"
              height={250}
              width={250}
              className='rotate-[24deg] h-inherit w-inherit'
          />
        </motion.div>

        <motion.div
          variants={slideIn("right","tween",1,0.5)} 
          className='absolute top-0 right-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] z-30'
        >
          <Image 
              key="splash"
              src="/splash.png"
              alt="splash"
              height={500}
              width={1000}
              className='h-inherit w-inherit rotate-12'
          />
        </motion.div>

        <div className='absolute top-20 left-10 h-96 w-96 rounded-full nav-gradient'></div>
        <div className='absolute top-80 right-0 h-96 w-96 rounded-full nav-gradient'></div>
        <motion.div variants={textVariant(1)} className='z-10'>
          <Footer/>
        </motion.div>
        
    </motion.section>
  )
}

export default Recap
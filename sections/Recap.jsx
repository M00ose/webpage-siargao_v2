'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { staggerContainer, textVariant, slideIn, fadeIn } from '../utils/motion.js';

const Recap = () => {
  return (
    <section className={`${styles.innerWidth} ${styles.paddings}`}>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`flex md:flex-row flex-col justify-center gap-24 sm:gap-48 md:gap-8 min-h-screen h-full w-full relative`}
      >
        <div className={`${styles.smallText} text-left sm:text-center z-10 relative`}>
          <motion.h2 variants={textVariant(0.5)}>We can’t get over this journey to support <span className='text-brand-purple'>#BangonSiargao</span> with you, so here’s the first recap of what happened during the closing ceremony. 
          </motion.h2>

          <motion.div 
            variants={slideIn('left','tween',1,1)}
            className="absolute z-20"
          >
            <Image 
              key="drinks"
              src="/drinks.png"
              alt="drinks"
              height={480}
              width={480}
              className='h-60 sm:h-96 w-auto -translate-y-24 translate-x-[25vw] sm:translate-x-[20vw] md:translate-x-0 -rotate-[24deg]'          
            />
          </motion.div> 
        </div>

        <div className='h-auto sm:h-[540px] w-full min-w-[60%] z-10 relative'>
          <motion.iframe
            variants={fadeIn('up','tween',0.5,1)}
            key="Aftermovie"
            src='https://www.youtube.com/embed/BcniKiedP-w' 
            title="Siargao International Surfing Festival Aftermovie"
            className='h-full w-full'
          />

          <motion.div 
            variants={slideIn('right','tween',1,1)}
            className="absolute top-0 z-20"
          >
            <Image 
              key="drums"
              src="/drums.png"
              alt="drums"
              height={720}
              width={720}
              className="-rotate-[28deg] md:translate-y-48 translate-x-[35vw] md:translate-x-[20vw]"
            />
          </motion.div>
        </div>

        <div className='absolute bottom-42 left-0 h-96 w-96 rounded-full orange-gradient hidden'/>
        <div className='absolute bottom-42 right-10 h-64 w-64 rounded-full blue-gradient hidden'/>
        <div className='absolute bottom-96 sm:top-0 -left-12 sm:left-0 h-48 w-48 rounded-full yellow-gradient'/>
      
      </motion.div>
      
    </section>
    
  )
}

export default Recap
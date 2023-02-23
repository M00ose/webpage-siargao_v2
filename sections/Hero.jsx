'use client';
import { Navbar } from '../components';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { staggerContainer, textVariant, zoomIn, slideIn, drop, fadeIn } from '../utils/motion.js';
import { presentors, sponsors } from '../constants';

const Hero = () => {
  return (

    <section className='relative'>
      <Navbar />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${styles.paddingY} h-full flex md:flex-row flex-col justify-center gap-2 md:gap-48 `}
      >
        <div className='flex justify-center items-center h-screen md:h-[90vh] relative'>
          <div className= 'flex justify-center items-center flex-col relative'>

            {/* 26th */}
            <motion.div 
              variants={drop(0.5,1)}
              className='relative items-center z-10'
            >
              <div className='absolute -bottom-4 -left-14 sm:-left-24 -rotate-12'>
                <Image 
                  key="tree"
                  src='/tree.png'
                  alt="tree"
                  width={32}
                  height={32}
                  className="h-12 sm:h-24 w-auto"
                />
              </div>

              <div className='absolute -bottom-1 -left-10 sm:-left-16'>
                <Image
                  key="hut"
                  src='/hut.png'
                  alt="hut"
                  width={48}
                  height={48}
                  className="h-8 sm:h-12 w-auto"
                />
              </div>

              <div className='flex flex-row items-center -mb-5 sm:-mb-8'>
                <h1 className='text-8xl sm:text-[10rem] text-brand-yellow'>26</h1>
                <h1 className={`${styles.smallAltText}`}>TH</h1>
              </div>

            </motion.div>

            {/* Siargao */}
            <motion.div
              variants={zoomIn(0.2, 0.5)}
              className={`
                flex
                flex-col
                items-center
                ${styles.largeText}
                leading-none
                text-white 
                tracking-tighter 
                -mt-2 sm:-mt-6
                z-10`}
            >
              <h1>S<span className='text-brand-yellow'>IA</span>R</h1>
              <h1 className='-mt-10 sm:-mt-14 tracking-wide'>GAO</h1>
            </motion.div>

            {/* International Surfing Festival */}
            <motion.div 
              variants={slideIn('left','tween',1,0.5)}
              className='flex flex-row justify-between z-10'
            >
              <div className='w-36 flex flex-col items-start -mt-4 translate-x-4'>
                <h1 className={`${styles.extraSmallText} tracking-widest sm:-mt-4 -mt-2`}>International</h1>
                <h1 className={`${styles.smallText} tracking-widest -mt-2`}>Surfing</h1>
                <h1 className={`${styles.smallText} tracking-wider -mt-2`}>Festival</h1>
              </div>

              <div className='relative z-10'>
                <div className='h-36 w-36 sm:h-48 sm:w-48 sm:-translate-y-10'>
                  <Image
                  key="surfer"
                  src='/surfer.png'
                  alt="surfer"
                  width={108}
                  height={108}
                  className='-translate-y-20 sm:h-48 w-auto'
                  />
                </div>
                
                <div className='absolute top-0 -translate-y-20 sm:-translate-y-32 sm:translate-x-8 z-0'>
                  <Image
                    key="wave"
                    src='/wave.png'
                    alt="wave"
                    width={150}
                    height={150}
                    className='sm:h-64 sm:w-64'
                  />
                </div>
              </div>

            </motion.div>
          </div>

          <div className='absolute bottom-0 right-60 h-72 w-72 rounded-full blue-gradient'/>

        </div>

        <div className='flex flex-col justify-center items-center h-screen md:h-[90vh] relative'>
          <motion.h1 variants={textVariant(3)} className={`mb-4 ${styles.mediumText} z-10`}>Presented By</motion.h1>

            <motion.div variants={zoomIn(3.5, 0.5)} className="flex flex-row gap-4 items-center justify-center z-10">
              {presentors.map((presentor) => (
                <Image
                  key={presentor.name}
                  src={presentor.url}
                  alt={presentor.name}
                  height={presentor.height}
                  width={presentor.width}
                  className='h-12 md:h-[80%] w-auto'
                />
              ))}
            </motion.div>

            <motion.h1 variants={textVariant(3)} className={`mt-4 ${styles.mediumText} z-10`}>Sponsored By</motion.h1>

            {sponsors.map((type) => (
              <motion.div key={type.id} variants={fadeIn("up","tween",3.5,0.5)} className="flex flex-row gap-4 items-center justify-center z-10">
                {type.list.map((sponsor) => (
                  <Image
                    key={sponsor.name}
                    src={sponsor.url}
                    alt={sponsor.name}
                    height={sponsor.height}
                    width={sponsor.width}
                    className='h-[50%] md:h-[80%] w-auto'
                  />
                ))}
              </motion.div>
            ))}
        
          <div className='absolute top-12 right-0 h-96 w-96 rounded-full yellow-gradient'/>
        
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
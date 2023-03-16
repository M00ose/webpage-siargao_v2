'use client';
import { Navbar, Socials, Logo } from '../components';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { staggerContainer, slideIn, zoomIn } from '../utils/motion.js';
import { presentors } from '../constants';

const Hero = () => {
  return (
    <section className={`relative ${styles.innerWidth} snap-start min-h-screen w-full max-w-screen  overflow-hidden`}>
        <Navbar />
        <Socials />

        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex flex-col min-h-[100vh] min-w-[50vw] md:flex-row items-center md:justify-between z-30`}
        >
        <Logo />
        
        <div className={`${styles.paddings} h-0 md:h-fit min-w-[50vw] invisible md:visible z-20`}>
            {/* sponsors */}
            <div className={`${styles.paddings} flex justify-center`}>
                <motion.div
                    variants={zoomIn(2.5,0.5)}
                    className='grid grid-cols-4 xxs:grid-cols-2 gap-4'
                >
                    {presentors.map((presentor) => (
                        <Image 
                            key={presentor.name}
                            src={presentor.url}
                            alt={presentor.name}
                            height={presentor.height}
                            width={presentor.width}
                            className='h-12 xxs:h-16 sm:h-24 lg:h-28 w-auto'
                        />
                    ))}

                </motion.div>
            </div>
        </div>

        </motion.div>

        {/* Frame */}
        <Image 
            key="left-bottomFrame"
            src="/bottomFrame.png"
            alt="frame"
            height={1080}
            width={1080}
            className='absolute top-0 left-0 h-[800px] min-w-[1280px] rotate-[180deg] -translate-x-[45%] -translate-y-[10%] z-10'
        />

        {/* Frame */}
        <Image 
            key="right-bottomFrame"
            src="/bottomFrame.png"
            alt="frame"
            height={1080}
            width={1080}
            className='absolute bottom-0 right-0 h-[800px] min-w-[1280px] translate-x-[20%] translate-y-[10%] z-10'
        />
        
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='relative w-full z-20 flex justify-center md:justify-end md:-translate-x-[12vw]'>
            <motion.div
                variants={slideIn("right","tween",3.5,0.5)} 
                className='relative w-[300px]'
            >
               {/* Drums */}
                <Image 
                    key="drums"
                    src="/drums.png"
                    alt="drums"
                    height={360}
                    width={360}
                    className='absolute bottom-0 left-0 h-auto w-[75vw] md:max-w-[200px] lg:max-w-[360px] translate-x-[30%] z-20'
                />

                {/* Drinks */}
                <Image 
                    key="drinks"
                    src="/drinks.png"
                    alt="drinks"
                    height={240}
                    width={240}
                    className='absolute bottom-0 left-0 h-auto w-[70vw] md:max-w-[200px] lg:max-w-[240px] translate-y-[10%] translate-x-[35%] -rotate-12 z-30'
                />

                {/* Guitar */}
                <Image 
                    key="guitar"
                    src="/guitar.png"
                    alt="guitar"
                    height={240}
                    width={240}
                    className='absolute bottom-0 left-0 h-auto w-[60vw] md:max-w-[175px] lg:max-w-[240px] -rotate-[60deg] -translate-x-[40%] z-10'
                /> 
            </motion.div>
            
        </motion.div>

        {/* <div className='absolute top-20 left-10 h-96 w-96 rounded-full nav-gradient'></div>
        <div className='absolute top-10 right-0 h-[28rem] w-[28rem] rounded-full nav-gradient'></div>
        <div className='absolute top-10 right-0 translate-x-2 h-[28rem] w-[28rem] rounded-full orange-gradient'></div> */}

    </section>
  )
}

export default Hero
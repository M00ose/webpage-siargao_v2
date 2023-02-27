'use client';
import { Navbar, Wave } from '../components';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { staggerContainer, textVariant, zoomIn, slideIn, drop, fadeIn } from '../utils/motion.js';
import { presentors, sponsors } from '../constants';

const Hero = () => {
  return (
    <section className={`${styles.innerWidth} snap-start min-h-screen h-fit relative`}>
        <Navbar />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`${styles.padding} ${styles.innerWidth} flex flex-col xxs:gap-12 justify-between min-h-[80vh] w-full relative z-10`}
        >
            {/* Siargao International Surfing Festival Logo */}
            <div className={`${styles.xPaddings} flex flex-col items-center`}>
                {/* 26th */}
                <motion.div
                    variants={drop(0.5,1)}
                    className={`relative flex flex-row justify-center w-full`}
                >
                    <div className='absolute h-14 sm:h-24 bottom-0 left-[12%] sm:left-[20%]'>
                      <Image 
                        key="tree"
                        src="/tree.png"
                        alt="tree"
                        width={28}
                        height={28}
                        className="h-full w-full -rotate-12"
                    />  
                    </div>
                    <div className='absolute h-8 sm:h-12 bottom-0 left-[20%] sm:left-[26%]'>
                      <Image 
                        key="hut"
                        src="/hut.png"
                        alt="hut"
                        width={32}
                        height={32}
                        className="h-full w-full"
                    />  
                    </div>
                    
                    <div className='w-[75%] h-full justify-center flex flex-row items-center text-brand-yellow'>
                        <h1 className='text-8xl sm:text-[10rem] -mb-4 sm:-mb-8'>26</h1>
                        <p className='text-1xl sm:text-4xl'>TH</p>
                    </div>
                    
                </motion.div>
                
                {/* Siargao */}
                <motion.div
                    variants={zoomIn(0.2, 0.5)}
                    className='text-center text-9xl sm:text-[12rem]  text-white'
                >
                    
                    <div className='-mt-4'>S<span className='text-brand-yellow'>IA</span>R</div>
                    <div className='-mt-10 sm:-mt-14 tracking-wide sm:tracking-wider'>GAO</div>
                </motion.div>
                
                {/* International Surfing Festival */}
                <motion.div
                    variants={slideIn('left','tween',1,0.5)}
                    className='flex items-start justify-between w-[60%] sm:w-[50%] -mt-4'
                >
                    
                    <div className='w-[50%] text-2xl xxs:text-3xl sm:text-5xl text-white'>
                        <div className='-mt-2 sm:-mt-4 text-base xxs:text-lg sm:text-2xl'>International</div>
                        <div className='-mt-2 tracking-widest'>Surfing</div>
                        <div className='-mt-2 tracking-wider'>Festival</div>
                    </div>
                    <div className='flex w-[50%] h-[10vh] relative'>
                        <div className='sm:h-44 sm:w-44 absolute z-10'>
                           <Image 
                            key="surfer"
                            src="/surfer.png"
                            alt="surfer"
                            height={108}
                            width={108}
                            className='h-full w-full -translate-y-20 sm:-translate-y-36 xxs:translate-x-3'
                        /> 
                        </div>
                        
                        <div className='absolute h-[160%] w-[160%]'>
                            <Image 
                            key="wave"
                            src="/wave.png"
                            alt="wave"
                            height={150}
                            width={150}
                            className='h-[160%] w-[160%] -translate-y-[60%] translate-x-[10%]'
                            />
                        </div>
                        
                    </div>
                </motion.div>

                {/* Left Bottom Frame */}
                <motion.div
                    className='hidden'
                >
                    <Image
                        key="left-bottomFrame"
                        src="/bottomFrame.png"
                        alt="bottomFrame"
                        height={720}
                        width={720}
                    />
                </motion.div>
            </div>

            <div>
                {/* sponsors */}
                <div className={`${styles.paddings}`}>
                    <motion.div
                        variants={zoomIn(3.5,0.5)}
                        className='flex flex-row gap-4 sm:gap-6 items-center justify-center'
                    >
                        {presentors.map((presentor) => (
                            <Image 
                                key={presentor.name}
                                src={presentor.url}
                                alt={presentor.name}
                                height={presentor.height}
                                width={presentor.width}
                                className='h-12 sm:h-20 w-auto'
                            />
                        ))}

                    </motion.div>
                </div>

                <div className='relative'>
                    {/* Drums */}
                    <motion.div 
                        className='absolute top-0 -translate-y-[40%] h-96 w-96 z-10'
                    >
                        <Image
                            key="drums"
                            src="/drums.png"
                            alt="drums"
                            height={480}
                            width={480}
                            className='h-full w-full'
                        />
                    </motion.div>
                    
                    {/* Guitar */}
                    <motion.div 
                        className='absolute top-0 -translate-y-[50%] -translate-x-[30%] h-72 w-72 -rotate-45 z-10'
                    >
                        <Image
                            key="guitar"
                            src="/guitar.png"
                            alt="guitar"
                            height={480}
                            width={480}
                            className='h-full w-full'
                        />

                    </motion.div>
                    
                    {/* Drinks */}
                    <motion.div 
                        className='absolute hidden top-0 z-10'
                    >
                        <Image
                            key="drinks"
                            src="/drinks.png"
                            alt="drinks"
                            height={480}
                            width={480}
                            className='h-full w-full'
                        />

                    </motion.div>

                    {/* Right Bottom Frame */}
                    <motion.div
                        className='absolute h-[200vw] w-[200vw] top-0 right-0 -translate-y-[75%] xxs: -translate-y-[80%] translate-x-[20%] rotate-12'
                    >
                        <Image
                            key="right-bottomFrame"
                            src="/bottomFrame.png"
                            alt="bottomFrame"
                            height={720}
                            width={720}
                            className='h-full w-full'
                        />
                    </motion.div>

                </div>
            </div>
            
            

            <motion.div>
                {/* Right Splash */}
            </motion.div>

            <motion.div>
                {/* Left Splash 2 */}
            </motion.div>

            <motion.div>
                {/* Right Highlight */}
            </motion.div>

            <motion.div>
                {/* Left Highlight */}
            </motion.div>

        </motion.div>
    </section>
  )
}

export default Hero
'use client';
import { Navbar } from '../components';
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
                    <div className='absolute h-14 ss:h-24 bottom-0 left-[12%] ss:left-[20%]'>
                      <Image 
                        key="tree"
                        src="/tree.png"
                        alt="tree"
                        width={28}
                        height={28}
                        className="h-full w-full -rotate-12"
                    />  
                    </div>
                    <div className='absolute h-8 ss:h-12 bottom-0 left-[20%] ss:left-[26%]'>
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
                        <h1 className='text-8xl ss:text-[10rem] -mb-4 sm:-mb-8'>26</h1>
                        <p className='text-1xl ss:text-4xl'>TH</p>
                    </div>
                    
                </motion.div>
                
                {/* Siargao */}
                <motion.div
                    variants={zoomIn(0.2, 0.5)}
                    className='text-center text-9xl ss:text-[12rem]  text-white'
                >
                    
                    <div className='-mt-4'>S<span className='text-brand-yellow'>IA</span>R</div>
                    <div className='-mt-10 ss:-mt-14 tracking-wide sm:tracking-wider'>GAO</div>
                </motion.div>
                
                {/* International Surfing Festival */}
                <motion.div
                    variants={slideIn('left','tween',1,0.5)}
                    className='flex items-start justify-between w-[60%] ss:w-[50%] -mt-4'
                >
                    
                    <div className='w-[50%] text-2xl xxs:text-3xl ss:text-5xl text-white'>
                        <div className='-mt-2 ss:-mt-4 text-base xxs:text-lg ss:text-2xl'>International</div>
                        <div className='-mt-2 tracking-widest'>Surfing</div>
                        <div className='-mt-2 tracking-wider'>Festival</div>
                    </div>
                    <div className='flex w-[50%] h-[10vh] relative'>
                        <div className='ss:h-44 ss:w-44 absolute z-10'>
                           <Image 
                            key="surfer"
                            src="/surfer.png"
                            alt="surfer"
                            height={108}
                            width={108}
                            className='h-full w-full -translate-y-20 ss:-translate-y-36 xxs:translate-x-3'
                        /> 
                        </div>
                        
                        <div className='absolute h-[160%] w-[160%]'>
                            <Image 
                            key="wave"
                            src="/wave.png"
                            alt="wave"
                            height={150}
                            width={150}
                            className='h-[160%] w-[160%] -translate-y-[60%] translate-x-[10%] ss:-translate-x-[7%]'
                            />
                        </div>
                        
                    </div>
                </motion.div>
                
                <motion.div
                    variants={fadeIn("down","tween",2.5,0.5)}
                    className='relative z-10'
                >
                    {/* Left Bottom Frame */}
                    <div
                        className='absolute -translate-y-[70%] ss:-translate-y-[55%] sm:-translate-y-[52%] translate-x-[35%] h-[200vw] w-[200vw] top-0 right-0'
                    >
                        <Image
                            key="right-bottomFrame"
                            src="/bottomFrame.png"
                            alt="bottomFrame"
                            height={720}
                            width={720}
                            className='h-full w-full rotate-[180deg]'
                        />
                    </div>
                    
                    {/* Left Splash 2 */}
                    <div className='absolute hidden'>
                        <Image
                            key="left-splash"
                            src="/splash.png"
                            alt="splash"
                            height={720}
                            width={720}
                            className='rotate-[130deg]'
                        />
                    </div>
                    
                </motion.div>

            </div>

            <div>
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
                                className='h-12 xxs:h-16 sm:h-24 w-auto'
                            />
                        ))}

                    </motion.div>
                </div>

                <motion.div 
                    variants={fadeIn("up","tween",3.5,0.5)}
                    className='relative'
                >
                    {/* Drums */}
                    <div 
                        className='absolute top-0 -translate-y-[40%] xxs:-translate-y-[20%] ss:-translate-y-[35%] h-96 w-96 ss:h-[48rem] ss:w-[48rem] z-10'
                    >
                        <Image
                            key="drums"
                            src="/drums.png"
                            alt="drums"
                            height={480}
                            width={480}
                            className='h-full w-full'
                        />
                    </div>
                    
                    {/* Guitar */}
                    <div 
                        className='absolute top-0 -translate-y-[50%] xxs:-translate-y-[30%] ss:-translate-y-[50%] -translate-x-[30%] h-72 w-72 ss:h-[36rem] ss:w-[36rem] -rotate-45 z-10'
                    >
                        <Image
                            key="guitar"
                            src="/guitar.png"
                            alt="guitar"
                            height={480}
                            width={480}
                            className='h-full w-full'
                        />

                    </div>
                    
                    {/* Drinks */}
                    <div 
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

                    </div>

                    {/* Right Bottom Frame */}
                    <div
                        className='absolute h-[200vw] w-[200vw] top-0 right-0 -translate-y-[75%] xxs:-translate-y-[70%] sm:-translate-y-[75%] translate-x-[20%] rotate-12'
                    >
                        <Image
                            key="right-bottomFrame"
                            src="/bottomFrame.png"
                            alt="bottomFrame"
                            height={720}
                            width={720}
                            className='h-full w-full'
                        />
                    </div>

                </motion.div>
            </div>
            
            

            <motion.div>
                {/* Right Splash */}
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
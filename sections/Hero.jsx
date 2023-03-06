'use client';
import { Navbar, Socials } from '../components';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { staggerContainer, zoomIn, slideIn, drop, fadeIn } from '../utils/motion.js';
import { presentors } from '../constants';

const Hero = () => {
  return (
    <section className={`${styles.innerWidth} snap-start min-h-screen w-full relative overflow-hidden`}>
        <Navbar />
        <Socials />

        <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`flex flex-col min-h-[100vh] min-w-[50vw] md:flex-row items-center md:justify-between z-20`}
        >
            <div className={`${styles.paddings} min-w-[50vw] mt-20 md:mt-16 z-20 flex justify-center overflow-hidden`}>
                <div className='h-fit w-[200px] sm:w-[300px] grid grid-row-4'>

                    {/* New Row */}
                    <motion.div
                        variants={drop(0.5,1)}
                        className='relative grid grid-cols-3 content-end'
                    >
                        <div className='flex flex-row items-end'>
                            <Image 
                                key="tree"
                                src="/tree.png"
                                alt="tree"
                                width={28}
                                height={28}
                                className='sm:h-[84px] sm:w-auto -rotate-12'
                            />

                            <Image 
                                key="hut"
                                src="/hut.png"
                                alt="hut"
                                width={32}
                                height={32}
                                className='sm:h-[48px] sm:w-[48px]'
                            />
                        </div>

                        <div className='-mb-7 flex flex-row items-center text-brand-yellow'>
                            <h1 className='text-6xl sm:text-9xl'>26</h1>
                            <h1 className='text-1xl'>TH</h1>
                        </div>

                    </motion.div>

                    {/* New Row */}
                    <motion.div
                        variants={zoomIn(0.2, 0.5)}
                        className='-mt-3 text-8xl sm:text-[9rem] text-center text-white'
                    >
                        <h1>S<span className='text-brand-yellow'>IA</span>R</h1>
                        <h1 className='tracking-widest sm:tracking-wider -mt-6 sm:-mt-10'>GAO</h1>
                    </motion.div>

                    {/* New Row */}
                    <motion.div 
                        variants={slideIn('left','tween',1,0.5)}
                        className='-mt-4 flex flex-row relative pl-2 sm:pl-6'
                    >
                        <div className='text-2xl sm:text-3xl text-white'>
                            <h1 className='text-[16px] sm:text-xl -mt-3'>International</h1>
                            <h1 className='tracking-[0.2rem] -mt-4 sm:-mt-3'>Surfing</h1>
                            <h1 className='tracking-[0.12rem] -mt-4 sm:-mt-3'>Festival</h1> 
                        </div>

                        <div>
                            <Image 
                                key="surfer"
                                src="/surfer.png"
                                alt="surfer"
                                height={108}
                                width={108}
                                className='absolute sm:h-[140px] sm:w-[140px] bottom-5 right-0 z-10'
                            />
                            <Image 
                                key="wave"
                                src="/wave.png"
                                alt="wave"
                                height={140}
                                width={140}
                                className='absolute sm:h-[200px] sm:w-[200px] bottom-0 right-0 translate-x-10 sm:translate-x-14 translate-y-3 sm:translate-y-4'
                            />
                        </div>
                        
                    </motion.div>

                    {/* sponsors */}
                    <motion.div
                        variants={zoomIn(2.5,0.5)}
                        className='md:invisible grid grid-cols-4 justify-items-center mt-4'
                    >
                        {presentors.map((presentor) => (
                            <Image 
                                key={presentor.name}
                                src={presentor.url}
                                alt={presentor.name}
                                height={presentor.height}
                                width={presentor.width}
                                className='h-12 w-auto flex items-center'
                            />
                        ))}
                    </motion.div>
                </div>    
            </div>
            
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
                                className='h-12 xxs:h-16 sm:h-24 w-auto'
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
                    className='absolute bottom-0 left-0 h-auto w-[75vw] max-w-[200px] translate-x-[30%] z-20'
                />

                {/* Drinks */}
                <Image 
                    key="drinks"
                    src="/drinks.png"
                    alt="drinks"
                    height={240}
                    width={240}
                    className='absolute bottom-0 left-0 h-auto w-[70vw] max-w-[200px] translate-y-[10%] translate-x-[35%] -rotate-12 z-30'
                />

                {/* Guitar */}
                <Image 
                    key="guitar"
                    src="/guitar.png"
                    alt="guitar"
                    height={240}
                    width={240}
                    className='absolute bottom-0 left-0 h-auto w-[60vw] max-w-[175px] -rotate-[60deg] -translate-x-[40%] z-10'
                /> 
            </motion.div>
            
        </motion.div>

        <div className='absolute top-20 left-10 h-96 w-96 rounded-full nav-gradient'></div>
        <div className='absolute top-10 right-0 h-[28rem] w-[28rem] rounded-full nav-gradient z-10'></div>
        <div className='absolute top-10 right-0 translate-x-2 h-[28rem] w-[28rem] rounded-full orange-gradient'></div>

    </section>
  )
}

export default Hero
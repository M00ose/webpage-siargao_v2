'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { drop, slideIn, zoomIn } from '../utils/motion.js';
import { presentors } from '../constants';

const Logo = () => {
  return (
    <div>
        <div className={`${styles.paddings} min-w-[50vw] mt-20 md:mt-16 z-20 flex justify-center overflow-hidden`}>
            <div className='h-fit w-[200px] sm:w-[300px] lg:w-[350px] grid grid-row-4'>
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
                            width={108}
                            height={108}
                            className='sm:h-[84px] lg:h-[120px] sm:w-auto -rotate-12'
                        />

                        <Image 
                            key="hut"
                            src="/hut.png"
                            alt="hut"
                            width={64}
                            height={64}
                            className='sm:h-[48px] sm:w-[48px] lg:h-[64px] lg:w-[64px]'
                        />
                    </div>

                    <div className='-mb-7 flex flex-row items-center text-brand-yellow'>
                        <h1 className='text-6xl sm:text-9xl lg:text-[10rem]'>26</h1>
                        <h1 className='text-1xl'>TH</h1>
                    </div>

                </motion.div>

                {/* New Row */}
                <motion.div
                    variants={zoomIn(0.2, 0.5)}
                    className='-mt-3 text-8xl sm:text-[9rem] lg:text-[10rem] text-center text-white'
                >
                    <h1>S<span className='text-brand-yellow'>IA</span>R</h1>
                    <h1 className='tracking-widest sm:tracking-wider -mt-6 sm:-mt-10'>GAO</h1>
                </motion.div>

                {/* New Row */}
                <motion.div 
                    variants={slideIn('left','tween',1,0.5)}
                    className='-mt-4 flex flex-row relative pl-2 sm:pl-6'
                >
                    <div className='text-2xl sm:text-3xl lg:text-4xl text-white'>
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
    </div>
  )
}

export default Logo
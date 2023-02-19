'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { staggerContainer, textVariant, zoomIn, slideIn, drop } from '../utils/motion.js';

const Hero = () => {
  return (

    <section className={`${styles.paddings} flex flex-row justify-between gap-8`}>
      <div>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-row`}
      >
        <div className='flex justify-center items-center flex-col relative'>

          {/* First Line */}
          <motion.div 
            variants={drop(0.5,1)}
            className='relative items-center'
          >
            <div className='absolute -bottom-6 -left-20 -rotate-12'>
              <Image 
                src='/tree.png'
                alt="tree"
                width={32}
                height={32}
                // className='-rotate-12 -translate-x-6 translate-y-4'
              />
            </div>

            <div className='absolute -bottom-2 -left-12'>
              <Image
                src='/hut.png'
                alt="hut"
                width={48}
                height={48}
              />
            </div>

            <div className='text-brand-yellow flex flex-row items-center -mb-6'>
              <h1 className='text-9xl'>26</h1>
              <h1 className='text-2xl'>TH</h1>
            </div>

          </motion.div>

          {/* Next Line */}
          <motion.div
            variants={zoomIn(0.2, 0.5)}
            className="
              flex
              flex-col
              items-center
              text-[10rem]
              leading-none
              text-white 
              tracking-tighter 
              -mt-4"
          >
            <h1>S<span className='text-brand-yellow'>IA</span>R</h1>
            <h1 className='-mt-12 tracking-wider'>GAO</h1>
          </motion.div>

          {/* Next Line */}
          <motion.div 
            variants={slideIn('left','tween',1,0.5)}
            className='flex flex-row relative'
          >
            <div className='text-white flex flex-col items-start -mt-4'>
              <h1 className='text-1xl tracking-wider -mt-2'>International</h1>
              <h1 className='text-3xl tracking-wider -mt-2'>Surfing</h1>
              <h1 className='text-3xl tracking-wider -mt-2'>Festival</h1>
            </div>

            <div>
              <div className='absolute bottom-28 z-20'>
              <Image 
                src='/surfer.png'
                alt="surfer"
                width={108}
                height={108}
              />
              </div>

              <div className='relative bottom-20'>
                <Image
                  src='/wave.png'
                  alt="wave"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            

          </motion.div>

        </div>

      </motion.div>
      </div>

      <div className='bg-brand-blue h-500px w-100px'>
        Sponsors
      </div>
      
    </section>

  )
}

export default Hero
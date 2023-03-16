'use client';
import { Inter } from '@next/font/google';
import { Passion_One } from '@next/font/google';
import Image from 'next/image';
import { motion } from 'framer-motion';

import styles from '../app/styles.js';
import { textVariant, slideIn } from '../utils/motion.js';

const inter = Inter({ subsets: ['latin'], weight: '400'});
const PassionOne = Passion_One({ subsets: ['latin'], weight: '700' });

const About = () => {
  return (
    <section className='relative snap-start bg-brand-purple min-h-screen h-full sm:h-screen w-screen max-w-screen overflow-hidden'>
      <motion.div
        initial="hidden"
        whileInView="show"
      >
        <div className='pt-24 pb-12 px-12 md:px-20 xl:px-[15vw] z-20'>
          <h2 className={`${PassionOne.className} text-center text-3xl ss:text-6xl xl:text-9xl text-white mb-8`}>About</h2>
          <div className={`flex flex-col ss:flex-row gap-4 ss:gap-8 md:gap-12 xl:gap-24 justify-center items-start ${inter.className} text-white text-justify text-base ss:text-xl md:text-base xl:text-2xl`}>
            <motion.div variants={textVariant(0.2)} className='min-w-[50%]'>
              <p>The Siargao International Surfing Festival is one of the biggest surfing events in the Philippines where the whole Siargao community makes an effort to bring back the island&rsquo;s energy through surfing, music, and food.</p>
              <br/>
              <p>The recent years have been challenging for the island, its people, and its patrons brought about by the COVID-19 pandemic and Typhoon Odette. However, the strong sense of community didn&rsquo;t let the spirits of the Surigaonons down. With the help of LGUs and the private sector, the island is beginning to stand tall as it once was.</p>
            </motion.div>
            <motion.div variants={textVariant(0.2)} className='min-w-[50%]'>
              <p>After two years, the Siargao International Surfing Festival is finally back, bigger and better. This year&rsquo;s celebration is in honor of all the Surigaonons especially the ones who stood tall for their families, friends, and the community despite all the difficulties.
              </p>
            </motion.div>
            <motion.div 
              variants={slideIn("right","tween",0.5,1)} 
              className='relative ss:hidden min-h-fit w-fit'
            >
              <div
                className={`h-[300px] w-[450px] rounded-xl shadow-xl overflow-hidden`}
              >
                <Image
                  key="SurferRidingWave"
                  src="/SurferRidingWave.jpeg"
                  alt="Surfer Riding Wave"
                  height={500}
                  width={750}
                  className="h-inherit w-inherit object-contain"
                />
              </div>  
            </motion.div>
            
          </div>
        </div>

        <motion.div 
          variants={slideIn("right","tween",1,1)} 
          className='invisible ss:visible absolute top-[45vh] md:top-[45vh] left-[52vw] h-fit w-fit'
        >
          <div
            className={`h-[500px] w-[750px] rounded-xl shadow-xl overflow-hidden bg-black`}
          >
            <Image
              key="SurferRidingWave"
              src="/SurferRidingWave.jpeg"
              alt="Surfer Riding Wave"
              height={500}
              width={750}
              className="h-inherit w-inherit object-contain translate-x-0 sm:-translate-x-32 md:translate-x-0"
            />
          </div>  
        </motion.div>

        <motion.div
          variants={slideIn("left","tween",0.75,1)}
          className='absolute left-[-5rem] top-[-5rem] ss:top-[-10rem] md:top-[-15rem]'
        >
          <Image
            key="leaf"
            src="/leaf.png"
            alt="leaf"
            height={500}
            width={500}
            className={`${styles.leafDimensions} rotate-90`}
          />
        </motion.div>
        <motion.div
          variants={slideIn("left","tween",1,1)}
          className='absolute right-[10vw] top-[-7.5rem] ss:top-[80vh] md:top-[70vh] ss:right-0 ss:left-0'
        >
          <Image
            key="leaf"
            src="/leaf.png"
            alt="leaf"
            height={500}
            width={500}
            className={`${styles.leafDimensions} rotate-[135deg] ss:rotate-[-45deg]`}
          />
        </motion.div>
        <motion.div
          variants={slideIn("left","tween",1,1)}
          className='absolute right-[-7rem] top-[-4rem] ss:top-[70vh] md:top-[55vh] ss:bottom-0 ss:right-0 ss:left-[-20vw] xl:left-[-10vw]'
        >
          <Image
            key="leaf"
            src="/leaf.png"
            alt="leaf"
            height={500}
            width={500}
            className={`${styles.leafDimensions} rotate-180 sm:rotate-0`}
          />
        </motion.div>  
      </motion.div>
    </section>
  )
}

export default About
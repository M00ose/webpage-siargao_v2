'use client'
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';

import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'], weight: '400'});

const Footer = () => {  
  return (
    <div className={`flex flex-col sm:gap-6 sm:pt-4 pb-6 items-center justify-center ${inter.className} text-white text-sm z-40`}>
      <div className={`flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-center`}>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-0 sm:gap-2'>
          <p>Contact Us for Partnerships and Concerns</p>
          <div className='invisible sm:visible'>|</div>
          <a href="mailto:info@siargaoisf.ph" className='hover:scale-125 hover:-translate-x-2'><span><Email /></span> info@siargaoisf.ph</a>
        </div>
        <div>
          <span><Phone /></span>
          (+63) 908 986 9873
        </div>
        <div className='sm:hidden flex flex-col sm:flex-row text-center'>
          <p>&copy; Copyright 2022,</p>
          <p>Siargao International Surfing Festival</p>
        </div>
      </div>
      <div className='invisible sm:visible flex flex-col sm:flex-row text-center'>
          <p>&copy; Copyright 2022,</p>
          <p>Siargao International Surfing Festival</p>
        </div>
    </div>
    
  )
}

export default Footer
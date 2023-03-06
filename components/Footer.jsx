'use client'
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';


const Footer = () => {
  return (
    <div className='bg-brand-purple py-12 px-48 flex flex-col gap-6  '>
      <div className='bg-white h-[2px] w-[20vw]'></div>
      <div className='flex flex-row gap-8 text-white text-2xl'>
        <div className='flex flex-1'>
          <p>Contact Us for Partnerships and Concerns</p>
        </div>
        <div>
          <a href="mailto:info@siargaoisf.ph"><Email className='hover:scale-125 hover:-translate-x-2'/>info@siargaoisf.ph</a>
        </div>
        <div>
          <p><span><Phone /></span>(+63) 908 986 9873</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
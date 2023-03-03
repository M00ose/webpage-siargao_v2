'use client';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/Youtube';
import Email from '@mui/icons-material/Email';

const Socials = () => {
  return (
    <div
        className='absolute top-10 right-10 flex flex-col gap-2 z-20'
        style={{ color: "#FFF" }}
    >
        <a href="https://web.facebook.com/SiargaoInternationalSurfingFestival"><Facebook className='hover:scale-125 hover:-translate-x-2'/></a>
        <a href="https://www.instagram.com/siargaoisf/"><Instagram className='hover:scale-125 hover:-translate-x-2'/></a>
        <a href="https://www.youtube.com/@siargaoisf"><YouTube className='hover:scale-125 hover:-translate-x-2'/></a>
        <a href="mailto:info@siargaoisf.ph"><Email className='hover:scale-125 hover:-translate-x-2'/></a>
    </div>
  )
}

export default Socials
import { Footer } from '../components';
import { Hero, About, Recap } from '../sections';

import { Passion_One } from '@next/font/google';

const PassionOne = Passion_One({ subsets: ['latin'], weight: '700' });

const page = () => (
  <div className={`bg-brand-orange snap-y	snap-mandatory h-screen w-screen max-w-screen overflow-scroll ${PassionOne.className}`}>
    <Hero />
    <About /> 
    <Recap />
  </div>
)

export default page
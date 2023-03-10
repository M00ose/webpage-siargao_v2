import { Footer } from '../components';
import { Hero, About } from '../sections';

import { Passion_One } from '@next/font/google';

const PassionOne = Passion_One({ subsets: ['latin'], weight: '700' });

const page = () => (
  <div className={`bg-brand-orange snap-y	snap-mandatory overflow-hidden overscroll-scroll ${PassionOne.className}`}>
    <Hero />
    <About /> 
    <Footer />
  </div>
)

export default page
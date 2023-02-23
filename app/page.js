import { Navbar, Footer } from '../components';
import { Hero, Recap, Events, Activities, About } from '../sections';

import { Passion_One } from '@next/font/google';
import { Londrina_Solid } from '@next/font/google';

const PassionOne = Passion_One({ subsets: ['latin'], weight: '700' });
const LondrinaSolid = Londrina_Solid({ subsets: ['latin'], weight: '100' });


const page = () => (
  <div className={`bg-brand-orange snap-y	snap-mandatory overflow-hidden overscroll-scroll ${PassionOne.className}`}>
    <Hero />
    <Recap /> 
    <Events /> 
    <Activities /> 
    <About /> 
    <Footer />
  </div>
)

export default page
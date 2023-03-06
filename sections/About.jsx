import styles from '../app/styles.js';

const About = () => {
  return (
    <section className={`py-24 px-48 ${styles.section} bg-brand-purple min-h-screen relative`}>
      <h2 className='text-center mb-8 text-6xl text-white'>About Us</h2>
      <div className={`flex flex-row justify-center gap-24 font-sans text-2xl text-white text-justify z-10`}>
        <div className='w-[50%]'>
          <p>The Siargao International Surfing Festival is one of the biggest surfing events in the Philippines where the whole Siargao community makes an effort to bring back the island's energy through surfing, music, and food.</p>
          <br />
          <p>The recent years have been challenging for the island, its people, and its patrons brought about by the COVID-19 pandemic and Typhoon Odette. However, the strong sense of community didn’t let the spirits of the Surigaonons down. With the help of LGUs and the private sector, the island is beginning to stand tall as it once was.</p>
        </div>
        <div className='w-[50%]'>
          <p>After two years, the Siargao International Surfing Festival is finally back, bigger and better. This year’s celebration is in honor of all the Surigaonons especially the ones who stood tall for their families, friends, and the community despite all the difficulties.</p>
        </div>
      </div>

      <div className='absolute bottom-[30%] left-0 min-h-96 min-w-96 h-[250px] w-[250px] rounded-full blue-gradient'></div>
      <div className='absolute -bottom-[20%] right-[10%] min-h-96 min-w-96 h-[500px] w-[500px] rounded-full blue-gradient'></div>
    </section>
  )
}

export default About
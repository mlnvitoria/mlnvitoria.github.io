import techBg from './assets/digital-technologic-background.mp4'
import techBgFallback from './assets/fallback-bg.png'
import viPhoto from './assets/vitoria.jpeg'

import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <>
      <div className="divide-y-2 divide-vividviolet-200 text-neutral-900 dark:text-neutral-300 bg-vividviolet-950">
        <section id="home" className="px-5 py-20 md:px-20 md:py-40 relative w-full overflow-hidden flex justify-center border-b-2 margin-b-5">
          <video autoPlay muted loop playsInline id="bg-video" poster={techBgFallback} className="absolute top-0 left-0 w-full h-full object-cover z-1">
            <source src={techBg} type="video/mp4" />
            <small>Your browser does not support the video tag.</small>
          </video>
          <div className="z-1">
            <h1 className="text-6xl font-bold text-center pb-4">
              Hello!!
            </h1>
            <div className="px-4 pt-8 pb-15 inline-grid grid-cols-1 md:grid-cols-3 md:gap-10 bg-linear-to-b from-vividviolet-800 to-transparent max-w-4xl">
              <img src={viPhoto} className="shadow-xl/60 border-2 rounded-[50%] object-cover" alt="Vitoria's Photo. She is a latina women, brown wavy hair, wearing a black t-shirt. She's smiling to the photo." />
              <div className="col-span-2 grid align-middle my-5">
                <p>Enchantée, Vitoria!</p>
                <p className='text-justify'>I'm a Software Developer with professional experience in PHP, JavaScript, and full-stack solutions, currently focused on learning React, TypeScript, and modern applications.</p>
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>
        <section id="about-me" className="p-4 lg:m-8">
          <h2 className='text-2xl font-bold'>About me</h2>
          <p className='text-justify mb-4'>I am a Brazilian developer with experience since 2017, with a background in Computer Science (Brazil) and Business Management (Canada). I have experience in software development, operational leadership, and I am returning to the tech market focusing on full-stack development.</p>
          <Skills />
        </section>
        <section id="projects" className="p-4 lg:m-8">
          <Projects />
        </section>
        <section id="contact" className="p-4 lg:m-8">
          <h2 className='text-2xl font-bold'>Contact</h2>
        </section>
        <section id="footer">
          <div className="credits">
            <p>Background video made by Chandresh Uike</p>
            <p>Background fallback photo by Asih Wahyuni</p>
            <p><a href="https://www.vecteezy.com/free-videos/code">Code Stock Videos by Vecteezy</a></p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App

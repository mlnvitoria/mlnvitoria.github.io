import techBg from './assets/digital-technologic-background.mp4'
import techBgFallback from './assets/fallback-bg.png'
import viPhoto from './assets/vitoria.jpeg'

import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <>
      <div className="divide-y-2 divide-vividviolet-200 text-neutral-300 bg-vividviolet-950">
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
                <p>Good to see you here, I'm Vitoria!</p>
                <p className='text-justify'>I am a Software Developer with professional experience in PHP, JavaScript, and full-stack solutions, currently focused on learning React, TypeScript, and modern applications.</p>
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
        <section id="contact" className="p-4 lg:mx-8 lg:mt-8">
          <h2 className='text-2xl font-bold'>Contact</h2>
          <p>I'm currently open to new job opportunities for Software Development Full-Stack, Front-end or Back-end!</p>
          <p>Would you like to talk to me? You can:</p>
          <ul className='list-[square] ms-4'>
            <li key="contact01">Send me an <a href='mailto:vitoriamendes95@pm.me' className='text-bold underline underline-offset-8 hover:bg-zinc-600'>e-mail</a></li>
            <li key="contact02">Send me a message at <a href='https://www.linkedin.com/in/mlnvitoria' className='text-bold underline underline-offset-8 hover:bg-blue-500'>LinkedIn</a></li>
          </ul>
        </section>
        <section id="footer" className="p-4 lg:mx-8">
          <div className="credits">
            <p className='font-bold'>Credits</p>
            <p>Code by Vitoria Mendes</p>
            <p className='text-xs'>Background video made by Chandresh Uike</p>
            <p className='text-xs'>Background fallback photo by AI</p>
            <p className='text-xs'>Both background media were achieved at <a href="https://www.vecteezy.com/free-videos/code">Vecteezy</a></p>
          </div>
        </section>
      </div>
    </>
  )
}

export default App

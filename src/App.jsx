import './App.css'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <>
      <div className="divide-y-2 divide-gray-200 m-4 lg:m-8">
        <section id="home" className="border-b-2 margin-b-2">
          <h1 className="text-3xl font-bold">
            Hello!!
          </h1>
          <p>Enchantée, Vitoria!</p>
          <p className='text-justify'>I'm a Software Developer with professional experience in PHP, JavaScript, and full-stack solutions, currently focused on learning React, TypeScript, and modern applications.</p>
          <SocialLinks />
        </section>
        <section id="about-me">
          <h2>About me</h2>
          <p className='text-justify'>I am a Brazilian developer with experience since 2017, with a background in Computer Science (Brazil) and Business Management (Canada). I have experience in software development, operational leadership, and I am returning to the tech market focusing on full-stack development.</p>
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </div>
    </>
  )
}

export default App

import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact, Footer } from './components/Contact'
import { MotionRoot } from './components/motion'

export default function App() {
  return (
    <MotionRoot>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionRoot>
  )
}

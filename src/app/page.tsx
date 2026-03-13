import FloatingShapes from '@/components/FloatingShapes'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Specialties from '@/components/Specialties'
import Services from '@/components/Services'
import ProjectsShowcase from '@/components/ProjectsShowcase'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <FloatingShapes />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Services />
        <ProjectsShowcase />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

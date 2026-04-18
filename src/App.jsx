import { useEffect, useState } from "react"
import Navbar from "./components/NavBar/Navbar"
import HeroSection from "./components/Hero/HeroSection"
import Footer from "./components/Footer"
import WorkTimeline from "./components/WorkTimeline"
import { Separator } from "./components/ui/separator"
import { TracingBeam } from "./components/ui/tracing-beam"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Partnerships from "./components/Partnerships"
import Contact from "./components/Contact"
import { PageIntro } from "./components/PageIntro"

function App() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    if (!introDone) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [introDone])

  return (
    <>
      {!introDone && <PageIntro onComplete={() => setIntroDone(true)} />}
      <Navbar />
      <TracingBeam className="mt-12">
        <HeroSection introDone={introDone} />
        <Separator />
        <WorkTimeline />
        <Separator />
        <Projects />
        <Separator />
        <Services />
        <Separator />
        <Partnerships />
        <Separator />
        <Contact />
        <Separator />
        <Footer />
      </TracingBeam>
    </>
  );
}

export default App

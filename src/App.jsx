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

function App() {
  return (
    <>
      <Navbar />
      <TracingBeam className="mt-12">
        <HeroSection />
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

import Cursor from '@/components/Cursor';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProofStrip from '@/components/ProofStrip';
import About from '@/components/About';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MotionToggle from '@/components/MotionToggle';

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <MotionToggle />
    </>
  );
}

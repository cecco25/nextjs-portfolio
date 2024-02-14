import Navbar from "@/components/Navbar/Navbar";
import Intro from "@/components/Intro/Intro";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}

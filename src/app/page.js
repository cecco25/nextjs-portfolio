import Navbar from "@/components/Navbar/Navbar";
import Intro from "@/components/Intro/Intro";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Skills />
    </main>
  );
}

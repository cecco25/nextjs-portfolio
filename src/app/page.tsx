import Navbar from "@/components/navbar";
import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";

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

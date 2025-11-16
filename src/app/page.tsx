import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import GitHubHeatmap from '@/components/GitHubHeatmap';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <GitHubHeatmap username="kukaswadia" />
      {/* <Contact /> */}
    </>
  );
}

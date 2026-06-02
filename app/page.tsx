import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <OpenSource />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

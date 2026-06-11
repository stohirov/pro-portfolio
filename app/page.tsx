import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
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
        <Ticker />
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

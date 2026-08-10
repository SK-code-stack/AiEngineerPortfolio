import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

// Lazy-load below-the-fold sections — defers JS parse/hydration until needed
const Credentials = dynamic(() => import("@/components/Credentials"), {
  ssr: true,
  loading: () => (
    <div className="py-24 w-full bg-bg border-t border-border" aria-hidden="true" />
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  ssr: true,
  loading: () => (
    <div className="py-24 w-full bg-bg" aria-hidden="true" />
  ),
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

// ChatWidget is purely client-side — defer fully (ssr: false)
const ChatWidget = dynamic(() => import("@/components/ChatWidget"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}

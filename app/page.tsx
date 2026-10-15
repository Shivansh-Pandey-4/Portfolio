import About from "@/components/landing/About";
import Activity from "@/components/landing/Activity";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";
import SocialLinks from "@/components/landing/SocialLinks";

export default function Home() {

  return (
    <div className="min-h-screen">
      <div className="px-4 mx-auto max-w-3xl pt-8 pb-12 border">
        <Header />
        <Hero />
        <About />
        <SocialLinks />
        <Activity />
        <Projects />
      </div>
      <div className="bg-zinc-100 dark:bg-neutral-900 border-t border-gray-300 dark:border-gray-700">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
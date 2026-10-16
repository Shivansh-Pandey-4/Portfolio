import About from "@/components/landing/About";
import Activity from "@/components/landing/Activity";
import Hero from "@/components/landing/Hero";
import Projects from "@/components/landing/Projects";
import SocialLinks from "@/components/landing/SocialLinks";

export default function Home() {

  return (
    <div className="min-h-screen">
      <div className="px-4 mx-auto max-w-3xl w-full pb-12">
        <Hero />
        <About />
        <SocialLinks />
        <Activity />
        <Projects />
      </div>
    </div>
  )
}
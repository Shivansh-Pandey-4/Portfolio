import About from "@/components/landing/About";
import Activity from "@/components/landing/Activity";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import SocialLinks from "@/components/landing/SocialLinks";

export default function Home() {

  return (
    <div className="min-h-screen max-w-3xl container mx-auto border px-4 py-8">
      <Header />
      <Hero />
      <About />
      <SocialLinks />
      <Activity />
    </div>
  )
}
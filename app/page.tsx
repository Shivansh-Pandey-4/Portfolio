import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

export default function Home() {

  return (
    <div className="min-h-screen max-w-3xl container mx-auto border px-4 py-8">
      <Header />
      <Hero />
    </div>
  )
}
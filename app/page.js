import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import LandingHeader from "./_LandingComponents/LandingHeader";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <LandingHeader />
      {/* <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer /> */}
    </main>
  );
}

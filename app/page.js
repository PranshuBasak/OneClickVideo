import FAQ from "./_landingPage/FAQ";
import MainCTASection from "./_landingPage/MainCTASection";
import PricingPage from "./_landingPage/PricingSection";
import ProductFeature from "./_landingPage/ProductFeature";
import SubCTA from "./_landingPage/SubCTA";
import Testimonial from "./_landingPage/Testimonial";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <MainCTASection />
      <ProductFeature />
      <Testimonial />
      <SubCTA />
      <PricingPage />
      <FAQ />
    </main>
  );
}

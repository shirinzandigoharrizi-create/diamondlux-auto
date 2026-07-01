import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ScaleStage from "@/components/ScaleStage";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0A0A0A", overflowX: "hidden" }}>
      {/* Desktop: 1280px stage zoomed to fit — visible at lg (1024px+) */}
      <div className="hidden lg:block">
        <ScaleStage>
          <HeroSection />
          <ServicesSection />
        </ScaleStage>
      </div>

      {/* Mobile & Tablet: responsive stacked layout */}
      <div className="lg:hidden">
        <HeroSection />
        <ServicesSection />
      </div>
    </main>
  );
}

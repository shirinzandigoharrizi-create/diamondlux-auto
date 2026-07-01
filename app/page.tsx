import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ScaleStage from "@/components/ScaleStage";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0A0A0A", overflowX: "hidden" }}>
      {/* Desktop/Tablet: 1280px stage zoomed to fit — visible at sm (640px+) */}
      <div className="hidden sm:block">
        <ScaleStage>
          <HeroSection />
          <ServicesSection />
        </ScaleStage>
      </div>

      {/* Mobile only: responsive stacked layout */}
      <div className="sm:hidden">
        <HeroSection />
        <ServicesSection />
      </div>
    </main>
  );
}

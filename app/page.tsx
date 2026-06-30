import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ScaleStage from "@/components/ScaleStage";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0A0A0A", overflowX: "hidden" }}>
      {/* Desktop: 1280px stage scaled to fit viewport */}
      <div className="hidden lg:block">
        <ScaleStage>
          <HeroSection />
          <ServicesSection />
        </ScaleStage>
      </div>

      {/* Mobile & Tablet: responsive layout */}
      <div className="lg:hidden">
        <HeroSection />
        <ServicesSection />
      </div>
    </main>
  );
}

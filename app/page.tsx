import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ScaleStage from "@/components/ScaleStage";

export default function Home() {
  return (
    <main style={{ background: "#0A0A0A", overflowX: "hidden" }}>
      <ScaleStage>
        <HeroSection />
        <ServicesSection />
      </ScaleStage>
    </main>
  );
}

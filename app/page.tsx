import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ScaleStage from "@/components/ScaleStage";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import PackagesSectionHome from "@/components/PackagesSectionHome";
import GallerySectionHome from "@/components/GallerySectionHome";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSectionHome from "@/components/AboutSectionHome";
import ContactSectionHome from "@/components/ContactSectionHome";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main id="hero" style={{ background: "#0A0A0A", overflowX: "hidden" }}>
      <ScaleStage>
        {/* ── First screen — untouched ── */}
        <HeroSection />
        <ServicesSection />

        {/* ── Scrollable sections below ── */}
        <WhyUsSection />
        <ProcessSection />
        <PackagesSectionHome />
        <GallerySectionHome />
        <TestimonialsSection />
        <AboutSectionHome />
        <ContactSectionHome />
        <SiteFooter />
      </ScaleStage>
    </main>
  );
}

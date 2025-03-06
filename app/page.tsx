import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import ProductivitySection from "@/components/sections/ProductivitySection";
import CollaborationSection from "@/components/sections/collaborationSection";
import OpenaiCallout from "@/components/sections/openaiCallout";
import IntelligenceSection from "@/components/sections/intelligenceSection";
import ResourcesSection from "@/components/sections/RecourcesSection";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <Hero />
      <ProductivitySection />
      <CollaborationSection />
      <div className="px-4 sm:px-6 lg:px-0 w-full">
        <OpenaiCallout />
      </div>
      <IntelligenceSection />
      <ResourcesSection />
      <div className="px-4 sm:px-6 lg:px-0 w-full">
        <CTA />
      </div>
    </div>
  );
}
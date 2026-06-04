import HeroSection from "@/components/home/HeroSection";
import CentreOfExcellence from "@/components/home/CentreOfExcellence";
import WhyChooseNH from "@/components/home/WhyChooseNH";
import SpecialitiesGrid from "@/components/home/SpecialitiesGrid";
import HealthPackages from "@/components/home/HealthPackages";

import PatientStories from "@/components/home/PatientStories";
import ChairmanQuote from "@/components/home/ChairmanQuote";
import AppDownloadBanner from "@/components/home/AppDownloadBanner";
import FloatingQuickActions from "@/components/ui/FloatingQuickActions";

export default function HomePage() {
  return (
    <>
      <FloatingQuickActions />
      <HeroSection />
      <CentreOfExcellence />
      <SpecialitiesGrid />
      <HealthPackages />
      <WhyChooseNH />

      <ChairmanQuote />
      <PatientStories />
      <AppDownloadBanner />
    </>
  );
}

import HeroSection from "@/components/sections/HeroSection";
import PartnerLogos from "@/components/sections/PartnerLogos";
import AboutClinic from "@/components/sections/AboutClinic";
import ServicesPreview from "@/components/sections/ServicesPreview";
import DoctorsTeaser from "@/components/sections/DoctorsTeaser";
import BranchesSection from "@/components/sections/BranchesSection";
import RecentMoments from "@/components/sections/RecentMoments";
import Testimonials from "@/components/sections/Testimonials";
import HomeFAQ from "@/components/sections/HomeFAQ";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerLogos />
      <AboutClinic />
      <ServicesPreview />
      <DoctorsTeaser />
      <BranchesSection />
      <RecentMoments />
      <Testimonials />
      <HomeFAQ />
      <CTASection />
    </>
  );
}

import BrandSec from "@/component/landing/BrandSec";
import ContactSec from "@/component/landing/ContactSec";
import HeroSection from "@/component/landing/HeroSection";
import ServiceSec from "@/component/landing/ServiceSec";
import Testimonial from "@/component/landing/Testimonial";
import VisitSec from "@/component/landing/VisitSec";
import WelcomeSec from "@/component/landing/WelcomeSec";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSec />
      <ServiceSec />
      <BrandSec />
      <ContactSec />
      <VisitSec />
      <Testimonial />
    </>
  );
}

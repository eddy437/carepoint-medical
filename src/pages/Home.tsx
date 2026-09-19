import Hero from "../components/home/Hero";
import QuickActions from "../components/home/QuickActions";
import AboutPreview from "../components/home/AboutPreview";
import DepartmentsSection from "../components/home/Departments";
import DoctorsSection from "../components/home/DoctorsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import AppointmentCTA from "../components/home/AppointmentCTA";
import { useDocumentTitle } from "../utils/useDocumentTitle";

export default function Home() {
  useDocumentTitle(
    "CarePoint Medical | Compassionate Care. Advanced Medicine.",
    "Comprehensive medical care delivered by experienced physicians, advanced technology, and a team that puts your wellbeing first."
  );

  return (
    <>
      <Hero />
      <QuickActions />
      <AboutPreview />
      <DepartmentsSection />
      <DoctorsSection />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentCTA />
    </>
  );
}
import HeroSection from './components/HeroSection';
import BookSection from './components/BookSection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';
import WorkSection from './components/WorkSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BookSection />
      <AboutSection />
      <TestimonialSection />
      <WorkSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
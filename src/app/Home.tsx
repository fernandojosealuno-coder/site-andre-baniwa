import HeroSection from './components/InicioSection';
import BookSection from './components/LivroSection';
import AboutSection from './components/SobreSection';
import TestimonialSection from './components/DepoimentosSection';
import CTASection from './components/ChamadaSection';
import ContactSection from './components/ContatoSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BookSection />
      <AboutSection />
      <TestimonialSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import Features from '@/components/landing/Features';
import Segments from '@/components/landing/Segments';
import Pricing from '@/components/landing/Pricing';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Segments />
      <Pricing />
      <Footer />
    </main>
  );
}

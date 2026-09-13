import { useState, useCallback } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { CaseStudies } from '@/components/CaseStudies';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Contact } from '@/components/Contact';

function App() {
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = useCallback(() => setContactOpen(true), []);
  const closeContact = useCallback(() => setContactOpen(false), []);

  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-hidden">
      <Header onContactClick={openContact} />
      <main>
        <Hero onContactClick={openContact} />
        <Services />
        <About onContactClick={openContact} />
        <CaseStudies />
        <Process />
        {/* <Testimonials /> */}
        <FAQ />
      </main>
      <Footer onContactClick={openContact} />
      <Contact isOpen={contactOpen} onClose={closeContact} />
    </div>
  );
}

export default App;

import { Toaster } from 'react-hot-toast';
import ScrollTracker from '../components/ScrollTracker';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import USPSection from '../components/USPSection';
import ServicesSection from '../components/ServicesSection';
import AISection from '../components/AISection';
import IndustriesSection from '../components/IndustriesSection';
import ProcessSection from '../components/ProcessSection';
import ResultsSection from '../components/ResultsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

function ERP() {
  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-x-hidden">
      <Header />
      <main>
        <ScrollTracker sectionName="Hero">
          <Hero />
        </ScrollTracker>
        <ScrollTracker sectionName="Problem">
          <ProblemSection />
        </ScrollTracker>
        <ScrollTracker sectionName="Solution">
          <SolutionSection />
        </ScrollTracker>
        <ScrollTracker sectionName="USP">
          <USPSection />
        </ScrollTracker>
        <ScrollTracker sectionName="Services">
          <ServicesSection />
        </ScrollTracker>
        <ScrollTracker sectionName="AI">
          <AISection />
        </ScrollTracker>
        <ScrollTracker sectionName="Industries">
          <IndustriesSection />
        </ScrollTracker>
        <ScrollTracker sectionName="Process">
          <ProcessSection />
        </ScrollTracker>
        <ScrollTracker sectionName="Results">
          <ResultsSection />
        </ScrollTracker>
        <ScrollTracker sectionName="Testimonials">
          <TestimonialsSection />
        </ScrollTracker>
        <ScrollTracker sectionName="FAQ">
          <FAQSection />
        </ScrollTracker>
        <ScrollTracker sectionName="CTA">
          <CTASection />
        </ScrollTracker>
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0f0f1f',
            color: '#e2e8f0',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px',
            fontSize: '14px',
          },
          success: {
            iconTheme: { primary: '#22c55e', secondary: '#0f0f1f' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#0f0f1f' },
          },
        }}
      />
    </div>
  );
}

export default ERP;

import './index.css';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import USPSection from './components/USPSection';
import ServicesSection from './components/ServicesSection';
import AISection from './components/AISection';
import IndustriesSection from './components/IndustriesSection';
import ProcessSection from './components/ProcessSection';
import ResultsSection from './components/ResultsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <USPSection />
        <ServicesSection />
        <AISection />
        <IndustriesSection />
        <ProcessSection />
        <ResultsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
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

export default App;

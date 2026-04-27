import EdtechHeader from '../components/edtech/EdtechHeader';
import EdtechHero from '../components/edtech/EdtechHero';
import EdtechSocialProof from '../components/edtech/EdtechSocialProof';
import EdtechSalesSuite from '../components/edtech/EdtechSalesSuite';
import EdtechERPModules from '../components/edtech/EdtechERPModules';
import EdtechCTA from '../components/edtech/EdtechCTA';

function Edtech() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      <EdtechHeader />
      <EdtechHero />
      <EdtechSocialProof />
      <EdtechSalesSuite />
      <EdtechERPModules />
      <EdtechCTA />
    </div>
  );
}

export default Edtech;

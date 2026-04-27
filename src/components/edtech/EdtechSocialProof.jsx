import { motion } from 'framer-motion';
import magnusLogo from '../../assets/logos/magnuslogo.svg';
import xylemLogo from '../../assets/logos/xylemlogo.png';
import cfLogo from '../../assets/logos/cflogo.png';
import cambridgeLogo from '../../assets/logos/cambridgelogo.png';

const logos = [
  { name: 'Cambridge', src: cambridgeLogo },
  { name: 'University of California', src: cfLogo },
  { name: 'Xylem', src: xylemLogo },
  { name: 'Magnus', src: magnusLogo }
];

export default function EdtechSocialProof() {
  return (
    <section className="bg-[#0B1120] border-y border-slate-800/60 py-12 sm:py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] text-slate-500 font-mono uppercase tracking-[0.25em] mb-8">
          Trusted By Leading Edtech Companies
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex items-center justify-center bg-slate-800/30 border border-slate-700/40 rounded-xl px-6 py-6 hover:border-slate-600/50 transition-all duration-300 group"
            >
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="object-contain group-hover:grayscale-0 transition-all duration-300"
                  style={{ maxHeight: 40, maxWidth: 140 }}
                />
              ) : (
                <div className="h-8 w-24 rounded bg-slate-700/40 border border-dashed border-slate-600/40" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

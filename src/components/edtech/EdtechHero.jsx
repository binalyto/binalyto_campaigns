import { motion } from 'framer-motion';
import {
  ArrowRight, ChevronRight, Zap,
  MessageSquare, Phone, Globe, Smartphone,
  UserCheck, BarChart3, Bell,
} from 'lucide-react';

const channels = [
  { icon: MessageSquare, label: 'WhatsApp',    sub: 'Instant messaging',   color: '#22c55e', ring: 'ring-green-500/20',  bg: 'bg-green-500/10'  },
  { icon: Phone,         label: 'Calls',       sub: 'Inbound & outbound',  color: '#3b82f6', ring: 'ring-blue-500/20',   bg: 'bg-blue-500/10'   },
  { icon: Globe,         label: 'Web Leads',   sub: 'Form captures',       color: '#a855f7', ring: 'ring-purple-500/20', bg: 'bg-purple-500/10' },
  { icon: Smartphone,    label: 'App Installs',sub: 'Referrals & installs', color: '#f97316', ring: 'ring-orange-500/20', bg: 'bg-orange-500/10' },
];

const outputs = [
  { icon: UserCheck, label: 'Lead Assigned', value: 'Auto',    color: 'text-blue-400'   },
  { icon: BarChart3, label: 'AI Scored',     value: '95%',     color: 'text-green-400'  },
  { icon: Bell,      label: 'Task Created',  value: 'Instant', color: 'text-purple-400' },
];

const stats = [
  { value: '3.8×',   label: 'Conversion Lift' },
  { value: '<2s',    label: 'Response Time'   },
  { value: '98.2%',  label: 'AI Accuracy'     },
];

function FlowDots({ delay = 0 }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 w-8 flex-shrink-0">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-blue-500"
          animate={{ opacity: [0.15, 1, 0.15], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 1.4, delay: delay + i * 0.22, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

function AIEngine({ size = 'lg' }) {
  const dim = size === 'lg' ? 'w-20 h-20' : 'w-16 h-16';
  const ring = size === 'lg' ? 'w-24 h-24' : 'w-20 h-20';
  const iconSize = size === 'lg' ? 22 : 18;
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        className={`absolute ${ring} rounded-full border border-blue-500/20`}
        animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
      <motion.div
        className={`absolute ${ring} rounded-full border border-blue-500/20`}
        animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
        transition={{ duration: 2, delay: 0.75, repeat: Infinity, ease: 'easeOut' }}
      />
      <div className={`relative ${dim} bg-blue-600/20 border border-blue-500/40 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-lg shadow-blue-600/20`}>
        <Zap size={iconSize} className="text-blue-400" fill="rgba(96,165,250,0.25)" />
        <span className="text-[9px] font-bold text-blue-300 uppercase tracking-widest leading-none">AI Engine</span>
      </div>
    </div>
  );
}

export default function EdtechHero() {
  return (
    <section className="relative min-h-screen bg-[#0F172A] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Zap size={11} fill="currentColor" />
              AI-Powered Sales Intelligence
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold text-white leading-[1.1] tracking-tight mb-5">
              The AI Powered{' '}
              <span className="gradient-text">Sales Machine</span>{' '}
              for Edtech Companies
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-[480px]">
              We know how to make your sales team better with our World's Most Trusted Sales Suite — from first touch to payment collected.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-sm"
              >
                Transform Your Sales Process
                <ArrowRight size={15} />
              </a>
              <a
                href="#sales-suite"
                className="inline-flex items-center justify-center gap-1.5 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-500 font-semibold px-6 py-3.5 rounded-lg transition-all duration-200 text-sm"
              >
                See How It Works
                <ChevronRight size={15} />
              </a>
            </div>
          </motion.div>

          {/* ── Pipeline graphic ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
              <p className="text-center text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mb-5">
                ● Omnichannel Pipeline
              </p>

              {/* Desktop: 5-column horizontal flow */}
              <div className="hidden lg:flex items-stretch gap-2 min-w-0">
                {/* Channels */}
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest mb-0.5">Channels</p>
                  {channels.map((ch) => (
                    <div
                      key={ch.label}
                      className={`flex items-center gap-2.5 ${ch.bg} border border-white/5 rounded-lg px-3 py-2 ring-1 ${ch.ring}`}
                    >
                      <ch.icon size={13} style={{ color: ch.color }} className="flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="text-white text-xs font-semibold leading-none truncate">{ch.label}</p>
                        <p className="text-slate-500 text-[10px] mt-0.5 truncate">{ch.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <FlowDots delay={0} />

                {/* AI Engine */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center w-28">
                  <AIEngine size="lg" />
                </div>

                <FlowDots delay={0.5} />

                {/* Outputs */}
                <div className="flex-1 min-w-0 flex flex-col justify-center gap-2">
                  <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest mb-0.5">Output</p>
                  {outputs.map((out) => (
                    <div
                      key={out.label}
                      className="flex items-center justify-between bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-2"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <out.icon size={12} className={`${out.color} flex-shrink-0`} />
                        <p className="text-white text-xs font-medium truncate">{out.label}</p>
                      </div>
                      <span className={`text-xs font-bold ${out.color} ml-2 flex-shrink-0`}>{out.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: vertical flow */}
              <div className="flex lg:hidden flex-col gap-3">
                <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest">Input Channels</p>
                <div className="grid grid-cols-2 gap-2">
                  {channels.map((ch) => (
                    <div
                      key={ch.label}
                      className={`flex items-center gap-2 ${ch.bg} border border-white/5 rounded-lg px-3 py-2.5 ring-1 ${ch.ring}`}
                    >
                      <ch.icon size={13} style={{ color: ch.color }} className="flex-shrink-0" />
                      <p className="text-white text-xs font-semibold">{ch.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center my-0.5">
                  <div className="flex flex-col items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-blue-500"
                        animate={{ opacity: [0.15, 1, 0.15] }}
                        transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-center py-1">
                  <AIEngine size="sm" />
                </div>

                <div className="flex justify-center my-0.5">
                  <div className="flex flex-col items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-blue-500"
                        animate={{ opacity: [0.15, 1, 0.15] }}
                        transition={{ duration: 1.2, delay: i * 0.2 + 0.5, repeat: Infinity }}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {outputs.map((out) => (
                    <div
                      key={out.label}
                      className="flex flex-col items-center gap-1 bg-slate-800/50 border border-slate-700/50 rounded-lg px-2 py-3 text-center"
                    >
                      <out.icon size={13} className={out.color} />
                      <p className={`text-xs font-bold ${out.color}`}>{out.value}</p>
                      <p className="text-slate-500 text-[9px] leading-tight">{out.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats bar */}
              <div className="mt-5 pt-4 border-t border-slate-700/50 grid grid-cols-3 divide-x divide-slate-700/50">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center px-2">
                    <span className="text-base sm:text-lg font-bold text-white">{s.value}</span>
                    <span className="text-[10px] text-slate-500 text-center mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { GitBranch, Layers, Flame, Bot, TrendingUp, CircleDollarSign } from 'lucide-react';

const features = [
  {
    icon: GitBranch,
    title: 'Sales Process Management',
    desc: 'Consultancy-driven architecture tailored to your school sales cycle — from first inquiry to enrollment confirmation.',
    tag: 'Core Foundation',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    hoverBorder: 'hover:border-blue-500/40',
    hoverShadow: 'hover:shadow-blue-500/10',
    bottomLine: 'via-blue-500',
  },
  {
    icon: Layers,
    title: 'Omnichannel Lead Pipeline',
    desc: 'Automatically convert WhatsApp chats, inbound calls, app installs, and referrals into assigned, tracked leads.',
    tag: 'Auto-capture',
    iconColor: 'text-green-400',
    iconBg: 'bg-green-500/10',
    hoverBorder: 'hover:border-green-500/40',
    hoverShadow: 'hover:shadow-green-500/10',
    bottomLine: 'via-green-500',
  },
  {
    icon: Flame,
    title: 'AI Lead Scoring',
    desc: 'Dynamic heat-map scores every lead in real-time — your team always works the highest-value prospects first.',
    tag: 'Priority Engine',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    hoverBorder: 'hover:border-orange-500/40',
    hoverShadow: 'hover:shadow-orange-500/10',
    bottomLine: 'via-orange-500',
  },
  {
    icon: Bot,
    title: 'AI Agents — 24/7',
    desc: 'Messaging and calling agents engage, qualify, and follow up with leads around the clock without human intervention.',
    tag: 'Always On',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
    hoverBorder: 'hover:border-purple-500/40',
    hoverShadow: 'hover:shadow-purple-500/10',
    bottomLine: 'via-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Performance Programs',
    desc: 'Structured sales-person improvement metrics with coaching triggers, scorecards, and team leaderboards.',
    tag: 'Team Excellence',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
    hoverBorder: 'hover:border-cyan-500/40',
    hoverShadow: 'hover:shadow-cyan-500/10',
    bottomLine: 'via-cyan-500',
  },
  {
    icon: CircleDollarSign,
    title: 'Full Sales Lifecycle',
    desc: 'One unified workflow covering lead generation, nurturing, admission, and final payment collection.',
    tag: 'End-to-End',
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
    hoverBorder: 'hover:border-yellow-500/40',
    hoverShadow: 'hover:shadow-yellow-500/10',
    bottomLine: 'via-yellow-500',
  },
];

export default function EdtechSalesSuite() {
  return (
    <section id="sales-suite" className="bg-[#0F172A] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">The Core Engine</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-5 mb-4">
            The World's Most Trusted Edtech Sales Suite
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Every feature is built around how edtech sales actually works — high-touch, relationship-driven, and results-obsessed.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${f.hoverBorder} ${f.hoverShadow}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`p-2.5 rounded-xl ${f.iconBg} ${f.iconColor}`}>
                  <f.icon size={20} />
                </div>
                <span className="text-[10px] font-semibold text-slate-500 bg-slate-800/60 border border-slate-700/50 px-2 py-0.5 rounded-full">
                  {f.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-white mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              {/* Bottom accent line on hover */}
              <div className={`absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent ${f.bottomLine} to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

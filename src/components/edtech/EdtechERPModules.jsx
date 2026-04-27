import { motion } from 'framer-motion';
import { Clock, BarChart2, CreditCard, BookOpen, Smartphone, Home, FileText } from 'lucide-react';

const modules = [
  {
    icon: Clock,
    title: 'Attendance & Bus Tracking',
    desc: 'GPS-enabled real-time bus tracking plus biometric and app-based attendance with instant parent alerts.',
    iconColor: 'text-sky-400',
    iconBg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    hoverBorder: 'hover:border-sky-500/40',
  },
  {
    icon: BarChart2,
    title: 'Academic Performance',
    desc: 'Comprehensive analytics on grades, assessments, and learning outcomes with teacher and parent dashboards.',
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    hoverBorder: 'hover:border-violet-500/40',
  },
  {
    icon: CreditCard,
    title: 'Online Fee Collection',
    desc: 'Secured multi-gateway payment collection with auto-reminders, receipts, and real-time reconciliation.',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/40',
  },
  {
    icon: BookOpen,
    title: 'LMS',
    desc: 'Full-featured Learning Management System with video content, quizzes, assignments, and progress tracking.',
    iconColor: 'text-amber-400',
    iconBg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    hoverBorder: 'hover:border-amber-500/40',
  },
  {
    icon: Smartphone,
    title: 'Parent Connect App',
    desc: 'Dedicated parent app for real-time notifications, homework, fee receipts, attendance, and direct messaging.',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
    border: 'border-pink-500/20',
    hoverBorder: 'hover:border-pink-500/40',
  },
  {
    icon: Home,
    title: 'Hostel Management',
    desc: 'Room allotment, check-in/out logs, mess management, and parent notifications for residential students.',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    hoverBorder: 'hover:border-orange-500/40',
  },
  {
    icon: FileText,
    title: 'Admission Automation',
    desc: 'End-to-end admission funnel from online applications to document collection, seat allotment, and enrollment.',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/40',
  },
];

export default function EdtechERPModules() {
  return (
    <section id="erp-modules" className="bg-[#0B1120] py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">The Operational Ecosystem</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-5 mb-4">
            Everything Your Campus Runs On
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Beyond sales — a complete ERP that manages every operational layer of your institution in one platform.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className={`group bg-slate-900/50 border ${mod.border} ${mod.hoverBorder} rounded-xl p-5 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:bg-slate-900/80`}
            >
              <div className={`inline-flex p-2.5 rounded-xl ${mod.iconBg} ${mod.iconColor} mb-4`}>
                <mod.icon size={18} />
              </div>
              <h3 className="text-sm font-bold text-white mb-2 leading-snug">{mod.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

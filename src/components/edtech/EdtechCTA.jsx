/* global $ */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';

const benefits = [
  'Free 30-min strategy session',
  'Live demo for your edtech size',
  'No commitment required',
];

export default function EdtechCTA() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    mobile: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const API_URL =
      import.meta.env.VITE_N8N_WEBHOOK ||
      'https://n8n.binalyto.com/webhook/1f17a41d-ee6a-47d5-840c-60b960343545';

    $.ajax({
      url: API_URL,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(formData),
      success: () => {
        toast.success("Message sent! We'll be in touch within 24 hours.");
        setFormData({ name: '', company: '', mobile: '', email: '', message: '' });
      },
      error: (_xhr, status, err) => {
        console.error(status, err);
        toast.error('Failed to send message. Please try again.');
      },
    });
  };

  return (
    <section id="contact" className="bg-[#0F172A] py-20 sm:py-28 relative overflow-hidden">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#e2e8f0',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '10px',
            fontSize: '14px',
          },
          success: { iconTheme: { primary: '#22c55e', secondary: '#1e293b' } },
          error:   { iconTheme: { primary: '#ef4444', secondary: '#1e293b' } },
        }}
      />

      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <Zap size={11} fill="currentColor" />
            Ready to Scale?
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Book a Free Strategy Session
          </h2>

          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            See exactly how our AI Sales Suite transforms your admissions funnel. No sales pressure — just a real conversation about your growth goals.
          </p>

          <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-10">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 size={14} className="text-blue-400 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-slate-900/60 border border-slate-700/60 rounded-2xl p-6 sm:p-8 text-left backdrop-blur-sm"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-slate-400 text-sm">We respond within 24 hours</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5">School / Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Delhi Public School"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@school.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-400 text-xs font-medium mb-1.5">Tell us about your needs</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="We're looking to improve admissions and automate our sales follow-ups..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-sm"
            >
              <Calendar size={15} />
              Book Your Free Demo
              <ArrowRight size={15} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

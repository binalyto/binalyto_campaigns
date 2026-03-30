/* global $ */
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const API_URL = import.meta.env.VITE_N8N_WEBHOOK;

    $.ajax({
      url: API_URL,
      method: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: () => {
        toast.success("Message sent! We'll be in touch within 24 hours.");
        setFormData({ name: "", company: "", email: "", message: "" });
      },
      error: (_xhr, status, err) => {
        console.error(status, err);
        toast.error("Failed to send message. Please try again.");
      },
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Strong glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[80px]" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-blue-400 text-xs font-medium">
              Free Consultation Available
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform{" "}
            <span className="gradient-text">Your Business?</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's map out your ERP transformation in a free 45-minute strategy
            session. No sales pitch — just a clear plan for what's possible.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:hello@binalyto.com?subject=ERPNext Consultation Request"
              className="btn-primary inline-flex items-center gap-2.5 px-8 py-4 text-base relative z-10"
            >
              <span className="relative z-10">Book Free Consultation</span>
              <ArrowRight size={17} className="relative z-10" />
            </a>
            <a
              href="mailto:hello@binalyto.com?subject=Talk to Expert"
              className="btn-secondary inline-flex items-center gap-2.5 px-8 py-4 text-base"
            >
              <MessageCircle size={17} className="text-blue-400" />
              Talk to an Expert
            </a>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="card-glass rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-white font-semibold text-lg mb-6">
              Or send us a quick message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Full Name
                  </label>
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
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Acme Corp"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    placeholder="+91 1234567890"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@gmail.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-medium mb-1.5">
                  Tell us about your needs
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="We're looking to replace our current system / add AI to ERPNext..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full py-3 text-sm font-semibold relative z-10 flex items-center justify-center gap-2"
              >
                <span className="relative z-10">Send Message</span>
                <ArrowRight size={15} className="relative z-10" />
              </button>
            </form>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-slate-600 text-xs"
          >
            {[
              "No commitment required",
              "Response within 24 hours",
              "Free strategy session",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-green-400" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

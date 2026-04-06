import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Logo from '../assets/logo_white.png';

const footerLinks = {
  Services: [
    { label: 'ERPNext Implementation', href: '#services' },
    { label: 'Customization', href: '#services' },
    { label: 'Data Migration', href: '#services' },
    { label: 'AI Integration', href: '#ai' },
    { label: 'Support & Training', href: '#services' },
  ],
  Industries: [
    { label: 'eCommerce', href: '#industries' },
    { label: 'Manufacturing', href: '#industries' },
    { label: 'Distribution', href: '#industries' },
    { label: 'Retail', href: '#industries' },
    { label: 'Professional Services', href: '#industries' },
  ],
  Company: [
    { label: 'About Binalyto', href: '#about' },
    { label: 'Our Process', href: '#process' },
    { label: 'Case Studies', href: '#testimonials' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#030310]">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <img className='h-5 w-30' src={Logo} alt="Binalyto Logo" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              AI + ERP business transformation. We help growing businesses unify
              operations and scale with intelligence.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <a href="mailto:hello@binalyto.com" className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 text-sm transition-colors">
                <Mail size={14} className="text-blue-400" />
                mail@binalyto.com
              </a>
              <a href="tel:+919744949078" className="flex items-center gap-2.5 text-slate-500 hover:text-slate-300 text-sm transition-colors">
                <Phone size={14} className="text-blue-400" />
                +91 9744949078
              </a>
              <div className="flex items-center gap-2.5 text-slate-500 text-sm">
                <MapPin size={14} className="text-blue-400" />
                Global · Remote-first
              </div>
            </div>

            {/* Socials */}
            {/* <div className="flex items-center gap-3 mt-6">
              {[
                { icon: <Linkedin size={16} />, href: '#' },
                { icon: <Twitter size={16} />, href: '#' },
                { icon: <Github size={16} />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 rounded-lg card-glass flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div> */}
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Binalyto. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

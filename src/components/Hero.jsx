import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, Phone, Instagram, Linkedin, Mail, Globe } from 'lucide-react';

const counters = [
  { label: 'Software Projects', value: 30, suffix: '+', icon: Globe },
  { label: 'Major Applications', value: 5, suffix: '+', icon: Phone },
  { label: 'Years of Experience', value: 3, suffix: '+', icon: Globe },
  { label: 'Compliance Rate', value: 100, suffix: '%', icon: ShieldIcon },
  { label: 'Critical Security Incidents', value: 0, suffix: '', icon: ShieldIcon },
];

function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function AnimatedCounter({ to, suffix }) {
  const [value, setValue] = useState(0);

  useMemo(() => {
    let start;
    let raf;
    const duration = 1200;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const current = Math.floor(progress * to);
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);

  return (
    <span>{value}{suffix}</span>
  );
}

export default function Hero() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Kalvin Marpaho Valentino
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-2 text-cyan-300 text-lg md:text-2xl"
        >
          Software Developer & IT Manager
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 max-w-3xl text-gray-200"
        >
          I’m a software developer passionate about building reliable, secure, and user-centered digital solutions. With experience leading information security initiatives and managing development teams, I aim to create technology that drives business growth and compliance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {counters.map((c) => (
            <div key={c.label} className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-center gap-2 text-cyan-300 text-2xl font-bold">
                <c.icon className="h-5 w-5" />
                <AnimatedCounter to={c.value} suffix={c.suffix} />
              </div>
              <div className="mt-1 text-xs text-gray-300">{c.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/kalvin-marpaho-valentino-cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 transition-colors"
          >
            <Download className="h-5 w-5" /> Download CV
          </a>
          <button
            onClick={() => setShowLinks(true)}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 border border-white/20 transition-colors"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      {showLinks && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-black p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Find me online</h3>
              <button onClick={() => setShowLinks(false)} className="text-gray-300 hover:text-white">Close</button>
            </div>
            <div className="grid gap-3">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 text-white transition-colors">
                <Phone className="h-5 w-5 text-cyan-300" /> WhatsApp
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 text-white transition-colors">
                <Instagram className="h-5 w-5 text-pink-400" /> Instagram
              </a>
              <a href="https://linkedin.com/in/kalvin-valentino" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 text-white transition-colors">
                <Linkedin className="h-5 w-5 text-blue-400" /> LinkedIn
              </a>
              <a href="mailto:work.kalvinvalentino@gmail.com" className="flex items-center gap-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 text-white transition-colors">
                <Mail className="h-5 w-5 text-emerald-400" /> Email
              </a>
              <a href="https://your-website.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 text-white transition-colors">
                <Globe className="h-5 w-5 text-cyan-300" /> Website
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

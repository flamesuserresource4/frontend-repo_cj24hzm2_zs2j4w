import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronLeft, ChevronRight, Mail, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const educationSlides = [
  {
    name: 'Gunadarma University (2018–2022)',
    degree: 'Bachelor’s Degree in Information Systems',
    url: 'https://gunadarma.ac.id',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Genesha Flight Academy (2017)',
    degree: 'CPL–IR License Conversion',
    url: 'https://genesaacademy.com',
    image: 'https://images.unsplash.com/photo-1623507868014-d30a2bc26232?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHZW5lc2hhJTIwRmxpZ2h0JTIwQWNhZGVteSUyMCUyODIwMTclMjl8ZW58MHwwfHx8MTc2MjE4MDk2NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'All Asia Aviation Academy (2015–2016)',
    degree: 'PPL–CPL–IR License Training and Certification',
    url: 'https://aaa-central.com',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'SMAT Krida Nusantara (2012–2015)',
    degree: 'High School',
    url: 'https://kridanusantara.com',
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function InfoSections() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % educationSlides.length);
  const prev = () => setIndex((i) => (i - 1 + educationSlides.length) % educationSlides.length);

  return (
    <div className="w-full bg-gradient-to-b from-black to-slate-950 text-white">
      <section id="education" className="relative min-h-screen flex items-center py-16">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex items-center gap-2 mb-6 text-cyan-300">
            <GraduationCap className="h-6 w-6" />
            <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="relative h-[380px] md:h-[460px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 grid md:grid-cols-2"
                >
                  <img src={educationSlides[index].image} alt={educationSlides[index].name} className="h-56 md:h-full w-full object-cover" />
                  <div className="p-6 md:p-8 flex flex-col justify-center bg-gradient-to-b from-slate-900/50 to-black/60">
                    <h3 className="text-xl md:text-2xl font-semibold">{educationSlides[index].name}</h3>
                    <p className="mt-2 text-gray-300">{educationSlides[index].degree}</p>
                    <a href={educationSlides[index].url} target="_blank" rel="noreferrer" className="mt-4 inline-block text-cyan-300 hover:text-cyan-200 underline">
                      {educationSlides[index].url}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 p-2">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 p-2">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 p-4">
              {educationSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full ${i === index ? 'bg-cyan-400' : 'bg-white/20'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative min-h-screen flex items-center py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-6 text-gray-200 text-lg leading-relaxed">
            I’m passionate about building technology that makes a difference. My approach combines structure, creativity, and adaptability — qualities that help me lead teams, manage risks, and deliver results under pressure.
          </p>
        </div>
      </section>

      <section id="contact" className="relative min-h-screen flex items-center py-16">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-3 text-cyan-300">
                <Mail className="h-5 w-5" />
                <h3 className="font-semibold">Email</h3>
              </div>
              <a href="mailto:work.kalvinvalentino@gmail.com" className="mt-2 block text-gray-200 hover:text-white">work.kalvinvalentino@gmail.com</a>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-3 text-cyan-300">
                <MapPin className="h-5 w-5" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="mt-2 text-gray-200">South Jakarta, Indonesia</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-3 text-cyan-300">
                <Linkedin className="h-5 w-5" />
                <h3 className="font-semibold">LinkedIn</h3>
              </div>
              <a href="https://linkedin.com/in/kalvin-valentino" target="_blank" rel="noreferrer" className="mt-2 block text-gray-200 hover:text-white">linkedin.com/in/kalvin-valentino</a>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <div className="flex items-center gap-3 text-cyan-300">
                <Github className="h-5 w-5" />
                <h3 className="font-semibold">GitHub</h3>
              </div>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="mt-2 block text-gray-200 hover:text-white">github.com/</a>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:col-span-2">
              <div className="flex items-center gap-3 text-cyan-300">
                <Globe className="h-5 w-5" />
                <h3 className="font-semibold">Portfolio</h3>
              </div>
              <a href="https://your-website.com" target="_blank" rel="noreferrer" className="mt-2 block text-gray-200 hover:text-white">your-website.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

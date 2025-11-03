import { motion } from 'framer-motion';
import { Shield, Settings, Code2, Bug, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Nasari Digital – Financial Services',
    roles: [
      {
        title: 'SMKI Implementation Lead & IT Manager',
        period: '2025–Present',
        points: [
          'Led the implementation of the Information Security Management System (ISMS), achieving ISO 27001 certification.',
          'Managed company-wide security controls, risk assessments, and internal audits.',
        ],
        icon: Shield,
      },
      {
        title: 'Technical Coordinator',
        period: '2024–Present',
        points: [
          'Coordinated communication between internal developers and vendors.',
          'Supervised system performance, integrations, and issue resolution.',
        ],
        icon: Settings,
      },
      {
        title: 'Web Developer',
        period: '2023–Present',
        points: [
          'Developed and maintained Nasari Digital’s interactive website and web apps.',
          'Collaborated with team members to enhance UX and optimize code efficiency.',
        ],
        icon: Code2,
      },
      {
        title: 'Intern Backend Engineer',
        period: '2023',
        points: [
          'Assisted in improving dashboard performance and debugging legacy issues.',
        ],
        icon: Bug,
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-black to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <p className="text-gray-300 mt-2">A timeline of leadership and hands-on engineering.</p>
        </div>

        {experiences.map((exp) => (
          <div key={exp.company} className="mb-12">
            <div className="flex items-center gap-2 mb-6 text-cyan-300">
              <Building2 className="h-5 w-5" />
              <h3 className="text-xl font-semibold">{exp.company}</h3>
            </div>
            <div className="relative border-l border-white/10 pl-6">
              {exp.roles.map((role, idx) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative mb-10"
                >
                  <div className="absolute -left-[33px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-black">
                    <role.icon className="h-4 w-4" />
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="text-lg font-semibold">{role.title}</div>
                      <div className="text-sm text-cyan-300">{role.period}</div>
                    </div>
                    <ul className="list-disc list-inside mt-3 space-y-2 text-gray-200">
                      {role.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

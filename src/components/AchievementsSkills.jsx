import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, Database, Wrench, Boxes } from 'lucide-react';

const achievements = [
  'Successfully managed and led ISMS implementation, achieving ISO 27001 Certification.',
  'Improved system performance and reduced security vulnerabilities.',
  'Coordinated multiple cross-functional teams for faster project delivery.',
  'Built scalable web solutions used by thousands of users.',
];

const skills = [
  {
    title: 'Languages & Frameworks',
    items: ['PHP (Laravel)', 'Java', 'JavaScript', 'Node.js', 'C#'],
    icon: Cpu,
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
    icon: Database,
  },
  {
    title: 'Tools',
    items: ['GitHub', 'GitLab', 'Postman', 'Jira', 'Trello', 'Notion'],
    icon: Wrench,
  },
  {
    title: 'Others & Design',
    items: ['Unity', 'Visual Studio', 'Canva', 'Filmora', 'Vegas Pro'],
    icon: Boxes,
  },
];

export default function AchievementsSkills() {
  return (
    <section id="achievements" className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 to-black text-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Achievements
          </motion.h2>
          <ul className="mt-6 space-y-4">
            {achievements.map((a, i) => (
              <motion.li
                key={a}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4"
              >
                <CheckCircle2 className="h-6 w-6 text-emerald-400 mt-0.5" />
                <span className="text-gray-200">{a}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Technical Skills
          </motion.h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl bg-white/5 border border-white/10 p-5"
              >
                <div className="flex items-center gap-2 text-cyan-300">
                  <group.icon className="h-5 w-5" />
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

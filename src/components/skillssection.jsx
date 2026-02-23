import React from 'react'
import { Layers } from 'lucide-react'

const skillCategories = [
  {
    label: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TailwindCSS', 'HTML/CSS'],
  },
  {
    label: 'Backend & Data',
    color: 'from-violet-500 to-purple-600',
    skills: ['Python', 'Node.js', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'QA & Tools',
    color: 'from-emerald-500 to-teal-600',
    skills: ['Selenium', 'Manual Testing', 'Git'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-card rounded-2xl p-8">
          <h2 className="section-title">Skills</h2>
          <div className="space-y-6">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest transition-colors">
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 transition-colors">
            <div className="flex items-center gap-3 text-slate-400 dark:text-slate-600 text-xs font-mono transition-colors">
              <Layers size={14} className="text-cyan-500/50 dark:text-cyan-400/50" />
              <span>Always learning · Always building</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
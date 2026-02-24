import React from 'react'
import { 
  Layers, 
  Code2, 
  Globe, 
  Cpu, 
  Database, 
  Terminal, 
  ShieldCheck, 
  GitBranch, 
  Layout 
} from 'lucide-react'

const skillCategories = [
  {
    label: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React.js', icon: <Cpu size={18} /> },
      { name: 'Next.js', icon: <Globe size={18} /> },
      { name: 'JavaScript', icon: <Code2 size={18} /> },
      { name: 'TailwindCSS', icon: <Layout size={18} /> },
      { name: 'HTML/CSS', icon: <Terminal size={18} /> },
    ],
  },
  {
    label: 'Backend & Data',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Python', icon: <Code2 size={18} /> },
      { name: 'Node.js', icon: <Cpu size={18} /> },
      { name: 'PostgreSQL', icon: <Database size={18} /> },
      { name: 'MongoDB', icon: <Database size={18} /> },
    ],
  },
  {
    label: 'QA & Tools',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Selenium', icon: <ShieldCheck size={18} /> },
      { name: 'Manual Testing', icon: <Layers size={18} /> },
      { name: 'Git', icon: <GitBranch size={18} /> },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-card rounded-2xl p-8 border border-white/10 shadow-xl backdrop-blur-md">
          <h2 className="section-title text-2xl font-bold mb-8">Skills</h2>
          
          <div className="space-y-8">
            {skillCategories.map((cat) => (
              <div key={cat.label}>
                {/* Judul Kategori */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.color}`} />
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-mono uppercase tracking-widest">
                    {cat.label}
                  </span>
                </div>

                {/* Daftar Ikon Skill */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-sm"
                    >
                      <span className="text-cyan-500 dark:text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity">
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Card */}
          <div className="mt-10 pt-6 border-t border-black/5 dark:border-white/5">
            <div className="flex items-center gap-3 text-slate-400 dark:text-slate-600 text-xs font-mono">
              <Layers size={14} className="text-cyan-500/50" />
              <span>Always learning · Always building</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
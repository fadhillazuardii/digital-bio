import React from 'react'
import { ExternalLink, Github, Clock, CheckCircle, Hourglass } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'Digital Bio',
    description: 'Personal portfolio & digital biography built with React, Vite, dan TailwindCSS featuring dark glassmorphism aesthetic.',
    status: 'Live',
    tech: ['React', 'Vite', 'TailwindCSS'],
    color: 'from-cyan-500 to-blue-600',
    letter: 'DB',
    links: { demo: '#', code: '#' },
  },
  {
    id: 2,
    name: 'Coffee Shop E-Commerce',
    description: 'Interactive E-Commerce UI with React.js, featuring dynamic product filtering, shopping cart management, and seamless navigation.',
    status: 'In Progress',
    tech: ['React.js', 'Vite', 'TailwindCSS'],
    color: 'from-amber-500 to-orange-600',
    letter: 'CS',
    links: { code: '#' },
  },
  {
    id: 3,
    name: 'Wedding Invitation',
    description: 'Full-stack digital invitation featuring a real-time RSVP system integrated with PostgreSQL database and custom animations.',
    status: 'Coming Soon',
    tech: ['React', 'Supabase', 'PostgreSQL', 'Framer Motion'],
    color: 'from-pink-500 to-rose-600',
    letter: 'WI',
    links: {},
  },
]

const statusConfig = {
  Live: { icon: <CheckCircle size={12} />, classes: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30' },
  'In Progress': { icon: <Clock size={12} />, classes: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30' },
  'Coming Soon': { icon: <Hourglass size={12} />, classes: 'bg-slate-500/10 text-slate-500 dark:text-slate-400 border-slate-400/20' },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-card rounded-2xl p-8">
          <h2 className="section-title">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {projects.map((project) => {
              const status = statusConfig[project.status]
              return (
                <div key={project.id} className="project-card group">
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-lg`}>
                      {project.letter}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-slate-800 dark:text-white font-semibold text-sm leading-tight mb-1 truncate transition-colors">
                        {project.name}
                      </h3>
                      <span className={`inline-flex items-center gap-1 border rounded-full px-2 py-0.5 text-xs font-mono ${status.classes}`}>
                        {status.icon}{project.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 dark:text-slate-500 text-xs leading-relaxed mb-4 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.links.demo && (
                      <a href={project.links.demo} className="flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 hover:bg-cyan-400/10 rounded-lg px-3 py-1.5 transition-all duration-200">
                        <ExternalLink size={11} />Demo
                      </a>
                    )}
                    {project.links.code && (
                      <a href={project.links.code} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-800 dark:hover:text-white rounded-lg px-3 py-1.5 transition-all duration-200">
                        <Github size={11} />Code
                      </a>
                    )}
                    {!project.links.demo && !project.links.code && (
                      <span className="text-xs text-slate-400 font-mono italic">Coming soon...</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
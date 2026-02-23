import React from 'react'
import { Github, Linkedin, Mail, Download, Code2, MapPin } from 'lucide-react'
import profilePhoto from '../assets/foto-profil.jpg'

const roles = [
  { icon: '📡', label: 'Telecommunication Engineer' },
  { icon: '⚛️', label: 'Frontend Developer Enthusiast' },
  { icon: '🔍', label: 'QA Specialist' },
]

const buttons = [
  { label: 'Explore My Code', icon: <Code2 size={15} />, href: '#projects' },
  { label: "Let's Connect", icon: <Mail size={15} />, href: '#contact' },
  { label: 'Professional Network', icon: <Linkedin size={15} />, href: 'https://linkedin.com/in/fadhillazuardii', external: true },
  { label: 'Download Full CV', icon: <Download size={15} />, href: '/CV_Fadhila Lazuardi_.pdf', download: true },
]

export default function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-16 relative">
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(34,211,238,1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="glass-card rounded-3xl p-8 md:p-12 neon-glow relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-cyan-400/5 blur-xl" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Photo */}
            <div className="flex-shrink-0 animate-float">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-600 opacity-60 blur-sm animate-pulse-glow" />
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-cyan-400/60">
                  <img
                    src={profilePhoto}
                    alt="Fadhila Lazuardi"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(6,182,212,0.1))'
                      const initials = document.createElement('div')
                      initials.className = 'w-full h-full flex items-center justify-center text-cyan-400 text-5xl font-bold'
                      initials.textContent = 'FL'
                      e.target.parentElement.appendChild(initials)
                    }}
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white dark:border-slate-900">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-75" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-3 py-1 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-4">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white leading-tight mb-2 transition-colors">
                Fadhila Lazuardi
                <span className="text-cyan-500 dark:text-cyan-400 neon-text">,</span>{' '}
                <span className="text-slate-600 dark:text-slate-300 text-2xl md:text-3xl font-semibold transition-colors">S.T.</span>
              </h1>

              <div className="flex flex-col md:flex-row flex-wrap gap-2 mb-4 justify-center md:justify-start">
                {roles.map((role) => (
                  <span key={role.label} className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5 transition-colors">
                    <span>{role.icon}</span>{role.label}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm mb-6 justify-center md:justify-start transition-colors">
                <MapPin size={14} className="text-cyan-500/70 dark:text-cyan-400/70" />
                <span>Bekasi, Indonesia</span>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {buttons.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    {...(btn.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    {...(btn.download ? { download: true } : {})}
                    className="btn-cyan"
                  >
                    {btn.icon}{btn.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
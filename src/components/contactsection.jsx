import React from 'react'
import { Mail, Github, Linkedin, Instagram, Send, Heart } from 'lucide-react'

const socials = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'fadhilalazuardi27@gmail.com',
    href: 'mailto:fadhilalazuardi27@gmail.com',
    color: 'hover:text-red-500 hover:border-red-400/40',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/fadhillazuardii',
    href: 'https://github.com/fadhillazuardii',
    color: 'hover:text-slate-800 dark:hover:text-white hover:border-slate-400/40',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/fadhillazuardii',
    href: 'https://linkedin.com/in/fadhillazuardii',
    color: 'hover:text-blue-600 hover:border-blue-400/40',
  },
  {
    icon: <Instagram size={18} />,
    label: 'Instagram',
    value: '@fadhillazuardii',
    href: 'https://instagram.com/fadhillazuardii',
    color: 'hover:text-pink-500 hover:border-pink-400/40',
  },
]

export default function ContactSection() {
  return (
    <>
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="section-title">Contact</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 transition-colors">
                  Interested in collaborating or just wanting to chat about technology?
                  Feel free to contact me through one of the platforms below.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-3 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-500 dark:text-slate-400 transition-all duration-300 group ${social.color}`}
                    >
                      <span className="transition-colors duration-300">{social.icon}</span>
                      <div>
                        <div className="text-xs font-mono text-slate-400 dark:text-slate-600 group-hover:text-current transition-colors">
                          {social.label}
                        </div>
                        <div className="text-xs font-medium">{social.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex-shrink-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mx-auto mb-3 animate-pulse-glow">
                    <Send size={28} className="text-cyan-500 dark:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-slate-400 dark:text-slate-600 text-xs font-mono transition-colors">Let's talk!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-200 dark:border-white/5 transition-colors">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-slate-400 dark:text-slate-600 text-xs font-mono flex items-center justify-center gap-1.5 flex-wrap transition-colors">
            © 2026 Fadhila Lazuardi. Built with
            <span className="text-cyan-500/70 dark:text-cyan-400/70">React & Tailwind</span>
            <span>·</span>
            Made with <Heart size={11} className="text-red-400/70 inline" /> in Bekasi
          </p>
        </div>
      </footer>
    </>
  )
}
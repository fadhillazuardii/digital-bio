import React from 'react'
import Navbar from './components/navbar'
import HeroSection from './components/herosection'
import AboutSection from './components/aboutsection'
import SkillsSection from './components/skillssection'
import ProjectsSection from './components/projectsection'
import ContactSection from './components/contactsection'

function BackgroundEffects() {
  return (
    <>
      <div
        className="orb w-[500px] h-[500px] top-[-100px] left-[-150px] opacity-[0.04] dark:opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
      />
      <div
        className="orb w-[600px] h-[600px] top-[40%] right-[-200px] opacity-[0.03] dark:opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #0891b2 0%, transparent 70%)' }}
      />
      <div
        className="orb w-[400px] h-[400px] bottom-[-100px] left-[30%] opacity-[0.03] dark:opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #22d3ee 0%, transparent 70%)' }}
      />
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
        }}
      />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-black z-0 transition-all duration-500" />
      <BackgroundEffects />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}
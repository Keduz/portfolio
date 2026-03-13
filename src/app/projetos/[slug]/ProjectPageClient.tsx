'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Project } from '@/data/projects'
import ProjectHero from '@/components/projects/ProjectHero'
import ProjectOverview from '@/components/projects/ProjectOverview'
import TechStackSection from '@/components/projects/TechStackSection'
import ArchitectureFlow from '@/components/projects/ArchitectureFlow'
import ResultsSection from '@/components/projects/ResultsSection'
import InteractiveVisual from '@/components/projects/InteractiveVisual'
import CaseCTA from '@/components/projects/CaseCTA'

function LiveSiteView({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur-xl border-b border-white/[0.08] py-3 px-5 md:px-10"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-txt-secondary hover:text-txt-primary transition-colors text-sm shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">Voltar ao Portfolio</span>
          </Link>

          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="font-mono text-sm text-txt-primary truncate">
              {project.shortTitle}
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1 rounded-full border border-white/[0.1] text-txt-muted shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
              Ao Vivo
            </span>
          </div>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-lg transition-all duration-300 shrink-0"
            style={{
              backgroundColor: `${project.accentColor}15`,
              color: project.accentColor,
              border: `1px solid ${project.accentColor}30`,
            }}
          >
            <span className="hidden sm:inline">Abrir Site</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Iframe */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex-1 pt-[52px]"
      >
        <iframe
          src={project.liveUrl}
          title={project.title}
          className="w-full border-0"
          style={{ height: 'calc(100vh - 52px)' }}
          loading="lazy"
        />
      </motion.div>
    </div>
  )
}

export default function ProjectPageClient({ project }: { project: Project }) {
  if (project.liveUrl) {
    return <LiveSiteView project={project} />
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/85 backdrop-blur-xl border-b border-white/[0.06] py-3"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-txt-secondary hover:text-txt-primary transition-colors text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Voltar ao Portfolio
          </Link>
          <Link href="/" className="font-mono text-xl font-bold">
            <span className="gradient-text">&lt;K/&gt;</span>
          </Link>
          <Link
            href="/#contato"
            className="hidden md:inline-flex btn-primary btn-sm text-sm"
          >
            Fale Comigo
          </Link>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <ProjectHero
          title={project.title}
          subtitle={project.subtitle}
          categoryLabel={project.categoryLabel}
          status={project.status}
          statusType={project.statusType}
          accentColor={project.accentColor}
          accentColorRGB={project.accentColorRGB}
          techs={project.techs}
          heroVisualType={project.heroVisualType}
        />

        <ProjectOverview
          problem={project.problem}
          context={project.context}
          solution={project.solution}
          objective={project.objective}
          accentColor={project.accentColor}
        />

        <TechStackSection
          techs={project.techs}
          accentColor={project.accentColor}
        />

        <ArchitectureFlow
          steps={project.flowSteps}
          accentColor={project.accentColor}
          accentColorRGB={project.accentColorRGB}
        />

        <ResultsSection
          metrics={project.metrics}
          accentColor={project.accentColor}
          accentColorRGB={project.accentColorRGB}
        />

        <InteractiveVisual
          heroVisualType={project.heroVisualType}
          accentColor={project.accentColor}
          accentColorRGB={project.accentColorRGB}
        />

        <CaseCTA accentColor={project.accentColor} />
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link href="/" className="font-mono text-lg font-bold">
            <span className="gradient-text">&lt;K/&gt;</span>
          </Link>
          <p className="text-xs text-txt-muted">
            &copy; 2026 Kadu. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

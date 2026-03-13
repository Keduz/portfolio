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

export default function ProjectPageClient({ project }: { project: Project }) {
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

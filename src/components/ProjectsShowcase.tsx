'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './projects/ProjectCard'

const categories = [
  { key: 'all', label: 'Todos' },
  { key: 'automacao', label: 'Automacao' },
  { key: 'ia', label: 'Inteligencia Artificial' },
  { key: 'scraping', label: 'Web Scraping' },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function ProjectsShowcase() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projetos" className="py-24 md:py-36 relative">
      <div className="section-divider mb-24 md:mb-36" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-purple/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="inline-block font-mono text-xs font-medium tracking-[0.15em] uppercase text-accent-purple mb-4"
          >
            PROJETOS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2] mb-5"
          >
            Cases que geram{' '}
            <span className="gradient-text">resultados reais</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-txt-secondary max-w-[600px] mx-auto text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed"
          >
            Cada projeto e um estudo de caso completo, desenvolvido com foco em performance,
            escalabilidade e impacto direto no negocio do cliente.
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="flex justify-center gap-2 mb-14 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`relative inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium rounded-full border transition-all duration-500 overflow-hidden ${
                activeCategory === cat.key
                  ? 'text-white border-transparent shadow-lg shadow-accent-purple/30'
                  : 'text-txt-secondary border-white/[0.06] bg-white/[0.03] hover:border-accent-purple hover:text-txt-primary hover:bg-accent-purple/[0.08]'
              }`}
            >
              {activeCategory === cat.key && (
                <motion.div
                  layoutId="active-project-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4AA)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-[900px] mx-auto"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          className="text-center mt-14"
        >
          <p className="text-sm text-txt-muted">
            Clique em qualquer projeto para ver o case completo com detalhes, stack e resultados.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

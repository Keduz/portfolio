'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

interface ProjectOverviewProps {
  problem: string
  context: string
  solution: string
  objective: string
  accentColor: string
}

const cards = [
  {
    key: 'problem',
    title: 'Problema',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    key: 'context',
    title: 'Contexto',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    key: 'solution',
    title: 'Solucao',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    key: 'objective',
    title: 'Objetivo',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
] as const

export default function ProjectOverview({
  problem,
  context,
  solution,
  objective,
  accentColor,
}: ProjectOverviewProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const textMap: Record<string, string> = {
    problem,
    context,
    solution,
    objective,
  }

  return (
    <section className="py-24 md:py-36 relative">
      <div className="section-divider mb-24 md:mb-36" />
      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="inline-block font-mono text-xs font-medium tracking-[0.15em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            VISAO GERAL
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2]"
          >
            Entendendo o <span className="gradient-text">desafio</span>
          </motion.h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease }}
              className="group glass rounded-2xl p-7 md:p-8 relative overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12]"
              style={{ borderLeft: `3px solid ${accentColor}` }}
            >
              {/* Subtle gradient glow in corner */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700 blur-3xl"
                style={{ background: accentColor }}
              />

              {/* Icon */}
              <div
                className="mb-5 transition-colors duration-300"
                style={{ color: accentColor }}
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-semibold text-txt-primary mb-3 group-hover:text-white transition-colors duration-300">
                {card.title}
              </h3>

              {/* Text */}
              <p className="text-sm text-txt-secondary leading-relaxed">
                {textMap[card.key]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

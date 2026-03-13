'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

interface Metric {
  value: string
  label: string
}

interface ResultsSectionProps {
  metrics: Metric[]
  accentColor: string
  accentColorRGB: string
}

export default function ResultsSection({ metrics, accentColor, accentColorRGB }: ResultsSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(${accentColorRGB}, 0.06) 0%, transparent 70%)`,
        }}
      />

      <div className="section-divider mb-24 md:mb-36" />

      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="inline-block font-mono text-xs font-medium tracking-[0.15em] uppercase text-accent-purple mb-4"
          >
            RESULTADOS & IMPACTO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2]"
          >
            Numeros que falam{' '}
            <span className="gradient-text">por si</span>
          </motion.h2>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease }}
              className="group glass rounded-2xl p-6 md:p-8 text-center relative overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12]"
            >
              {/* Top glow border */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                  opacity: 0.6,
                }}
              />

              {/* Subtle corner glow */}
              <div
                className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-24 rounded-full blur-2xl pointer-events-none"
                style={{ background: accentColor, opacity: 0.08 }}
              />

              {/* Value */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.12, ease }}
                className="block font-heading text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-none mb-3"
                style={{
                  background: `linear-gradient(135deg, ${accentColor}, #6C63FF)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {metric.value}
              </motion.span>

              {/* Label */}
              <span className="block text-sm text-txt-secondary leading-snug font-body">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

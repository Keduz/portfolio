'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const ease = [0.16, 1, 0.3, 1] as const

interface CaseCTAProps {
  accentColor: string
}

export default function CaseCTA({ accentColor }: CaseCTAProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-36 relative">
      <div className="section-divider mb-24 md:mb-36" />

      <div ref={ref} className="max-w-[800px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          {/* Gradient background accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 100% 80% at 50% 100%, ${accentColor}12 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 0%, #6C63FF0A 0%, transparent 50%)`,
            }}
          />

          {/* Top glow line */}
          <div
            className="absolute top-0 left-1/4 right-1/4 h-[1px]"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}66, transparent)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="font-heading text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold text-txt-primary leading-[1.2] mb-5"
            >
              Tem um projeto{' '}
              <span className="gradient-text">semelhante?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="text-txt-secondary text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed max-w-[520px] mx-auto mb-10"
            >
              Vamos conversar sobre como posso transformar seus processos com
              solucoes inteligentes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/#contato" className="btn-primary group/btn inline-flex">
                <span>Entrar em Contato</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>

              <Link href="/#projetos" className="btn-ghost inline-flex">
                <span>Ver Mais Projetos</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

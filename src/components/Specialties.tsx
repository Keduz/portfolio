'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import TiltCard from './TiltCard'

const specialties = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="12" r="4" />
        <circle cx="12" cy="28" r="4" />
        <circle cx="36" cy="28" r="4" />
        <circle cx="24" cy="36" r="3" />
        <line x1="24" y1="16" x2="14" y2="25" />
        <line x1="24" y1="16" x2="34" y2="25" />
        <line x1="14" y1="31" x2="22" y2="34" />
        <line x1="34" y1="31" x2="26" y2="34" />
        <line x1="24" y1="16" x2="24" y2="33" />
      </svg>
    ),
    title: 'Inteligencia Artificial',
    desc: 'Desenvolvimento de solucoes com LLMs, chatbots inteligentes, processamento de linguagem natural e sistemas de recomendacao.',
    tags: ['GPT-4', 'LangChain', 'RAG', 'Fine-tuning'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6v6" />
        <path d="M24 36v6" />
        <path d="M6 24h6" />
        <path d="M36 24h6" />
        <circle cx="24" cy="24" r="10" />
        <circle cx="24" cy="24" r="4" />
        <path d="M10.3 10.3l4.2 4.2" />
        <path d="M33.5 33.5l4.2 4.2" />
        <path d="M33.5 14.5l4.2-4.2" />
        <path d="M10.3 37.7l4.2-4.2" />
      </svg>
    ),
    title: 'Automacao de Processos',
    desc: 'Automacao de workflows complexos, integracoes entre sistemas e eliminacao de tarefas repetitivas que consomem tempo e recursos.',
    tags: ['n8n', 'Make', 'APIs', 'Webhooks'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 14 8 24 16 34" />
        <polyline points="32 14 40 24 32 34" />
        <line x1="28" y1="10" x2="20" y2="38" />
      </svg>
    ),
    title: 'Desenvolvimento Python',
    desc: 'Aplicacoes robustas, APIs escalaveis, scraping de dados e scripts de alta performance para resolver qualquer desafio tecnico.',
    tags: ['FastAPI', 'Django', 'Selenium', 'Pandas'],
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Specialties() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="especialidades" className="py-24 md:py-36 relative">
      <div className="section-divider mb-24 md:mb-36" />
      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="inline-block font-mono text-xs font-medium tracking-[0.15em] uppercase text-accent-purple mb-4"
          >
            ESPECIALIDADES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2] mb-5"
          >
            Tecnologias e areas de <span className="gradient-text">expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-txt-secondary max-w-[600px] mx-auto text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed"
          >
            Dominio profundo nas tecnologias mais avancadas do mercado para criar
            solucoes que realmente fazem a diferenca.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-[500px] md:max-w-none mx-auto">
          {specialties.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease }}
            >
            <TiltCard className="group relative glass rounded-2xl p-10 overflow-hidden cursor-default hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-2xl hover:shadow-accent-purple/[0.08]">
              {/* Top gradient line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-purple to-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glow */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-accent-purple/[0.08] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-6 text-accent-purple bg-accent-purple/[0.08] rounded-xl p-3">
                {spec.icon}
              </div>

              <h3 className="font-heading text-xl font-semibold text-txt-primary mb-3">
                {spec.title}
              </h3>

              <p className="text-[0.95rem] text-txt-secondary leading-relaxed mb-5">
                {spec.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {spec.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[0.7rem] px-3 py-1 bg-accent-purple/[0.08] text-accent-purple rounded-full tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

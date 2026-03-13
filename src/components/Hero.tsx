'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('./three/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg-primary" />,
})

const ease = [0.16, 1, 0.3, 1]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.5 + i * 0.15, duration: 1, ease },
  }),
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-[15%] -left-[10%] w-[600px] h-[600px] bg-accent-purple/[0.08] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-[15%] -right-[10%] w-[500px] h-[500px] bg-accent-teal/[0.06] rounded-full blur-[150px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-5 md:px-10">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 font-mono text-sm text-accent-purple px-5 py-2.5 border border-accent-purple/30 rounded-full bg-accent-purple/[0.05] mb-8"
        >
          <span className="text-accent-teal">//</span>
          Desenvolvedor IA & Automacao
          <span className="animate-cursor-blink text-accent-teal">|</span>
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold text-txt-primary leading-[1.08] tracking-[-0.03em] mb-7"
        >
          Transformo ideias em{' '}
          <span className="gradient-text-animated">solucoes inteligentes</span>
          <br className="hidden sm:block" />
          {' '}com IA e automacao
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg md:text-xl text-txt-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Especialista em Python, inteligencia artificial e automacao de processos.
          Ajudo empresas a economizar tempo, reduzir custos e escalar operacoes com tecnologia de ponta.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a href="#projetos" className="btn-primary group">
            <span>Ver Projetos</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#contato" className="btn-ghost">
            <span>Fale Comigo</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator - hidden on mobile/tablet */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 animate-float"
      >
        <div className="w-6 h-10 border-2 border-white/[0.12] rounded-xl relative">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[3px] h-2 bg-accent-purple rounded-full absolute top-1.5 left-1/2 -translate-x-1/2"
          />
        </div>
        <span className="font-mono text-[0.65rem] tracking-widest uppercase text-txt-muted">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}

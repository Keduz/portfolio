'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect } from 'react'

const steps = [
  {
    num: 1,
    title: 'Contato Inicial',
    desc: 'Voce entra em contato e me conta sobre seu desafio ou ideia. Entendo suas necessidades e objetivos.',
    icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
  },
  {
    num: 2,
    title: 'Analise e Proposta',
    desc: 'Analiso suas necessidades e apresento uma proposta personalizada com prazo, escopo e investimento definidos.',
    icon: 'M11 11a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3',
  },
  {
    num: 3,
    title: 'Desenvolvimento',
    desc: 'Desenvolvo a solucao com entregas parciais para voce acompanhar a evolucao do projeto em tempo real.',
    icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  },
  {
    num: 4,
    title: 'Entrega e Suporte',
    desc: 'Entrego o projeto finalizado com documentacao completa e suporte pos-lancamento para garantir o sucesso.',
    icon: 'M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4l-10 10.01L9 11.01',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const lineRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // GSAP scroll-driven timeline fill
  useEffect(() => {
    if (typeof window === 'undefined') return

    let gsapModule: typeof import('gsap') | null = null

    const initGSAP = async () => {
      try {
        const gsapImport = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        gsapModule = gsapImport

        gsapImport.default.registerPlugin(ScrollTrigger)

        if (lineRef.current && sectionRef.current) {
          const isDesktop = window.innerWidth > 1024

          gsapImport.default.to(lineRef.current, {
            [isDesktop ? 'width' : 'height']: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              end: 'bottom 40%',
              scrub: 1,
            },
          })
        }
      } catch {
        // GSAP not available, graceful fallback
      }
    }

    initGSAP()
  }, [])

  return (
    <section id="como-funciona" className="py-24 md:py-36 relative" ref={sectionRef}>
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
            COMO FUNCIONA
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2] mb-5"
          >
            Do primeiro contato a{' '}
            <span className="gradient-text">entrega final</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-txt-secondary max-w-[600px] mx-auto text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed"
          >
            Um processo transparente e colaborativo para garantir que cada projeto
            seja entregue com excelencia.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-6 lg:pt-16 pl-10 lg:pl-0">
          {/* Progress Line */}
          <div className="absolute lg:top-7 lg:left-[12.5%] lg:right-[12.5%] lg:h-[3px] top-0 bottom-0 left-4 w-[3px] lg:w-auto bg-bg-tertiary rounded-full overflow-hidden">
            <div
              ref={lineRef}
              className="bg-gradient-to-r from-accent-purple to-accent-teal rounded-full lg:h-full lg:w-0 w-full h-0"
            />
          </div>

          {/* Steps */}
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease }}
              className="flex lg:flex-col items-start lg:items-center gap-6 py-6 lg:py-0 relative"
            >
              {/* Circle */}
              <div className="w-14 h-14 rounded-full bg-bg-secondary border-2 border-white/[0.06] flex items-center justify-center flex-shrink-0 relative z-[2] transition-all duration-500 hover:border-accent-purple hover:bg-accent-purple/[0.15] hover:shadow-lg hover:shadow-accent-purple/20">
                <span className="font-heading text-lg font-bold text-txt-muted">
                  {step.num}
                </span>
              </div>

              {/* Content Card */}
              <div className="glass rounded-xl p-6 lg:text-center flex-1">
                <div className="flex lg:justify-center mb-4 text-accent-purple">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={step.icon} />
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-txt-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-txt-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

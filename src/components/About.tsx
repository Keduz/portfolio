'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

type TechItem = {
  name: string
  icon?: string
  svg?: React.ReactNode
}

const techs: TechItem[] = [
  { name: 'Python', icon: 'devicon-python-plain' },
  {
    name: 'LangChain',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm0 2.16l5.9 3.32v6.65L12 17.84l-5.9-3.71V7.48L12 4.16zM12 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-3.5 3.5a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2zM12 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0011.705.001a6.047 6.047 0 00-5.764 4.166 5.986 5.986 0 00-3.997 2.9 6.049 6.049 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08L8.704 5.46a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  { name: 'FastAPI', icon: 'devicon-fastapi-plain' },
  {
    name: 'n8n',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V8h2v4zm4 4h-2v-2h2v2zm0-4h-2V8h2v4z" />
        <circle cx="7" cy="12" r="1.5" />
        <circle cx="17" cy="12" r="1.5" />
        <path d="M8.5 12h2M13.5 12h2" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  { name: 'Selenium', icon: 'devicon-selenium-original' },
  { name: 'Pandas', icon: 'devicon-pandas-plain' },
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
  { name: 'React', icon: 'devicon-react-original' },
]

const stats = [
  { number: '50+', label: 'Projetos Entregues' },
  { number: '100%', label: 'Clientes Satisfeitos' },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="sobre" className="py-24 md:py-36 relative">
      <div className="section-divider mb-24 md:mb-36" />
      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="inline-block font-mono text-xs font-medium tracking-[0.15em] uppercase text-accent-purple mb-4"
            >
              SOBRE MIM
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2] mb-6"
            >
              Desenvolvedor especializado em{' '}
              <span className="gradient-text">IA, automacao</span> e solucoes
              inteligentes
            </motion.h2>

            {[
              'Com experiencia solida em desenvolvimento de software, encontrei minha paixao na intersecao entre inteligencia artificial e automacao de processos. Cada projeto e uma oportunidade de transformar desafios complexos em solucoes elegantes e eficientes.',
              'Minha missao e ajudar empresas e empreendedores a aproveitar o poder da IA para resolver problemas reais — automatizar tarefas repetitivas, extrair insights de dados e criar sistemas que trabalham 24/7.',
              'Acredito que tecnologia deve ser acessivel e pratica. Por isso, foco em entregar solucoes que funcionam, com documentacao clara e suporte dedicado.',
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease }}
                className="text-txt-secondary leading-[1.8] mb-4 last:mb-0"
              >
                {text}
              </motion.p>
            ))}

            {/* Tech Logos Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="flex flex-wrap gap-5 mt-10"
            >
              {techs.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.05, ease }}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:border-accent-purple/40 group-hover:bg-accent-purple/[0.08] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent-purple/10 text-txt-secondary group-hover:text-accent-purple">
                    {tech.icon ? (
                      <i className={`${tech.icon} text-[1.6rem] transition-colors duration-300 text-inherit`} />
                    ) : (
                      <span className="transition-colors duration-300 text-inherit">{tech.svg}</span>
                    )}
                  </div>
                  <span className="text-[0.65rem] font-mono text-txt-muted group-hover:text-txt-secondary transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="relative flex justify-center order-first lg:order-last"
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              {/* Gradient border */}
              <div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-br from-accent-purple to-accent-teal opacity-40 animate-glow" />

              {/* Image frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-bg-secondary flex items-center justify-center z-[1]">
                <svg viewBox="0 0 200 200" className="w-40 h-40 animate-float">
                  <defs>
                    <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6C63FF" />
                      <stop offset="100%" stopColor="#00D4AA" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="60" r="8" fill="#6C63FF" opacity="0.8" />
                  <circle cx="60" cy="100" r="6" fill="#00D4AA" opacity="0.7" />
                  <circle cx="140" cy="100" r="6" fill="#00D4AA" opacity="0.7" />
                  <circle cx="80" cy="140" r="5" fill="#6C63FF" opacity="0.6" />
                  <circle cx="120" cy="140" r="5" fill="#6C63FF" opacity="0.6" />
                  <circle cx="100" cy="100" r="10" fill="url(#nodeGrad)" opacity="0.9" />
                  <line x1="100" y1="60" x2="60" y2="100" stroke="#6C63FF" strokeWidth="1" opacity="0.3" />
                  <line x1="100" y1="60" x2="140" y2="100" stroke="#6C63FF" strokeWidth="1" opacity="0.3" />
                  <line x1="100" y1="60" x2="100" y2="100" stroke="#00D4AA" strokeWidth="1.5" opacity="0.4" />
                  <line x1="60" y1="100" x2="100" y2="100" stroke="#00D4AA" strokeWidth="1" opacity="0.3" />
                  <line x1="140" y1="100" x2="100" y2="100" stroke="#00D4AA" strokeWidth="1" opacity="0.3" />
                  <line x1="60" y1="100" x2="80" y2="140" stroke="#6C63FF" strokeWidth="1" opacity="0.3" />
                  <line x1="140" y1="100" x2="120" y2="140" stroke="#6C63FF" strokeWidth="1" opacity="0.3" />
                  <line x1="100" y1="100" x2="80" y2="140" stroke="#00D4AA" strokeWidth="1" opacity="0.3" />
                  <line x1="100" y1="100" x2="120" y2="140" stroke="#00D4AA" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
            </div>

            {/* Floating Stats */}
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.15, ease }}
                className={`absolute glass rounded-xl px-4 py-3 md:px-5 md:py-4 flex flex-col items-center gap-1 z-10 ${
                  i === 0
                    ? 'top-[-10px] right-0 md:right-[-30px]'
                    : 'bottom-[-10px] left-0 md:left-[-30px]'
                }`}
              >
                <span className="font-heading text-2xl font-bold gradient-text">
                  {stat.number}
                </span>
                <span className="text-xs text-txt-muted whitespace-nowrap">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

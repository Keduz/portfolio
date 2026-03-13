'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Chatbots e Assistentes IA',
    desc: 'Chatbots personalizados para atendimento, vendas e suporte, integrados ao WhatsApp, Telegram e websites. Respostas inteligentes 24 horas por dia.',
    price: 'R$ 2.500',
  },
  {
    num: '02',
    title: 'Automacao de Workflows',
    desc: 'Fluxos automatizados que conectam suas ferramentas e eliminam trabalho manual repetitivo. Integracao com CRMs, ERPs e plataformas de comunicacao.',
    price: 'R$ 1.500',
  },
  {
    num: '03',
    title: 'Web Scraping Profissional',
    desc: 'Extracao inteligente de dados da web com tratamento anti-bloqueio, rotacao de proxies e entrega estruturada. Monitore concorrentes e oportunidades automaticamente.',
    price: 'R$ 2.000',
  },
  {
    num: '04',
    title: 'APIs e Integracoes',
    desc: 'Desenvolvimento de APIs robustas e integracoes entre sistemas para centralizar operacoes. Conecte ferramentas que antes nao se comunicavam.',
    price: 'R$ 3.000',
  },
  {
    num: '05',
    title: 'Consultoria em IA',
    desc: 'Analise do seu negocio e recomendacao de solucoes inteligentes para otimizar processos, reduzir custos e aumentar a eficiencia operacional.',
    price: 'R$ 500/h',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="servicos" className="py-24 md:py-36 relative">
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
            SERVICOS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2] mb-5"
          >
            Solucoes sob medida para{' '}
            <span className="gradient-text">seu negocio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-txt-secondary max-w-[600px] mx-auto text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed"
          >
            Cada empresa tem desafios unicos. Ofereco servicos especializados que
            se adaptam a sua realidade e entregam resultados concretos.
          </motion.p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease }}
              className="group glass rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12]"
            >
              {/* Left accent bar on hover */}
              <div className="relative grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto_auto] items-center gap-5 md:gap-8 p-6 md:p-8 md:px-10">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent-purple to-accent-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number */}
                <span className="font-heading text-3xl md:text-4xl font-bold gradient-text min-w-[60px]">
                  {svc.num}
                </span>

                {/* Info */}
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-txt-primary mb-1.5 group-hover:text-white transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-txt-secondary leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end gap-0.5 md:min-w-[120px]">
                  <span className="text-[0.7rem] text-txt-muted uppercase tracking-wide">
                    A partir de
                  </span>
                  <span className="font-heading text-lg font-semibold text-accent-teal">
                    {svc.price}
                  </span>
                </div>

                {/* Arrow (desktop only) */}
                <div className="hidden md:block text-txt-muted group-hover:text-accent-purple transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg
                    width="24"
                    height="24"
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

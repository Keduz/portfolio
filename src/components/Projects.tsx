'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import TiltCard from './TiltCard'

const tabs = [
  { key: 'automacao', label: 'Automacao', icon: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4' },
  { key: 'ia', label: 'Inteligencia Artificial', icon: 'M12 6a3 3 0 100-6 3 3 0 000 6zM6 16a3 3 0 100-6 3 3 0 000 6zM18 16a3 3 0 100-6 3 3 0 000 6z' },
  { key: 'scraping', label: 'Web Scraping', icon: 'M16 18l6-6-6-6M8 6l-6 6 6 6M14 4l-4 16' },
]

type Project = {
  title: string
  desc: string
  tags: string[]
  status: string
  statusType: 'done' | 'active'
  link: string
  accentColor: string
  pattern: React.ReactNode
}

const projects: Record<string, Project[]> = {
  automacao: [
    {
      title: 'Automacao de Relatorios Financeiros',
      desc: 'Sistema que coleta dados de multiplas fontes, processa com Python e gera dashboards automaticos toda segunda-feira para a diretoria.',
      tags: ['Python', 'Pandas', 'n8n', 'Google Sheets API'],
      status: 'Concluido',
      statusType: 'done',
      link: '#',
      accentColor: '#00D4AA',
      pattern: (
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
          <rect x="80" y="40" width="240" height="120" rx="8" stroke="#00D4AA" strokeWidth="0.5" opacity="0.2" />
          <line x1="80" y1="80" x2="320" y2="80" stroke="#00D4AA" strokeWidth="0.5" opacity="0.2" />
          <line x1="80" y1="120" x2="320" y2="120" stroke="#00D4AA" strokeWidth="0.5" opacity="0.2" />
          <rect x="100" y="50" width="40" height="20" rx="4" fill="#00D4AA" opacity="0.15" />
          <rect x="170" y="90" width="60" height="20" rx="4" fill="#6C63FF" opacity="0.15" />
          <rect x="250" y="130" width="50" height="20" rx="4" fill="#00D4AA" opacity="0.15" />
        </svg>
      ),
    },
    {
      title: 'Automacao de Workflows Empresariais',
      desc: 'Fluxos automatizados conectando CRM, e-mail marketing e ERP. Eliminacao de 80% do trabalho manual em processos de vendas e onboarding.',
      tags: ['n8n', 'Make', 'APIs REST', 'Webhooks'],
      status: 'Em Producao',
      statusType: 'active',
      link: '#',
      accentColor: '#6C63FF',
      pattern: (
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
          <circle cx="100" cy="100" r="30" stroke="#6C63FF" strokeWidth="0.5" opacity="0.3" />
          <circle cx="200" cy="70" r="25" stroke="#6C63FF" strokeWidth="0.5" opacity="0.25" />
          <circle cx="300" cy="110" r="35" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
          <path d="M130 100 L175 70" stroke="#00D4AA" strokeWidth="0.8" opacity="0.3" />
          <path d="M225 70 L265 110" stroke="#00D4AA" strokeWidth="0.8" opacity="0.3" />
          <circle cx="100" cy="100" r="5" fill="#6C63FF" opacity="0.5" />
          <circle cx="200" cy="70" r="5" fill="#00D4AA" opacity="0.5" />
          <circle cx="300" cy="110" r="5" fill="#6C63FF" opacity="0.5" />
        </svg>
      ),
    },
  ],
  ia: [
    {
      title: 'Assistente IA para E-commerce',
      desc: 'Chatbot com RAG que responde duvidas sobre produtos usando base de conhecimento da loja. Reducao de 40% no tempo de atendimento ao cliente.',
      tags: ['Python', 'LangChain', 'FastAPI', 'WhatsApp API'],
      status: 'Em Producao',
      statusType: 'active',
      link: '#',
      accentColor: '#6C63FF',
      pattern: (
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
          <circle cx="200" cy="100" r="60" stroke="#6C63FF" strokeWidth="0.5" opacity="0.3" />
          <circle cx="200" cy="100" r="90" stroke="#6C63FF" strokeWidth="0.5" opacity="0.2" />
          <circle cx="200" cy="100" r="8" fill="#6C63FF" opacity="0.6" />
          <circle cx="160" cy="70" r="4" fill="#00D4AA" opacity="0.5" />
          <circle cx="250" cy="80" r="4" fill="#00D4AA" opacity="0.5" />
          <line x1="200" y1="100" x2="160" y2="70" stroke="#6C63FF" strokeWidth="0.5" opacity="0.3" />
          <line x1="200" y1="100" x2="250" y2="80" stroke="#00D4AA" strokeWidth="0.5" opacity="0.3" />
        </svg>
      ),
    },
    {
      title: 'Pipeline de Processamento de Documentos',
      desc: 'Sistema OCR + IA que extrai dados de contratos e notas fiscais com 95% de precisao, eliminando horas de trabalho manual.',
      tags: ['Python', 'Tesseract', 'OpenAI', 'FastAPI'],
      status: 'Em Producao',
      statusType: 'active',
      link: '#',
      accentColor: '#FFB347',
      pattern: (
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
          <rect x="120" y="50" width="80" height="100" rx="4" stroke="#FFB347" strokeWidth="0.5" opacity="0.3" />
          <rect x="130" y="60" width="60" height="10" rx="2" fill="#FFB347" opacity="0.15" />
          <rect x="130" y="80" width="40" height="6" rx="2" fill="#FFB347" opacity="0.1" />
          <rect x="130" y="95" width="50" height="6" rx="2" fill="#FFB347" opacity="0.1" />
          <path d="M220 100 L260 70 L300 90 L340 60" stroke="#6C63FF" strokeWidth="1" opacity="0.3" fill="none" />
          <circle cx="260" cy="70" r="3" fill="#FFB347" opacity="0.5" />
          <circle cx="340" cy="60" r="3" fill="#6C63FF" opacity="0.5" />
        </svg>
      ),
    },
  ],
  scraping: [
    {
      title: 'Web Scraper Inteligente',
      desc: 'Scraper com IA que monitora concorrentes, extrai precos e gera alertas automaticos de oportunidades de mercado em tempo real.',
      tags: ['Python', 'Selenium', 'BeautifulSoup', 'GPT-4'],
      status: 'Concluido',
      statusType: 'done',
      link: '#',
      accentColor: '#FF6B6B',
      pattern: (
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
          <path d="M50 100 Q125 30 200 100 Q275 170 350 100" stroke="#FF6B6B" strokeWidth="1" opacity="0.3" fill="none" />
          <circle cx="100" cy="80" r="3" fill="#FF6B6B" opacity="0.5" />
          <circle cx="200" cy="100" r="3" fill="#FF6B6B" opacity="0.5" />
          <circle cx="300" cy="80" r="3" fill="#FF6B6B" opacity="0.5" />
        </svg>
      ),
    },
    {
      title: 'Extracao de Dados em Larga Escala',
      desc: 'Sistema de coleta automatizada de dados de mais de 500 fontes, com limpeza, padronizacao e entrega em formato estruturado via API.',
      tags: ['Python', 'Scrapy', 'Pandas', 'PostgreSQL'],
      status: 'Concluido',
      statusType: 'done',
      link: '#',
      accentColor: '#00D4AA',
      pattern: (
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
          <rect x="60" y="60" width="280" height="80" rx="6" stroke="#00D4AA" strokeWidth="0.5" opacity="0.2" />
          <line x1="60" y1="100" x2="340" y2="100" stroke="#00D4AA" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
          <rect x="80" y="70" width="80" height="20" rx="3" fill="#00D4AA" opacity="0.12" />
          <rect x="180" y="70" width="60" height="20" rx="3" fill="#6C63FF" opacity="0.12" />
          <rect x="80" y="110" width="50" height="20" rx="3" fill="#6C63FF" opacity="0.1" />
          <rect x="150" y="110" width="90" height="20" rx="3" fill="#00D4AA" opacity="0.12" />
        </svg>
      ),
    },
  ],
}

const ease = [0.16, 1, 0.3, 1] as const

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState('automacao')

  return (
    <section id="projetos" className="py-24 md:py-36 relative">
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
            PROJETOS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2] mb-5"
          >
            Solucoes que geram{' '}
            <span className="gradient-text">resultados reais</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-txt-secondary max-w-[600px] mx-auto text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed"
          >
            Cada projeto e desenvolvido com foco em performance, escalabilidade e
            impacto direto no negocio do cliente.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="flex justify-center gap-2 mb-12 flex-wrap"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium rounded-full border transition-all duration-500 overflow-hidden ${
                activeTab === tab.key
                  ? 'text-white border-transparent shadow-lg shadow-accent-purple/30'
                  : 'text-txt-secondary border-white/[0.06] bg-white/[0.03] hover:border-accent-purple hover:text-txt-primary hover:bg-accent-purple/[0.08]'
              }`}
            >
              {activeTab === tab.key && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4AA)' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease }}
            className="grid md:grid-cols-2 gap-6 max-w-[600px] md:max-w-none mx-auto"
          >
            {projects[activeTab].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease }}
              >
              <TiltCard className="group glass rounded-2xl overflow-hidden cursor-default hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-2xl hover:shadow-accent-purple/[0.08]">
                {/* Image Area */}
                <div className="relative h-[200px] bg-bg-secondary overflow-hidden flex items-center justify-center">
                  <div className="w-full h-full opacity-80 transition-transform duration-700 group-hover:scale-110">
                    {project.pattern}
                  </div>
                  <span
                    className={`absolute top-4 right-4 font-mono text-[0.7rem] font-medium px-3 py-1 rounded-full ${
                      project.statusType === 'active'
                        ? 'bg-accent-teal/[0.15] text-accent-teal border border-accent-teal/30'
                        : 'bg-accent-purple/[0.15] text-accent-purple border border-accent-purple/30'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Body */}
                <div className="p-7">
                  <h3 className="font-heading text-lg font-semibold text-txt-primary mb-2.5 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-txt-secondary leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.7rem] px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] rounded-full text-txt-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-sm group/btn inline-flex"
                  >
                    <span>Acessar Projeto</span>
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
                  </a>
                </div>
              </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

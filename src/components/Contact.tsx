'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, FormEvent } from 'react'

const contactLinks = [
  {
    label: 'Email',
    value: 'seu@email.com',
    href: 'mailto:seu@email.com',
    icon: 'M2 4h20v16H2zM22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7',
  },
  {
    label: 'WhatsApp',
    value: '+55 (11) 99999-9999',
    href: 'https://wa.me/5511999999999',
    icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/seu-perfil',
    href: 'https://linkedin.com/in/seu-perfil',
    icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 100-4 2 2 0 000 4z',
  },
  {
    label: 'GitHub',
    value: 'github.com/seu-usuario',
    href: 'https://github.com/seu-usuario',
    icon: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    // Simulate sending
    setTimeout(() => {
      setSending(false)
      setSent(true)
      ;(e.target as HTMLFormElement).reset()
      setTimeout(() => setSent(false), 3000)
    }, 1500)
  }

  return (
    <section id="contato" className="py-24 md:py-36 relative">
      <div className="section-divider mb-24 md:mb-36" />
      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="inline-block font-mono text-xs font-medium tracking-[0.15em] uppercase text-accent-purple mb-4"
            >
              CONTATO
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2] mb-6"
            >
              Vamos construir algo{' '}
              <span className="gradient-text">incrivel</span> juntos?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-txt-secondary text-lg leading-[1.8] mb-10"
            >
              Estou disponivel para novos projetos e parcerias. Entre em contato e
              vamos conversar sobre como posso transformar seus processos com
              inteligencia artificial e automacao.
            </motion.p>

            {/* Contact Links */}
            <div className="flex flex-col gap-4">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease }}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] transition-all duration-400 hover:border-accent-purple/40 hover:bg-accent-purple/[0.05] hover:translate-x-2"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-accent-purple/[0.1] rounded-lg text-accent-purple flex-shrink-0">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={link.icon} />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[0.7rem] text-txt-muted uppercase tracking-wide mb-0.5">
                      {link.label}
                    </span>
                    <span className="block text-sm text-txt-primary group-hover:text-white transition-colors">
                      {link.value}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 md:p-10"
              noValidate
            >
              {/* Name */}
              <div className="relative mb-6">
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder=" "
                  className="peer w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-txt-primary text-[0.95rem] outline-none transition-all duration-300 focus:border-accent-purple focus:bg-accent-purple/[0.03] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)]"
                />
                <label className="absolute left-5 top-1/2 -translate-y-1/2 text-txt-muted text-[0.95rem] pointer-events-none transition-all duration-200 peer-focus:top-[-8px] peer-focus:left-4 peer-focus:text-[0.7rem] peer-focus:text-accent-purple peer-focus:bg-bg-primary peer-focus:px-1.5 peer-focus:translate-y-0 peer-focus:uppercase peer-focus:tracking-wide peer-[:not(:placeholder-shown)]:top-[-8px] peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-accent-purple peer-[:not(:placeholder-shown)]:bg-bg-primary peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide">
                  Nome
                </label>
              </div>

              {/* Email */}
              <div className="relative mb-6">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=" "
                  className="peer w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-txt-primary text-[0.95rem] outline-none transition-all duration-300 focus:border-accent-purple focus:bg-accent-purple/[0.03] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)]"
                />
                <label className="absolute left-5 top-1/2 -translate-y-1/2 text-txt-muted text-[0.95rem] pointer-events-none transition-all duration-200 peer-focus:top-[-8px] peer-focus:left-4 peer-focus:text-[0.7rem] peer-focus:text-accent-purple peer-focus:bg-bg-primary peer-focus:px-1.5 peer-focus:translate-y-0 peer-focus:uppercase peer-focus:tracking-wide peer-[:not(:placeholder-shown)]:top-[-8px] peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-accent-purple peer-[:not(:placeholder-shown)]:bg-bg-primary peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide">
                  Email
                </label>
              </div>

              {/* Subject */}
              <div className="relative mb-6">
                <select
                  name="assunto"
                  required
                  defaultValue=""
                  className="form-select w-full px-5 py-4 rounded-xl text-[0.95rem] outline-none transition-all duration-300 cursor-pointer border border-white/[0.06] focus:border-accent-purple focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)]"
                  style={{ backgroundColor: '#0a0a1a', color: '#F5F5F7' }}
                >
                  <option value="" disabled style={{ backgroundColor: '#0a0a1a', color: '#8A8F98' }}>Selecione o assunto</option>
                  <option value="ia" style={{ backgroundColor: '#0a0a1a', color: '#F5F5F7' }}>Projeto de IA</option>
                  <option value="automacao" style={{ backgroundColor: '#0a0a1a', color: '#F5F5F7' }}>Automacao</option>
                  <option value="scraping" style={{ backgroundColor: '#0a0a1a', color: '#F5F5F7' }}>Web Scraping</option>
                  <option value="consultoria" style={{ backgroundColor: '#0a0a1a', color: '#F5F5F7' }}>Consultoria</option>
                  <option value="outro" style={{ backgroundColor: '#0a0a1a', color: '#F5F5F7' }}>Outro</option>
                </select>
                <label className="absolute top-[-8px] left-4 text-[0.7rem] text-accent-purple bg-bg-primary px-1.5 uppercase tracking-wide pointer-events-none">
                  Assunto
                </label>
              </div>

              {/* Message */}
              <div className="relative mb-6">
                <textarea
                  name="mensagem"
                  required
                  placeholder=" "
                  rows={5}
                  className="peer w-full px-5 py-4 bg-white/[0.03] border border-white/[0.06] rounded-xl text-txt-primary text-[0.95rem] outline-none transition-all duration-300 focus:border-accent-purple focus:bg-accent-purple/[0.03] focus:shadow-[0_0_0_3px_rgba(108,99,255,0.1)] resize-y min-h-[120px]"
                />
                <label className="absolute left-5 top-4 text-txt-muted text-[0.95rem] pointer-events-none transition-all duration-200 peer-focus:top-[-8px] peer-focus:left-4 peer-focus:text-[0.7rem] peer-focus:text-accent-purple peer-focus:bg-bg-primary peer-focus:px-1.5 peer-focus:uppercase peer-focus:tracking-wide peer-[:not(:placeholder-shown)]:top-[-8px] peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-accent-purple peer-[:not(:placeholder-shown)]:bg-bg-primary peer-[:not(:placeholder-shown)]:px-1.5 peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wide">
                  Mensagem
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className={`btn-primary w-full justify-center transition-all duration-300 ${
                  sent
                    ? '!bg-none !shadow-none'
                    : ''
                }`}
                style={sent ? { background: 'linear-gradient(135deg, #00D4AA, #00B894)' } : undefined}
              >
                <span>
                  {sending
                    ? 'Enviando...'
                    : sent
                    ? 'Mensagem Enviada!'
                    : 'Enviar Mensagem'}
                </span>
                {!sending && !sent && (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                )}
              </button>

              <p className="text-center text-xs text-txt-muted mt-4">
                Respondo em ate 24 horas.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

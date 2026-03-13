'use client'

import { motion } from 'framer-motion'

const quickLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#especialidades', label: 'Especialidades' },
  { href: '#servicos', label: 'Servicos' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/seu-usuario',
    icon: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/seu-perfil',
    icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 100-4 2 2 0 000 4z',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/5511999999999',
    icon: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-bg-primary pt-16 pb-8">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#inicio" className="inline-block font-mono text-2xl font-bold mb-4">
              <span className="gradient-text">&lt;K/&gt;</span>
            </a>
            <p className="text-sm text-txt-secondary leading-relaxed max-w-[300px]">
              Transformando negocios com inteligencia artificial e automacao.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-txt-primary uppercase tracking-[0.1em] mb-5">
              Links
            </h4>
            <div className="flex flex-col">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-txt-secondary py-1.5 hover:text-txt-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-xs font-semibold text-txt-primary uppercase tracking-[0.1em] mb-5">
              Social
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-lg border border-white/[0.06] text-txt-secondary transition-all duration-300 hover:border-accent-purple hover:text-accent-purple hover:bg-accent-purple/[0.08]"
                >
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
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-white/[0.06] gap-2">
          <p className="text-xs text-txt-muted">
            &copy; 2026 Kadu. Todos os direitos reservados.
          </p>
          <p className="text-xs font-mono text-txt-muted">
            Feito com inteligencia{' '}
            <span className="gradient-text">(artificial e humana)</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

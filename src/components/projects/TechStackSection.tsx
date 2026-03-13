'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

interface Tech {
  name: string
  role: string
  icon?: string
}

interface TechStackSectionProps {
  techs: Tech[]
  accentColor: string
}

export default function TechStackSection({
  techs,
  accentColor,
}: TechStackSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 md:py-36 relative">
      <div className="section-divider mb-24 md:mb-36" />
      <div ref={ref} className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="inline-block font-mono text-xs font-medium tracking-[0.15em] uppercase mb-4"
            style={{ color: accentColor }}
          >
            STACK TECNOLOGICA
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2]"
          >
            Tecnologias <span className="gradient-text">utilizadas</span>
          </motion.h2>
        </div>

        {/* Tech Cards */}
        <div className="flex flex-wrap gap-4 md:gap-5">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease }}
              className="group glass rounded-2xl p-6 md:p-7 flex-1 min-w-[160px] max-w-[280px] relative overflow-hidden cursor-default transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12]"
              style={{
                boxShadow: `0 0 0px transparent`,
              }}
              whileHover={{
                boxShadow: `0 0 30px ${accentColor}15, 0 0 60px ${accentColor}08`,
              }}
            >
              {/* Hover glow orb */}
              <div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 blur-3xl pointer-events-none"
                style={{ background: accentColor }}
              />

              {/* Icon */}
              {tech.icon && (
                <div className="mb-4">
                  {tech.icon.startsWith('devicon-') ? (
                    <i
                      className={`${tech.icon} text-3xl transition-colors duration-300`}
                      style={{ color: accentColor }}
                    />
                  ) : (
                    <span
                      className="text-3xl transition-colors duration-300"
                      style={{ color: accentColor }}
                    >
                      {tech.icon}
                    </span>
                  )}
                </div>
              )}

              {/* Name */}
              <h3 className="font-heading text-base font-bold text-txt-primary mb-1.5 group-hover:text-white transition-colors duration-300">
                {tech.name}
              </h3>

              {/* Role */}
              <p className="text-xs text-txt-secondary leading-relaxed">
                {tech.role}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.16, 1, 0.3, 1] as const

interface Step {
  title: string
  description: string
}

interface ArchitectureFlowProps {
  steps: Step[]
  accentColor: string
  accentColorRGB: string
}

export default function ArchitectureFlow({
  steps,
  accentColor,
  accentColorRGB,
}: ArchitectureFlowProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const formatNumber = (n: number) => String(n + 1).padStart(2, '0')

  return (
    <section className="py-24 md:py-36 relative">
      <div className="section-divider mb-24 md:mb-36" />

      {/* Keyframe for pulse glow */}
      <style jsx>{`
        @keyframes line-pulse {
          0%, 100% {
            opacity: 0.4;
            box-shadow: 0 0 8px rgba(${accentColorRGB}, 0.3);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 20px rgba(${accentColorRGB}, 0.6);
          }
        }
        .flow-line-glow {
          animation: line-pulse 3s ease-in-out infinite;
        }
      `}</style>

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
            FLUXO DA SOLUCAO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold text-txt-primary leading-[1.2]"
          >
            Como tudo se <span className="gradient-text">conecta</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* ---- Desktop: horizontal layout ---- */}
          <div className="hidden lg:grid" style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
            {/* Connecting line (behind everything) */}
            <div
              className="absolute top-[28px] left-[calc(100%/${steps.length}/2)] right-[calc(100%/${steps.length}/2)] h-[2px] z-0"
              style={{
                left: `calc(100% / ${steps.length} / 2)`,
                right: `calc(100% / ${steps.length} / 2)`,
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease }}
                className="h-full origin-left flow-line-glow rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${accentColor}, ${accentColor}80)`,
                }}
              />
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.18, ease }}
                className="flex flex-col items-center relative z-[1]"
              >
                {/* Numbered circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-heading text-sm font-bold text-white mb-6 flex-shrink-0 relative"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)`,
                    boxShadow: `0 0 24px rgba(${accentColorRGB}, 0.3)`,
                  }}
                >
                  {formatNumber(i)}
                  {/* Ring */}
                  <div
                    className="absolute inset-[-3px] rounded-full border-2 opacity-30"
                    style={{ borderColor: accentColor }}
                  />
                </div>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-[24px] -right-3 z-[2]"
                    style={{ color: accentColor }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                {/* Card */}
                <div className="glass rounded-xl p-6 text-center w-full mx-2 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] group">
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                    }}
                  />
                  <h3 className="font-heading text-base font-semibold text-txt-primary mb-2 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs text-txt-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ---- Mobile: vertical layout ---- */}
          <div className="lg:hidden relative pl-10">
            {/* Vertical connecting line */}
            <div className="absolute top-0 bottom-0 left-[27px] w-[2px] z-0">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease }}
                className="h-full origin-top flow-line-glow rounded-full"
                style={{
                  background: `linear-gradient(180deg, ${accentColor}, ${accentColor}80, transparent)`,
                }}
              />
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.18, ease }}
                className="relative flex items-start gap-5 mb-8 last:mb-0"
              >
                {/* Numbered circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-heading text-sm font-bold text-white flex-shrink-0 relative z-[2] -ml-10"
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}, ${accentColor}99)`,
                    boxShadow: `0 0 24px rgba(${accentColorRGB}, 0.3)`,
                  }}
                >
                  {formatNumber(i)}
                  <div
                    className="absolute inset-[-3px] rounded-full border-2 opacity-30"
                    style={{ borderColor: accentColor }}
                  />
                </div>

                {/* Arrow pointing down (between steps, mobile) */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute -bottom-5 left-[21px] z-[3]"
                    style={{ color: accentColor }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                {/* Card */}
                <div className="glass rounded-xl p-5 flex-1 relative overflow-hidden group transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12]">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(180deg, ${accentColor}, transparent)`,
                    }}
                  />
                  <h3 className="font-heading text-base font-semibold text-txt-primary mb-2 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs text-txt-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

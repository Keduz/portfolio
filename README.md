<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=35&duration=3000&pause=1000&color=6C63FF&center=true&vCenter=true&random=false&width=500&lines=%3CKadu+%2F%3E;Full+Stack+Developer;Automation+Engineer;AI+Specialist" alt="Typing SVG" />
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-projetos">Projetos</a> •
  <a href="#-arquitetura">Arquitetura</a> •
  <a href="#-como-rodar">Como Rodar</a> •
  <a href="#-contato">Contato</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
</p>

---

## 🧠 Sobre

Portfolio profissional desenvolvido com foco em **performance**, **design premium** e **experiencia imersiva**. Cada projeto e apresentado como um case study completo, com detalhes tecnicos, metricas de resultado e visualizacoes interativas.

> "Nao e so um portfolio — e uma experiencia."

### Destaques

- **Hero 3D interativo** com React Three Fiber — geometria responsiva ao mouse
- **6 case studies completos** com paginas individuais e navegacao fluida
- **Animacoes cinematicas** com Framer Motion e GSAP ScrollTrigger
- **Design system dark premium** com glassmorphism e gradientes customizados
- **100% responsivo** — mobile-first com breakpoints otimizados
- **Deploy automatico** via GitHub Actions + GitHub Pages

---

## ⚡ Tech Stack

| Camada | Tecnologias |
|---|---|
| **Framework** | Next.js 14 (App Router, Static Export) |
| **UI** | React 18, TypeScript, Tailwind CSS |
| **3D** | Three.js, React Three Fiber, Drei |
| **Animacoes** | Framer Motion, GSAP + ScrollTrigger |
| **Deploy** | GitHub Actions → GitHub Pages |
| **Design** | Custom tokens, glassmorphism, gradientes |

---

## 🚀 Projetos

Cada card na homepage leva a um case study completo com:

| Secao | Descricao |
|---|---|
| **Hero Visual** | Composicao SVG animada unica por projeto |
| **Overview** | Problema, Contexto, Solucao e Objetivo |
| **Tech Stack** | Tecnologias com icones e descricao de papel |
| **Arquitetura** | Fluxo visual do pipeline/sistema |
| **Resultados** | 4 metricas de impacto com efeitos glow |
| **Visual Interativo** | Mockup SVG detalhado do sistema |
| **CTA** | Call-to-action para contato |

### Cases Incluidos

```
📊 Dashboard Analytics IA    → Automacao + IA para analise de dados
🤖 Chatbot Atendimento IA    → NLP com 95% de precisao
🔄 Automacao Fiscal RPA      → RPA para processamento de notas
📄 Gerador Contratos IA      → Templates inteligentes com IA
📡 Monitor Precos Scraping   → Web scraping em tempo real
🔗 Pipeline Dados ETL        → ETL escalavel com orquestracao
```

---

## 🏗 Arquitetura

```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout + fonts
│   ├── globals.css                 # Design tokens + Tailwind
│   └── projetos/
│       └── [slug]/
│           ├── page.tsx            # Server component (SSG)
│           └── ProjectPageClient.tsx # Client component
├── components/
│   ├── Hero.tsx                    # Hero com CTA
│   ├── About.tsx                   # Sobre mim
│   ├── Specialties.tsx             # Especialidades
│   ├── Services.tsx                # Servicos
│   ├── ProjectsShowcase.tsx        # Grid com filtro por categoria
│   ├── Process.tsx                 # Processo de trabalho
│   ├── Contact.tsx                 # Formulario de contato
│   ├── FloatingShapes.tsx          # Background decorativo
│   ├── three/
│   │   └── HeroScene.tsx           # Cena 3D Three.js
│   └── projects/
│       ├── ProjectCard.tsx         # Card premium na homepage
│       ├── ProjectHero.tsx         # Hero da pagina de projeto
│       ├── ProjectHeroVisual.tsx   # 6 composicoes SVG animadas
│       ├── ProjectOverview.tsx     # Grid problema/solucao
│       ├── TechStackSection.tsx    # Cards de tecnologia
│       ├── ArchitectureFlow.tsx    # Timeline de arquitetura
│       ├── ResultsSection.tsx      # Metricas com glow
│       ├── InteractiveVisual.tsx   # Mockup SVG grande
│       └── CaseCTA.tsx             # Call to action
└── data/
    └── projects.ts                 # Dados centralizados dos 6 projetos
```

---

## 💻 Como Rodar

```bash
# Clone o repositorio
git clone https://github.com/Keduz/portfolio-kadu.git

# Instale as dependencias
cd portfolio-kadu
npm install

# Rode em desenvolvimento
npm run dev

# Build para producao
npm run build
```

Acesse `http://localhost:3000` no navegador.

---

## 🎨 Design System

```css
/* Cores principais */
--accent-purple: #6C63FF    /* Primaria */
--accent-green:  #00D4AA    /* Secundaria */
--bg-primary:    #0A0A0F    /* Background */
--bg-card:       #12121A    /* Cards */

/* Gradiente signature */
background: linear-gradient(135deg, #6C63FF, #00D4AA);
```

| Elemento | Estilo |
|---|---|
| Cards | Glassmorphism com `backdrop-blur-xl` |
| Bordas | `border-white/[0.06]` sutil |
| Hover | Glow com `box-shadow` do accent color |
| Texto | Inter (body) + JetBrains Mono (code) |

---

## 📬 Contato

<p align="center">
  <a href="https://github.com/Keduz">
    <img src="https://img.shields.io/badge/GitHub-Keduz-181717?style=for-the-badge&logo=github" />
  </a>
</p>

---

<p align="center">
  <sub>Desenvolvido com 💜 por <strong>Kadu</strong> — 2026</sub>
</p>

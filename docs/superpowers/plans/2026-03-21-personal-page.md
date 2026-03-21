# Personal Page Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build Leonardo Chaves' personal landing page — a dark-themed, editorial-style page with advanced CSS effects, optimized for WhatsApp conversion.

**Architecture:** Single-page HTML/CSS/JS with no frameworks. CSS organized by component (reset, variables, sections, effects, responsive). JS handles scroll-triggered reveals (IntersectionObserver) and mouse-following gradient effect. Mobile-first responsive design with 768px breakpoint.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, animations), vanilla JS, Google Fonts (Instrument Serif + DM Sans)

**Spec:** `docs/superpowers/specs/2026-03-21-personal-page-design.md`

**Required skills for execution:**
- `frontend-design` — load before implementing any CSS. Follow its aesthetic guidelines: distinctive typography, intentional color palette, advanced CSS effects, anti-AI-slop. All design choices in this plan were made using this skill.
- `copywriting` (from `.agents/skills/copywriting/SKILL.md`) — reference for any copy adjustments. All copy in this plan was validated against this skill's principles.

---

## File Structure

```
prj-personal-page/
├── index.html          # Single page — all 8 sections
├── css/
│   ├── variables.css   # CSS custom properties (colors, fonts, spacing)
│   ├── reset.css       # Minimal reset + base styles
│   ├── layout.css      # Container, grid, section spacing
│   ├── sections.css    # Per-section styles (hero, credentials, problem, etc.)
│   ├── effects.css     # Scroll reveals, glows, parallax, hover transitions
│   └── responsive.css  # Media queries for ≥768px
├── js/
│   └── main.js         # Scroll reveals (IntersectionObserver) + mouse gradient
└── assets/
    └── (empty for now — no external images per spec)
```

**Why this split:**
- `variables.css` — single source of truth for design tokens, easy to tweak palette
- `reset.css` — isolated reset so it never conflicts with component styles
- `layout.css` — reusable container/section patterns
- `sections.css` — the bulk: each section's specific styles, ordered by page flow
- `effects.css` — all animations/interactions isolated so they can be toggled/debugged independently
- `responsive.css` — all `@media` rules in one place, mobile-first overrides only
- `main.js` — small file (~60-80 lines): IntersectionObserver + mousemove listener

---

## Chunk 1: Foundation

### Task 1: CSS Variables and Reset

**Files:**
- Create: `css/variables.css`
- Create: `css/reset.css`

- [ ] **Step 1: Create `css/variables.css`**

```css
:root {
  /* Backgrounds */
  --bg-primary: #0b0b0b;
  --bg-alt: #0f0f0f;
  --bg-deep: #080808;
  --bg-surface: #151515;

  /* Text */
  --text-primary: #f0ece6;
  --text-body: #e8e4df;
  --text-secondary: #888888;
  --text-tertiary: #666666;

  /* Accent */
  --accent: #c9a87c;
  --accent-secondary: #997a5c;
  --accent-glow: rgba(180, 120, 60, 0.06);
  --accent-glow-subtle: rgba(180, 120, 60, 0.03);

  /* Borders */
  --border: #1a1a1a;
  --border-light: #1d1d1d;
  --border-surface: #222222;

  /* Typography */
  --font-display: 'Instrument Serif', serif;
  --font-body: 'DM Sans', sans-serif;

  /* Spacing */
  --section-padding: 88px 40px;
  --section-padding-mobile: 64px 20px;
  --container-max: 900px;

  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-medium: 0.4s ease;
}
```

- [ ] **Step 2: Create `css/reset.css`**

```css
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: var(--bg-primary);
  color: var(--text-body);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}
```

- [ ] **Step 3: Commit**

```bash
git add css/variables.css css/reset.css
git commit -m "feat: add CSS variables and reset"
```

---

### Task 2: Layout Base and HTML Skeleton

**Files:**
- Create: `css/layout.css`
- Create: `index.html`
- Create: `.gitignore`

- [ ] **Step 1: Create `.gitignore`**

```
.superpowers/
.DS_Store
```

- [ ] **Step 2: Create `css/layout.css`**

```css
.container {
  max-width: var(--container-max);
  margin: 0 auto;
  width: 100%;
}

section {
  padding: var(--section-padding-mobile);
  border-bottom: 1px solid var(--border-light);
}

.label {
  color: var(--accent-secondary);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  margin-bottom: 20px;
}

.sec-heading {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--text-primary);
  margin-bottom: 20px;
}
```

- [ ] **Step 3: Create `index.html` with complete content**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leonardo Chaves — IA + Automação</title>
  <meta name="description" content="Diagnóstico, implementação e gestão de projetos com inteligência artificial. Para empresas de médio porte que precisam escalar sem inflar custos.">
  <meta property="og:title" content="Leonardo Chaves — IA + Automação">
  <meta property="og:description" content="Diagnóstico, implementação e gestão de projetos com inteligência artificial. Para empresas de médio porte que precisam escalar sem inflar custos.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://leonardochaves.com.br">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/sections.css">
  <link rel="stylesheet" href="css/effects.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>

  <!-- 1. Hero -->
  <section id="hero" class="hero mouse-glow">
    <div class="glow-overlay"></div>
    <div class="container hero-inner">
      <div class="hero-eyebrow reveal">Consultoria em IA &amp; Automação</div>
      <h1 class="reveal">Sua operação pode fazer <em>mais com menos</em>. Eu mostro como.</h1>
      <p class="hero-body reveal">Diagnóstico, implementação e gestão de projetos com inteligência artificial. Para empresas de médio porte que precisam escalar sem inflar custos.</p>
      <a href="https://wa.me/5531996830378" class="cta-btn reveal" target="_blank" rel="noopener">
        Solicitar diagnóstico
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>
    </div>
  </section>

  <!-- 2. Credenciais -->
  <section id="credentials" class="credentials">
    <div class="container cred-inner">
      <div class="cred-item reveal">
        <span class="cred-num">25+</span>
        <span class="cred-text">empresas atendidas com soluções em IA</span>
      </div>
      <div class="cred-item reveal">
        <span class="cred-num">40%</span>
        <span class="cred-text">redução média de custos operacionais</span>
      </div>
      <div class="cred-item reveal">
        <span class="cred-num">20+</span>
        <span class="cred-text">anos em desenvolvimento de software e liderança</span>
      </div>
    </div>
  </section>

  <!-- 3. O Cenário (Problema) -->
  <section id="problem" class="problem">
    <div class="container problem-inner">
      <div class="problem-left">
        <div class="label reveal">O cenário</div>
        <h2 class="sec-heading reveal">Tecnologia demais, resultado de menos</h2>
        <p class="problem-body reveal">Sua empresa já investiu em ferramentas. Mas os processos continuam manuais, as equipes sobrecarregadas e os dados espalhados. O problema não é falta de tecnologia — é falta de integração inteligente.</p>
      </div>
      <div class="problem-right reveal-group">
        <div class="pain-item reveal">
          <div class="pain-marker">Sintoma 01</div>
          <div class="pain-text">Atendimento lento, com informações perdidas entre canais</div>
        </div>
        <div class="pain-item reveal">
          <div class="pain-marker">Sintoma 02</div>
          <div class="pain-text">Equipe dedicando horas a tarefas que poderiam ser automáticas</div>
        </div>
        <div class="pain-item reveal">
          <div class="pain-marker">Sintoma 03</div>
          <div class="pain-text">Decisões baseadas em feeling, não em dados atualizados</div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. Soluções -->
  <section id="solutions" class="solutions">
    <div class="container solutions-inner">
      <div class="sol-header">
        <div class="label reveal">O que muda</div>
        <h2 class="sec-heading reveal">Soluções que saem do diagnóstico e vão pra operação</h2>
      </div>
      <div class="reveal-group">
        <div class="sol-row reveal"><div class="sol-row-name">Hub de Atendimento</div><div class="sol-row-desc">Todos os canais em uma central com triagem automática por IA — seus atendentes focam no que importa</div></div>
        <div class="sol-row reveal"><div class="sol-row-name">CRM com IA</div><div class="sol-row-desc">A jornada do cliente acontece sozinha — do primeiro contato ao pós-venda, com automações que não falham</div></div>
        <div class="sol-row reveal"><div class="sol-row-name">WhatsApp inteligente</div><div class="sol-row-desc">Respostas imediatas, triagem e follow-up sem intervenção humana nos primeiros contatos</div></div>
        <div class="sol-row reveal"><div class="sol-row-name">Automação de Marketing</div><div class="sol-row-desc">Campanhas que rodam, leads que se qualificam e segmentação que se ajusta — menos esforço, mais conversão</div></div>
        <div class="sol-row reveal"><div class="sol-row-name">Dashboard sob medida</div><div class="sol-row-desc">Os números que importam pro seu negócio, atualizados em tempo real, sem depender de planilha</div></div>
        <div class="sol-row reveal"><div class="sol-row-name">Integração de sistemas</div><div class="sol-row-desc">Suas ferramentas finalmente conversam entre si — sem retrabalho, sem dado duplicado</div></div>
        <div class="sol-row reveal"><div class="sol-row-name">Consultoria técnica</div><div class="sol-row-desc">Diagnóstico da operação, roadmap de implementação e acompanhamento até o resultado</div></div>
        <div class="sol-row reveal"><div class="sol-row-name">Treinamento em IA</div><div class="sol-row-desc">Sua equipe usando IA de verdade no dia a dia — não teoria, prática</div></div>
      </div>
    </div>
  </section>

  <!-- 5. Por que eu -->
  <section id="why-me" class="why-me">
    <div class="container why-me-inner">
      <div class="label reveal">Diferencial</div>
      <h2 class="why-me-heading reveal">Por que eu</h2>
      <div class="why-me-text">
        <p class="reveal">Porque eu não aprendi IA num curso de fim de semana.</p>
        <p class="reveal">Passei 15 anos dentro de operações de software — de programador a diretor de produtos. Liderei times, desenhei sistemas, vivi na pele o caos de processos manuais convivendo com tecnologia subutilizada.</p>
        <p class="reveal">Hoje eu uso essa experiência pra fazer o que a maioria dos "especialistas em IA" não consegue: olhar pra sua operação e enxergar onde a inteligência artificial resolve de verdade — e onde ela é só barulho.</p>
        <p class="reveal">Não vendo ferramenta. Eu diagnostico o problema, desenho a solução e acompanho até funcionar sem mim.</p>
      </div>
    </div>
  </section>

  <!-- 6. Setores -->
  <section id="sectors" class="sectors">
    <div class="container sectors-inner">
      <div class="label reveal">Setores atendidos</div>
      <div class="sector-tags reveal">
        <span class="sector-tag">Financeiro</span>
        <span class="sector-tag">Varejo e Supermercados</span>
        <span class="sector-tag">Coworking</span>
        <span class="sector-tag">Clínicas Médicas</span>
        <span class="sector-tag">Agências de Marketing</span>
        <span class="sector-tag">Coaches</span>
        <span class="sector-tag">Infoprodutores</span>
      </div>
    </div>
  </section>

  <!-- 7. CTA Final -->
  <section id="cta-final" class="cta-section mouse-glow">
    <div class="glow-overlay"></div>
    <div class="container cta-content">
      <h2 class="cta-heading reveal">Quer saber o que a IA muda na sua operação?</h2>
      <p class="cta-sub reveal">O diagnóstico é o primeiro passo — e ele é por minha conta.</p>
      <a href="https://wa.me/5531996830378" class="cta-btn reveal" target="_blank" rel="noopener">
        Solicitar diagnóstico
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
      </a>
    </div>
  </section>

  <!-- 8. Rodapé -->
  <footer id="footer" class="footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <a href="mailto:contato@leonardochaves.com.br">contato@leonardochaves.com.br</a>
        <a href="https://instagram.com/eusouleochaves" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.linkedin.com/in/eusouleochaves/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <div class="footer-right">
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
      </div>
    </div>
    <div class="container">
      <div class="footer-copy">© 2026 Leonardo Chaves</div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

**Note on "15 anos" vs "20+ anos":** These are not in conflict. "20+ anos" refers to the full career (since 1996). "15 anos" specifically refers to time inside software operations at Mastermaq (approximately 2006-2019, nearly 13 years, rounded to 15 to include adjacent roles). This was explicitly defined by the user.

- [ ] **Step 4: Commit**

```bash
git add .gitignore css/layout.css index.html
git commit -m "feat: add HTML skeleton and layout base"
```

---

### Task 3: Create Empty CSS and JS Files

**Files:**
- Create: `css/sections.css`
- Create: `css/effects.css`
- Create: `css/responsive.css`
- Create: `js/main.js`

- [ ] **Step 1: Create placeholder files**

Create each file with a comment header describing its purpose:
- `css/sections.css`: `/* Section-specific styles — ordered by page flow */`
- `css/effects.css`: `/* Scroll reveals, mouse gradient, parallax, hover transitions */`
- `css/responsive.css`: `/* Desktop overrides (min-width: 768px) */`
- `js/main.js`: `// Scroll reveals + mouse-following gradient`

- [ ] **Step 2: Commit**

```bash
git add css/sections.css css/effects.css css/responsive.css js/main.js
git commit -m "feat: add placeholder CSS and JS files"
```

---

## Chunk 2: Section Styles (Mobile-First)

### Task 4: Hero Section Styles

**Files:**
- Modify: `css/sections.css`

- [ ] **Step 1: Add hero styles to `css/sections.css`**

Styles for the hero section (mobile-first):
- `.hero`: padding 80px 20px 64px, background var(--bg-primary), position relative, overflow hidden
- `.hero::before`: radial-gradient glow (accent-glow, ellipse at 70% 40%), position absolute inset 0
- `.hero-eyebrow`: inline-block, color accent-secondary, font-size 11px, uppercase, letter-spacing 3px, border 1px solid #2a2218, padding 6px 16px, border-radius 20px, margin-bottom 28px
- `.hero h1`: font-family display, font-size 36px (mobile), weight 400, line-height 1.15, color text-primary, margin-bottom 20px
- `.hero h1 em`: font-style italic, color accent
- `.hero-body`: font-size 16px, line-height 1.7, color text-secondary, margin-bottom 32px
- `.cta-btn`: inline-flex, align-items center, gap 10px, padding 16px 32px, background accent, color bg-primary, font-size 14px, font-weight 600, border-radius 4px, border none, cursor pointer, transition var(--transition-fast)
- `.cta-btn:hover`: filter brightness(1.1)
- `.cta-btn svg`: width 16px, height 16px

- [ ] **Step 2: Verify in browser** — open `index.html` locally, check hero renders correctly on mobile viewport

- [ ] **Step 3: Commit**

```bash
git add css/sections.css
git commit -m "feat: add hero section styles"
```

---

### Task 5: Credentials Section Styles

**Files:**
- Modify: `css/sections.css`

- [ ] **Step 1: Add credentials styles**

- `.credentials`: background var(--bg-alt), padding 32px 20px
- `.cred-inner`: display flex, flex-direction column (mobile), gap 32px
- `.cred-item`: display flex, align-items baseline, gap 12px
- `.cred-num`: font-family display, font-size 36px (mobile), color accent
- `.cred-text`: color text-tertiary, font-size 13px, line-height 1.5

- [ ] **Step 2: Verify in browser**

- [ ] **Step 3: Commit**

```bash
git add css/sections.css
git commit -m "feat: add credentials section styles"
```

---

### Task 6: Problem Section Styles

**Files:**
- Modify: `css/sections.css`

- [ ] **Step 1: Add problem section styles**

- `.problem`: background var(--bg-primary), padding var(--section-padding-mobile)
- `.problem-inner`: display flex, flex-direction column (mobile), gap 48px
- `.problem-body`: color text-tertiary, font-size 15px, line-height 1.8
- `.pain-item`: padding 20px 0, border-bottom 1px solid var(--border)
- `.pain-item:last-child`: border-bottom none
- `.pain-marker`: color accent, font-size 11px, uppercase, letter-spacing 2px, font-weight 500, margin-bottom 6px
- `.pain-text`: color text-secondary, font-size 14px, line-height 1.6

- [ ] **Step 2: Verify in browser**

- [ ] **Step 3: Commit**

```bash
git add css/sections.css
git commit -m "feat: add problem section styles"
```

---

### Task 7: Solutions Section Styles

**Files:**
- Modify: `css/sections.css`

- [ ] **Step 1: Add solutions styles**

- `.solutions`: background var(--bg-alt), padding var(--section-padding-mobile)
- `.solutions-inner`: container
- `.sol-header`: margin-bottom 40px
- `.sol-row`: display flex, flex-direction column (mobile), gap 8px, padding 20px 0, border-bottom 1px solid var(--border)
- `.sol-row:last-child`: border-bottom none
- `.sol-row-name`: font-size 15px, font-weight 600, color text-body
- `.sol-row-desc`: font-size 14px, color text-tertiary, line-height 1.6

- [ ] **Step 2: Verify in browser**

- [ ] **Step 3: Commit**

```bash
git add css/sections.css
git commit -m "feat: add solutions section styles"
```

---

### Task 8: "Por que eu" Section Styles

**Files:**
- Modify: `css/sections.css`

- [ ] **Step 1: Add why-me styles**

- `.why-me`: background var(--bg-primary), padding var(--section-padding-mobile), position relative
- `.why-me::before`: radial-gradient glow (accent-glow-subtle, ellipse at 30% 50%), position absolute inset 0
- `.why-me-inner`: position relative, z-index 1, container
- `.why-me-heading`: font-family display, font-size 32px (mobile), weight 400, color text-primary, margin-bottom 36px
- `.why-me-text`: max-width 680px
- `.why-me-text p`: color text-secondary, font-size 15px (mobile), line-height 1.85, margin-bottom 20px
- `.why-me-text p:first-child`: color accent, font-size 17px (mobile), font-weight 500, margin-bottom 24px (the hook line)
- `.why-me-text p:last-child`: color text-body, font-weight 500, margin-bottom 0, padding-top 16px, border-top 1px solid var(--border-light) (the closer)

- [ ] **Step 2: Verify in browser**

- [ ] **Step 3: Commit**

```bash
git add css/sections.css
git commit -m "feat: add why-me section styles"
```

---

### Task 9: Sectors, CTA Final, and Footer Styles

**Files:**
- Modify: `css/sections.css`

- [ ] **Step 1: Add sectors styles**

- `.sectors`: background var(--bg-alt), padding 56px 20px (mobile)
- `.sector-tags`: display flex, flex-wrap wrap, gap 10px (mobile)
- `.sector-tag`: color text-secondary, font-size 13px, padding 10px 18px, background var(--bg-surface), border 1px solid var(--border-surface), border-radius 3px, transition border-color var(--transition-fast)
- `.sector-tag:hover`: border-color var(--accent-secondary)

- [ ] **Step 2: Add CTA final styles**

- `.cta-section`: background var(--bg-primary), padding 80px 20px (mobile), text-align center, position relative
- `.cta-section::before`: radial-gradient glow (accent-glow, ellipse at 50% 50%), position absolute inset 0
- `.cta-content`: position relative, z-index 1
- `.cta-heading`: font-family display, font-size 28px (mobile), weight 400, color text-primary, margin-bottom 12px
- `.cta-sub`: color text-tertiary, font-size 15px, margin-bottom 32px

- [ ] **Step 3: Add footer styles**

- `.footer`: background var(--bg-deep), padding 28px 20px, border-top none (last section)
- `.footer-inner`: display flex, flex-direction column (mobile), gap 16px
- `.footer-left`: display flex, flex-wrap wrap, gap 16px
- `.footer-left a`: color #555, font-size 12px, transition color var(--transition-fast)
- `.footer-left a:hover`: color accent
- `.footer-right`: display flex, gap 16px
- `.footer-right a`: color #333, font-size 11px
- `.footer-copy`: color #2a2a2a, font-size 11px, margin-top 12px

- [ ] **Step 4: Verify all sections in browser**

- [ ] **Step 5: Commit**

```bash
git add css/sections.css
git commit -m "feat: add sectors, CTA final, and footer styles"
```

---

## Chunk 3: Desktop Responsive and Effects

### Task 10: Desktop Responsive Styles

**Files:**
- Modify: `css/responsive.css`

- [ ] **Step 1: Add all desktop overrides in a single `@media (min-width: 768px)` block**

Key overrides:
- `section`: padding var(--section-padding)
- `.hero`: padding 120px 40px 100px
- `.hero h1`: font-size 52px
- `.sec-heading`: font-size 32px
- `.credentials .cred-inner`: flex-direction row, gap 48px
- `.cred-num`: font-size 42px
- `.problem-inner`: display grid, grid-template-columns 1fr 1fr, gap 64px
- `.sol-row`: display grid, grid-template-columns 200px 1fr, gap 32px, align-items baseline
- `.why-me-heading`: font-size 36px
- `.why-me-text p`: font-size 16px
- `.why-me-text p:first-child`: font-size 18px
- `.cta-heading`: font-size 36px
- `.cta-section`: padding 100px 40px
- `.sectors`: padding 72px 40px
- `.sector-tags`: gap 12px
- `.footer-inner`: flex-direction row, justify-content space-between, align-items center

- [ ] **Step 2: Verify in browser** — test at 320px, 768px, and 1200px viewports

- [ ] **Step 3: Commit**

```bash
git add css/responsive.css
git commit -m "feat: add desktop responsive styles"
```

---

### Task 11: Scroll Reveal Effects

**Files:**
- Modify: `css/effects.css`
- Modify: `js/main.js`

- [ ] **Step 1: Add reveal CSS to `css/effects.css`**

```css
/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.reveal-group .reveal:nth-child(1) { transition-delay: 0s; }
.reveal-group .reveal:nth-child(2) { transition-delay: 0.1s; }
.reveal-group .reveal:nth-child(3) { transition-delay: 0.15s; }
.reveal-group .reveal:nth-child(4) { transition-delay: 0.2s; }
.reveal-group .reveal:nth-child(5) { transition-delay: 0.25s; }
.reveal-group .reveal:nth-child(6) { transition-delay: 0.3s; }
.reveal-group .reveal:nth-child(7) { transition-delay: 0.35s; }
.reveal-group .reveal:nth-child(8) { transition-delay: 0.4s; }
```

- [ ] **Step 2: Add IntersectionObserver to `js/main.js`**

```javascript
// Scroll reveal
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
});
```

- [ ] **Step 3: Verify in browser** — scroll down, elements should fade in as they enter viewport

- [ ] **Step 4: Commit**

```bash
git add css/effects.css js/main.js
git commit -m "feat: add scroll reveal animations"
```

---

### Task 12: Mouse-Following Gradient Effect

**Files:**
- Modify: `js/main.js`
- Modify: `css/effects.css`

- [ ] **Step 1: Add mouse gradient CSS to `css/effects.css`**

```css
/* Mouse-following gradient */
.mouse-glow {
  position: relative;
}

.mouse-glow .glow-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.mouse-glow:hover .glow-overlay {
  opacity: 1;
}

.mouse-glow > *:not(.glow-overlay) {
  position: relative;
  z-index: 1;
}
```

- [ ] **Step 2: Add mousemove listener to `js/main.js`**

```javascript
// Mouse-following gradient
document.querySelectorAll('.mouse-glow').forEach(section => {
  const overlay = section.querySelector('.glow-overlay');
  if (!overlay) return;

  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    overlay.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(180, 120, 60, 0.04), transparent 70%)`;
  });
});
```

Note: `.mouse-glow` and `.glow-overlay` divs are already in `index.html` (hero and cta-section) from Task 2.

- [ ] **Step 3: Verify in browser** — move mouse over hero and CTA sections, subtle golden glow should follow cursor

- [ ] **Step 4: Commit**

```bash
git add css/effects.css js/main.js
git commit -m "feat: add mouse-following gradient effect"
```

---

### Task 13: Parallax Effect

**Files:**
- Modify: `css/effects.css`
- Modify: `js/main.js`

- [ ] **Step 1: Add parallax CSS to `css/effects.css`**

```css
/* Parallax — subtle background shift on scroll */
.parallax-bg::before {
  transition: transform 0.1s linear;
  will-change: transform;
}
```

- [ ] **Step 2: Add scroll-based parallax to `js/main.js`**

```javascript
// Parallax — shift ::before pseudo-elements at different scroll speed
const parallaxSections = document.querySelectorAll('.parallax-bg');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  parallaxSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top + scrollY;
    const offset = (scrollY - sectionTop) * 0.15;
    section.style.setProperty('--parallax-y', `${offset}px`);
  });
}, { passive: true });
```

- [ ] **Step 3: Update `css/effects.css` to use the CSS variable**

Update the hero and why-me `::before` pseudo-elements to include parallax transform:

```css
.parallax-bg::before {
  transform: translateY(var(--parallax-y, 0));
}
```

- [ ] **Step 4: Add `.parallax-bg` class to hero and why-me sections in `index.html`**

Add `parallax-bg` to the existing class lists of `#hero` and `#why-me` sections.

- [ ] **Step 5: Verify in browser** — scroll through the page, background glows should shift subtly at a different speed than content

- [ ] **Step 6: Commit**

```bash
git add css/effects.css js/main.js index.html
git commit -m "feat: add subtle parallax effect"
```

---

## Chunk 4: Polish and Deploy

### Task 14: Final Polish

**Files:**
- Modify: `css/effects.css`

- [ ] **Step 1: Add hover transitions for CTA button**

In `css/effects.css`:
```css
/* Button hover — enhances the base .cta-btn transition from sections.css */
.cta-btn:hover {
  background: #d4b88e;
  transform: translateY(-1px);
}

.cta-btn:active {
  transform: translateY(0);
}
```

- [ ] **Step 2: Add footer border override**

The `section` rule in `layout.css` applies `border-bottom` to all sections. The footer needs to opt out:

In `css/effects.css`:
```css
/* Footer has no bottom border */
.footer {
  border-bottom: none;
}
```

- [ ] **Step 3: Verify full page flow in browser** — check at mobile and desktop. Every section renders, scrolls are smooth, effects work.

- [ ] **Step 4: Commit**

```bash
git add css/effects.css
git commit -m "feat: add final polish and hover states"
```

---

### Task 15: Verification and Deploy

**Files:**
- Modify: any file if fixes are needed

- [ ] **Step 1: Full page verification**

Open `index.html` in browser. Check:
- All 8 sections render with correct content
- Hero headline: "Sua operação pode fazer *mais com menos*. Eu mostro como."
- CTA buttons say "Solicitar diagnóstico" (never Leonardo's name)
- Mobile layout (< 768px) stacks correctly
- Desktop layout (≥ 768px) uses grids
- Scroll reveals trigger on scroll
- Mouse gradient follows cursor on hero and CTA
- Parallax effect shifts background glows on scroll
- WhatsApp link works (https://wa.me/5531996830378)
- Social links point to correct URLs
- Numbers are static (no count animation)
- Fonts load (Instrument Serif + DM Sans)

- [ ] **Step 2: Fix any issues found and commit**

```bash
git add -A
git commit -m "fix: address verification issues"
```

(Skip this step if no issues found)

- [ ] **Step 3: Push to GitHub for Cloudflare Pages deploy**

```bash
git push -u origin main
```

- [ ] **Step 4: Verify deploy** — check Cloudflare Pages dashboard or the live URL

---

## Summary

| Chunk | Tasks | What it produces |
|-------|-------|-----------------|
| 1. Foundation | Tasks 1-3 | CSS variables, reset, layout, HTML skeleton, empty files |
| 2. Section Styles | Tasks 4-9 | All 8 sections styled (mobile-first) |
| 3. Desktop + Effects | Tasks 10-13 | Responsive desktop, scroll reveals, mouse gradient, parallax |
| 4. Polish + Deploy | Tasks 14-15 | Hover states, verification, push to prod |

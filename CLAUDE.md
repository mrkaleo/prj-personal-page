# CLAUDE.md — prj-personal-page

## O que é este projeto

Página pessoal do Leonardo Chaves. Landing page consultiva e persuasiva com foco em conversão para WhatsApp (diagnóstico gratuito).

## Arquitetura

```
prj-personal-page/
├── CLAUDE.md                    # Este arquivo
├── index.html                   # Página principal (8 seções)
├── assets/
│   ├── leo-apresentacao.webp    # Foto hero (duotone gold)
│   └── leo-pensativo.webp       # Foto seção "Por que eu" (grayscale)
├── css/
│   ├── variables.css            # Design tokens (cores, fontes, spacing)
│   ├── reset.css                # Reset + base styles
│   ├── layout.css               # Container, grid, section spacing
│   ├── sections.css             # Estilos por seção (mobile-first)
│   ├── effects.css              # Scroll reveals, mouse gradient, parallax
│   └── responsive.css           # Desktop overrides (≥768px)
├── js/
│   └── main.js                  # IntersectionObserver + mousemove + parallax
├── politicas-de-privacidade/
│   ├── index.html               # Página de Política de Privacidade
│   └── legal.css                # Estilos compartilhados das páginas legais
├── termos-de-uso/
│   ├── index.html               # Página de Termos de Uso
│   └── legal.css                # Estilos compartilhados das páginas legais
└── docs/superpowers/
    ├── specs/                   # Design specs
    └── plans/                   # Implementation plans
```

## Stack

- **HTML/CSS/JS** puro (sem frameworks, sem build tools)
- **Google Fonts:** Instrument Serif (display) + DM Sans (body)
- Deploy via **Cloudflare Pages** (conectado ao GitHub)
- Repo: `mrkaleo/prj-personal-page`

## Contexto da Agência

Este projeto faz parte da **lps-agency**. Skills de marketing, copywriting e frontend-design são herdadas automaticamente da raiz.

## Convenções

- Commits e código em **inglês**
- Copy/conteúdo da página em **português brasileiro**
- **SEMPRE** carregar as skills de `copywriting` e `frontend-design` antes de qualquer trabalho de design ou copy
- Usar a skill de `page-cro` para otimização de conversão
- **Não commitar nem deployar sem aprovação explícita do Leonardo**

## Deploy

- Push para `main` no GitHub → deploy automático via Cloudflare Pages
- URL: leonardochaves.com.br

## Design da Página (implementado)

### Identidade Visual

- **Abordagem:** Consultiva e persuasiva
- **Tom de voz:** Executivo, direto e provocativo. Sem floreios, sem tom de "missão/propósito"
- **Tema:** Dark editorial com accent dourado/bronze, inspirado no Claude (Anthropic)
- **Paleta:** Background #0b0b0b/#0f0f0f, accent #c9a87c/#997a5c, texto #f0ece6/#e8e4df
- **Tipografia:** Instrument Serif (headlines) + DM Sans (corpo)
- **Efeitos CSS:** Scroll-triggered reveals, mouse-following gradient, parallax sutil
- **Requisito visual:** NÃO deve parecer que foi criada por IA
- **CTAs:** Nunca usar o nome do Leonardo. CTA principal: "Solicitar diagnóstico"
- **Números:** Sem animação de contagem (estáticos)
- **Breakpoint:** 768px (mobile-first)

### Seções (8 total)

1. **Hero** — Eyebrow "Consultoria em IA & Automação" + headline "Sua operação pode fazer *mais com menos*. Eu mostro como." + foto duotone gold à direita + CTA WhatsApp
2. **Credenciais** — 25+ empresas / 40% redução custos / 20+ anos
3. **O cenário** — Seção de problema/dor com 3 sintomas
4. **Soluções** — "O que muda" — 8 itens em lista editorial (Hub, CRM, WhatsApp, Marketing, Dashboard, Integração, Consultoria, Treinamento)
5. **Por que eu** — Texto provocativo do Leonardo com foto grayscale à direita
6. **Setores atendidos** — Tags (Financeiro, Varejo, Coworking, Clínicas, Agências, Coaches, Infoprodutores)
7. **CTA final** — "Quer saber o que a IA muda na sua operação?" + diagnóstico gratuito
8. **Rodapé** — E-mail, Instagram, LinkedIn + links legais

### Páginas adicionais

- `/politicas-de-privacidade` — Política de Privacidade (LGPD)
- `/termos-de-uso` — Termos de Uso

### Informações do Leonardo (para copy)

- **Nome completo:** Leonardo Chaves Moreira
- **Atuação:** Consultor de Transformação Digital com IA (desde jan/2025)
- **Antes:** Fundador Zelar Digital (2022-2025), E-Do Lab (2019-2021), Mastermaq Software ~15 anos (até Head of Product Development)
- **Formação:** FGV — Gestão Empresarial, Controladoria, Administração
- **CNPJ:** 61.679.884/0001-47
- **Cliente ideal:** Empresas de médio porte que precisam modernizar processos com IA
- **Resultado principal:** Redução de custos operacionais. Diagnóstico → solução → implementação
- **Diferencial:** Mais de 20 anos dentro de operações de software, não é "especialista de curso de fim de semana"
- **Não usar:** nome do Leonardo em CTAs; "Ex-Diretor de Produtos" (usar "Head de Produtos" fora de contexto narrativo)
- **WhatsApp:** 31996830378
- **Email:** contato@leonardochaves.com.br
- **Instagram:** @eusouleochaves
- **LinkedIn:** linkedin.com/in/eusouleochaves
- **Site:** leonardochaves.com.br

# Design Spec — Página Pessoal Leonardo Chaves

**Data:** 2026-03-21
**Projeto:** prj-personal-page
**Repo:** mrkaleo/prj-personal-page
**Deploy:** Cloudflare Pages (push to main)

## Visão Geral

Landing page pessoal com abordagem consultiva e persuasiva. Tema dark com accent dourado/bronze, tipografia editorial. HTML/CSS/JS puro, sem frameworks. Foco em conversão para WhatsApp (diagnóstico gratuito). Identidade visual inspirada no Claude (Anthropic) — sofisticada, com efeitos CSS avançados ativados por scroll e movimentação do mouse, sem exageros.

## Diretrizes de Design

- **Tom de voz:** Executivo, direto e provocativo. Sem floreios, sem tom de "missão/propósito"
- **Tema:** Dark editorial com accent dourado/bronze
- **Efeitos CSS:** Avançados — scroll-triggered reveals, gradientes que acompanham o mouse, parallax sutil, transições suaves entre seções. Inspirados no visual do Claude
- **Requisito visual:** NÃO deve parecer que foi criada por IA — evitar layouts genéricos, gradientes arco-íris, cards simétricos demais, ilustrações flat genéricas
- **CTAs:** Nunca usar o nome do Leonardo em botões. CTA principal: "Solicitar diagnóstico"
- **Números:** Sem animação de contagem (estáticos)
- **Breakpoint responsivo:** 768px (mobile-first: abaixo de 768px = mobile, acima = desktop)

## Paleta de Cores

- **Background primário:** #0b0b0b
- **Background alternado:** #0f0f0f (para alternar entre seções)
- **Texto primário:** #f0ece6 (off-white quente)
- **Texto corpo:** #e8e4df
- **Texto secundário:** #888888 (subtítulos, corpo de texto)
- **Texto terciário:** #666666 (descrições, complementos)
- **Accent primário:** #c9a87c (dourado/bronze — CTAs, números, destaques)
- **Accent secundário:** #997a5c (labels de seção, eyebrows)
- **Bordas/separadores:** #1a1a1a / #1d1d1d
- **Botão CTA:** fundo #c9a87c, texto #0b0b0b
- **Radial glows:** rgba(180,120,60,0.03-0.06) — glows sutis de ambiente em seções chave

## Tipografia

- **Display font:** Instrument Serif (Google Fonts) — headlines, números, títulos de seção
- **Body font:** DM Sans (Google Fonts) — corpo, labels, descrições
- **Labels de seção:** 11px, uppercase, letter-spacing 2.5px, DM Sans, weight 500, cor accent secundário (#997a5c)
- **Headlines:** Instrument Serif, weight 400, tamanho por hierarquia (52px hero → 36px seções → 32px sub-seções)
- **Números (seção 2):** Instrument Serif, 42px, cor accent (#c9a87c)
- **Corpo:** DM Sans, 14-17px, line-height 1.6-1.8

## Backgrounds e Atmosfera

- Radial gradients sutis em seções chave (hero, "Por que eu", CTA final) para criar profundidade
- Sem imagens de background externas — atmosfera criada com CSS puro (gradients, glows)
- Alternância de background entre #0b0b0b e #0f0f0f entre seções para ritmo visual

## Efeitos CSS e Interatividade

- **Scroll-triggered reveals:** elementos aparecem com fade-in + translate sutil ao entrar no viewport (IntersectionObserver)
- **Mouse-following gradient:** glow sutil que acompanha o cursor em seções como hero e CTA final
- **Parallax sutil:** elementos de background com velocidade diferente do conteúdo
- **Hover states:** tags de setor com transição de borda, botões com transição de cor
- **Sem exageros:** efeitos devem ser sofisticados e sutis, nunca chamativos

## Seções

### 1. Hero

- **Eyebrow:** "Consultoria em IA & Automação" (pill com borda, border-radius 20px, cor accent)
- **Headline:** "Sua operação pode fazer *mais com menos*. Eu mostro como." (*mais com menos* em itálico, cor accent #c9a87c)
- **Subtitle:** "Diagnóstico, implementação e gestão de projetos com inteligência artificial. Para empresas de médio porte que precisam escalar sem inflar custos."
- **CTA:** "Solicitar diagnóstico →" (botão accent com seta SVG)
- **Background:** radial gradient sutil (dourado, 6% opacidade, posicionado 70% horizontal, 40% vertical)
- **Layout:** alinhado à esquerda, max-width 900px, bastante respiro vertical (120px top, 100px bottom)

### 2. Credenciais (Números)

- **"25+"** — empresas atendidas com soluções em IA
- **"40%"** — redução média de custos operacionais
- **"20+"** — anos em desenvolvimento de software e liderança
- **Layout:** barra horizontal, números em Instrument Serif 42px cor accent, texto descritivo ao lado
- **Background:** #0f0f0f
- **Sem animação de contagem**

### 3. O Cenário (Problema)

- **Label:** "O cenário"
- **Headline:** "Tecnologia demais, resultado de menos"
- **Texto:** "Sua empresa já investiu em ferramentas. Mas os processos continuam manuais, as equipes sobrecarregadas e os dados espalhados. O problema não é falta de tecnologia — é falta de integração inteligente."
- **Layout:** grid 2 colunas (desktop). Esquerda: label + headline + texto. Direita: 3 sintomas
- **Sintomas:**
  - Sintoma 01: "Atendimento lento, com informações perdidas entre canais"
  - Sintoma 02: "Equipe dedicando horas a tarefas que poderiam ser automáticas"
  - Sintoma 03: "Decisões baseadas em feeling, não em dados atualizados"
- **Visual:** markers em cor accent, itens separados por linhas horizontais

### 4. Soluções

- **Label:** "O que muda"
- **Headline:** "Soluções que saem do diagnóstico e vão pra operação"
- **Layout:** lista vertical com grid 2 colunas por item (nome 200px | descrição 1fr), separados por linhas horizontais. Mobile: 1 coluna stacked
- **Background:** #0f0f0f

**Itens:**

| Solução | Frase |
|---|---|
| Hub de Atendimento | Todos os canais em uma central com triagem automática por IA — seus atendentes focam no que importa |
| CRM com IA | A jornada do cliente acontece sozinha — do primeiro contato ao pós-venda, com automações que não falham |
| WhatsApp inteligente | Respostas imediatas, triagem e follow-up sem intervenção humana nos primeiros contatos |
| Automação de Marketing | Campanhas que rodam, leads que se qualificam e segmentação que se ajusta — menos esforço, mais conversão |
| Dashboard sob medida | Os números que importam pro seu negócio, atualizados em tempo real, sem depender de planilha |
| Integração de sistemas | Suas ferramentas finalmente conversam entre si — sem retrabalho, sem dado duplicado |
| Consultoria técnica | Diagnóstico da operação, roadmap de implementação e acompanhamento até o resultado |
| Treinamento em IA | Sua equipe usando IA de verdade no dia a dia — não teoria, prática |

### 5. Por que eu (Diferencial)

- **Label:** "Diferencial"
- **Headline:** "Por que eu"
- **Texto (4 parágrafos):**
  1. "Porque eu não aprendi IA num curso de fim de semana." *(destaque: cor accent, font-size maior, weight 500)*
  2. "Passei 15 anos dentro de operações de software — de programador a diretor de produtos. Liderei times, desenhei sistemas, vivi na pele o caos de processos manuais convivendo com tecnologia subutilizada."
  3. "Hoje eu uso essa experiência pra fazer o que a maioria dos 'especialistas em IA' não consegue: olhar pra sua operação e enxergar onde a inteligência artificial resolve de verdade — e onde ela é só barulho."
  4. "Não vendo ferramenta. Eu diagnostico o problema, desenho a solução e acompanho até funcionar sem mim." *(destaque: cor texto primário, weight 500, separado por border-top)*
- **Background:** #0b0b0b + radial gradient sutil dourado (posicionado 30% horizontal)
- **Layout:** headline + texto em max-width 680px

### 6. Setores Atendidos

- **Label:** "Setores atendidos"
- **Layout:** tags em linha com flex-wrap. Border-radius 3px, borda 1px solid #222, background #151515. Gap 12px
- **Hover:** border-color transiciona para #997a5c
- **Background:** #0f0f0f

**Itens:**
- Financeiro
- Varejo e Supermercados
- Coworking
- Clínicas Médicas
- Agências de Marketing
- Coaches
- Infoprodutores

### 7. CTA Final

- **Headline:** "Quer saber o que a IA muda na sua operação?"
- **Subtexto:** "O diagnóstico é o primeiro passo — e ele é por minha conta."
- **Botão:** "Solicitar diagnóstico →" (mesmo estilo do hero)
- **Layout:** centralizado, bastante respiro vertical (100px)
- **Background:** #0b0b0b + radial gradient sutil dourado central

### 8. Rodapé

- **Layout:** uma linha — links de contato à esquerda, links legais à direita (desktop). Empilhado no mobile
- **Links de contato:**
  - E-mail: contato@leonardochaves.com.br
  - Instagram: @eusouleochaves
  - LinkedIn: linkedin.com/in/eusouleochaves
- **Links legais:** "Política de Privacidade" e "Termos de Uso" (apontando para # por enquanto)
- **Copyright:** "© 2026 Leonardo Chaves"
- **Background:** #080808

## Stack Técnica

- HTML/CSS/JS puro (sem frameworks, sem build tools)
- Google Fonts: Instrument Serif + DM Sans
- Responsivo (mobile-first)
- Deploy automático via Cloudflare Pages (push to main)
- IntersectionObserver para scroll-triggered animations
- mousemove listener para gradient follow effect

## Informações de Contato

- **WhatsApp:** 5531996830378 (link: https://wa.me/5531996830378)
- **E-mail:** contato@leonardochaves.com.br
- **Instagram:** @eusouleochaves
- **LinkedIn:** https://www.linkedin.com/in/eusouleochaves/
- **Site:** leonardochaves.com.br

# ⚡ Isaque.dev — Frontend do Portfólio Web .NET/C# Full Stack

Interface moderna e de alta fidelidade visual para o portfólio de **Desenvolvedor de Software .NET / C# Full Stack**. O projeto une uma identidade estética *Dark Sci-Fi / Tech* a uma arquitetura limpa, responsiva, com foco em microsserviços, acessibilidade cognitiva e integração com o ecossistema .NET.

---

## 📋 Sumário
- [Visão Geral & Objetivos](#-visão-geral--objetivos)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura & Estrutura de Pastas](#-arquitetura--estrutura-de-pastas)
- [Destaques de Design & UX](#-destaques-de-design--ux)
- [Seções Implementadas](#-seções-implementadas)
- [Instruções de Execução](#-instruções-de-execução)
- [Melhorias Futuras & Roadmap](#-melhorias-futuras--roadmap)

---

## 🎯 Visão Geral & Objetivos

Construir uma presença digital profissional que transmita solidez em engenharia de software e domínio técnico full stack:
- **Foco em Projetos Reais:** Destaque para aplicações de produção e desafios avançados de engenharia (**Adapty**, **KorpERP** e **Doctopus**).
- **Equilíbrio Visual:** Estética *Dark Sci-Fi* moderna com iluminação e microinterações polidas, sem comprometer a sobriedade corporativa para recrutadores e líderes técnicos.
- **Acessibilidade e Neurodiversidade:** Design inclusivo respeitando normas de acessibilidade (A11y), suporte a redução de movimento (`prefers-reduced-motion`) e contraste otimizado.
- **Pronto para Integração:** Frontend preparado para consumir e orquestrar chamadas à API ASP.NET Core (`Backend`).

---

## 🛠️ Tecnologias Utilizadas

### Core & Runtime
- **[React 19](https://react.dev/):** Renderização moderna de interfaces reativas baseadas em componentes funcionais.
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática em 100% da base de código para robustez e previsibilidade.
- **[Vite 8](https://vite.dev/):** Ferramenta de build rápida com Hot Module Replacement (HMR) instantâneo.

### Estilização & Design System
- **[Tailwind CSS v4](https://tailwindcss.com/):** Nova geração com compilação direta via plugin `@tailwindcss/vite`, CSS-first e suporte a tokens inline `@theme`.
- **`tw-animate-css`:** Utilitários para animações CSS integradas.
- **[Geist Font Variable](https://fontsource.org/fonts/geist):** Tipografia moderna e legível, padronizada como fonte do sistema e heading.

### Primitivas de UI (Base shadcn/ui & Radix UI)
- **Radix UI Primitives:** `@radix-ui/react-dialog`, `@radix-ui/react-tabs`, `@radix-ui/react-tooltip`, `@radix-ui/react-slot`.
- Componentes modulares desacoplados: `Button`, `Badge`, `Dialog`, `Sheet` (Menu mobile), `Tabs`, `Input`, `Textarea` e `Tooltip`.
- **CVA (class-variance-authority):** Gestão de variantes visuais de botões (`default`, `scifi`, `neon`, etc.) e badges (`cyan`, `violet`, `green`).

### Animações & Microinterações
- **[Motion](https://motion.dev/) (`motion/react` v13):** Orquestração fluida de transições, stagger effects e transições de página/seção.
- **`useReducedMotion`:** Suporte obrigatório a usuários com sensibilidade a movimento através de presets neutros definidos centralizadamente em `src/constants/animations.ts`.

### Efeitos Visuais Especializados (React Bits)
- **`ParticlesBackground`:** Partículas flutuantes interativas renderizadas via Canvas no Hero.
- **`DecryptedText`:** Efeito estilo terminal/descriptografia de texto sci-fi no título principal.
- **`SpotlightCard`:** Efeito de iluminação radial dinâmica que acompanha o movimento do ponteiro nos cards de projetos.
- **`TiltedCard`:** Perspectiva 3D suave com rotação sensível à posição do mouse.

### Ícones & Comunicação Visual
- **[Lucide React](https://lucide.dev/):** Conjunto consistente de ícones técnicos e utilitários.
- **[React Icons](https://react-icons.github.io/react-icons/):** Logotipos de marcas e plataformas (`SiGithub`, `FaLinkedin`, `FaYoutube`).

---

## 📂 Arquitetura & Estrutura de Pastas

O projeto adota uma arquitetura orientada a **Features**, garantindo modularidade, separação de responsabilidades e fácil manutenção:

```bash
src/
├── Backend/                 # Projeto API ASP.NET Core (.NET 10 / Minimal APIs)
│   ├── Program.cs           # Configuração de endpoints e Swagger/OpenAPI
│   └── Backend.csproj
├── assets/                  # Imagens, vetores e assets estáticos
├── constants/
│   └── animations.ts        # Presets centralizados do Motion (fadeInUp, stagger, sheetSlide)
├── features/                # Módulos verticais por funcionalidade/seção
│   ├── aboutMe/             # Seção Sobre: Pilares de engenharia e formação
│   │   └── about-section.tsx
│   ├── contact/             # Seção de Contato & Canais
│   │   ├── contact-form.tsx # Formulário seguro com cópia rápida e feedback
│   │   └── contact-section.tsx
│   ├── hero/                # Seção Principal (Hero)
│   │   ├── hero-badge.tsx   # Badges dinâmicos de status (Disponibilidade, Stack)
│   │   └── hero-section.tsx # Apresentação com Particles, DecryptedText e CTAs
│   ├── home/                # Orquestrador da Home Page
│   │   ├── home-page.tsx
│   │   └── index.ts
│   ├── navbar/              # Cabeçalho sticky, links rápidos e Sheet mobile
│   │   └── navbar.tsx
│   ├── projects/            # Vitrine de Projetos & Casos de Estudo
│   │   ├── adapty-card.tsx  # Card interativo do projeto Adapty (com Tabs)
│   │   ├── korp-card.tsx    # Card interativo do desafio KorpERP (com Tabs)
│   │   ├── project-dialog.tsx # Modal para detalhamento arquitetural profundo
│   │   └── projects-section.tsx
│   ├── skills/              # Matriz de competências técnicas organizadas
│   │   └── skills-section.tsx
│   └── theme/               # Gestão de tema claro / escuro
│       ├── theme-provider.tsx
│       └── theme-toggle.tsx
├── shared/                  # Componentes reutilizáveis e utilitários globais
│   ├── lib/
│   │   └── utils.ts         # Função utilitária cn() (clsx + twMerge)
│   └── ui/                  # Componentes de UI primitivos
│       ├── badge.tsx        # Badges com variantes sci-fi e status
│       ├── button.tsx       # Botões com variantes sci-fi, neon e glow
│       ├── dialog.tsx       # Modais acessíveis via Radix
│       ├── input.tsx        # Inputs de formulário
│       ├── sheet.tsx        # Drawer lateral mobile
│       ├── tabs.tsx         # Navegação por abas
│       ├── textarea.tsx     # Textarea para contato
│       ├── tooltip.tsx      # Tooltips informativos
│       └── react-bits/      # Componentes visuais portados do ecossistema React Bits
│           ├── decrypted-text.tsx
│           ├── particles-background.tsx
│           ├── spotlight-card.tsx
│           └── tilted-card.tsx
├── App.tsx                  # Componente raiz da aplicação
├── index.css                # Tokens CSS, variáveis de tema e diretivas Tailwind v4
└── main.tsx                 # Ponto de entrada do React DOM
```

---

## 🎨 Destaques de Design & UX

1. **Paleta Dark Sci-Fi / Cybercore Elegante:**
   - **Background Primário:** `#070A12` (profundidade ultra-dark para imersão técnica).
   - **Superfícies & Cartões:** `#0E1420` e `#111827` com bordas sutis translúcidas (`border-border/80`).
   - **Hierarquia de Acentos:**
     - `Cyan (#06b6d4 / #0ea5e9)`: Ações primárias, títulos e efeitos glow de destaque.
     - `Violet (#8b5cf6)`: Tecnologias emergentes, IA Generativa e arquitetura.
     - `Green (#10b981)`: Status de sistema online, testes unitários e resiliência.

2. **Tipografia Técnica & Fluida:**
   - Tipografia semântica baseada na **Geist Variable** combinada com **JetBrains / UI-Monospace** para trechos de código, portas de microsserviços e badges técnicos.

3. **Microinterações com Propósito Técnico:**
   - **Tabs por Projeto:** Alternância rápida entre *Visão Geral*, *Arquitetura* e *Resultados/Resiliência* sem recarregar a tela.
   - **Spotlight Cards:** Luz radial suave acompanhando o cursor do mouse, destacando a profundidade do card sob foco.
   - **Diálogos de Deep Dive Arquitetural:** Modais completos com detalhes de decisões técnicas, diagramas de rotas e banco de dados.

4. **Acessibilidade Inclusiva (A11y First):**
   - **Prevenção de Vertigem e Distração:** Todo o sistema de animações verifica `useReducedMotion()`. Ao ativar a redução de movimento no sistema operacional, efeitos de translação e escalas são desativados instantaneamente.
   - **Navegação Completa por Teclado:** Foco visível com `focus-visible:ring-2` em todos os elementos interativos.
   - **Cópia Rápida Inteligente:** No formulário de contato, caso o usuário prefira enviar a mensagem pelo próprio cliente de e-mail, há um botão de 1 clique para copiar o texto formatado para a área de transferência.

---

## 🖥️ Seções Implementadas

| Seção | O que foi construído |
| :--- | :--- |
| **Navbar** | Cabeçalho fixo com efeito *glassmorphism* (backdrop-blur), logotipo com brilho ao hover, links com scroll suave, botão de tema claro/escuro e menu lateral deslizante (Sheet) para smartphones e tablets. |
| **Hero Section** | Badges dinâmicos com pulso verde de status ("Disponível para Oportunidades"), headline com efeito `DecryptedText`, tags de stack com tooltips descritivos, CTAs para projetos/GitHub e fundo com `ParticlesBackground`. |
| **Projetos em Destaque** | Showcase detalhado dos projetos **Adapty** (Acessibilidade cognitiva com IA e C#/.NET), **KorpERP** (Microsserviços distribuídos em .NET 8 com resiliência HTTP 503 e SPA em Angular 17+) e **Doctopus** (Prontuário desktop interdisciplinar em C# WPF + MySQL). |
| **Sobre & Pilares** | 4 pilares de engenharia detalhados (Backend .NET, Clean Architecture, Frontend Reativo e Qualidade/DevOps/IA), acompanhados de histórico de formação e experiência corporativa. |
| **Skills & Domínios** | Matriz de competências técnicas categorizadas (Back-End, Front-End, Bancos de Dados & Cloud/DevOps), com badges destacados e sem notas arbitrárias percentuais. |
| **Contato & Redes** | Canais diretos com links para LinkedIn e GitHub, informações de modelo de trabalho (Remoto / Híbrido) e formulário seguro com validação e cópia rápida. |

---

## ⚡ Instruções de Execução

### Pré-requisitos
- **Node.js:** Versão 20.x ou superior recomendada.
- **npm:** Versão 10.x ou superior.
- *(Opcional)* **.NET 10 SDK:** Caso deseje rodar a API de backend localmente.

### 1. Clonar o Repositório e Instalar Dependências
```bash
# Entrar na pasta do projeto
cd portfolio.dev

# Instalar as dependências do frontend
npm install
```

### 2. Rodar em Ambiente de Desenvolvimento
```bash
npm run dev
```
O servidor de desenvolvimento do Vite será inicializado (por padrão em `http://localhost:5173/`).

### 3. Scripts Disponíveis
```bash
# Iniciar o servidor local Vite
npm run dev

# Verificar tipagem TypeScript e gerar build otimizado para produção
npm run build

# Visualizar a versão de build localmente
npm run preview

# Executar a verificação estática com ESLint
npm run lint
```

### 4. (Opcional) Executar o Backend ASP.NET Core
```bash
cd src/Backend
dotnet run
```
A API será executada com suporte a Swagger/OpenAPI em modo desenvolvimento.

---

## 🔮 Melhorias Futuras & Roadmap

Com base no planejamento inicial do projeto, as seguintes evoluções estão mapeadas para as próximas iterações:

### 1. Terminal Interativo Web (CLI Integrado)
- Implementar um mini terminal interativo simulando um console de desenvolvedor (via componente React ou xterm.js).
- Comandos previstos: `help`, `about`, `skills`, `projects`, `clear`, `contact` e `dotnet run`.
- O terminal atuará como uma experiência lúdica e opcional, sem substituir a navegação gráfica padrão.

### 2. Integração Completa com a API ASP.NET Core
- Conectar o formulário de contato à API Minimal do ASP.NET Core com envio de e-mails via serviço SMTP/SendGrid e rate-limiting.
- Endpoint de status de serviços e health-checks em tempo real (exibindo se os serviços estão operacionais).

### 3. Magic UI: Animated Beam & Code Comparison
- Adicionar o componente **Animated Beam** para ilustrar visualmente o fluxo de dados dos microsserviços:  
  `Angular / React ➔ Gateway ➔ Microsserviço .NET 8 ➔ SQL Server / Cache`.
- Inclusão do componente **Code Comparison** para exibir comparativos entre refatorações de código legado vs. código moderno com Clean Architecture e C# 12/13.

### 4. Aceternity UI: Tracing Beam & Timeline de Carreira
- Criação de uma linha do tempo vertical interativa com feixe de luz condutor (*Tracing Beam*) ilustrando a evolução acadêmica e profissional (CI&T, projetos e certificações).

### 5. Carrossel de Telas e Demonstrações (Cult UI)
- Integração de carrossel de capturas de tela e gravação dos fluxos reais do Adapty e KorpERP, permitindo visualização de interfaces sem depender exclusivamente de links externos.

### 6. Internacionalização (i18n)
- Suporte a alternância de idioma entre **Português (PT-BR)** e **Inglês (EN-US)** para recrutadores internacionais.

### 7. Testes Automatizados e CI/CD
- Adicionar testes de componentes com **Vitest** e **Testing Library**.
- Pipeline de deploy automatizado via **GitHub Actions** ou **Azure DevOps** para deploy contínuo no Vercel ou Azure Static Web Apps.

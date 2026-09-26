# Frontend do Portfólio Web .NET/C# Full Stack

Frontend do portfólio pessoal focado em vagas de Desenvolvedor .NET/C#, com ênfase em projetos full stack, interface moderna, acessibilidade, documentação e integração com API ASP.NET Core.

## Objetivo

Construir uma interface visual profissional com identidade dark sci-fi/tech, sem comprometer legibilidade, navegação, acessibilidade e clareza para recrutadores.

O frontend deve:
- destacar projetos reais e autorais;
- mostrar integração com backend ASP.NET Core;
- apresentar stack, arquitetura e resultados de forma visual;
- manter equilíbrio entre estética gamer/sci-fi e aparência profissional.

## Stack principal

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- Motion
- Lucide React

## Papel de cada biblioteca

### shadcn/ui
Base estrutural da interface, não a identidade visual final.

Usos previstos:
- Botões principais e secundários
- Dialog para detalhes rápidos
- Sheet para menu mobile
- Tabs para visão geral, arquitetura e resultados
- Tooltip para tecnologias
- Badge para stack e status
- Formulário de contato
- Alternador de tema

### Motion
Responsável por animações principais e microtransições.

Regras:
- respeitar `prefers-reduced-motion`;
- priorizar animações curtas de entrada, hover e transição;
- evitar excesso de deslocamento, paralaxe e efeitos contínuos.

### React Bits
Usado de forma pontual para efeitos de destaque.

Limite:
- no máximo 2 efeitos do React Bits por tela.

Componentes preferenciais:
- Decrypted Text
- Glitch Text
- Spotlight Card
- Particles ou Grid Background
- Tilted Card
- Terminal ou ASCII effects

Restrições:
- Infinite Menu não deve ser usado como navegação principal;
- glitch apenas em títulos curtos;
- partículas apenas no hero.

### Aceternity UI
Usado para atmosfera visual e componentes de destaque.

Componentes preferenciais:
- Spotlight
- Background Dots Masked
- Card Spotlight
- Tracing Beam
- Timeline

Regra:
- não combinar Aurora, Beams, Sparkles, Meteors e Spotlight na mesma página.

### Magic UI
Usado para efeitos visuais com valor de comunicação técnica.

Componentes preferenciais:
- Typing Animation
- Text Animate
- Orbiting Circles
- Retro Grid
- Meteors
- Animated Beam
- Dock
- Code Comparison

Regra:
- Animated Beam pode ser usado para representar o fluxo React → ASP.NET Core → PostgreSQL;
- Retro Grid não deve ocupar a página inteira.

### Animate UI
Usado para microinterações e polimento de interface.

Usos previstos:
- Accordion de detalhes técnicos
- Tabs da página de projeto
- Tooltip das tecnologias
- Ícones animados em ações
- Disclosure da arquitetura
- Botão de copiar comandos
- Alternador de tema

### Cult UI
Usado apenas em casos específicos de apresentação visual.

Usos previstos:
- Feature Carousel para telas de projeto
- Cards com movimento sutil
- Transições entre imagens
- Comparadores

Regra:
- autoplay desativado por padrão ou com controle explícito do usuário.

### Cybercore CSS
Usado como camada estética complementar, não como fundação total da interface.

Regra principal:
- usar em apenas 20% a 30% da interface;
- manter 70% a 80% do site com estrutura limpa, escura, legível e profissional.

Usos previstos:
- hero com título glitch curto;
- botões secundários com borda neon;
- card do projeto principal com visual “system panel”;
- chips de stack;
- bloco “system status” com deploy, testes e CI;
- pequeno terminal decorativo ou interativo.

## Direção visual

### Paleta
- Fundo principal: `#070A12`
- Superfícies: `#0E1420` e `#111827`
- Texto principal: branco levemente azulado
- Texto secundário: cinza-azulado
- Cor principal: cyan
- Cor secundária: violeta
- Verde: apenas para status, terminal e testes aprovados

### Regras de cor
- não usar cyan, roxo, verde e azul com o mesmo peso visual;
- cyan = ação principal;
- violeta = detalhe atmosférico;
- verde = feedback técnico e status positivo.

### Bordas e brilho
- bordas finas, neutras e discretas;
- glow apenas no hero, foco e projeto selecionado;
- evitar brilho constante em cards, inputs e navegação.

### Tipografia
- leitura: Satoshi, General Sans ou Inter;
- técnica: JetBrains Mono.

## Estrutura da interface

### Hero
- fundo escuro com grid estático;
- spotlight cyan discreto;
- título principal: “Desenvolvedor .NET/C# Full Stack”;
- efeito `DecryptedText` apenas no nome;
- CTA primário: “Ver projetos”;
- CTA secundário: “Baixar currículo”;
- pequeno terminal com `dotnet run`;
- sem carrossel;
- sem objeto 3D obrigatório no MVP.

### Projetos
- 1 projeto principal em destaque;
- 2 projetos secundários menores;
- screenshot real da aplicação;
- stack em badges;
- botões para demo, GitHub e estudo de caso;
- Card Spotlight apenas no projeto selecionado;
- filtros simples: Full Stack, Backend e Experimentos.

### Estudo de caso
Cada projeto principal deve exibir:
- problema resolvido;
- arquitetura;
- decisões técnicas;
- desafios;
- testes e qualidade;
- screenshots;
- API e Swagger;
- melhorias futuras.

## Terminal interativo

Opcional no MVP. Pode ser implementado com terminal React simples ou com xterm.js.

Comandos iniciais:
```txt
help
about
skills
projects
open project-1
github
contact
clear
```

Regra:
- o terminal nunca deve ser a única forma de navegação.

## Combinação principal do MVP

```txt
Base:
- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui

Complementos:
- Motion
- Lucide React
- React Bits: DecryptedText
- Aceternity UI: Spotlight
- Magic UI: Animated Beam
- Cybercore CSS em áreas selecionadas
```

## Recursos fora do MVP
- React Three Fiber
- terminal avançado com WebSocket
- animações 3D complexas
- backgrounds muito dinâmicos
- múltiplos efeitos especiais na mesma tela

## Integração com backend

O frontend deve consumir uma API ASP.NET Core para exibir ou preparar:
- projetos;
- detalhes técnicos;
- links de demonstração;
- dados de contato ou formulário;
- possíveis métricas e status de deploy.

## Acessibilidade e performance

Regras obrigatórias:
- respeitar `prefers-reduced-motion`;
- evitar autoplay sem controle;
- garantir contraste alto;
- permitir navegação por teclado;
- manter foco visível;
- usar imagens reais e otimizadas;
- evitar excesso de efeitos simultâneos;
- manter legibilidade em desktop e mobile.

## Como rodar

```bash
npm install
npm run dev
```

## Meta de resultado

O site deve transmitir:
- competência em frontend moderno;
- integração real com ecossistema .NET;
- organização técnica;
- cuidado com UX;
- identidade visual própria sem exagero.
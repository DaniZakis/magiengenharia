# Homepage Layout - Visual Summary

## Full Page Flow (Top to Bottom)

```
┌─────────────────────────────────────────────────────────────┐
│                     HEADER (Sticky)                         │
│  Logo                              Nav    [Contato Button]  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      HERO SECTION                           │
│                                                             │
│        🎯 "Soluções em Engenharia para seu Projeto"        │
│                                                             │
│        [Solicitar Orçamento]  [Saiba Mais]                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  NOSSOS SERVIÇOS (CAROUSEL)                 │
│                                                             │
│  ◀  ┌──────────────────────────────────┐  ▶               │
│     │  Service Card                    │                   │
│     │  ┌────────────────────────────┐  │                   │
│     │  │    Service Image           │  │                   │
│     │  ├────────────────────────────┤  │                   │
│     │  │ 📋 Service Title           │  │                   │
│     │  │ Description text...        │  │                   │
│     │  │ [Saiba Mais →]             │  │                   │
│     │  └────────────────────────────┘  │                   │
│     └──────────────────────────────────┘                   │
│                                                             │
│     ● ○ ○              (Slide indicators)                  │
│                        1 / 3                               │
│                                                             │
│           [Ver Todos os Serviços]                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              POR QUE NOS ESCOLHER?                          │
│                                                             │
│  ⚡               👥              🎯              💡         │
│  Eficiência   Equipe       Solução         Inovação        │
│  Garantida   Especializada  Personalizada   Constante      │
│                                                             │
│  Processos    Profissionais   Cada projeto    Melhores     │
│  otimizados   experientes     é único        práticas       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│         PARCERIAS DE SUCESSO (Infinite Scroll)              │
│                                                             │
│  Logo1  Logo2  Logo3  Logo4  Logo5  Logo6  Logo1  Logo2    │
│  ──────────────────────────────────────────────────────>    │
│                                                             │
│       (Logos scroll infinitely, pause on hover)             │
│                                                             │
│  Mobile Version (Static Grid):                             │
│  ┌────┬────┐                                                │
│  │L1  │ L2 │                                                │
│  ├────┼────┤                                                │
│  │L3  │ L4 │                                                │
│  └────┴────┘                                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│         NOTÍCIAS E ARTIGOS              [Ver Todos]         │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Blog Card  │  │  Blog Card   │  │  Blog Card   │      │
│  │              │  │              │  │              │      │
│  │ ┌──────────┐ │  │ ┌──────────┐ │  │ ┌──────────┐ │      │
│  │ │  Image   │ │  │ │  Image   │ │  │ │  Image   │ │      │
│  │ └──────────┘ │  │ └──────────┘ │  │ └──────────┘ │      │
│  │              │  │              │  │              │      │
│  │ 22 jan 2024  │  │ 18 jan 2024  │  │ 15 jan 2024  │      │
│  │ Título Artigo│  │ Título Artigo│  │ Título Artigo│      │
│  │              │  │              │  │              │      │
│  │ Lorem ipsum  │  │ Lorem ipsum  │  │ Lorem ipsum  │      │
│  │ Ler Mais →   │  │ Ler Mais →   │  │ Ler Mais →   │      │
│  │ João Silva   │  │ Maria Santos │  │ Carlos Mendes│      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│                                                             │
│  Mobile: 1 column | Tablet: 2 columns | Desktop: 3 columns │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│            PRONTO PARA COMEÇAR? (CTA Section)               │
│                                                             │
│  "Pronto para Começar seu Projeto?"                        │
│                                                             │
│  "Conte conosco para transformar suas ideias..."           │
│                                                             │
│  [Solicitar Orçamento]    [🟢 Chat WhatsApp]               │
│                                                             │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                                 │
│                                                             │
│  Maggi Engenharia        Links Rápidos       Contato       │
│  Description            Home                 Tel: +55...   │
│                          Serviços             WA: Chat      │
│                          Contato              Email:...     │
│                                               Endereço      │
│  © 2024 Maggi Engenharia. Todos os direitos reservados.    │
│                                                             │
│  [🟢 WhatsApp]  [f]  [📷]  [in]                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Key Interactive Elements

### Service Carousel
```
Navigation:
- Auto-rotates every 5 seconds
- Click ◀ previous button to go back
- Click ▶ next button to go forward  
- Click ● dot to jump to specific slide
- Carousel pauses when interacting
```

### Partners Section
```
Desktop:
- Smooth infinite scroll (left to right)
- Pause on hover
- Grayscale logos → Color on hover

Mobile:
- Static 2x2 grid
- 4 logos visible
- No scroll animation
```

### Blog Cards
```
Each Card Shows:
- Featured image
- Publication date (formatted)
- Article title (2 lines max)
- Excerpt text (3 lines max)
- Author name
- "Ler Mais →" link

Click "Ver Todos os Artigos" to see all posts
```

### WhatsApp Button
```
Location 1: Final CTA Section
- Official WhatsApp Green (#25D366)
- Text: "Chat WhatsApp"
- Opens: https://wa.me/5511999999999

Location 2: Footer Social Icons
- Green WhatsApp icon (first icon)
- Same WhatsApp link
```

---

## Responsive Behavior

### Desktop (1200px+)
- Service carousel with side buttons
- Partners section scrolls
- Blog grid 3 columns
- All features visible

### Tablet (768px - 1199px)  
- Service carousel with side buttons (smaller)
- Partners section scrolls
- Blog grid 2 columns
- Optimized spacing

### Mobile (< 768px)
- Service carousel, no side buttons
- Full-width service cards
- Partners grid 2x2 (4 static logos)
- Blog grid 1 column
- Touch-friendly navigation

---

## Color Scheme

```
Primary:    #AA8315  (Warm Gold)
Secondary:  #6B5310  (Deep Brown)
Accent:     #D4A574  (Light Gold)
Light BG:   #F5F3F0  (Off-white)
Dark Text:  #2C2416  (Very Dark Brown)
WhatsApp:   #25D366  (Official Green)
```

---

## Animation & Interactions

- **Carousel**: Smooth slide transition (500ms)
- **Partners**: Continuous scroll loop
- **Hover Effects**: Cards lift, colors change
- **Button Hover**: Color shift + shadow
- **Dots**: Smooth expand/collapse animation

---

## Total Page Content

- 1 Hero Section
- 1 Service Carousel (3 services)
- 1 Feature Section (4 features)
- 1 Partner Section (6+ partners - customizable)
- 1 Blog Section (3 blog posts - fake data)
- 1 Final CTA Section
- 1 Footer

**Total Build Size**: ~100 KB (with all JS bundles)
**Total Page Load**: ~2 seconds (optimized)

---

**Design Philosophy**: Clean, modern, minimal - focus on content and conversion

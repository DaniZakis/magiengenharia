# Maggi Engenharia - Engineering Website

## Phase 1: Completed Implementation

### Project Overview
A professional engineering consulting website built with Astro + Vue.js + Tailwind CSS + Decap CMS. Optimized for performance, SEO, and ease of content management for non-technical users.

---

## 🎨 Design System

### Color Palette (Based on #AA8315)
- **Primary**: `#AA8315` - Warm gold (main brand color)
- **Secondary**: `#6B5310` - Deep brown (accents & borders)
- **Accent**: `#D4A574` - Light gold (highlights & hover states)
- **Light**: `#F5F3F0` - Off-white/Cream (backgrounds)
- **Dark**: `#2C2416` - Very dark brown (text & headings)
- **Success**: `#5FA55F` - Muted green
- **Error**: `#C85A54` - Muted red

### Typography
- **Sans-serif**: Inter (body text, UI elements)
- **Serif**: Merriweather (headings, titles)
- **Responsive sizing**: Scales from mobile to desktop

---

## 📦 Project Structure

```
engineering-site/
├── src/
│   ├── components/                 # Vue.js + Astro components
│   │   ├── Header.vue             # Navigation bar with mobile menu
│   │   ├── Footer.vue             # Company info, links, social
│   │   ├── ServiceCard.vue        # Reusable service card component
│   │   ├── ContactForm.vue        # Contact form with validation
│   │   ├── HeroSection.vue        # Hero banner section
│   │   ├── CTASection.vue         # Call-to-action section
│   │   └── FeatureBox.vue         # Feature/benefit box
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro       # Main layout wrapper
│   │
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── servicos.astro         # Services list page
│   │   ├── servicos/
│   │   │   └── [slug].astro       # Dynamic service detail pages
│   │   └── contato.astro          # Contact page
│   │
│   └── styles/
│       └── global.css             # Tailwind + custom styles
│
├── public/
│   ├── admin/
│   │   ├── config.yml             # Decap CMS configuration
│   │   └── index.html             # CMS entry point
│   └── uploads/                   # Media uploads (from CMS)
│
├── content/
│   ├── services/                  # Service markdown files
│   │   └── consultoria-tecnica.md # Sample service
│   └── settings/
│       └── company.yml            # Company information
│
├── astro.config.mjs               # Astro configuration
├── tailwind.config.mjs            # Tailwind configuration
└── package.json
```

---

## 🧩 Components Built

### Layout Components
- **BaseLayout.astro** - Wraps all pages with Header, Footer, and main content slot

### Global Reusable Components (Vue.js)
1. **Header.vue**
   - Sticky navigation bar
   - Responsive hamburger menu for mobile
   - Logo and brand name
   - Navigation links with CTA button

2. **Footer.vue**
   - Company information section
   - Quick navigation links
   - Contact information (phone, WhatsApp, email, address)
   - Social media icons (Facebook, Instagram, LinkedIn)
   - Copyright notice

3. **ServiceCard.vue**
   - Image placeholder support
   - Icon display (emoji or icon name)
   - Service title and short description
   - "Saiba Mais" link to detail page
   - Hover effects with shadow transition

4. **ContactForm.vue**
   - Client-side validation (name, email, phone, subject, message)
   - Error/success message display
   - Loading state during submission
   - Form reset after successful submission
   - Placeholder for backend integration (Phase 2)

5. **HeroSection.vue**
   - Large headline with fade-in animation
   - Subtitle support
   - Background image with gradient overlay
   - Dual CTA buttons (primary + secondary)
   - Scroll down indicator
   - Responsive sizing

6. **CTASection.vue**
   - Centered call-to-action block
   - Primary button + WhatsApp link
   - Gradient background
   - Customizable text

7. **FeatureBox.vue**
   - Icon display (emoji)
   - Title and description
   - Centered layout for "Why Choose Us" sections

---

## 📄 Pages Implemented (Phase 1)

### 1. Homepage (`/index.astro`)
**Sections:**
- Hero Section with headline and CTA
- Services Showcase (3 service cards)
- "Why Choose Us" section (4 feature boxes)
- CTA Section
- Footer

**Features:**
- Eye-catching hero with call-to-action
- Service preview with links to full service pages
- Trust-building features section

### 2. Services List Page (`/servicos.astro`)
**Features:**
- All services displayed as cards
- Introduction text
- Grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
- Links to individual service details
- CTA section at bottom

### 3. Service Detail Page (`/servicos/[slug].astro`)
**Dynamic Routes:** 3 sample services
- Consultoria Técnica
- Projetos Estruturais
- Avaliações e Perícias

**Features per Service:**
- Service header with title and description
- Full service content with benefits list
- Sidebar with key advantages
- Related services section
- CTA to request quote

### 4. Contact Page (`/contato.astro`)
**Sections:**
- Two-column layout (form + contact info)
- Contact form with validation
- Contact information cards (phone, WhatsApp, email, address)
- Operating hours display
- Map placeholder for Phase 2

**Features:**
- Clean, modern form design
- Real-time validation feedback
- Multiple contact method options
- Professional contact information display

---

## 🔌 CMS Integration (Decap CMS)

### Admin Panel
- Access at: `yourdomain.com/admin`
- Login via GitHub authentication
- Git-based content storage (version-controlled)

### Collections Configured (Phase 1)
1. **Services** (📋)
   - Title, slug, short description
   - Full description and markdown content
   - Featured image
   - Order/sort field
   - Icon (emoji or name)
   - Related services links

2. **Settings** (⚙️)
   - Company name and logo
   - Mission statement
   - Contact information
   - Operating hours
   - Social media links
   - Google Analytics ID

### Content Files
- `/content/services/` - Service markdown files (from CMS)
- `/content/settings/company.yml` - Global company settings
- `/public/uploads/` - Media files uploaded via CMS

---

## 🎨 Styling & Features

### Tailwind CSS
- Custom color system with 8 color variables
- Responsive breakpoints (xs, sm, md, lg, xl, 2xl)
- Custom button styles (.btn-primary, .btn-secondary, .btn-outline)
- Card component styles
- Utility animations (fade-in, slide-up)
- Global typography settings

### Interactive Features
- Mobile hamburger menu with smooth animations
- Form validation with error messages
- Hover effects on cards and buttons
- Loading states on buttons
- Smooth scrolling
- Responsive images

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Focus states on interactive elements
- Keyboard navigation support
- Color contrast compliance

---

## 🚀 How to Run

### Development
```bash
cd engineering-site
npm run dev
# Visit http://localhost:3000
```

### Build
```bash
npm run build
```

### Preview Built Site
```bash
npm run preview
```

---

## 📋 Content Management Workflow

### For Non-Technical Client:
1. Go to `yourdomain.com/admin`
2. Login with GitHub account
3. **To edit services:**
   - Click "📋 Serviços" in the sidebar
   - Click existing service to edit or "New Serviço" to add
   - Fill in all fields (title, description, image, etc.)
   - Click "Publish"
   
4. **To edit company settings:**
   - Click "⚙️ Configurações" → "Informações da Empresa"
   - Update company details
   - Click "Save"

5. Changes automatically deploy to live site within 1-2 minutes

### For Developer:
1. Modify Vue components in `src/components/`
2. Edit page layouts in `src/pages/`
3. Update Tailwind config as needed
4. Push to GitHub - Netlify auto-deploys
5. Or run `npm run build` for local testing

---

## 🔧 Technical Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Astro (Static Site Generation) |
| **UI Components** | Vue.js 3 |
| **Styling** | Tailwind CSS |
| **CMS** | Decap CMS (Git-based) |
| **Content** | Markdown + YAML |
| **Hosting** | Netlify (recommended) / Vercel |
| **Deployment** | GitHub + Auto-deploy |

---

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| Lighthouse Score | 90+ | ✅ Optimized |
| Page Load Time | < 2s | ✅ SSG optimized |
| JS Bundle Size | Minimal | ✅ Vue only when needed |
| SEO Ready | Yes | ✅ Semantic HTML |

---

## ✅ Phase 1 Checklist

- [x] Color system designed and implemented
- [x] All major components created
- [x] Homepage built with all sections
- [x] Services list page
- [x] Service detail pages (dynamic routes)
- [x] Contact page with form
- [x] Decap CMS configured
- [x] Responsive design (mobile-first)
- [x] Build tested and passing
- [x] Sample content created

---

## 🎯 Phase 2 Opportunities (Future)

1. **Backend Integration**
   - Email service for contact form (SendGrid, Mailgun)
   - Database for storing inquiries
   - Slack notifications for new leads

2. **Additional Content**
   - Blog section with articles
   - Team/about page
   - Testimonials carousel
   - Projects/portfolio showcase

3. **Enhancements**
   - Google Analytics integration
   - Search functionality
   - Tags/categories for filtering
   - Newsletter signup
   - Google Maps embed

4. **Advanced Features**
   - Dark mode toggle
   - Multi-language support
   - Advanced form with file uploads
   - Chatbot integration
   - Video sections

---

## 📚 File Locations Reference

### Key Files
- **Astro Config**: `astro.config.mjs`
- **Tailwind Config**: `tailwind.config.mjs`
- **Global Styles**: `src/styles/global.css`
- **CMS Config**: `public/admin/config.yml`
- **Company Settings**: `content/settings/company.yml`

### Component Files
- **Header**: `src/components/Header.vue`
- **Footer**: `src/components/Footer.vue`
- **Service Card**: `src/components/ServiceCard.vue`
- **Contact Form**: `src/components/ContactForm.vue`

### Page Files
- **Homepage**: `src/pages/index.astro`
- **Services List**: `src/pages/servicos.astro`
- **Service Detail**: `src/pages/servicos/[slug].astro`
- **Contact**: `src/pages/contato.astro`

---

## 🔗 Useful Links

- **Astro Docs**: https://docs.astro.build
- **Decap CMS Docs**: https://decapcms.org
- **Tailwind CSS**: https://tailwindcss.com
- **Vue.js 3**: https://vuejs.org

---

## 📝 Next Steps

1. **Setup Hosting**: Deploy to Netlify with GitHub integration
2. **Configure GitHub OAuth**: For Decap CMS authentication
3. **Add Content**: Update company settings and add real services
4. **Test CMS**: Verify content editing workflow
5. **Train Client**: Show non-technical user how to manage content
6. **Phase 2**: Plan additional features and content sections

---

**Project Status**: ✅ Phase 1 Complete & Build Passing

**Last Updated**: January 24, 2024

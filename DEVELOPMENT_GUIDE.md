# Development Guide - Maggi Engenharia Website

## Quick Start

### Installation & Setup
```bash
# Navigate to project
cd engineering-site

# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

---

## File Structure Quick Reference

```
src/
├── components/          # Reusable Vue.js components
├── layouts/            # Astro layout components
├── pages/              # Routes & pages
└── styles/             # Global CSS
```

---

## Common Development Tasks

### Adding a New Service

**Option 1: Via Decap CMS (Recommended for Non-Developers)**
1. Go to `yourdomain.com/admin`
2. Click "📋 Serviços"
3. Click "New Serviço"
4. Fill in fields:
   - **Título** - Service name
   - **Slug** - URL-friendly name (auto-generated)
   - **Descrição Curta** - For cards (max 160 chars)
   - **Descrição Completa** - Full description
   - **Imagem Destaque** - Upload image
   - **Conteúdo Detalhado** - Rich markdown content
   - **Ordem** - Display order
   - **Ícone** - Emoji (e.g., 📋)
   - **Serviços Relacionados** - Link related services
5. Click "Publish"

**Option 2: Direct File (For Developers)**
1. Create file: `content/services/my-service.md`
2. Use format from `content/services/consultoria-tecnica.md`
3. Push to GitHub - auto-deploys

### Modifying Page Layout

Edit the corresponding `.astro` file:
- Homepage: `src/pages/index.astro`
- Services List: `src/pages/servicos.astro`
- Service Detail: `src/pages/servicos/[slug].astro`
- Contact: `src/pages/contato.astro`

### Styling Changes

#### Update Colors
Edit `tailwind.config.mjs`:
```javascript
colors: {
  primary: '#AA8315',      // Change to new color
  secondary: '#6B5310',    // etc.
}
```

#### Add Custom CSS
Edit `src/styles/global.css`:
```css
@layer components {
  .my-custom-class {
    @apply /* tailwind classes */;
  }
}
```

### Updating Company Settings

**Via CMS:**
1. Click "⚙️ Configurações"
2. Click "Informações da Empresa"
3. Update:
   - Company name, logo, favicon
   - Phone, WhatsApp, email
   - Address, city, state, zip
   - Business hours
   - Social media links
   - Google Analytics ID
4. Save

**Direct File:**
Edit `content/settings/company.yml` and push to GitHub

---

## Component Reference

### Using ServiceCard
```astro
<ServiceCard 
  client:load
  service={{
    title: "Service Name",
    slug: "service-slug",
    description: "Full description",
    shortDescription: "Short for card",
    image: "/path/to/image.jpg",
    icon: "📋"
  }}
/>
```

### Using ContactForm
```astro
<ContactForm client:load />
```
Form automatically handles:
- Validation
- Error display
- Loading state
- Success message

### Using HeroSection
```astro
<HeroSection
  client:load
  title="Main Headline"
  subtitle="Subheading"
  backgroundImage="/path/to/image.jpg"
  primaryCtaLabel="Button Text"
  primaryCtaUrl="/page-url"
  secondaryCtaLabel="Alt Button"
  secondaryCtaUrl="/alt-url"
/>
```

### Using CTASection
```astro
<CTASection
  client:load
  title="Call To Action"
  description="Description text"
  primaryLabel="Submit"
  primaryUrl="/contato"
  secondaryLabel="WhatsApp"
  showWhatsApp={true}
/>
```

---

## Adding Dynamic Content

### Add New Service to Detail Page
1. Edit `src/pages/servicos/[slug].astro`
2. Add entry to `servicesData` object:
```javascript
'new-service-slug': {
  title: 'Service Title',
  slug: 'new-service-slug',
  icon: '🎯',
  description: 'Description',
  shortDescription: 'Short description',
  content: `<h2>Content</h2><p>Details...</p>`,
  benefits: ['Benefit 1', 'Benefit 2'],
  related: ['related-slug-1', 'related-slug-2']
}
```
3. The route `/servicos/new-service-slug` will auto-generate

### Add Feature to Homepage
Edit `src/pages/index.astro`:
```javascript
const features = [
  {
    icon: '⚡',
    title: 'Feature Title',
    description: 'Feature description text here.'
  },
  // ... more features
];
```

---

## Build & Deployment

### Local Build Test
```bash
npm run build
```
Output goes to `/dist/` folder

### Deploy to Netlify
1. Connect GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

**GitHub Integration** (for Decap CMS):
1. Create GitHub OAuth app
2. Add credentials to Netlify environment
3. CMS will use GitHub for auth

---

## Customization Tips

### Change Primary Color
The brand color (`#AA8315`) is used throughout:
- Update in `tailwind.config.mjs` → colors.primary
- Also update: secondary, accent colors for harmony
- Colors apply automatically to all components

### Modify Header/Footer
- Header: `src/components/Header.vue`
- Footer: `src/components/Footer.vue`
- Both support customization while maintaining responsive design

### Update Hero Section
Edit the HeroSection in relevant pages:
- Homepage hero
- Services page hero
- Contact page hero
- Service detail hero

### Form Customization
`src/components/ContactForm.vue`:
- Change field names
- Modify validation rules
- Update success/error messages
- Add/remove fields

---

## Performance Optimization

### Images
- Use optimized images (compressed)
- Supported formats: JPG, PNG, WebP
- Upload via CMS media manager for auto-optimization

### Bundling
- Astro auto-optimizes static content
- Vue components only loaded when needed (`client:load`)
- CSS automatically minified
- JS tree-shaken and split

### SEO
- All pages have meta tags
- Semantic HTML structure
- JSON-LD schema ready (add in BaseLayout)
- Open Graph tags configured

---

## Debugging

### Development Mode Errors
Check browser console:
- Look for JavaScript errors
- Check network tab for 404s
- Review component warnings

### Build Errors
Run locally:
```bash
npm run build
```
Check error messages - usually very clear

### Form Not Submitting
In `src/components/ContactForm.vue`:
- Verify all required fields filled
- Check browser console for JS errors
- Ensure API endpoint configured (Phase 2)

---

## Common Tweaks

### Change CTA Button Color
In components using button classes:
```html
<!-- Primary button (gold) -->
<button class="btn-primary">Text</button>

<!-- Secondary button (brown) -->
<button class="btn-secondary">Text</button>

<!-- Outline button -->
<button class="btn-outline">Text</button>
```

### Add New Navigation Link
Edit `src/components/Header.vue`:
```vue
<a href="/new-page" class="hover:text-primary">Link Name</a>
```

### Modify Service Card Styling
Edit `src/components/ServiceCard.vue` - all styles are in `<style scoped>`

### Update Contact Page Layout
Edit `src/pages/contato.astro` - uses grid layout that's fully responsive

---

## Environment Variables (Phase 2)

When adding backend services:
```bash
# .env file
VITE_API_URL=https://api.example.com
VITE_SEND_GRID_KEY=xxx
```

Access in components:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Git Workflow

### Making Changes
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes
# Test with npm run dev

# Commit
git add .
git commit -m "Add new feature"

# Push
git push origin feature/new-feature

# Create pull request on GitHub
```

### Netlify Deployment
- Push to `main` branch → auto-deploys
- Pull requests get preview deployments
- CMS changes auto-commit to GitHub

---

## Useful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview built site
npm run astro           # Astro CLI commands

# Linting (optional)
npm run lint            # If configured

# Type checking (optional)
npm run check           # If TypeScript enabled
```

---

## Troubleshooting

### Pages Not Building
```bash
# Clear cache and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### CMS Not Saving Changes
1. Check GitHub authentication
2. Verify repository name in `config.yml`
3. Ensure branch is set to `main`
4. Check GitHub OAuth app credentials

### Styles Not Applying
1. Check Tailwind class name is correct
2. Verify `src/styles/global.css` imported in layout
3. Clear Tailwind cache: `npx tailwindcss -i src/styles/global.css -o dist/output.css`

### Images Not Showing
1. Verify path is correct (relative to public folder)
2. Check image file actually uploaded
3. For CMS images: confirm `/uploads/` folder exists

---

## Resources & Documentation

- **Astro**: https://docs.astro.build
- **Vue 3**: https://vuejs.org
- **Tailwind**: https://tailwindcss.com
- **Decap CMS**: https://decapcms.org
- **Markdown Guide**: https://www.markdownguide.org

---

## Getting Help

1. **For Astro questions**: Check Astro docs or community
2. **For Vue questions**: Vue 3 documentation
3. **For styling**: Tailwind documentation
4. **For CMS**: Decap CMS docs

---

**Happy Coding! 🚀**

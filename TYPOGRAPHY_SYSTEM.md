# 🎨 Typography System - CSS Variables

## Overview

The entire website now uses a **centralized CSS variable system** for typography. This means:

✅ **One source of truth** - Define fonts once  
✅ **Easy to maintain** - Change fonts globally  
✅ **Consistent styling** - No duplication  
✅ **Responsive** - Automatic scaling on different devices  
✅ **Future-proof** - Easy to update later  

---

## CSS Variables Reference

### Font Families

```css
--font-sans: Inter, Helvetica, Arial, sans-serif;
--font-serif: Merriweather, Georgia, serif;
--font-mono: 'Courier New', monospace;
```

**Usage:**
```css
/* Body text always uses sans-serif */
font-family: var(--font-sans);

/* Headings always use serif */
font-family: var(--font-serif);

/* Code blocks use monospace */
font-family: var(--font-mono);
```

---

## Text Sizes

### Desktop Sizes (1024px+)

```css
--text-xs:    0.75rem     /* Extra small: 12px */
--text-sm:    0.875rem    /* Small: 14px */
--text-base:  1rem        /* Base: 16px */
--text-lg:    1.125rem    /* Large: 18px */
--text-xl:    1.25rem     /* Extra Large: 20px */

--text-h4:    1.5rem      /* Heading 4: 24px */
--text-h3:    1.875rem    /* Heading 3: 30px */
--text-h2:    2.25rem     /* Heading 2: 36px */
--text-h1:    3rem        /* Heading 1: 48px */
```

### Tablet Sizes (768px - 1023px)

```css
--text-lg:    1.125rem    /* Same as desktop */
--text-xl:    1.25rem     /* Same as desktop */
--text-h4:    1.5rem      /* Same as desktop */
--text-h3:    1.875rem    /* Same as desktop */
--text-h2:    2.25rem     /* Same as desktop */
--text-h1:    3rem        /* Same as desktop */
```

### Mobile Sizes (< 640px)

```css
--text-h1:    1.5rem      /* Reduced for mobile */
--text-h2:    1.25rem     /* Reduced for mobile */
--text-h3:    1.125rem    /* Reduced for mobile */
--text-h4:    1rem        /* Reduced for mobile */
```

---

## Font Weights

```css
--font-light:     300
--font-normal:    400    /* Default for body text */
--font-medium:    500
--font-semibold:  600    /* Buttons, strong text */
--font-bold:      700    /* Headings, bold text */
```

**Usage:**
```css
font-weight: var(--font-normal);      /* Regular text */
font-weight: var(--font-semibold);    /* Buttons */
font-weight: var(--font-bold);        /* Headings */
```

---

## Line Heights

```css
--leading-tight:    1.25   /* Headings */
--leading-normal:   1.5    /* Default */
--leading-relaxed:  1.625  /* Body text (more breathing room) */
--leading-loose:    2      /* Spacious text */
```

**Usage:**
```css
line-height: var(--leading-tight);      /* h1, h2, h3 */
line-height: var(--leading-relaxed);    /* Paragraphs */
```

---

## Letter Spacing

```css
--tracking-normal:  0          /* Default */
--tracking-wide:    0.025em    /* Headings */
--tracking-wider:   0.05em     /* Titles, emphasis */
```

**Usage:**
```css
letter-spacing: var(--tracking-normal);  /* Body text */
letter-spacing: var(--tracking-wide);    /* Some headings */
```

---

## Utility Classes (Pre-defined)

Instead of manually setting fonts, use these classes:

### Heading Classes

```html
<!-- Large Heading 1 -->
<h1 class="text-heading-1">Page Title</h1>

<!-- Medium Heading 2 -->
<h2 class="text-heading-2">Section Title</h2>

<!-- Small Heading 3 -->
<h3 class="text-heading-3">Subsection</h3>

<!-- Extra Small Heading 4 -->
<h4 class="text-heading-4">Small Title</h4>
```

### Body Text Classes

```html
<!-- Large body text (18px) -->
<p class="text-body-lg">Important paragraph</p>

<!-- Regular body text (16px) - DEFAULT -->
<p class="text-body-base">Normal paragraph</p>

<!-- Small body text (14px) -->
<span class="text-body-sm">Caption or label</span>

<!-- Extra small body text (12px) -->
<span class="text-body-xs">Tiny text or metadata</span>
```

---

## How Elements Are Styled

### HTML Elements (Automatic)

```html
<!-- Automatically styled via global CSS -->
<h1>Uses var(--font-serif), var(--text-h1), var(--font-bold)</h1>
<h2>Uses var(--font-serif), var(--text-h2), var(--font-bold)</h2>
<h3>Uses var(--font-serif), var(--text-h3), var(--font-bold)</h3>

<p>Uses var(--font-sans), var(--text-base), var(--leading-relaxed)</p>
<strong>Uses var(--font-bold)</strong>
<em>Uses italic</em>

<button class="btn-primary">Uses var(--font-sans), var(--font-semibold)</button>
```

### Using CSS Variables in Custom CSS

```css
.my-custom-heading {
  font-family: var(--font-serif);
  font-size: var(--text-h2);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-wide);
}

.my-custom-text {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}
```

---

## Responsive Typography

### Automatic Scaling

Font sizes automatically adjust based on screen size:

| Screen Size | h1 Size  | h2 Size  | h3 Size  |
| ----------- | -------- | -------- | -------- |
| Mobile      | 1.5rem   | 1.25rem  | 1.125rem |
| Tablet      | 3rem     | 2.25rem  | 1.875rem |
| Desktop     | 3rem     | 2.25rem  | 1.875rem |

**No need to define responsive sizes yourself** - it's built into the variables!

### Example: Heading that scales

```html
<!-- This h1 automatically scales -->
<h1>My Heading</h1>

<!-- Mobile: 1.5rem (24px) -->
<!-- Tablet+: 3rem (48px) -->
```

---

## How to Customize Fonts

### Change the Sans-Serif Font (Body Text)

**File:** `src/styles/global.css`

Find this line:
```css
:root {
  --font-sans: Inter, Helvetica, Arial, sans-serif;
```

Change to your font:
```css
:root {
  --font-sans: 'Your Font', Helvetica, Arial, sans-serif;
```

**Result:** All body text, buttons, and labels will use your new font.

### Change the Serif Font (Headings)

**File:** `src/styles/global.css`

Find this line:
```css
:root {
  --font-serif: Merriweather, Georgia, serif;
```

Change to your font:
```css
:root {
  --font-serif: 'Your Font', Georgia, serif;
```

**Result:** All headings (h1-h6) will use your new font.

### Change All Heading Sizes at Once

**File:** `src/styles/global.css`

In the `:root` section, change these values:

```css
:root {
  --text-h1: 2.25rem;    /* Change to 2rem, 3rem, etc */
  --text-h2: 1.875rem;   /* Change to your preference */
  --text-h3: 1.5rem;     /* Change to your preference */
  --text-h4: 1.25rem;    /* Change to your preference */
}
```

**Result:** All headings will scale appropriately across the entire site.

### Change All Body Text Sizes at Once

**File:** `src/styles/global.css`

```css
:root {
  --text-base: 1rem;     /* Change default body text size */
  --text-lg:   1.125rem; /* Change large text size */
  --text-sm:   0.875rem; /* Change small text size */
}
```

---

## Before vs After

### BEFORE (No Variables - Bad)
Components manually repeated fonts everywhere:

```html
<!-- ComponentA.vue -->
<h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">Title</h2>

<!-- ComponentB.vue -->
<h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">Title</h2>

<!-- ComponentC.vue -->
<h2 class="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">Title</h2>

<!-- To change h2 size everywhere, update 3+ places = ERROR PRONE -->
```

### AFTER (CSS Variables - Good)
All heading sizes defined in one place:

```html
<!-- ComponentA.vue -->
<h2>Title</h2>  <!-- Automatically styled! -->

<!-- ComponentB.vue -->
<h2>Title</h2>  <!-- Automatically styled! -->

<!-- ComponentC.vue -->
<h2>Title</h2>  <!-- Automatically styled! -->

<!-- To change h2 size everywhere, update ONE line in global.css -->
```

---

## Benefits

### 1. **Consistency**
- All h1 tags look identical
- All body text has same font and size
- No accidental style differences

### 2. **Maintainability**
- Change fonts in one place
- Update sizes globally
- No searching and replacing

### 3. **Scalability**
- Easy to add new text styles
- Easy to adjust for responsive design
- Future-proof structure

### 4. **Performance**
- Less CSS code (variables shared)
- Faster to render
- Smaller CSS file size

### 5. **Readability**
- Code is clearer
- Intentions are obvious
- Self-documenting

---

## Complete Variable List

```css
:root {
  /* Font Families */
  --font-sans:     Inter, Helvetica, Arial, sans-serif;
  --font-serif:    Merriweather, Georgia, serif;
  --font-mono:     'Courier New', monospace;

  /* Font Sizes - Body */
  --text-xs:       0.75rem;
  --text-sm:       0.875rem;
  --text-base:     1rem;
  --text-lg:       1.125rem;
  --text-xl:       1.25rem;

  /* Font Sizes - Headings */
  --text-h4:       1.25rem;
  --text-h3:       1.5rem;
  --text-h2:       1.875rem;
  --text-h1:       2.25rem;

  /* Font Weights */
  --font-light:    300;
  --font-normal:   400;
  --font-medium:   500;
  --font-semibold: 600;
  --font-bold:     700;

  /* Line Heights */
  --leading-tight:    1.25;
  --leading-normal:   1.5;
  --leading-relaxed:  1.625;
  --leading-loose:    2;

  /* Letter Spacing */
  --tracking-normal:  0;
  --tracking-wide:    0.025em;
  --tracking-wider:   0.05em;
}
```

---

## Utility Classes

```css
.text-heading-1    /* h1 styling */
.text-heading-2    /* h2 styling */
.text-heading-3    /* h3 styling */
.text-heading-4    /* h4 styling */

.text-body-lg      /* Large body text (18px) */
.text-body-base    /* Normal body text (16px) */
.text-body-sm      /* Small body text (14px) */
.text-body-xs      /* Extra small text (12px) */
```

---

## Summary

✅ **All fonts managed** via CSS variables  
✅ **No manual repetition** of font declarations  
✅ **Responsive sizing** built in  
✅ **Easy to customize** - change in one place  
✅ **Consistent** across entire site  
✅ **Professional** typography system  

---

**Last Updated:** January 24, 2025  
**System:** CSS Variables + Utility Classes  
**Status:** ✅ Production Ready

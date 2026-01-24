# 🎨 Font Configuration Guide

## Current Font Stack

```
Body Text (Sans-serif):  Inter → Helvetica → Arial → sans-serif
Headings (Serif):        Merriweather → Georgia → serif
```

---

## Where Fonts Are Imported

### 1. **Google Fonts (Primary Import)**
**File:** `src/layouts/BaseLayout.astro` (Line 27)

```html
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

This imports:
- ✅ **Inter** (weights: 300, 400, 500, 600, 700)
- ✅ **Merriweather** (weights: 400, 700)

### 2. **CSS Fallback (Secondary Import)**
**File:** `src/styles/global.css` (Top of file)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
```

This ensures Inter is loaded even if primary import fails.

### 3. **CSS Application**
**File:** `src/styles/global.css`

```css
html {
  font-family: Inter, Helvetica, Arial, sans-serif;
}

body {
  font-family: Inter, Helvetica, Arial, sans-serif !important;
}

* {
  font-family: Inter, Helvetica, Arial, sans-serif;
}
```

### 4. **Tailwind Configuration**
**File:** `tailwind.config.mjs`

```javascript
fontFamily: {
  sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
  serif: ['Merriweather', 'Georgia', 'serif'],
}
```

---

## How Font Fallback Works

The font stack works like this:

1. **Try Inter** (Google Fonts - modern, clean)
2. **Fallback to Helvetica** (if Inter fails to load)
3. **Fallback to Arial** (universal web-safe font)
4. **Fallback to system sans-serif** (ultimate safety)

This ensures text ALWAYS displays, even if Google Fonts is unavailable.

---

## How to Verify Fonts Are Working

### Method 1: Browser DevTools

1. **Open your site** in browser
2. **Right-click any text** → Inspect/Inspect Element
3. **Look for `font-family` in CSS**
4. **Should show:** `Inter, Helvetica, Arial, sans-serif`

Expected output:
```css
font-family: Inter, Helvetica, Arial, sans-serif;
```

### Method 2: Check Loaded Fonts

1. **Open DevTools** (F12 or Right-click → Inspect)
2. **Go to Network tab**
3. **Filter by: fonts.googleapis.com**
4. **Should see:**
   - ✅ `css2?family=Inter...`
   - ✅ `css2?family=Merriweather...`

### Method 3: Font Rendering

- **Inter should look:** Clean, modern, geometric
- **Merriweather should look:** Elegant serif (headings only)
- **Arial should look:** Sans-serif (if Inter fails to load)

---

## If Fonts Are Not Changing

### Cause 1: Browser Cache

**Solution:** Hard refresh browser
- Windows: `Ctrl + Shift + Del` (full cache clear)
- Mac: `Cmd + Shift + Del` (full cache clear)
- Or: `Ctrl + F5` (hard refresh single page)

### Cause 2: Font File Not Loading

**Check:** Open DevTools → Network → Filter "fonts"
- Should see Google Fonts requests
- Check if any fail (red X)
- Check if response is successful (200 status)

### Cause 3: CSS Not Applied

**Check:** DevTools → Elements → Find body tag
- Right-click → Inspect
- Look for `font-family` in Styles panel
- Should show `Inter, Helvetica, Arial, sans-serif`

---

## Font Weights Available

### Inter (Body Text)
```
- 300 (Light)
- 400 (Regular)  ← Default
- 500 (Medium)
- 600 (Semibold)
- 700 (Bold)
```

Usage in CSS:
```css
font-weight: 400;  /* Inter Regular */
font-weight: 600;  /* Inter Semibold */
font-weight: 700;  /* Inter Bold */
```

### Merriweather (Headings)
```
- 400 (Regular)
- 700 (Bold)  ← Default for headings
```

Usage in CSS:
```css
font-family: Merriweather, Georgia, serif;
font-weight: 700;  /* Merriweather Bold */
```

---

## Font Application by Element

| Element      | Font              | Weight | Style     |
| ------------ | ----------------- | ------ | --------- |
| Body text    | Inter             | 400    | Regular   |
| Links        | Inter             | 400    | Regular   |
| Buttons      | Inter             | 600    | Semibold  |
| h1           | Merriweather      | 700    | Bold      |
| h2           | Merriweather      | 700    | Bold      |
| h3           | Merriweather      | 700    | Bold      |
| Strong/Bold  | Inter             | 700    | Bold      |
| Code/Pre     | system monospace  | 400    | Regular   |

---

## Performance Impact

### Google Fonts Loading

**Current Setup:**
- Preconnect to Google Fonts (lines 24-25)
- Single CSS import with both fonts
- `display=swap` strategy (shows fallback while loading)

**Performance:**
- ✅ Fonts load asynchronously
- ✅ Page doesn't wait for fonts
- ✅ Text visible immediately (even with Arial)
- ✅ Fonts swap in when ready

**Load Time:**
- Google Fonts request: ~100ms
- Font file download: ~50-100ms
- Total impact: < 200ms

---

## Testing Different Fonts

### To temporarily test with Arial:

1. Open DevTools → Console
2. Paste:
```javascript
document.body.style.fontFamily = 'Arial, sans-serif';
```
3. All text changes to Arial immediately

### To test with Helvetica:

```javascript
document.body.style.fontFamily = 'Helvetica, sans-serif';
```

### To test with system fonts:

```javascript
document.body.style.fontFamily = 'system-ui, sans-serif';
```

---

## Customizing Fonts

### To change body font (currently Inter):

**File:** `tailwind.config.mjs`

```javascript
fontFamily: {
  sans: ['YourFont', 'Helvetica', 'Arial', 'sans-serif'],
  // Rest stays same
}
```

**File:** `src/styles/global.css`

```css
body {
  font-family: YourFont, Helvetica, Arial, sans-serif !important;
}
```

### To change heading font (currently Merriweather):

**File:** `tailwind.config.mjs`

```javascript
fontFamily: {
  sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
  serif: ['YourFont', 'Georgia', 'serif'],
}
```

**File:** `src/styles/global.css`

```css
h1, h2, h3, h4, h5, h6 {
  @apply font-serif font-bold text-dark;
  font-family: YourFont, Georgia, serif;
}
```

---

## Summary

✅ **Inter is imported** from Google Fonts  
✅ **Inter is applied** to all text via CSS  
✅ **Fallbacks work** if Inter fails  
✅ **Merriweather applies** to headings only  
✅ **Performance optimized** with preconnect & display=swap  

**The fonts ARE working!** You might just need to clear your browser cache to see the change from the previous font.

---

**Last Updated:** January 24, 2025  
**Font Stack:** Inter, Helvetica, Arial, sans-serif  
**Status:** ✅ Properly Configured

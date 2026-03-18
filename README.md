# Vipin Kumar Yadav — Java Backend Developer Portfolio

A production-ready, fully responsive personal portfolio website built with **Angular 17**, featuring a dark luxury aesthetic, dynamic data rendering, localStorage-backed resume management, and a complete contact form.

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/           # Sticky navbar, mobile menu, scroll-spy
│   │   │   ├── hero/             # Animated typewriter, stats bar, social links
│   │   │   ├── about/            # Bio, experience timeline, highlights
│   │   │   ├── skills/           # Tabbed skill categories with animated bars
│   │   │   ├── projects/         # Filterable project cards with expand/collapse
│   │   │   ├── certifications/   # Certification cards with verify links
│   │   │   ├── resume/           # PDF upload/view/download via localStorage
│   │   │   ├── links/            # Social platform link cards
│   │   │   └── contact/          # Reactive form with full validation
│   │   ├── models/
│   │   │   └── portfolio.model.ts  # All TypeScript interfaces
│   │   ├── services/
│   │   │   └── portfolio.service.ts # Central data + localStorage management
│   │   ├── app.component.*
│   │   └── app.module.ts
│   ├── assets/
│   │   └── _redirects            # Netlify SPA routing fix
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   ├── styles.css                # Global CSS variables & theme
│   ├── main.ts
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
├── netlify.toml
└── README.md
```

---

## 🚀 Local Setup

### Prerequisites

- **Node.js** v18+ (v20 recommended)
- **npm** v9+
- **Angular CLI** v17

### Step 1 — Install Angular CLI globally (if not already installed)

```bash
npm install -g @angular/cli@17
```

### Step 2 — Install dependencies

```bash
cd portfolio
npm install
```

### Step 3 — Start development server

```bash
ng serve
# or
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

### Step 4 — Build for production

```bash
ng build
# or
npm run build:prod
```

Output goes to `dist/portfolio/browser/`.

---

## ✏️ Personalizing Your Content

All content is centralized in one file — **no HTML edits needed**:

```
src/app/services/portfolio.service.ts
```

### What to update:

| Section | Property |
|---|---|
| Your name, title, bio | `personalInfo` |
| GitHub / LinkedIn / Naukri / Email | `socialLinks` |
| Skills & proficiency levels | `skillCategories` |
| Projects (title, tech, links) | `projects` |
| Certifications | `certifications` |

---

## 📄 Resume & Cover Letter

The **Resume** section lets you upload PDF files that are stored in **browser localStorage**:

- Click the upload zone or drag & drop a PDF (max 5MB)
- Click **View** to open the PDF in a new browser tab
- Click **Download** to save the file locally
- Click **Remove** to clear it from storage

> Files are stored as base64 in localStorage. They persist between sessions but are NOT uploaded to any server.

---

## 🌐 Netlify Deployment

### Option 1 — Deploy via Netlify UI (Recommended)

1. Push your code to GitHub/GitLab
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**
3. Connect your repository
4. Netlify will auto-detect the `netlify.toml` and configure:
   - **Build command:** `npm run build:prod`
   - **Publish directory:** `dist/portfolio/browser`
5. Click **Deploy site**

### Option 2 — Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build:prod

# Deploy
netlify deploy --prod --dir=dist/portfolio/browser
```

### SPA Routing Fix

The `netlify.toml` already includes:

```toml
[[redirects]]
  from   = "/*"
  to     = "/index.html"
  status = 200
```

This ensures Angular's client-side routing works correctly on Netlify.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Angular | 17.3.x | Frontend framework |
| TypeScript | 5.4.x | Type safety |
| RxJS | 7.8.x | Reactive programming |
| HTML5 | — | Markup |
| CSS3 | — | Styling (CSS variables, Grid, Flexbox) |
| LocalStorage API | — | Resume/cover letter persistence |

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#080c14` | Page background |
| `--bg-card` | `#111827` | Card backgrounds |
| `--accent-cyan` | `#00d4ff` | Primary accent |
| `--font-display` | DM Serif Display | Headings |
| `--font-mono` | JetBrains Mono | Code labels |
| `--font-body` | Outfit | Body text |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `< 480px` | Single column, compact spacing |
| `480px – 768px` | Adjusted grids, hidden extras |
| `768px – 1024px` | 2-column grids |
| `> 1024px` | Full desktop layout |

---

## 📬 Contact Form

The contact form uses Angular **ReactiveFormsModule** with:

- Required field validation
- Email format validation
- Min/max length constraints
- Character counter for message
- Loading spinner during submission
- Success/error state feedback

> In production, connect the `submitContactForm()` method in `portfolio.service.ts` to a real backend endpoint, Formspree, EmailJS, or similar service.

### Quick integration with Formspree:

```typescript
// In portfolio.service.ts → submitContactForm()
import { HttpClient } from '@angular/common/http';

submitContactForm(data: ContactFormData): Observable<boolean> {
  return this.http
    .post('https://formspree.io/f/YOUR_FORM_ID', data)
    .pipe(map(() => true));
}
```

---

## 🔒 License

MIT — Feel free to use this as a base for your own portfolio.

---

*Built with Angular 17, precision CSS, and a love for clean backend architecture.*

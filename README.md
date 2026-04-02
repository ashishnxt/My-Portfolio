<div align="center">

<img src="https://ashishnxt.netlify.app/images/myphoto-2.jpg" width="120" height="120" style="border-radius:50%" alt="Ashish Sharma"/>

# Ashish Sharma — DevOps Portfolio

### Production-grade personal portfolio with a full CMS admin panel
### Built 100% free — zero server, zero cost, zero compromise

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-ashishnxt.netlify.app-7C0A02?style=for-the-badge)](https://myself-ashish-sharma.netlify.app/)
[![Netlify](https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)
[![Firebase](https://img.shields.io/badge/Database-Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Cloudinary](https://img.shields.io/badge/Images-Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com)
[![Cost](https://img.shields.io/badge/Monthly_Cost-₹_0-22c55e?style=for-the-badge)](https://ashishnxt.netlify.app)

</div>

---

<img width="1369" height="1007" alt="Screenshot from 2026-04-01 19-56-12" src="https://github.com/user-attachments/assets/5cba2894-1d02-4e29-b931-9f3dc3951786" />


## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Architecture](#-architecture)
- [File Structure](#-file-structure)
- [Admin Panel](#-admin-panel)
- [Security](#-security)
- [Performance](#-performance)
- [Animations](#-animations)
- [Free Tier Breakdown](#-free-tier-breakdown)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [Firestore Collections](#-firestore-collections)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)

---

## 🎯 Overview

This is not a static portfolio. Every piece of text, every image, every slide and card is stored in **Firebase Firestore** and loaded in real time. A hidden admin panel lets me update the entire portfolio from any device, anywhere in the world — without touching code or redeploying.

> **Built entirely with free-tier services. No server. No backend. No monthly cost.**

**What makes this different from a typical portfolio:**

- ✅ Full CMS — update content without editing HTML
- ✅ Real-time sync — changes appear live in under 1 second
- ✅ Skeleton loaders with smooth fade-in animations
- ✅ 6 custom card types via a drag-and-drop card builder
- ✅ Firebase Auth — proper cryptographic login, no hardcoded passwords
- ✅ Cloudinary auto-optimisation — 50–80% smaller images automatically
- ✅ SEO-ready — Open Graph, Twitter Card, meta tags, canonical URL
- ✅ Mobile-first responsive design on both portfolio and admin panel

---

## 🌐 Live Demo

| Resource | URL |
|---|---|
| 🌍 Portfolio | [ashishnxt.netlify.app](https://myself-ashish-sharma.netlify.app/) |
| 🔐 Admin Panel | Hidden URL — see [Admin Panel](#-admin-panel) section |
| 📄 GitHub | [github.com/ashishnxt](https://github.com/ashishnxt) |
| 💼 LinkedIn | [linkedin.com/in/ashish-sharma-6551591bb](https://linkedin.com/in/ashish-sharma-6551591bb) |

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript | Portfolio UI — no framework, no build step |
| **Layout** | CSS Grid + Flexbox | Responsive 4-column bento-style grid |
| **Database** | Firebase Firestore | All dynamic content — real-time NoSQL |
| **Auth** | Firebase Authentication | Admin panel login — email/password |
| **Images** | Cloudinary CDN | Image hosting + on-the-fly optimisation |
| **Hosting** | Netlify | Static hosting + CDN + HTTPS |
| **Config** | netlify.toml | Cache headers, security headers, redirects |
| **Icons** | Font Awesome 6 | UI icons throughout |

### Why no framework?

No React, no Vue, no Next.js — **by design**. The portfolio loads as a single HTML file with zero build step, zero `npm install`, zero bundler. This means:

- Instant deployment — drag and drop to Netlify
- No dependency vulnerabilities
- No build failures
- Faster initial load than any SPA

---

## ✨ Features

### Portfolio Frontend
- **Bento-grid layout** — 4-column CSS Grid with 7 card size classes (`tall`, `wide`, `wide2`, `big`, `box`, `big-2`, `slim`)
- **Image sliders** — 3 auto-advancing carousels (AI, DevOps, UI) with dot navigation, touch/swipe support, and fixed 350px height on mobile
- **Skeleton loading** — animated shimmer placeholders for all text while Firebase loads
- **Smooth text fade-in** — content replaces skeletons with a 0.5s ease animation
- **Scroll animations** — left-column cards slide from left, right-column cards slide from right, triggered by `IntersectionObserver`
- **Dynamic card zone** — custom cards injected from Firebase with the same scroll animations
- **Resume download button** — appears automatically when a resume URL is set in admin
- **Social links** — fully driven by Firebase, no hardcoded URLs
- **Secret admin trigger** — 5 taps on an invisible zone opens the admin panel

### Admin Panel (CMS)
- **Firebase Auth login** — email/password, session persists until logout
- **Dashboard** — live content counts, quick action buttons, Firebase connection status
- **Slide manager** — CRUD for AI, DevOps, and UI image carousels with image upload
- **Card Builder** — 6 card types, 4 size options, drag-and-drop reorder
- **Site Text editor** — edit all headlines, bios, social links, footer text
- **Skills manager** — tag cloud with icon support
- **Icon sliders** — DevOps and Frontend tool icons
- **Resume manager** — PDF upload via Cloudinary or Google Drive URL (auto-converts)
- **Profile image** — upload via Cloudinary or paste URL
- **Responsive** — sidebar collapses to hamburger drawer on tablet/mobile
- **Toast notifications** — bottom-right corner, visible on all screen sizes

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────┐
│              User's Browser                  │
│                                              │
│  index.html (served by Netlify CDN)          │
│  ├── Firebase SDK initialises                │
│  ├── Promise.all → 5 text docs fetched       │
│  │   (hero, quote, hello, about, social)     │
│  ├── onSnapshot → slides, skills, cards      │
│  │   (real-time listeners)                   │
│  └── Cloudinary → images loaded + optimised  │
└──────────────┬──────────────────────────────┘
               │
               ▼
┌──────────────────────────┐    ┌──────────────────────┐
│   Firebase Firestore      │    │   Cloudinary CDN      │
│   (Database)              │    │   (Image Hosting)     │
│                           │    │                       │
│   15 collections /docs    │    │   f_auto, q_auto      │
│   Real-time sync          │    │   w_1200 (slides)     │
│   50K reads/day free      │    │   w_200 (icons)       │
└──────────────────────────┘    │   w_60 (skills)       │
               │                └──────────────────────┘
               │
               ▼
┌──────────────────────────┐
│   Admin Panel             │
│   ashish-cms-7x3k.html   │
│                           │
│   Firebase Auth login     │
│   → writes to Firestore   │
│   → uploads to Cloudinary │
└──────────────────────────┘
```

### Data Loading Strategy

| Data Type | Method | Reason |
|---|---|---|
| Site text (hero, quote, hello, about, social) | `Promise.all(getDoc × 5)` | Static text — one parallel batch, no persistent connection |
| Slides, skills, projects, page cards | `onSnapshot` | Real-time — admin changes appear instantly |
| Resume URL, profile photo | `onSnapshot` | Real-time — immediate update when changed |

---

## 📁 File Structure

```
portfolio/
├── index.html                  # Entire portfolio — ~1,300 lines
├── ashish-cms-7x3k.html        # Admin CMS panel — ~2,500 lines (hidden URL)
├── netlify.toml                # Netlify config — cache + security headers
├── 404.html                    # Custom branded 404 page
└── images/
    ├── octo.png                # DevOps hero card background
    └── myphoto-2.jpg           # Profile photo fallback
```

> **No build step. No package.json. No node_modules.** Just files.

---

<img width="1377" height="1014" alt="Screenshot from 2026-04-01 19-30-59" src="https://github.com/user-attachments/assets/7ad86de2-e738-4303-af4f-7cdcbc05e514" />

## 🔧 Admin Panel

The admin panel is a full CMS built in vanilla JS. It is not linked from the portfolio — the URL is intentionally non-obvious.

### Accessing the Admin Panel

**Method 1 — Secret trigger:**
> Tap the **top-right corner** of the DevOps hero card **5 times within 3 seconds**. The admin panel opens in a new tab.

**Method 2 — Direct URL:**
> Navigate to `/ashish-cms-7x3k.html` on the Netlify domain.

### Login

Uses **Firebase Email/Password Authentication**. Set up via:
1. Firebase Console → Authentication → Sign-in method → Email/Password → Enable
2. Authentication → Users → Add user → enter your email + password

### Card Builder Card Types

| Type | Description |
|---|---|
| `image-slider` | Full carousel with title, description, text alignment, image upload |
| `icon-slider` | Prev/Next icon display for tools and technologies |
| `text-icon` | Text card with headline, paragraph, background colour |
| `quote-banner` | Large quote with customisable typography |
| `skills-cloud` | Tag cloud of skills from Firestore |
| `project-testimonial` | Navigable project cards with description |

<img width="1377" height="1014" alt="Screenshot from 2026-04-01 19-30-16" src="https://github.com/user-attachments/assets/d05e2de1-a1b4-48f9-9323-8bfc8d343939" />

### Card Sizes

| Size | Grid Span | Best For |
|---|---|---|
| Small | 1 col × 1 row | Compact info boxes |
| Wide | 2 col × 1 row | Image sliders, projects |
| Big | 2 col × 2 row | Large feature cards |
| Full Width | 4 col × 1 row | Footer, banners |

---

## 🔒 Security

### Firebase Authentication
No passwords are stored in code. Login uses Firebase's cryptographic token system:

```
User enters email + password
     ↓
Firebase verifies credentials
     ↓
Firebase issues signed JWT token
     ↓
Token sent with every Firestore write request
     ↓
Firestore Rules verify: request.auth != null
     ↓
Write allowed ✓  (or rejected if not authenticated)
```

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;              // Anyone can view the portfolio
      allow write: if request.auth != null;  // Only you can edit
    }
  }
}
```

### Netlify Security Headers (`netlify.toml`)

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"              # Prevent clickjacking
    X-Content-Type-Options = "nosniff"          # Prevent MIME sniffing
    X-XSS-Protection = "1; mode=block"          # XSS filter
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
```

### Additional Security Measures
- 🔐 Admin URL is non-obvious (`ashish-cms-7x3k.html`, not `/admin`)
- 🔐 No link to admin panel anywhere on the portfolio
- 🔐 5-tap secret trigger — not discoverable by crawlers
- 🔐 WordPress, `.env`, and `.git` probe paths blocked via redirects
- 🔐 Firebase API key is intentionally public — security enforced by Firestore Rules, not key secrecy

---

## ⚡ Performance

### Cloudinary Image Optimisation

Every image URL is automatically transformed by `cldOpt()`:

```
Before: https://res.cloudinary.com/dsya7mkkv/image/upload/v123/slide.jpg
After:  https://res.cloudinary.com/dsya7mkkv/image/upload/f_auto,q_auto,w_1200,c_limit/v123/slide.jpg
```

| Parameter | Effect |
|---|---|
| `f_auto` | Serve WebP to modern browsers, JPEG to older ones |
| `q_auto` | Cloudinary calculates optimal quality vs file size |
| `w_1200` | Resize to max 1200px (slides), 200px (icons), 60px (skills) |
| `c_limit` | Never upscale — only shrink if larger than target |

**Result: 50–80% smaller images with zero visible quality loss.**

### Firebase Loading Strategy

```javascript
// 5 text documents fetched in ONE parallel round trip
Promise.all([
  getDoc(doc(db, 'site-settings', 'text-hero')),
  getDoc(doc(db, 'site-settings', 'text-quote')),
  getDoc(doc(db, 'site-settings', 'text-hello')),
  getDoc(doc(db, 'site-settings', 'text-about')),
  getDoc(doc(db, 'site-settings', 'text-social')),
]).then(([hero, quote, hello, about, social]) => {
  // All 5 resolve together — not sequential
});
```

### Other Optimisations
- `loading="lazy"` on all images — deferred until near viewport
- `IntersectionObserver` for scroll animations — zero scroll event listeners
- `observer.unobserve(el)` after animation — card never observed again
- `will-change: opacity, transform` — GPU-accelerated animations
- Netlify 1-year cache on all static assets

---

## 🎨 Animations

### Initial Load (above-fold cards)
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}
```
Each card type gets a different delay (0.1s–0.35s) for a staggered cascade effect.

### Scroll Animations (below-fold cards)
```
Columns 1–2  →  slide from LEFT   (translateX(-80px) → 0)
Columns 3–4  →  slide from RIGHT  (translateX( 80px) → 0)
Mobile       →  alternates left/right per card
```
Cards in the same row are staggered by 80ms. Once visible, `unobserve()` is called — each card animates exactly once.

### Skeleton Shimmer
```css
@keyframes shimmer {
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
}
```
All text sections shimmer while Firebase loads, then fade in with `textFadeIn` (0.5s ease, translateY(6px) → 0).

---

## 💰 Free Tier Breakdown

| Service | Free Tier | Usage |
|---|---|---|
| **Firebase Firestore** | 50K reads / 20K writes per day | Content database |
| **Firebase Auth** | Unlimited users | Admin login |
| **Cloudinary** | 25 GB storage, 25 GB/month bandwidth | All images + resume PDF |
| **Netlify** | 100 GB bandwidth/month, auto HTTPS | Website hosting |
| **Font Awesome** | Free CDN | All icons |
| **Google Fonts** | Free CDN | Poppins font |
| **Total** | **₹ 0 / month** | Full production portfolio |

---

## 🚀 Getting Started

Want to build your own version? Here's how:

### Step 1 — Fork & Clone
```bash
git clone https://github.com/ashishnxt/My-Portfolio.git
cd portfolio
```

### Step 2 — Set Up Firebase
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create a new project
3. Enable **Firestore Database** (start in test mode)
4. Enable **Authentication** → Sign-in method → **Email/Password**
5. Add yourself as a user: Authentication → Users → Add user
6. Go to Project Settings → Your apps → Web → Register app → copy config

### Step 3 — Set Up Cloudinary
1. Create free account at [cloudinary.com](https://cloudinary.com)
2. Settings → Upload → Upload Presets → Add preset
3. Set Signing Mode to **Unsigned**
4. Note your **Cloud Name** and **Preset Name**

### Step 4 — Update Config in Files

In `index.html`, find `FIREBASE_CONFIG` and replace:
```javascript
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
```

Do the same in `ashish-cms-7x3k.html`. Then update Cloudinary:
```javascript
const CLOUDINARY_CONFIG = {
  cloudName:    "YOUR_CLOUD_NAME",
  uploadPreset: "YOUR_UPLOAD_PRESET"
};
```

### Step 5 — Set Firestore Rules
In Firebase Console → Firestore → Rules, paste:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Step 6 — Deploy to Netlify
1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → Add new site → Import from GitHub
3. No build command needed — publish directory is `/`
4. Deploy

### Step 7 — Add Content
Open your admin panel URL → sign in → fill in Site Text / Cards → add slides, skills, projects.

---

## ⚙️ Configuration

### netlify.toml
Place in root directory. Controls caching, security headers, and redirects:

```toml
[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"

# Redirect old admin URL if bookmarked
[[redirects]]
  from = "/admin.html"
  to   = "/ashish-cms-7x3k.html"
  status = 301
```

---

## 🗄 Firestore Collections

```
firestore/
├── ai-slides/           # AI carousel slides { title, description, imgUrl, textAlign, bgColor, order }
├── devops-slides/       # DevOps carousel slides
├── ui-slides/           # UI/Frontend carousel slides
├── projects/            # Projects { name, description, order }
├── skills/              # About skills { name, iconUrl, order }
├── devops-skills/       # DevOps icon slider { name, iconUrl, order }
├── frontend-skills/     # Frontend icon slider { name, iconUrl, order }
├── page-cards/          # Card builder { type, size, config, order }
└── site-settings/
    ├── resume           # { url, filename }
    ├── profile          # { photoUrl }
    ├── text-hero        # { heroTitle, heroSubtitle, heroBg }
    ├── text-quote       # { quoteTitle, quoteLink, quoteBg }
    ├── text-hello       # { helloTitle, helloText }
    ├── text-about       # { aboutTitle, aboutP1, aboutP2, skillsHeading, projectsTitle, aboutBg }
    └── text-social      # { email, phone, github, linkedin, footerText }
```

---

## 🚢 Deployment

### Netlify (Recommended)
1. Connect GitHub repo to Netlify
2. Build command: *(leave empty)*
3. Publish directory: `/`
4. Deploy — done ✓

### Manual Upload
1. Download all files
2. Drag and drop to Netlify dashboard
3. Done ✓

### Custom Domain
1. Netlify → Domain Settings → Add custom domain
2. Update DNS records at your registrar
3. Netlify auto-provisions HTTPS via Let's Encrypt

---

## 📄 License

This project is open source. Feel free to fork and build your own version.
If you use this as a base, a credit or star would be appreciated! ⭐

---

<div align="center">

**Built with precision. Deployed with confidence.**

[🌐 ashishnxt.netlify.app](https://myself-ashish-sharma.netlify.app/) &nbsp;•&nbsp;
[💼 LinkedIn](https://linkedin.com/in/ashish-sharma-6551591bb) &nbsp;•&nbsp;
[🐙 GitHub](https://github.com/ashishnxt) &nbsp;•&nbsp;
[📧 ashishaxm@gmail.com](mailto:ashishaxm@gmail.com)

</div>

# RF Group of Companies — Website Build Spec
**Target tool:** Antigravity IDE (agentic build)
**Domain:** rfgroupofcompanies.com
**Doc purpose:** Feed this directly to the agent as the build brief. It contains structure, data models, component list, and task breakdown — not final marketing copy.

---

## 1. Project Summary

Build the parent/group website for RF Group of Companies. This is **not** an RF Technologies website — it's the group-level identity, with three current subsidiary companies each getting their own dedicated page and eventual own site:

- **RF Technologies** — Technology & Business Solutions
- **RF Media Productions** — Media & Content Production
- **RF Architects** — Architecture & Interior Design

The architecture must support adding Company #4, #5, #6+ later as a **content/config change, not a redesign**.

**Tone/feel:** professional, modern, premium, corporate-but-not-stiff, clean, trustworthy, international, scalable. Not a generic software-house template. Confident, not flashy.

**Avoid:** stock photos, excessive animation, cheap gradients, cramped sections, generic SaaS-template look.

---

## 2. Assumed Tech Stack

> Not specified in the original brief — using sensible defaults for a marketing site with future CMS needs. Adjust in Antigravity if you have a preference.

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Content:** Local JSON/MDX content layer now, structured so it can migrate to a headless CMS (Sanity/Contentful) later without touching component code
- **Animation:** Framer Motion (used sparingly — see Design Direction)
- **Deployment target:** Vercel-compatible (or specify your host)
- **Forms:** Contact form posts to an API route; provider (Resend/Formspree/etc.) TBD

---

## 3. Information Architecture

### Global Navigation
```
Home | Our Companies | About | Portfolio | Contact
```
(Careers to be added later — build nav as a config array, not hardcoded links, so this is a one-line addition.)

### Routes
```
/                     → Homepage (group-level)
/about                → About the Group
/companies            → Our Companies overview (optional, or anchor on homepage)
/technologies         → RF Technologies company page
/media-productions    → RF Media Productions company page
/architects            → RF Architects company page
/portfolio            → Group-level portfolio index
/contact              → Group contact / routed inquiry
```
Keep URLs flat and SEO-friendly. Company page slugs should be pulled from the Company data object (see §4), not hardcoded in routing, so adding a 4th company doesn't require new route files beyond duplicating the dynamic template.

**Recommended refinement:** implement company pages as a dynamic route `/[companySlug]` reading from the Company data model, rather than static files per company — this is what actually delivers on "add a company without redesigning."

---

## 4. Data Model

Structure content so each of these can later be lifted into a CMS without touching frontend components.

```ts
type Company = {
  slug: string;               // "technologies"
  name: string;                // "RF Technologies"
  tagline: string;             // "Technology & Business Solutions"
  logoUrl: string;
  cardDescription: string;     // short, for homepage card
  heroDescription: string;     // longer, for company page
  services: Service[];
  selectedWork: PortfolioProject[];
  caseStudies: CaseStudy[];
  contactCtaLabel: string;
  status: "placeholder" | "draft" | "approved"; // content readiness flag
};

type Service = {
  name: string;
  description: string;
  icon?: string;
};

type PortfolioProject = {
  name: string;
  companySlug: string;
  summary: string;
  imageUrl: string;
  link?: string;
  status: "placeholder" | "draft" | "approved"; // gate publishing on this
};

type CaseStudy = {
  title: string;
  companySlug: string;
  body: string; // MDX or rich text
  status: "placeholder" | "draft" | "approved";
};

type TeamMember = { name: string; role: string; companySlug?: string };

type Article = { title: string; slug: string; body: string; publishedAt: string };

type ContactInquiry = {
  interestedIn: "technologies" | "media-productions" | "architects" | "general";
  name: string;
  email: string;
  message: string;
};
```

**Publishing rule to build into the CMS/content layer:** any `PortfolioProject` or `CaseStudy` with `status: "placeholder"` must render with a visible "Coming soon" or placeholder treatment — or not render at all — and must **never** display a real, unapproved project name. Use obviously-fake placeholder project names (e.g. "Project Alpha") until content is marked `approved`. This prevents unapproved client/project names from accidentally shipping to production.

---

## 5. Page-by-Page Breakdown

### Homepage (`/`)
Order matters — group identity before company list before proof of work:

1. **Hero** — Group name + one-line positioning + CTA ("Explore Our Companies"). Placeholder copy, clearly labeled as such in code comments.
2. **About the Group** (short) — philosophy, what the group is, vision teaser. Links to full `/about`.
3. **Our Companies** — reusable `CompanyCard` component × 3 (logo, description, visual, "Explore Company" CTA). Must be a mapped array, not 3 hardcoded blocks.
4. **Group Vision / Philosophy** — flexible text/visual block. Scope this now: single rich-text block, max ~150 words placeholder, optional supporting visual — don't let this section expand ad hoc during content-fill.
5. **Selected Work / Portfolio preview** — pulls a small curated subset from `PortfolioProject[]` across all companies (approved-only, or placeholder-flagged).
6. **Contact / Group Inquiry** — routed contact form (see §4 `ContactInquiry`).

### About (`/about`)
Full version of the group narrative. Keep structurally distinct from the homepage's "About the Group" block and the "Group Vision" block — decide now whether Vision is a subsection of About or a standalone homepage-only block, so devs don't build two redundant sections.

### Company Pages (`/technologies`, `/media-productions`, `/architects`)
Single reusable template driven by the `Company` data object:
- Logo + intro
- Services (mapped from `Service[]`)
- Selected work (mapped, approved/placeholder-gated)
- Case studies (if any, same gating)
- Contact CTA (pre-fills `interestedIn` on the contact form)
- "Back to RF Group" link

### Portfolio (`/portfolio`)
Group-level index, filterable by company. Same gating rule as above applies.

### Contact (`/contact`)
Form with `interestedIn` selector (RF Technologies / RF Media Productions / RF Architects / General-Partnership). Confirm with the team whether each option needs separate routing (different inbox/CRM tag) — this is a backend decision, not just a UI field, and isn't specified yet.

---

## 6. Component Inventory (build as reusable, prop-driven)

- `Header` / `Nav` (config-driven links)
- `Hero`
- `CompanyCard`
- `ServiceList` / `ServiceItem`
- `PortfolioCard` / `PortfolioGrid`
- `CaseStudyBlock`
- `ContactForm` (with routing field)
- `Footer`
- `SectionWrapper` (consistent spacing/rhythm across all sections)
- `PlaceholderBadge` (visible-in-dev-only tag marking unapproved content, stripped in production build)

---

## 7. Design System

- Strong typography hierarchy (define type scale in Tailwind config, not ad hoc classes)
- Generous whitespace/section padding — define as spacing tokens
- Restrained motion: fade/slide-in on scroll, no gimmicks. Framer Motion variants defined once, reused everywhere.
- Color/logo direction: **do not inherit the old RF Technologies site's visual identity.** This is a new corporate identity for the group; RF Technologies visually subordinates to it.
- Fully responsive; mobile experience treated as first-class, not an afterthought.

---

## 8. SEO & Technical Foundation

- Per-page `<title>` / meta description via Next.js Metadata API (placeholder copy, real strings TBD)
- Open Graph + Twitter card metadata, dynamic per company page
- Canonical URLs
- `sitemap.xml` and `robots.txt` generated dynamically from route list
- Semantic heading structure (one H1 per page)
- Image optimization (Next/Image, proper alt text placeholders)
- Schema.org `Organization` markup at group level, `Organization`/`LocalBusiness` (as applicable) per company page
- Analytics + Search Console wiring (env-var driven, no hardcoded IDs)

---

## 9. Content & Copy Rules (important — read before generating any text)

- **Do not invent final marketing copy, taglines, or case study content.** Use clearly-labeled placeholder text (e.g. `[PLACEHOLDER: Group tagline]`).
- **Never use real project/client names as filler unless already explicitly approved** (eazyticks, EZFundrazr, spotlyy, Chefington, Miles & Meals are named in planning docs but are *not* approved for publishing — use fake placeholder names in code/content until marked `approved` in the data model).
- Avoid grandiose language ("empire," etc.) — tone should read credible and ambitious, not hype-driven.

---

## 10. Build Order (task list for Antigravity)

1. Scaffold project (Next.js + TS + Tailwind), design tokens, global layout
2. Header/nav (config-driven) + Footer
3. Homepage sections in order (§5)
4. `Company`, `Service`, `PortfolioProject`, `CaseStudy` data models + placeholder JSON content
5. Dynamic company page template (`/[companySlug]`)
6. Portfolio index page with filtering
7. Contact page + routed form + API route
8. About page
9. SEO metadata, sitemap, robots.txt, Schema.org
10. Responsive QA pass
11. Analytics/Search Console env wiring
12. Content-readiness gating (`placeholder`/`draft`/`approved` logic + `PlaceholderBadge`)

---

## 11. Open Questions / Dependencies (resolve before or during build)

- Is RF Technologies' repositioning finalized enough that its **page structure** (not copy) is stable, or might the service categories themselves change?
- Does contact-form routing need real backend logic (separate inbox/CRM per company) or is it just a form field for internal triage?
- Do RF Media Productions and RF Architects have final logos yet, or are those also pending?
- Is "Group Vision/Philosophy" a standalone homepage block, a subsection of `/about`, or both (risk of duplicate content)?
- Confirm CMS target (if any) before the content layer is built, so the JSON/MDX structure maps cleanly later.

---

## 12. Homepage Animation & Interaction Reference

**Reference site:** aspensearch.com (structure/interaction pattern only — do not copy their copy, logos, or client names; RF Group content is original per §9).

Translate these interaction patterns to the RF Group homepage sections defined in §5:

| Pattern on reference site | RF Group homepage equivalent | Notes for Antigravity |
|---|---|---|
| Sticky header, live dual-timezone clocks, theme toggle, full-screen menu overlay | Sticky header with nav from §3; optional theme toggle if brand supports dark mode | Skip the dual-clock widget unless RF Group has genuine multi-office relevance — don't cargo-cult a feature that doesn't map to a real fact |
| Kinetic hero text (split/mask reveal on load) | Hero (§5.1) — "RF Group of Companies" headline revealed via text-split animation, not a plain fade | Use GSAP SplitText or a CSS clip-path reveal; keep to one clean reveal, not multiple competing effects |
| Count-up/odometer stat numbers | Optional: a stats row under the Hero or in "About the Group" (e.g. years active, companies, projects) — only if real figures exist; do not invent numbers | Trigger on scroll-into-view via IntersectionObserver or GSAP ScrollTrigger |
| Infinite auto-scrolling logo marquee | "Recent work / partners" strip if RF Group has approved logos to show; otherwise omit rather than use placeholder logos | Pure CSS `@keyframes` marquee is enough — no need for a JS library |
| Numbered two-column service list, staggered scroll-in | "Our Companies" section (§5.3) — number each company 01/02/03 instead of Aspen's services, staggered fade/slide-up per card | Use ScrollTrigger's `stagger` on the `CompanyCard` array — keeps it reusable per §6 |
| Carousel with numbered counter for clients | Portfolio preview (§5.5) if more than 3–4 items; otherwise a static grid is fine and simpler | Don't force a carousel where a grid reads better — only adopt this for genuinely browsable, ordered content |
| Team grid with hover state, staggered reveal | Not applicable to homepage (RF Group has no team section defined yet) — hold for a future About/Team page | Skip for now |
| Testimonial carousel with counter, quote, photo, role/company | Not in current scope (§5 has no testimonials section) — flag as a possible future addition once client testimonials are approved | Skip for now, don't build a placeholder carousel with fake quotes (violates §9) |
| Repeated CTA text in footer echoing the hero | Footer repeats the "Explore Our Companies" or contact CTA in large type | Simple, reinforces the group's confident-not-flashy tone from §7 |

**General animation principles to carry over:**
- Animations are **scroll-triggered reveals**, not autoplay/looping distractions (marquee is the one exception, and it's subtle/slow)
- One motion idea per section — don't stack multiple effect types on a single element
- Prefer **stagger + fade/slide** over bounce, elastic, or attention-grabbing easing — matches the "confident, not flashy" direction in §7
- Numbers/counters only animate once genuine data exists — never fabricate stats to fill the pattern

**Suggested libraries:** GSAP + ScrollTrigger (scroll reveals, stagger, counters), Lenis (smooth scroll feel), no additional carousel library needed unless the Portfolio section ends up carousel-based.

**Antigravity prompt suggestion** (after design tokens are set per §7/ui-ux-pro-max output):
> "Reference the interaction pattern table in §12 of SPEC.md. Build the Hero (§5.1) with a split-text reveal on load, and the Our Companies section (§5.3) with numbered cards that stagger in on scroll using GSAP ScrollTrigger. Keep motion restrained — one effect per section, no autoplay loops except the optional logo marquee. Don't add a stats counter, testimonial carousel, or team section yet — those aren't in scope per §5."

---

*This document intentionally contains no final marketing copy. All bracketed/placeholder content must be replaced only after copy is approved.*

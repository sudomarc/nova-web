# Nova Agency — Design Brief

**Project**: Nova Agency Website Redesign
**Date**: 2025
**Status**: Active — Creative Design Mode

---

## Project Context

Nova Agency is a French communication, advertising & talent agency based in Guinea (Conakry). The current site uses a dark/gold/cream palette with Archivo (display) + Fraunces (accent serif) + system fonts. It features a Three.js 3D hero, scroll-reveal animations, and JSON-driven content.

**Current differentiators**: 3D torus knot hero, talent-first positioning, full-chain production capability.

**Pain points to address**:
- Hero feels static despite 3D — lacks kinetic energy
- Services grid is conventional card layout
- Portfolio lacks case study depth (all "concept" placeholders)
- No dark mode toggle (dark header only)
- Visual language leans generic "agency template"
- Flickr CDN images — unreliable, no art direction

---

## Creative Directions (3+ Distinct Paths)

### Direction 1: **Editorial Brutalism** — "Raw Impact"
*Inspired by: Neo-Brutalism 2.0, DD.NYC work for Bully Pulpit, Obys Agency*

**Core thesis**: Strip away decoration. Let type, space, and motion carry the brand. Raw, honest, confident.

**Visual language**:
- **Typography as hero**: Massive Archivo Black headlines (clamp 4rem–12vw), Fraction/Overlap layout
- **Color**: True black (#000) + single gold accent (#C9A84C) + off-white (#FAFAF5). No cream gradients.
- **Layout**: Asymmetric editorial grids, deliberate whitespace, baseline grid
- **Motion**: Scroll-driven text reveal (letter-by-letter), parallax image panels, GSAP-style scrub
- **3D**: Replace decorative torus knot with *content-aware* 3D — wireframe letterforms, or 3D type that spells "NOVA"
- **Components**: Brutalist buttons (sharp corners, thick borders), exposed fieldset legends, raw form inputs

**Differentiators**:
1. **Type-first hierarchy** — no hero image, the headline *is* the visual
2. **Scroll as narrative** — each section reveals like a magazine spread
3. **Zero decoration** — every pixel earns its keep; no decorative tiles/dots

---

### Direction 2: **Cinematic Dark Mode** — "Studio Atmosphere"
*Inspired by: Locomotive (Webisoft), Cosmos Studio, HAUS, Spotify artist pages*

**Core thesis**: The website *is* a production stage. Dark, immersive, gold as "key light".

**Visual language**:
- **Default dark**: #0A0A0A background, gold as specular highlight
- **Typography**: Archivo for UI, Fraunces *large* for editorial moments (pull quotes, section leads)
- **Imagery**: Full-bleed cinematic stills (replace Flickr with curated/local assets), film-grain texture overlay
- **3D**: Hero = virtual film set — dolly camera, volumetric lighting, particles as "dust motes"
- **Motion**: Page transitions as "cuts", scroll = timeline scrub, micro-interactions as "practical effects"
- **Gold usage**: Only on interactive elements (links, buttons, focus rings) — never decorative

**Differentiators**:
1. **True cinematic dark mode** — not inverted light mode; designed *for* dark
2. **Production metaphor** — UI elements labeled like gear: "REC", "PLAY", "CUT", "SLATE"
3. **Asset-first** — imagery drives layout; text supports, never competes

---

### Direction 3: **Kinetic Expressionism** — "Type in Motion"
*Inspired by: Sundae Creative, Muzli 2025 trends, Chipsa Design, Laugh Mind*

**Core thesis**: Words move. The brand *speaks* through kinetic typography. Every headline is a mini-animation.

**Visual language**:
- **Light base**: Cream (#FDFBF5) with dark text — approachable, energetic
- **Kinetic headlines**: Split-text animations (stagger per word/letter), scroll-velocity response, hover = "speak"
- **Gold**: Vibrant, saturated (#D4B85C) — used for motion trails, accent underlines, 3D glow
- **3D**: Hero = 3D type sculpture — "NOVA" as physical object, letters as forms that rotate/morph
- **Illustrations**: Custom line-draw system — "talent" icons as continuous-line drawings that animate on scroll
- **Layout**: Fluid, responsive grids that reflow with animation (FLIP technique)

**Differentiators**:
1. **Living typography** — headlines never static; they breathe, respond, perform
2. **Continuous line language** — single-weight SVG line drawings for all icons/illustrations
3. **Performance as brand** — 60fps everywhere; motion *is* the message

---

## Selected Direction: **Hybrid — Cinematic Dark Mode + Kinetic Expressionism**

**Rationale**: 
- Nova's talent/production focus demands cinematic credibility (Direction 2)
- Communication/digital services need energy and approachability (Direction 3)
- Current dark header + gold system already leans Direction 2
- Kinetic type adds the "communication" voice without sacrificing production gravitas

**Hybrid principles**:
1. **Dark default** (#0A0A0A) with cream surfaced panels for content density
2. **Gold as "key light"** — only on interactive/active elements
3. **Kinetic headlines** — split-text reveal on scroll, hover micro-animations
4. **3D hero evolved** — from abstract torus to *brand-relevant* 3D (camera rig, film slate, or kinetic "NOVA" type)
5. **Editorial asymmetric grids** — magazine-style layouts for services/portfolio
6. **Custom line-icon system** — unified visual language for talents/services
7. **Dark mode toggle** — respect user preference, but *design for dark first*

---

## Implementation Roadmap

### Phase 1: Foundation (Week 1)
- [ ] Refine color tokens: true black, gold variants, semantic aliases
- [ ] Add dark mode toggle (CSS custom properties + localStorage + prefers-color-scheme)
- [ ] Create custom SVG line-icon set (6 service icons + 4 talent icons)
- [ ] Implement split-text utility (CSS + minimal JS)

### Phase 2: Hero & Home (Week 1-2)
- [ ] Redesign hero: kinetic headline + evolved 3D (camera rig or 3D type)
- [ ] Add scroll-driven parallax to hero visual
- [ ] Redesign "process" bar as animated timeline
- [ ] About section: editorial asymmetric layout + cinematic image treatment

### Phase 3: Services (Week 2)
- [ ] Replace card grid with editorial "spread" layout
- [ ] Add hover/tap micro-interactions: image zoom, tag reveal, scope expand
- [ ] Service detail panel: animated accordion with staggered content reveal
- [ ] Custom line-icons per service

### Phase 4: Portfolio (Week 2-3)
- [ ] Asymmetric masonry grid (CSS Grid + auto-flow dense)
- [ ] Case study page template (ready for real content)
- [ ] Filter transitions: FLIP-animated reorder
- [ ] Project cards: scrim + kinetic title reveal on hover

### Phase 5: Contact & Polish (Week 3)
- [ ] Progressive disclosure form (stepper)
- [ ] Success state animation
- [ ] Dark mode persistence + flash prevention
- [ ] Reduced-motion parity audit

### Phase 6: Anti-Vibe Review & QA (Week 3)
- [ ] Anti-vibe design audit (generic patterns check)
- [ ] Accessibility audit (WCAG 2.2 AA)
- [ ] Cross-browser visual regression
- [ ] Performance budget check (< 100KB CSS, < 200KB JS gzipped)

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | 100 |
| CLS (Core Web Vitals) | < 0.1 |
| INP | < 200ms |
| Unique visual identity score (anti-vibe) | Pass |
| Dark mode toggle usage | > 15% sessions |

---

## Anti-Vibe Gate (Pre-Launch Checklist)

- [ ] No generic "hero with centered headline + two buttons" layout
- [ ] No default Bootstrap/Tailwind spacing scale — custom tokens only
- [ ] No unsourced stock imagery — all assets curated/local
- [ ] No decorative 3D — every 3D element has narrative purpose
- [ ] No "trend stacking" (glassmorphism + gradient + 3D + kinetic all at once)
- [ ] Every animation has `prefers-reduced-motion` parity
- [ ] Color contrast ratios ≥ 4.5:1 (AA) / 7:1 (AAA for gold on dark)
- [ ] Focus states visible and branded (gold, not browser default)

---

## Design Token Updates (base.css)

```css
:root {
  /* Refined palette — designed for dark-first */
  --color-bg: #0a0a0a;           /* true black */
  --color-bg-elevated: #141414;  /* cards/surfaces */
  --color-bg-surface: #1a1a1a;   /* panels */
  --color-fg: #fafaf5;           /* off-white */
  --color-fg-muted: #a8a090;     /* warm gray */
  --color-gold: #c9a84c;         /* primary accent */
  --color-gold-bright: #e8d07a;  /* hover/active */
  --color-gold-dim: #9a7d34;     /* pressed */
  --color-gold-glow: rgba(201,168,76,0.35); /* shadows/glows */
  --color-border: #2a2a2a;       /* subtle borders */
  --color-border-focus: var(--color-gold);
  
  /* Light mode overrides (via [data-theme="light"]) */
  --color-bg-light: #fdfbf5;
  --color-bg-elevated-light: #ffffff;
  --color-fg-light: #0a0a0a;
  --color-fg-muted-light: #6b6558;
  --color-border-light: #d8d0c0;
}
```

---

## Custom Icon System (Spec)

**Style**: Single-weight (2px stroke), round caps, 24×24 viewBox, continuous line where possible

**Service Icons**:
1. `creation-publicites` — Camera + play triangle merged
2. `communication-digitale` — Speech bubble + wifi signal
3. `mise-disposition-talents` — Silhouette + star
4. `production-audiovisuelle` — Clapperboard + waveform
5. `formation-developpement` — Book + upward arrow

**Talent Icons**:
- Presenter — Mic + person
- Actor — Mask (comedy/tragedy)
- Voice-off — Headphones + waveform
- Creator — Phone + sparkle

**Usage**: Inline SVG with `currentColor` for gold/white theming

---

## 3D Hero Evolution (Spec)

**Current**: Abstract torus knot + halos (decorative)

**Proposed**: **Virtual Camera Rig** — a 3D camera dollied on track, with:
- Camera body (gold accents)
- Lens catching light (anamorphic flare shader)
- Dolly track disappearing into perspective
- Subtle "breathing" motion (focus pull simulation)
- Pointer parallax = dolly shift

**Fallback**: Static SVG illustration of same rig (no Three.js dependency)

**Rationale**: Communicates "production" instantly. Kinetic but purposeful. Gold accents tie to brand.

---

## Approval

- [ ] Design Director sign-off
- [ ] Creative Art Director sign-off  
- [ ] Anti-Vibe Reviewer sign-off
- [ ] Product UX Specialist sign-off
- [ ] Implementation lead feasibility check

---

*This brief is a living document. Update with each design decision and rationale.*
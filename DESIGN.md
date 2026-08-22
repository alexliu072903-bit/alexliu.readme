---
name: Alex Liu — Field Notes
description: A precise, exploratory personal site about making useful things under uncertainty.
colors:
  field-white: "#ffffff"
  instrument-ink: "#151815"
  quiet-surface: "#f3f5f1"
  structural-line: "#d9ded7"
  moss-signal: "#579260"
  chance-vermilion: "#d95335"
  secondary-ink: "#596158"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, PingFang SC, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 520
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, PingFang SC, sans-serif"
    fontSize: "clamp(2rem, 4vw, 4rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Bricolage Grotesque Variable, PingFang SC, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Bricolage Grotesque Variable, PingFang SC, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 520
    lineHeight: 1.3
rounded:
  tight: "2px"
  control: "8px"
  surface: "12px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  link-primary:
    textColor: "{colors.instrument-ink}"
    typography: "{typography.label}"
    padding: "8px 0"
  status-open:
    backgroundColor: "{colors.quiet-surface}"
    textColor: "{colors.instrument-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tight}"
    padding: "6px 9px"
---

# Design System: Alex Liu — Field Notes

## Overview

**Creative North Star: "The Calibrated Frontier"**

The site should feel like an instrument for navigating an open field: the space is expansive, but the marks are exact. White is used as a literal field rather than a warm lifestyle surface. Ink establishes certainty; moss green marks a verified path; vermilion appears only where chance, friction, or a changed direction matters.

The design is calm without becoming an editorial template. Its distinctiveness comes from changing coordinates, marginal notes, and continuous structural lines rather than ornamental typography or decorative technology. The visual system should communicate a mind in motion held by deliberate order.

**Key Characteristics:**

- exact structure with occasional controlled displacement;
- readable density instead of empty luxury;
- flat, honest surfaces with no decorative glass;
- project-specific specimens rather than repeated cards;
- motion that resolves uncertainty into a stable state.

## Colors

The palette is neutral and literal, interrupted by two infrequent signals.

### Primary

- **Moss Signal** (`#579260`): verified paths, active states, and open-source links. It must occupy less than 10% of a page.

### Secondary

- **Chance Vermilion** (`#d95335`): changed direction, historical state, or a moment where chance altered the path. Never use it as a generic CTA color.

### Neutral

- **Field White** (`#ffffff`): the primary canvas.
- **Instrument Ink** (`#151815`): headings and body text.
- **Quiet Surface** (`#f3f5f1`): diagrams, code specimens, and secondary regions.
- **Structural Line** (`#d9ded7`): rules and coordinate guides.
- **Secondary Ink** (`#596158`): metadata and secondary copy, only where contrast remains sufficient.

**The Two-Signal Rule.** Green means a path remains usable. Vermilion means the path changed. Neither color is decoration.

## Typography

**Display Font:** Bricolage Grotesque Variable with PingFang SC fallback
**Body Font:** Bricolage Grotesque Variable with PingFang SC fallback

**Character:** One variable family creates continuity while controlled width, size, and weight changes separate observation from conclusion. Chinese text remains native and highly readable rather than being forced into an imported editorial voice.

### Hierarchy

- **Display** (520, `clamp(3rem, 8vw, 6rem)`, `0.96`): one principal thought per page.
- **Headline** (500, `clamp(2rem, 4vw, 4rem)`, `1.04`): project titles and major transitions.
- **Title** (520, `1.25rem`, `1.25`): specimen and journal headings.
- **Body** (400, `1rem`, `1.75`): prose capped at `68ch`.
- **Label** (520, `0.8125rem`, normal case): status, date, source visibility, and short controls.

**The Native-Language Rule.** Do not use uppercase, tracking, or monospace as a costume for technical credibility. Labels should read like language, not interface chrome.

## Elevation

The system is flat by default. Depth is created with overlap, clipping, tonal surfaces, and moving structural lines. Shadows are not part of the default vocabulary.

**The Evidence Stays Flat Rule.** Product specimens, code, and project facts must never be placed inside floating glass cards.

## Components

### Buttons and links

- **Shape:** text-first with a precise underline or an 8px control radius when a filled control is required.
- **Primary:** ink text on white; filled signal colors are reserved for semantic states.
- **Hover / Focus:** the structural line resolves into ink or moss; focus uses a visible 2px outline.

### Chips

- **Style:** compact status labels with a 2px radius, quiet surface, and no pill silhouette.
- **State:** vocabulary is factual: `Public product`, `Private source`, `Open source`, `Historical`, `Experimental`.

### Cards / Containers

- **Corner Style:** mostly square; 12px only for product specimens that reproduce an interface surface.
- **Background:** white or quiet surface.
- **Shadow Strategy:** none at rest.
- **Border:** use one structural rule or tonal contrast, never border plus wide shadow.
- **Internal Padding:** varies with content; repeated identical card dimensions are prohibited.

### Navigation

Navigation is a quiet coordinate system. The active destination gains an ink rule and a small positional shift. Mobile navigation wraps without becoming a drawer unless the content later requires it.

### Project specimen

Every project receives one code-native visual derived from the real artifact: a three-pane resume editor, a localized quiz choice, a Markdown protocol tree, an installer transcript, or an allowlist diff. These are evidence, not decoration.

## Do's and Don'ts

### Do:

- **Do** let project status and source visibility remain visible near the title.
- **Do** use asymmetry to express exploration while preserving an obvious reading order.
- **Do** vary the density and specimen treatment for each project.
- **Do** keep prose between 45–68ch and preserve generous paragraph rhythm.
- **Do** use motion to show branching, correction, continuity, or resolution.

### Don't:

- **Don't** produce a generic AI enthusiast portfolio or a "future of AI" narrative.
- **Don't** use startup-bro confidence, exaggerated founder narratives, or technical overclaiming.
- **Don't** use cyberpunk, neon, glassmorphism, purple gradients, or particle fields.
- **Don't** default to a beige editorial template with a display serif, tiny monospace labels, and ruled three-column grids.
- **Don't** repeat identical project cards or turn project journals into feature-list case studies.
- **Don't** publish company work, private source, internal screenshots, or unverified status.

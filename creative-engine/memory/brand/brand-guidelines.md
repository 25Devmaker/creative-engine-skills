# Newton School 2026 brand guidelines — application seed

This seed reflects the Growth team's supplied 2026 reference image in the parent project's `skills/brand/`. That image remains the source of truth. A database `memory_items` override may replace this seed at runtime, so check the effective value before production generation.

## Logo
- Use the approved full icon + Newton School wordmark as one lockup. Never separate, redraw, recolor, distort, shadow, or place a pattern beneath it.
- Keep clear space of at least half the logo height. Minimum size: 80 px digital or 30 mm print.
- On white/light backgrounds use the dark-text RGB signature; on blue/dark backgrounds use the white-text RGB signature. Keep the photographic area behind it quiet.
- Approved project assets are in `assets/`: `newton-school-dark-logo.png` for white/light backgrounds and `newton-school-white-logo.png` for blue/dark backgrounds. The supplied duplicate white-logo uploads have identical bytes, so this folder retains one canonical copy.
- The real logo file must be used for final output. An AI approximation is not the official logo.

## Colour and background
- Primary Brand Blue 500: `#0673F9`.
- Printed secondary 500 values: Orange `#DE5A02`, Purple `#7B55EE`, Green `#009965`, Gold `#F59700`. Use one secondary accent per creative.
- The guide shows shade ramps but does not print exact values for each swatch. Do not invent or claim those values.
- Prefer white backgrounds, then a 10–30% tint. Full Brand Blue is approved with the white-text logo. Avoid backgrounds darker than roughly 70% black; use the white-text logo on sufficiently dark backgrounds.

## Typography
- House font: **Mona Sans**, not Mono Sans. Reference hierarchy: Semibold 54 px heading, Light 32 px subhead, Regular 16 px body; scale to the output format.
- Approved variable font files are `assets/MonaSans-VariableFont_wdth,wght.ttf` and `assets/MonaSans-Italic-VariableFont_wdth,wght.ttf`. Use the regular file for normal, light, semibold, and bold weights; use the italic file only when italic is intentionally required.
- A substitute is draft-only. Describing a font to an image model cannot guarantee faithful typography.

## Delivery gate
- Preserve exact approved factual claims and RTB numbers. Inspect the final image or every distinct video layout for logo, type, color, contrast, and safe zones.
- A generated image/video without the approved logo and Mona Sans assets remains a **draft**, even if its text check passes. Do not call it fully brand-compliant.

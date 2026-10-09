---
name: new-creatives
description: "Create a new on-brand Newton School creative from a structured brief. Use when the user needs a fresh image, not an edit, resize, or video."
---

# New Creatives

Use this workflow when a user requests a brand-new Newton School image creative.

Before generating, read the [shared creative-output standards](../newton-creative-engine/references/creative-output-standards.md). Use the applicable prompt skill from `creative-engine/memory/skills/prompt/create/` and the matching design rule from `creative-engine/memory/skills/design/`.

## Collect the brief

Collect or confirm the user's raw prompt, course or vertical, persona, hook, subhook, selected RTBs, target ratio, and any approved image references. Treat the selected RTBs as exact copy, not suggestions. Ask one concise question if a required factual input or target format is unknown; do not guess claims.

## Enhance the prompt

Turn the raw brief into a realistic generation prompt using the selected prompt skill. Preserve the intended hook and subhook, make the persona visually concrete, and add scene, subject, action, camera, lighting, composition, ratio, and negative constraints. Include only approved RTBs and never add outcome claims, testimonials, or statistics.

Show the refined prompt and the structured brief when review is useful. Do not substitute a fixed template for the user's actual request.

## Generate and return

After the user has authorized generation, use the connected Higgsfield tool, never a direct Higgsfield API. Generate at the requested ratio, then inspect the result under the shared review gate. Return the resulting image inline with its refined prompt and a short compliance status.

For a final branded export, use the retained assets in `../../../memory/brand/assets/`. Place `newton-school-dark-logo.png` intact on white/light backgrounds and `newton-school-white-logo.png` intact on blue/dark backgrounds. Use the supplied Mona Sans variable fonts for deterministic text overlays. If a required logo is missing from the generated result, add the matching approved lockup; do not replace it with AI-drawn logo pixels. If exact logo, copy, or font compositing cannot be verified, return it only as a **draft** and identify the missing asset.

After the user explicitly rates this delivered image **Good**, use the [shared approved-image save procedure](../newton-creative-engine/references/creative-output-standards.md#save-images-after-a-good-rating). Confirm the returned path inside the single `approved-images/` folder. Do not save it before that rating or claim it was archived when no local file is available.

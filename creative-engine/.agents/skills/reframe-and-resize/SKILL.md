---
name: reframe-and-resize
description: "Reframe and resize a supplied Newton School creative without losing its approved content or composition rules. Use for requested aspect-ratio variants."
---

# Reframe And Resize

Use this workflow when a user supplies an image and requests a new ratio such as 9:16, 16:9, 1:1, 3:4, or 4:3. Do not use it to invent a new visual concept or rewrite marketing content.

Before generating, read the [shared creative-output standards](../newton-creative-engine/references/creative-output-standards.md). Read the exact target-ratio rule under `creative-engine/memory/skills/design/` when available. If the requested ratio has no approved composition rule, ask for that rule instead of inventing one.

## Lock and map the composition

Inspect the source image and identify every element that must survive: approved copy, RTBs, CTA, logo, faces, key objects, hierarchy, and brand safe areas. Determine how those elements will reflow into the target frame. Reframing means deliberate responsive reflow; it must not be a crop that cuts text, the logo, or the focal subject.

## Refine the reframe prompt

Write a precise reframe prompt with the input ratio, target ratio, anchored elements, protected safe areas, preserved textual/factual content, and only the permitted background expansion or layout adjustments. Make it explicit that no claim, wording, logo treatment, or focal subject may be changed.

## Generate and return

After authorization, use the connected Higgsfield tool with the supplied image and refined reframe brief; never use a direct Higgsfield API. Inspect the delivered dimensions and final composition. Return the output inline. If exact text/logo integrity needs deterministic source-layer compositing that is unavailable, label the result **draft** rather than calling it compliant.

After the user explicitly rates a delivered size variant **Good**, use the [shared approved-image save procedure](../newton-creative-engine/references/creative-output-standards.md#save-images-after-a-good-rating). Save that approved variant directly in the single `approved-images/` folder. Treat each separately approved ratio as one file in the same folder, never a ratio-specific subfolder.

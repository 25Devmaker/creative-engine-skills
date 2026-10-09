---
name: refresh-creatives
description: "Refresh an existing Newton School creative while locking its factual content and changing only approved visuals. Use for source-preserving creative updates."
---

# Refresh Creatives

Use this workflow when a user uploads a previous creative and asks to update its visual treatment. Do not use it for a new concept, a pure ratio change, or a video.

Before generating, read the [shared creative-output standards](../newton-creative-engine/references/creative-output-standards.md). Use the applicable refresh prompt skill under `creative-engine/memory/skills/prompt/refresh/` and the relevant design rule.

## Lock the source content

Inspect the uploaded creative and record its locked elements: claims, course identity, hook/subhook wording, RTBs, CTA, logo, factual copy, and intended hierarchy. Confirm the requested visual change and its relationship to the hook and subhook. Keep locked content unchanged.

Only change visuals and graphics that are needed for the stated hook/subhook refresh: for example, background, illustration, image treatment, subject styling, or supporting graphics. Do not silently rewrite copy, replace a logo, change an RTB, add a claim, alter a CTA, or expand the scope into a redesign.

## Refine the edit prompt

Create a source-preserving edit prompt from the uploaded creative and the user's change request. State the exact visual elements to change, the locked elements that must remain identical, the target ratio, composition constraints, and explicit negative constraints. The user request is the source; do not replace it with a generic template.

## Generate and return

After authorization, submit the source image and refined edit prompt to the connected Higgsfield tool—never a direct API. Inspect the output side by side against the locked content and the approved visual-change list. Return the result inline with a concise list of what changed and what remained locked.

If the source logo is absent, add the matching approved lockup from `../../../memory/brand/assets/`: use `newton-school-dark-logo.png` on a white/light background or `newton-school-white-logo.png` on a blue/dark background. Keep an existing approved logo unchanged. Use the retained Mona Sans variable fonts only for deterministic overlays; never rely on a generated approximation. Label the result **draft** if exact branded text/logo preservation or compositing cannot be verified.

After the user explicitly rates the refreshed result **Good**, use the [shared approved-image save procedure](../newton-creative-engine/references/creative-output-standards.md#save-images-after-a-good-rating). Save the refreshed output—not its source—directly in the single `approved-images/` folder, and report the confirmed path. Do not archive a rejected result.

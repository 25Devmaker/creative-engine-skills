---
name: videos
description: "Plan, approve, generate, compose, and return an on-brand Newton School video. Use when a script and selected characters need a storyboard-first video workflow."
---

# Videos

Use this workflow when a user requests a Newton School video from a script and has selected the allowed characters in the video page. Do not generate a final video before the storyboard has been explicitly accepted.

Before work, read the [shared creative-output standards](../newton-creative-engine/references/creative-output-standards.md), the applicable video prompt skill under `creative-engine/memory/skills/prompt/video/`, `creative-engine/memory/skills/video/scene-plan.md`, and the target-ratio design rule.

## Validate the inputs

Confirm the final script, target duration and ratio, character selection, approved course/RTB wording, audio or voice requirements, and delivery format. Do not represent a real learner as a testimonial without written consent. Do not invent character consent, a voice clone, or a claim. Ask for any missing approval before creating media.

## Storyboard gate

Create the storyboard in Remotion first. Present a numbered scene plan containing the exact script segment, duration, character, action, camera, setting, visual treatment, on-screen copy placeholder, and Newton School safe-area/logo treatment for each scene. Apply the brand guide and composition rules at this stage.

Stop after presenting the storyboard. Do not generate Higgsfield clips, download media, render a final video, or charge generation credits until the user explicitly accepts the storyboard.

## Produce only after acceptance

After explicit storyboard acceptance, refine each scene prompt before generation. Use the connected Higgsfield tool for the approved scene clips; never call a direct Higgsfield API. Inspect each clip for script fidelity, characters, claims, safe areas, and brand constraints.

Bring only accepted clips into Remotion. Assemble the final edit there, using deterministic composition for the approved logo, exact on-screen marketing copy, and captions rather than asking a generative model to render them. Render the accepted composition, inspect the final video at every distinct layout, then return the video inline or as the produced downloadable artifact together with the refined scene prompts and compliance status.

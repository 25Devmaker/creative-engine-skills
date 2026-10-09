# Creative output standards

Read this reference before carrying out any New Creative, Refresh Creative, Reframe and Resize, or Videos workflow.

## Sources of truth

1. Read the project-root `AGENTS.md` and `creative_engine_context_for_chatgpt.md` first.
2. Read `skills/brand/official-2026-guidelines.md` and inspect `skills/brand/official-2026-guidelines.png` before authoring a Newton School image or video. The image is authoritative if it conflicts with a transcription.
3. Read the relevant prompt-skill source under `creative-engine/memory/skills/prompt/` before refining a prompt. Read the matching ratio rule under `creative-engine/memory/skills/design/` when one exists.
4. Treat verified course RTBs and approved wording as structured source data. Bind each RTB to its exact course; never invent, combine, or strengthen a claim.

## Tool boundary

Use the connected Higgsfield tool for generation. Do not use a direct Higgsfield API call, an API key, browser-side secret, or a separate API billing path. The connected tool is an agent capability, not a React client capability. A website can collect the brief and show a handoff or review state, but it cannot be represented as automatically invoking the connected tool.

Use Remotion only for the video composition and storyboard/final-render stages. Do not use it to fabricate a generated image or video result.

## Required prompt refinement

Refine every generation prompt before use. Convert the user's intent into a concise production brief that states:

- objective, audience, persona, hook, and subhook;
- only the selected, verbatim course RTBs;
- subject, setting, action, visual style, camera/framing, lighting, and aspect ratio;
- layout hierarchy, safe areas, and the visual role of each element;
- brand constraints and explicit negative constraints.

Use hook, subhook, persona, and RTBs as brief inputs. Do not rely on an image/video model to render the final Newton School logo or exact marketing copy. Reserve those regions for approved assets and deterministic compositing. If approved logo files or Mona Sans are unavailable, label the result **draft** and state what is needed for final compliance.

## Non-negotiable brand and composition rules

- Use the approved full logo lockup only; do not redraw, distort, recolour, or add a shadow to it.
- Preserve required clear space and minimum size. Use the approved foreground/background signature with adequate contrast.
- Use Mona Sans for final branded text. Do not claim exact palette values that are not printed in the source guide.
- Apply the relevant design-skill rules for the requested format. Reframe through deliberate responsive reflow, not a destructive crop or a redesign.
- Keep people, logo, copy, icons, and CTAs out of each other's safe zones. Make hierarchy readable at the final delivery size.
- Do not invent people, learner testimonials, consent, statistics, salaries, outcomes, or claims.

## Review before delivery

Inspect every final image and every distinct video layout against the source creative, requested change, brand guide, ratio, safe areas, and approved claims. Report a failed gate plainly and return a draft rather than describing it as fully compliant.

## Save images after a Good rating

For New, Refresh, and Reframe images, wait until the user explicitly rates a specific delivered image **Good** or approves it. Do not archive merely generated, draft, rejected, or self-assessed outputs. For each approved image, obtain its local final image file and run this command from the skills repository root:

```bash
node creative-engine/.agents/skills/newton-creative-engine/scripts/save-approved-image.mjs --approved-by-user "/absolute/path/to/final-image.png"
```

The command creates the single repository-root `approved-images/` folder if needed and prints the saved path. All approved images go directly into that same folder with unique filenames—never a subfolder per image. Confirm that the printed file exists before telling the user it was saved. If the connected tool supplies only a remote result and no usable local file, report that the image was **not** archived and request the local output; do not invent a path. A Good rating is a user decision, not proof of strict brand compliance.

The folder is local to this skills checkout and image files are Git-ignored. It does not automatically sync to GitHub, the runnable website's Supabase `final` bucket, or its RAG index. Video outputs are outside this image-folder rule.

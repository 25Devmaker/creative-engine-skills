---
name: newton-creative-engine
description: Build, review, or plan the Newton School Creative Engine while enforcing its canonical app boundary, verified-claim rules, 2026 brand guide, and delivery order. Use for Creative Engine product work; not for unrelated sites or the legacy frontend without explicit migration scope.
---

# Newton Creative Engine

The canonical product is the Next.js, Supabase, and OpenRouter application in the separate `25Devmaker/creative-engine` repository. This skills package guides that app and agent-run creative work; it is not runnable application source.

## Start with the project record

Before making project decisions, read:

1. [`AGENTS.md`](../../../../AGENTS.md)
2. [`creative_engine_context_for_chatgpt.md`](../../../../creative_engine_context_for_chatgpt.md)
3. [`decisions.md`](../../../../decisions.md) when the task could overlap a prior technical decision.

In the app repository, treat `frontend/` and root `main.mjs` as a legacy prototype path. Do not merge, delete, or migrate it into the canonical app without explicit scope from Hari.

## Choose the narrow workflow

- For a scoped code implementation or refactor, read [`creative-engine-surgical-coding`](../creative-engine-surgical-coding/SKILL.md).
- For a behavior-changing app edit, also read [`creative-engine-verified-changes`](../creative-engine-verified-changes/SKILL.md).
- For API routes, auth, uploads, provider calls, model output, or secrets, also read [`creative-engine-api-safety`](../creative-engine-api-safety/SKILL.md).
- For Creative Engine UI, creative prompting, or any image/video output, also read [`creative-engine-brand-ui`](../creative-engine-brand-ui/SKILL.md), then read [`official-2026-guidelines.md`](../../../../skills/brand/official-2026-guidelines.md) and inspect its paired PNG before authoring or generating.
- For generation workflows, route to [`new-creatives`](../new-creatives/SKILL.md), [`refresh-creatives`](../refresh-creatives/SKILL.md), [`reframe-and-resize`](../reframe-and-resize/SKILL.md), or [`videos`](../videos/SKILL.md) according to the requested outcome.

Do not load a specialized workflow merely because an ordinary task happens to mention the same technology.

## Non-negotiable rules

- Lead with the answer or disagreement. Be short, direct, and say what evidence would change the conclusion.
- Hari is learning by writing the code. Explain the concept and review his work; draft a complete file only when he asks.
- Before an edit, name the exact files to touch and why. Make the smallest change that works, one file at a time, and show the diff.
- Comment every line of code you write with what it does, why it exists, and what fails without it. Do not add a dependency, UI kit, boilerplate, or speculative abstraction without Hari's approval.
- Delete dead code instead of leaving it. Do not rewrite files outside the requested scope.
- Record every meaningful code change in the root `decisions.md` as it is made: what changed, why, and why this approach was chosen.

## Claims, people, and secrets

- Use only verified RTBs tied to the exact course. Never invent or strengthen statistics, salaries, placement outcomes, testimonials, learner identities, or consent.
- A testimonial must involve a real learner with written consent. Do not use fictional people or AI faces as testimonials.
- Keep credentials in ignored local environment files or production secret settings only. Never expose, repeat, or place them in client code, generated context, RAG data, documentation, or error text. If an exposed secret is found, tell Hari to rotate it.
- If a term or requirement is unknown, ask rather than guessing.

## Brand output gate

The supplied 2026 reference image overrides transcribed text. Use the approved full logo lockup only; do not redraw it. White is preferred, Brand Blue is `#0673F9`, and use at most one approved secondary accent. Mona Sans is required for final branded text. If approved logo assets or the font are unavailable, label the output a draft and reserve clear space for deterministic compositing. Review the final image or every distinct video layout before calling it compliant.

## Generation tool boundary

Use the connected Higgsfield tool for image and video generation; do not create or call a direct Higgsfield API integration for these workflows. The connected tool runs in the agent environment, not in the browser, so do not claim that a React button can invoke it automatically. If the requested work is a website integration rather than an agent-run generation, stop and ask Hari for an explicit server-side/provider-integration scope.

## Delivery order

Finish one working New/Create vertical slice, then Refresh. Video work comes last. Do not treat a mock, a typecheck, or an untested provider call as a working integration.

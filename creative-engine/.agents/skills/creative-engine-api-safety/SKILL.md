---
name: creative-engine-api-safety
description: Review or change Creative Engine API routes, authentication, uploads, model outputs, or external requests while preserving per-resource authorization and secret boundaries.
---

# Server boundary checks

The app's Supabase service-role client bypasses row-level security. After `requireUser()`, check whether the current user is allowed to access the specific creative or generation ID before reading, mutating, signing, or returning its data. Apply the same rule to linked asset paths and follow-up jobs.

Validate untrusted request and model output at the boundary; keep provider keys server-side. Bound uploads and paid requests, and avoid exposing private provider responses or credentials in browser errors. Prefer a focused abuse-case test for authorization changes. Keep the existing auth model unless the user asks to change it.

Adapted for this project from the user-supplied `agent-skills-main.zip` API/security guidance.

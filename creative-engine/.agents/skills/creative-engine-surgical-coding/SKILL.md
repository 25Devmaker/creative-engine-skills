---
name: creative-engine-surgical-coding
description: Make focused code changes in this Creative Engine app when implementing or refactoring a scoped feature; keep assumptions and verification explicit.
---

# Focused implementation

Use the smallest change that satisfies the requested behavior. Before editing, identify the affected flow and any assumption that would change the result. Preserve the existing Next.js/Supabase/OpenRouter/Higgsfield architecture unless the user authorizes a change.

Touch only the necessary files; avoid speculative abstractions and adjacent cleanup. For each meaningful code change, update the project-root `../decisions.md` as it happens with what changed, why, and why this method was chosen. Define a check that would show the change works, then run it or state why it cannot run.

Adapted for this project from the user-supplied `andrej-karpathy-skills-main.zip` guidelines; this is not a blanket rule to pause simple work for an interview.

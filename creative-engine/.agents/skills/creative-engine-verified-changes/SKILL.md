---
name: creative-engine-verified-changes
description: Verify a Creative Engine feature or bug fix with a focused test or check before reporting it complete; use for behavior-changing app work.
---

# Evidence before completion

For behavior changes, prefer a small test demonstrating the expected behavior before implementation when practical. Check that it fails for the expected reason, implement the smallest fix, then run the focused check and relevant type/build checks. If tests or a live service are unavailable, state precisely what was and was not verified. Do not equate typechecking with a working provider integration.

Work in thin, reviewable slices. Do not run paid Higgsfield/OpenRouter checks, deploy, create branches, or delegate work merely because a source skill recommends it; those actions need authorization from the actual task and environment.

Adapted for this project from the user-supplied `superpowers-main.zip` testing and verification skills.

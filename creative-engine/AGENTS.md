# Creative Engine project-skill instructions

The parent `AGENTS.md` and root `decisions.md` apply. This directory holds skills and reference assets for the Creative Engine; the runnable Next.js app is in the separate `25Devmaker/creative-engine` repository. Do not claim this package can be run or deployed as the app.

Project-local skills are in `.agents/skills/`. Use `creative-engine-surgical-coding` for scoped app implementation, `creative-engine-verified-changes` for behavior changes, `creative-engine-api-safety` for server/auth/provider work, and `creative-engine-brand-ui` for creative UI and generation guidance. For an agent-run generation workflow, use exactly one of `new-creatives`, `refresh-creatives`, `reframe-and-resize`, or `videos` based on the user's requested output; `videos` requires explicit storyboard acceptance before final generation. Read each applicable `SKILL.md` before making the corresponding change. These are adapted skills, not wholesale installations of the four supplied archives.

For image composition or video-motion direction, also read `newton-creative-direction`. It uses Cosmos, Visuelle, Anime.js, and optional mono-color principles as original-reference inputs while keeping brand, claims, and approved course RTBs authoritative.

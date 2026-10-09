# Creative Engine skills export

This repository is the portable source for the Newton School Creative Engine skills. Keep the repository layout intact when cloning or downloading it: the skills refer to the 2026 brand guide, approved logo and font files, and the app's prompt and design reference files by relative path.

For installation and usage steps, start with the [skills README](.agents/skills/README.md).

## What is included

- `creative-engine/.agents/skills/`: New Creatives, Refresh Creatives, Reframe and Resize, Videos, creative direction, brand UI, engineering guidance, and the optional mono-color reference.
- `skills/newton-school-brand/` and `skills/prompt-enhancer/`: shared brand and prompt guidance.
- `skills/brand/` and `creative-engine/memory/brand/assets/`: the authoritative 2026 guide, approved Newton School logo variants, and Mona Sans fonts.
- `creative-engine/memory/skills/`: prompt, aspect-ratio, and scene-planning references used by the workflows. Some of these source files are still marked `FILL`; treat them as unfinished guidance rather than tested provider recipes.
- `approved-images/`: one flat local folder for image outputs the user explicitly rates Good. The folder is included, but its generated contents are Git-ignored and are not synced to the application or other clones.

## Reuse

For Codex, open the cloned repository as the workspace. The project-local skills live under `creative-engine/.agents/skills/`; read the root and nested `AGENTS.md` instructions before using them. The root `skills/` entries are supporting skill sources in this repository.

For another ChatGPT or Claude account, grant that account access to this private repository, download or clone it, and provide the relevant `SKILL.md` together with its linked references. If the destination's skill installer requires an archive or a different skill directory, package each skill folder and retain the relative project files it links to. These Markdown instructions do not transfer tool connections, account permissions, API keys, model access, or approval state; configure those separately in the destination account.

The approved logo artwork is Newton School brand material. Mona Sans is distributed under the accompanying `creative-engine/memory/brand/assets/OFL.txt`. Do not publish the brand assets from this private repository without Newton School authorization.

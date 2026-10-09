# Install and use the Creative Engine skills

These are project skills for Newton School's Creative Engine. Keep the repository layout intact: a workflow skill may read files in `skills/brand/`, `creative-engine/memory/skills/`, and `creative-engine/memory/brand/assets/`.

## 1. Get the files

1. Ask for access to the private [Creative Engine skills repository](https://github.com/25Devmaker/creative-engine-skills).
2. Clone its `main` branch, or download [the export ZIP](../../deliverables/creative-engine-skills-export.zip) and extract it without moving individual folders.
3. Confirm that this file, `new-creatives/SKILL.md`, `../../memory/brand/assets/newton-school-dark-logo.png`, and `../../../skills/brand/official-2026-guidelines.png` are present. If any are missing, download the complete export again.

From an empty parent directory, the Git option is:

```bash
# Clone the private skills package and its references.
git clone https://github.com/25Devmaker/creative-engine-skills.git
# Enter the folder that contains project-local skills and their references.
cd creative-engine-skills/creative-engine
```

## 2. Use in Codex

1. Open the cloned repository in Codex and work inside its `creative-engine/` skills folder. Read the repository-root `AGENTS.md`, `creative_engine_context_for_chatgpt.md`, and `creative-engine/AGENTS.md` for project rules. Open the separate application repository for code changes.
2. Check that the project skills in `creative-engine/.agents/skills/` appear in Codex's skill list. If your Codex setup does not discover nested project skills, point it to this folder or install the desired folder using your Codex skill installer; retain the entire repository so linked references resolve.
3. Invoke one workflow at a time: `$new-creatives`, `$refresh-creatives`, `$reframe-and-resize`, or `$videos`. Add your brief, exact course, approved hook/subhook/RTBs, source media when needed, and target ratio.
4. For video, review and approve the storyboard before requesting production. Give explicit permission before any connected generation tool spends credits.

Example: `Use $new-creatives for a 9:16 Data Science & AI ad. Hook: [approved hook]. Subhook: [approved subhook]. RTBs: [exact approved wording]. Audience: [persona].`

## 3. Use in Claude Code

Claude Code looks for project skills under `.claude/skills/`, so the `.agents/skills/` folder in this export is not automatically a Claude Code skill directory. [Claude's skill documentation](https://code.claude.com/docs/en/skills) permits symlinked skill folders.

1. Open the cloned repository as a Claude Code project.
2. Create `creative-engine/.claude/skills/` locally. For each workflow you want available, make a directory symlink there to the matching folder in `creative-engine/.agents/skills/` (for example, `.claude/skills/new-creatives` → `../../.agents/skills/new-creatives`). Keep the repository folders in place so the skill's relative references remain valid.
3. Start Claude Code from `creative-engine/`, then use `/new-creatives`, `/refresh-creatives`, `/reframe-and-resize`, or `/videos`. Ask Claude to read the root and app `AGENTS.md` files as project context; Claude Code does not treat `AGENTS.md` as its own automatic instruction file.
4. If a skill does not appear, verify that its symlink resolves to a folder containing `SKILL.md`, then restart or re-open the project.

From inside the cloned `creative-engine/` skills folder, expose the four primary workflows to Claude Code with:

```bash
# Create Claude Code's project skill directory so it can discover the workflows.
mkdir -p .claude/skills
# Link the New workflow to its source; copying it alone would lose linked project files.
ln -s ../../.agents/skills/new-creatives .claude/skills/new-creatives
# Link the Refresh workflow to its source; copying it alone would lose linked project files.
ln -s ../../.agents/skills/refresh-creatives .claude/skills/refresh-creatives
# Link the Reframe workflow to its source; copying it alone would lose linked project files.
ln -s ../../.agents/skills/reframe-and-resize .claude/skills/reframe-and-resize
# Link the Videos workflow to its source; copying it alone would lose linked project files.
ln -s ../../.agents/skills/videos .claude/skills/videos
```

## 4. Use in another ChatGPT or Claude account

Give the other account access to the private repository or the complete ZIP. If its product supports importing skill folders, import the desired `SKILL.md` with its referenced files. Otherwise, provide the skill and linked documents as project instructions and invoke it explicitly by name. A standalone `SKILL.md` without its linked brand and memory files is incomplete.

Connected Higgsfield, Figma, HyperFrames, and Remotion tools, account permissions, renderer setup, and API credentials are **not** included. Configure and test those separately in the destination account. Never paste keys into a skill or a GitHub file.

## 5. Choose the workflow

| Skill | Use it when |
|---|---|
| `new-creatives` | Creating a new Newton School image from a brief. |
| `refresh-creatives` | Changing visuals in an existing approved creative while preserving its factual content. |
| `reframe-and-resize` | Reflowing an existing creative to a requested ratio. |
| `videos` | Planning a storyboard, obtaining approval, then composing video from accepted footage. |
| `newton-creative-direction` | Developing composition or motion ideas within the brand rules. |
| `newton-creative-engine` | Working on the canonical Next.js Creative Engine application. |
| `mono-color` | An optional limited-ink design reference when specifically requested. |

The 2026 [brand guide](../../../skills/brand/official-2026-guidelines.md) and its image are authoritative for every creative. Use the supplied Newton School lockups and Mona Sans files for final artwork. Exact course claims need approved source wording. Some prompt and layout memory files still say `FILL`; they are unfinished guidance, not validated generation recipes.

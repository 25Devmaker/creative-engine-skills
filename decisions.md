# Creative Engine skills decision log

## 2026-10-09 — Save Good-rated images in one shared local folder

- **What changed:** Added a tested, dependency-free save command for the image skills. It accepts a local PNG, JPEG, WebP, GIF, or AVIF only after an explicit Good-rating marker, validates the file header, and copies exact bytes into one flat `approved-images/` folder with a unique filename. The folder is retained in the package but generated images are Git-ignored.
- **Why:** All user-approved images from New, Refresh, and Reframe need one predictable archive, rather than separate folders per image or an assumption that returning media inline also saves it.
- **Why this method:** A small Node helper uses the existing runtime, works from any caller working directory, and prevents accidental overwrites. Keeping generated media local and out of Git avoids silently publishing user outputs or conflating this skills-only archive with the separate website's Supabase storage.

## 2026-10-09 — Publish skills separately from the application

- **What changed:** Packaged the Creative Engine workflow skills, brand guide, approved logo/font assets, and prompt/design references in a standalone private repository with its own installation README and export ZIP.
- **Why:** The skills should be reusable by authorized accounts without copying or deploying the application, while preserving the relative links needed by their instructions.
- **Why this method:** A separate private Git repository keeps versioned instructions and approved assets together without moving the canonical Next.js app or exposing brand material in a public repository. The ZIP is an optional offline distribution format; provider connections and credentials remain outside both artifacts.

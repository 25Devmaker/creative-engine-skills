# Creative Engine skills decision log

## 2026-10-09 — Publish skills separately from the application

- **What changed:** Packaged the Creative Engine workflow skills, brand guide, approved logo/font assets, and prompt/design references in a standalone private repository with its own installation README and export ZIP.
- **Why:** The skills should be reusable by authorized accounts without copying or deploying the application, while preserving the relative links needed by their instructions.
- **Why this method:** A separate private Git repository keeps versioned instructions and approved assets together without moving the canonical Next.js app or exposing brand material in a public repository. The ZIP is an optional offline distribution format; provider connections and credentials remain outside both artifacts.

# Repository instructions

## Personal-site evidence

When creating or revising project, writing, resume, or portfolio content, read `skills/evidence-first-personal-site/SKILL.md` before editing. Keep public facts, permitted interpretation, and private or unverified material separate.

## Mechanism illustrations

When a task involves a project mechanism diagram, explanatory workflow image, bilingual diagram, infographic-style process image, or localization of an existing mechanism image, read `skills/mechanism-illustration/SKILL.md` completely before acting.

Use the repository-local Skill even when a global copy is installed. It is the version pinned to this website.

- Edit the JSON files in `skills/mechanism-illustration/templates/`; do not hand-edit the generated SVG text.
- Run `npm test` inside `skills/mechanism-illustration/` after changing the Skill or templates.
- Render with `node scripts/render-all.mjs <output-directory>`.
- Keep generated mechanism diagrams labeled as explanatory illustrations.
- Preserve a real product, repository, document, or source screenshot as separate evidence on project-detail pages.
- Do not add undocumented features, results, roles, metrics, or system behavior to a diagram.

The standalone upstream package is `https://github.com/alexliu072903-bit/mechanism-illustration-skill`. The committed copy under `skills/mechanism-illustration/` exists so a fresh clone of this website works without a global Skill installation.

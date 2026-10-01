# Design QA — Style-kit homepage

## Direction

- Reference: the supplied AirJelly style kit and Alex's approved calm iridescent palette.
- Implementation: `http://127.0.0.1:4322/alexliu.readme/`
- Color strategy: neutral `#fafafa` page, one low-saturation rainbow field in the Hero, and brown `#8b6f47` reserved for actions.
- Structure: evidence-led Hero, one product-principle section, two real-project chapters, ruled project and Writing lists, and the existing Projects / Writing / About / CV navigation.

## Visual checks

- Desktop: inspected the Hero, product principles, Cairn Context evidence, project list, Writing list, and delivery evidence.
- Mobile: inspected at 390px and 320px. The Hero order is intro → visual → facts → actions; navigation remains one line and scrolls horizontally only when needed.
- English: inspected the complete Hero at `?lang=en`; navigation, CV label, facts, actions, and copy switch without layout breakage.
- Illustration treatment: decorative icons were removed. Cairn Context and Telegram Mini App Fastbuild use real project screenshots with captions; the Hero haze is explicitly atmospheric rather than presented as evidence.

## Content checks

- Current tools are Claude Code, Codex, and Obsidian. OpenRouter, Perplexity, NotebookLM, Notion, Figma, and Cursor are not presented as Alex's tools.
- Cairn Lite is hidden; Cairn Context is presented as the current project.
- Selected projects link to Cairn Context, Telegram Mini App Fastbuild, and Obsidian AI Starter.
- Abstract capability copy was replaced by concrete actions and questions. The forced closing slogan was removed.
- Two Flywheels links to its Writing page. IACP is intentionally presented as a research record without a fabricated destination.
- Projects, Writing, About, and the language-specific CV remain reachable from the header.

## Quality checks

- Semantic heading order and link labels are present in the accessibility tree.
- Body copy uses readable contrast and controlled line length.
- The layout avoids horizontal content overflow at 320px.
- `npm run check`: 0 errors, 0 warnings, 0 hints.
- `npm run build`: 12 pages generated successfully.
- `npm audit --omit=dev`: 0 production vulnerabilities.
- `git diff --check`: passed.

final result: passed

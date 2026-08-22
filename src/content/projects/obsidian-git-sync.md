---
title: Obsidian Git Sync
description: 用一句自然语言完成 vault 同步，同时让用户明确决定哪些私人内容能够离开本地。
year: 2026
type: Skill
status: Available
source: Open source
draft: false
order: 5
specimen: sync
links:
  - label: View on GitHub
    url: https://github.com/alexliu072903-bit/obsidian-git-sync-skill
---

## Context

Git 很适合保存 Markdown 的历史，但初始化、`.gitignore`、remote、首次 push 和跨平台脚本对很多 Obsidian 用户并不自然。更重要的是，一个“自动同步整个 vault”的方便方案，也可能顺手把插件设置、附件或私人笔记送进错误的仓库。

这个 Skill 试图同时减少操作摩擦和信息风险，而不是用前者掩盖后者。

## Practice

用户可以直接告诉 Agent：“同步我的 Obsidian SKILL 和 daily 文件夹到 GitHub。”Skill 会先询问 vault、remote 与同步模式，再调用 Windows PowerShell 或 macOS Shell 脚本完成设置。

全量模式适合完整的 Private backup；allowlist 模式默认忽略整个 vault，只重新开放用户指定的目录。脚本支持 `dry-run`，在覆盖 `.gitignore` 前创建备份，不默认包含 `.obsidian`，并拒绝把同步目标当成一个无需判断的技术参数。

## Current State

Skill 以 MIT License 开源，同时支持 Windows 与 macOS 的全量和 allowlist 模式。它规模很小，但保留了一个我希望反复使用的原则：自动化可以替人完成机械步骤，却不应该替人决定信息边界。

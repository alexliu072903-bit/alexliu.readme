---
title: Obsidian Git Sync
description: 一个 Claude Code Skill：用一句话把 Obsidian vault 同步到 GitHub，并在上传之前由你决定哪些文件夹可以离开本地。
year: 2026
category: Skill
type: Skill
status: Available
source: Open source
draft: false
order: 6
specimen: sync
image: project-assets/obsidian-git-sync.png
imageAlt: Obsidian Git Sync Skill 的公开 GitHub 仓库，包含 Windows 与 macOS 脚本、双语说明和 Skill 文件
evidenceCaption: 公开 GitHub 仓库：Skill 文件、双平台脚本和 allowlist 同步方式都可以查看。
problem: 自动同步整个 vault 很方便，也可能把私人内容一起传上去。
contribution: 把 Git 初始化和同步封装成支持预览、备份和 allowlist 的 Agent Skill。
current: MIT 开源；Windows 与 macOS 都支持全量同步和指定文件夹同步。
brief:
  - label: 场景
    text: 想把 Obsidian vault 同步到 GitHub，又需要先决定哪些内容可以上传。
  - label: 做法
    text: 对 Claude Code 说出要同步的目录，选择全量备份或只同步指定文件夹（allowlist），先预览再执行。
  - label: 现状
    text: MIT 开源；Windows 与 macOS 都支持全量和指定文件夹两种模式。
en:
  description: A Claude Code Skill that syncs an Obsidian vault to GitHub in one sentence, with you deciding which folders may leave your machine before anything is uploaded.
  imageAlt: The public Obsidian Git Sync Skill repository, with Windows and macOS scripts, bilingual docs, and the Skill file
  evidenceCaption: The public repository. The Skill file, the two platform scripts, and the allowlist approach can all be inspected.
  brief:
    - label: Situation
      text: You want to sync an Obsidian vault to GitHub but need to decide first what may be uploaded.
    - label: What it does
      text: Tell Claude Code which vault to sync, choose a full backup or only selected folders (an allowlist), then preview and run.
    - label: Status
      text: MIT licensed. Windows and macOS both support the full-vault and selected-folder modes.
  sections:
    - heading: The problem
      paragraphs:
        - >-
          Git is well suited to preserving Markdown history, but repository setup, .gitignore rules, remotes, the first push, and platform-specific scripts are not straightforward for many Obsidian users. More importantly, automatically syncing an entire vault can send plugin settings, attachments, or private notes to the wrong repository.
    - heading: The approach
      paragraphs:
        - >-
          You can tell the Agent, “Sync my Obsidian SKILL and daily folders to GitHub.” The Skill asks for the vault, remote, and sync mode, then invokes the Windows PowerShell or macOS shell script.
        - >-
          Full mode is for a complete private backup. Allowlist mode ignores the whole vault by default and opens only the folders the user selected. The scripts support a dry-run preview, exclude .obsidian by default, and back up the existing .gitignore before the macOS script replaces it.
    - heading: Current state
      paragraphs:
        - >-
          The project is MIT licensed. Windows and macOS support both full-vault and allowlist sync. The implementation is deliberately small: automation handles the mechanical steps, while the user still decides what may leave the machine.
  readmeSteps:
    - Install the Skill into Claude Code's skills directory.
    - Tell Claude Code you want to sync your Obsidian vault to GitHub.
    - Provide the vault path, an empty GitHub repository URL, and choose full-vault or selected-folder sync.
readme:
  url: https://github.com/alexliu072903-bit/obsidian-git-sync-skill#usage
  steps:
    - 将 Skill 安装到 Claude Code 的 skills 目录。
    - 在 Claude Code 里直接说明要把 Obsidian vault 同步到 GitHub。
    - 提供 vault 路径和空的 GitHub 仓库地址，并选择全量同步或指定文件夹。
links:
  - label: 查看 GitHub
    url: https://github.com/alexliu072903-bit/obsidian-git-sync-skill
---
## 问题

Git 很适合保存 Markdown 的历史，但初始化、`.gitignore`、remote、首次 push 和跨平台脚本，对很多 Obsidian 用户并不顺手。更麻烦的是，“自动同步整个 vault”可能顺手把插件设置、附件或私人笔记送进错误的仓库。

## 做法

你可以直接对 Agent 说：“同步我的 Obsidian SKILL 和 daily 文件夹到 GitHub。”Skill 会先询问 vault、remote 和同步模式，再调用 Windows PowerShell 或 macOS Shell 脚本完成设置。

全量模式适合完整的 Private backup。allowlist 模式默认忽略整个 vault，只开放你指定的目录。脚本支持 `dry-run` 预览，默认不包含 `.obsidian`；macOS 脚本在覆盖 `.gitignore` 之前会备份原文件。

## 现状

MIT 开源，Windows 和 macOS 都支持全量与 allowlist 两种模式。规模很小，保留的原则是：自动化替人完成机械步骤，信息的边界仍然由人来定。

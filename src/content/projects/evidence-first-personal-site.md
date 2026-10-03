---
title: Evidence-First Personal Site
description: 一套给 Agent 的个人网站构建方法：先确认公开证据和边界，再组织内容、实现页面并验证真实发布结果。
year: 2026
category: Skill
type: Skill
status: Available
source: Open source
draft: false
featured: true
order: 3
specimen: evidence-site
illustration: project-assets/evidence-first-personal-site.zh.svg
illustrationEn: project-assets/evidence-first-personal-site.en.svg
illustrationAlt: Evidence-First Personal Site 机制图：真实材料进入证据清单，用户确认公开边界后形成内容契约，并完成网站构建与上线验证
illustrationCaption: 机制说明图：公开边界在内容生成之前由用户确认；没有证据的内容不会被补成漂亮故事。
problem: Agent 很容易把个人网站写成自我评价，或把私密、过期和未验证的信息包装成公开成果。
contribution: 把证据盘点、公开边界、内容契约、双语结构、Astro 实现和发布后核验整理成一套可移植 Skill。
current: MIT 开源，适用于 Claude Code、Codex 等能读取 SKILL.md 的 Agent；默认生成静态个人网站，也支持改版已有网站。
brief:
  - label: 场景
    text: 想让 Agent 基于简历、项目、文章和公开仓库构建个人网站，又不希望它编造经历或泄露私密材料。
  - label: 做法
    text: 先建立不公开的 Evidence Ledger，区分公开事实、获准解释和私密或未验证内容；用户确认边界后再形成内容契约并构建网站。
  - label: 现状
    text: MIT 开源；支持新建或改版个人网站、双语内容、GitHub Pages 与发布后验证。
en:
  description: "A Skill for building a personal site from evidence: confirm public facts and boundaries first, then structure content, implement the site, and verify the live result."
  illustrationAlt: Evidence-First Personal Site mechanism diagram showing real sources entering an evidence ledger, an owner-approved public boundary, a content contract, and a verified site build
  illustrationCaption: Mechanism diagram. The owner approves the public boundary before content generation; unsupported material is not polished into a story.
  brief:
    - label: Situation
      text: You want an Agent to build a personal site from a resume, projects, writing, and repositories without inventing experience or exposing private material.
    - label: What it does
      text: It creates a private evidence ledger, separates public facts, permitted interpretation, and private or unverified material, then builds only after the owner approves the boundary.
    - label: Status
      text: MIT licensed. Supports new builds and revisions, bilingual content, GitHub Pages, and post-deployment verification.
  readmeSteps:
    - Install the Skill in the Agent's skills directory or ask the Agent to read SKILL.md from the repository.
    - Provide a public bio or resume, at least two projects, inspectable evidence, and a public contact route.
    - Confirm the publication boundary before the Agent implements and deploys the site.
readme:
  url: https://github.com/alexliu072903-bit/evidence-first-personal-site#install-and-use
  steps:
    - 把 Skill 安装到 Agent 的 skills 目录，或让 Agent 直接读取仓库里的 SKILL.md。
    - 提供可公开的基本信息、至少两个项目、对应证据和公开联系方式。
    - 在 Agent 实现和发布网站前，确认准确的公开边界。
links:
  - label: 查看 GitHub
    url: https://github.com/alexliu072903-bit/evidence-first-personal-site
---
## 问题

个人网站经常缺的不是页面，而是证据边界。项目很多，但访客看不出哪些仍可访问、哪些已经结束、哪些源码私有；Agent 又容易为了完整感补出夸大的贡献、未经确认的状态和泛 AI 文案。

## 做法

Skill 先建立一份不公开的 Evidence Ledger，把材料分成公开事实、获准的解释，以及私密或未验证内容。用户确认哪些可以离开本地后，Agent 才定义 Projects、Writing 与 About 的内容契约，生成 Astro 页面，并检查双语、移动端、图片、状态与 GitHub Pages。

## 现状

MIT 开源。仓库包含主 Skill、证据与语气规则、已有网站改版方法、双语结构、Astro 基础和发布前 QA。它不替用户编造完整人生，也不会在没有明确授权时发布网站。

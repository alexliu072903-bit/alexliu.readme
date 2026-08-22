---
title: Blink Vibe Test
description: 一段关于文化语境、身份表达与 Telegram 传播的历史产品实验。
year: 2026
category: 产品
type: Product
status: Historical
source: Private source
draft: false
order: 2
specimen: vibe
image: project-assets/blink-vibe-test.png
imageAlt: Telegram Mini App Fastbuild 的公开 GitHub 仓库，包含 README、Skill 和示例代码
problem: 传统性格测试的固定分类和直译内容不适合 Telegram 的跨文化社交场景。
contribution: 将产品迭代成英俄双语的分享型测试，并完成 Telegram 生产部署。
current: 原产品状态无法确认；部署经验已沉淀为开源 Skill。
links:
  - label: 查看开源 Skill
    url: https://github.com/alexliu072903-bit/tg-miniapp-fastbuild
---

## 性格测试在 Telegram 里首先是一种社交内容

传统性格测试习惯把人放进一套稳定分类，再把同一套题目翻译给不同地区的用户。但在 Telegram 的年轻社群里，测试更像一种表达身份、和朋友开启对话的内容。准确地翻译一个标签，并不等于它在另一种文化中仍然让人有感觉。

Blink Vibe Test 来自我前前公司的一次产品实践。它现在更适合作为历史记录，而不是仍在运营的产品。

## 从翻译题目，到重写文化语境

项目从较早的 SBTI 原型逐渐演化为 English / Russian 双语的 Blink Vibe Check。两个版本共享测试与结果结构，但问题、人格名称、描述语气和文化引用并不完全相同。这里最值得留下的不是完整版本史，而是一个很具体的认识：本地化不只是语言转换，它需要重新寻找当地用户愿意用来描述自己的语言。

结果页同时承担分享入口，让一次测试能够自然进入 Telegram 的朋友与社群关系。产品最终并没有留下一个可以公开、持续维护的代码仓库，但交付过程中遇到的 BotFather、Railway、Webhook、双语状态与分享链接问题是真实且可复用的。

## 产品已经结束，部署经验变成公开 Skill

产品当前运行状态无法确认，正式源代码保持 Private，也不在这里提供旧 Bot 入口。后来我把实际踩过的部署问题整理成了开源的 `tg-miniapp-fastbuild` Skill：让开发者或 Agent 可以从 Bot 创建一路走到前后端与 PostgreSQL 的生产部署。这份 Skill 是这段项目经历今天仍然可用的部分。

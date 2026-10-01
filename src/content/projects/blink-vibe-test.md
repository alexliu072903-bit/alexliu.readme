---
title: Blink Vibe Test
description: 面向 Telegram 的英俄双语人格测试：题目、人格名称和语气按各自的文化重写，结果页可以直接分享。
year: 2026
category: 产品
type: Product
status: Historical
source: Private source
draft: true
order: 2
specimen: vibe
problem: 固定分类加直译题目的人格测试，在 Telegram 的跨文化社群里很难引起共鸣。
contribution: 把产品迭代成英俄双语的分享型测试，两个版本分别重写内容，并完成 Telegram 生产部署。
current: 我已不再参与；没有保留公开入口，运行状态无法确认。部署经验已整理成开源 Skill。
brief:
  - label: 场景
    text: 在 Telegram 里做跨文化的人格测试，并希望结果能被分享给朋友和社群。
  - label: 做法
    text: English 和 Russian 两个版本各自重写题目、人格名称和分享文案，不做直译。
  - label: 现状
    text: 我已不再参与，源码私有，没有公开入口，运行状态无法确认；部署经验整理成了开源 Skill。
en:
  description: A bilingual English and Russian personality test for Telegram. Questions, personality names, and tone were rewritten for each culture, and the result page can be shared directly.
  brief:
    - label: Situation
      text: A cross-cultural personality test on Telegram whose results people can share with friends and communities.
    - label: What I did
      text: Rewrote the questions, personality names, and share copy separately for the English and Russian versions instead of translating them.
    - label: Status
      text: I am no longer involved. The source is private, no public entry point was kept, and its running state is unconfirmed. The deployment lessons became an open-source Skill.
links:
  - label: 查看由它提炼的开源 Skill
    url: https://github.com/alexliu072903-bit/tg-miniapp-fastbuild
---

## 在 Telegram 里，性格测试首先是一种社交内容

传统性格测试把人放进一套稳定的分类，再把同一套题目翻译给不同地区的用户。在 Telegram 的年轻社群里，测试更像一种表达身份、和朋友开启话题的内容。标签翻译得再准确，也不保证在另一种文化里仍然让人有感觉。

Blink Vibe Test 是我在 Emotional Byte AI 实习期间推进的产品，现在更适合当作一份历史记录来读。

## 从翻译题目，到重写文化语境

项目从较早的 SBTI 原型演化为 English / Russian 双语的 Blink Vibe Check。两个版本共用测试和结果结构，题目、人格名称、描述语气和文化引用各自重写。留下的最具体的认识是：本地化需要重新找到当地用户愿意拿来形容自己的语言，翻译只是其中很小的一步。

结果页同时是分享入口，一次测试可以直接进入 Telegram 里的朋友和社群关系。

## 产品已经结束，留下一份公开的部署 Skill

我已不再参与这个项目，源码保持私有，也不提供旧 Bot 的入口，当前运行状态无法确认。交付过程中遇到的 BotFather、Railway、Webhook、双语状态和分享链接问题，后来整理成开源的 `tg-miniapp-fastbuild`，可以单独使用，详见页首的链接。

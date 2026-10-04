---
title: Telegram Mini App Fastbuild
description: 照着做，把 Telegram Mini App 部署上线：BotFather、GitHub、Railway 一步步走完。基于 Blink Vibe Test 的部署。
year: 2026
category: Skill
type: Skill
status: Available
source: Open source
draft: false
featured: true
order: 5
specimen: vibe
illustration: project-assets/tg-miniapp-fastbuild-mechanism.zh.svg
illustrationEn: project-assets/tg-miniapp-fastbuild-mechanism.en.svg
illustrationAlt: Telegram Mini App Fastbuild 部署机制图：从 Bot、代码、三个 Railway 服务到 Webhook 和公开链接，每一步都有失败点与验证检查
illustrationCaption: 机制说明图：部署不是一次上传，而是一条需要逐步验证的链路；失败点和检查点都来自真实部署。
image: project-assets/tg-miniapp-fastbuild.png
imageAlt: Telegram Mini App Fastbuild 的公开 GitHub 仓库，包含 Skill、双语说明和生产部署经验
evidenceCaption: 公开 GitHub 仓库：这份 Skill 来自 Blink Vibe Test 的英俄双语部署。
problem: Telegram Mini App 的部署要经过 BotFather、Railway、Webhook 和分享链接，每一处都有难以发现的陷阱。
contribution: 把一次生产部署中遇到的问题，整理成覆盖技术栈、失败点和验证步骤的 Agent Skill。
current: MIT 开源；仓库只有一份 SKILL.md，可以让 Agent 直接读取执行，也可以由开发者照着做。
facts:
  - value: '4'
    label: GitHub stars
  - value: '157'
    label: 小红书介绍笔记的收藏（另有 105 个赞）
reactions:
  - image: project-assets/tg-miniapp-fastbuild-xhs.jpg
    alt: 小红书笔记《没有 AI 项目经历，我开源我的 Skill 给你》的截图，标题、正文以及点赞、收藏、评论数
    caption: 介绍这份 Skill 的小红书笔记，写给想转 AI 产品岗位、但简历上没有 AI 项目的人。截图于 2026 年 10 月 1 日。
factsNote: 数据截至 2026 年 10 月 1 日，来自 GitHub 仓库页和我自己的小红书笔记后台。
brief:
  - label: 场景
    text: 让 Agent 或自己把 Telegram Mini App 从空项目部署到生产环境。
  - label: 覆盖
    text: BotFather、GitHub、Railway 上的前端、后端与 PostgreSQL 三个服务、Webhook、双语状态和分享链接。
  - label: 来源
    text: 基于 Blink Vibe Test 做出来：里面的每一条陷阱，都是它部署时遇到的。那是我在 Emotional Byte AI 实习时独立交付的英俄双语 Telegram 人格测试。
en:
  description: Follow one guide to deploy a Telegram Mini App through BotFather, GitHub, and Railway, step by step. Built from the deployment of Blink Vibe Test.
  imageAlt: The public Telegram Mini App Fastbuild GitHub repository, with the Skill, bilingual README, and production deployment notes
  evidenceCaption: The public repository. The Skill comes from the bilingual English and Russian deployment of Blink Vibe Test.
  illustrationAlt: Telegram Mini App Fastbuild deployment diagram showing bot setup, source code, three services, webhook registration, and public-link verification with failure checkpoints
  illustrationCaption: Mechanism diagram. Deployment is a chain of verified stages rather than one upload; the failure points and checks come from a real production deployment.
  brief:
    - label: Situation
      text: You, or your agent, need to deploy a Telegram Mini App from an empty project to production.
    - label: Coverage
      text: BotFather, GitHub, three Railway services (frontend, backend, PostgreSQL), webhooks, bilingual state, and share links.
    - label: Source
      text: Built from Blink Vibe Test. Every gotcha in it was hit while deploying Blink Vibe Test, a bilingual English and Russian Telegram personality test I delivered independently during my internship at Emotional Byte AI.
  sections:
    - heading: The problem
      paragraphs:
        - >-
          A Telegram Mini App passes through BotFather, GitHub, Railway, PostgreSQL, webhooks, and Telegram's sharing entry point. One wrong setting can leave a product working locally but unable to reach production.
    - heading: Where it came from
      paragraphs:
        - >-
          This Skill grew out of the English and Russian deployment of Blink Vibe Test, a Telegram personality test for which I independently delivered the PRD, full-stack implementation, and three-service Railway deployment during my internship at Emotional Byte AI. The product is no longer running.
        - >-
          The Skill records problems encountered and resolved during that deployment: start Railway from an Empty Project, do not set PORT manually, use npm install in railway.json to avoid npm ci cache conflicts, include https:// in the webhook URL, and use the t.me/BOT_NAME/app format for the public share link.
    - heading: What it covers
      paragraphs:
        - >-
          The workflow covers a React and Vite frontend, a Node.js, Express, and Telegraf backend, PostgreSQL, Railway, and GitHub CI/CD. It is written as a sequence an Agent can execute while verifying the result at each critical stage.
    - heading: Current state
      paragraphs:
        - >-
          The Skill is MIT licensed and published as one SKILL.md that an Agent can read directly or a developer can follow by hand.
  facts:
    - value: '4'
      label: GitHub stars
    - value: '157'
      label: saves on my Xiaohongshu introduction post (plus 105 likes)
  reactions:
    - alt: Screenshot of the Xiaohongshu post "No AI project experience? I open-sourced my Skill for you", showing the text and the like, save, and comment counts
      caption: The Xiaohongshu post introducing this Skill, written for people who want to move into AI product roles but have no AI project on their resume. Screenshot taken on October 1, 2026.
  factsNote: Figures as of October 1, 2026, from the GitHub repository page and my own Xiaohongshu post.
  readmeSteps:
    - Have the agent read SKILL.md in full before creating or changing any deployment configuration.
    - Set up Railway as three services (frontend, backend, PostgreSQL) and never set PORT by hand.
    - Register and verify the webhook, then check production with a share link in the t.me/BOT_NAME/app format.
readme:
  url: https://github.com/alexliu072903-bit/tg-miniapp-fastbuild#how-to-use
  steps:
    - 让 Agent 先完整读取 SKILL.md，再开始创建或修改部署配置。
    - 按 Frontend、Backend、PostgreSQL 三个服务配置 Railway，不要手动设置 PORT。
    - 注册并验证 Webhook，用 t.me/BOT_NAME/app 格式的分享链接做生产检查。
links:
  - label: 查看 GitHub
    url: https://github.com/alexliu072903-bit/tg-miniapp-fastbuild
---
## 问题

Telegram Mini App 会经过 BotFather、GitHub、Railway、PostgreSQL、Webhook 和 Telegram 的分享入口。任何一处配置出错，产品都会停在“本地可以运行”，没法上线。

## 来源

这份 Skill 基于 Blink Vibe Test 的英俄双语部署。Blink Vibe Test 是我在 Emotional Byte AI 实习期间独立完成 PRD、全栈开发和 Railway 三服务部署的 Telegram 人格测试，面向俄语和英语用户，现已不再运行。

Skill 记录的是部署中遇到并解决的问题：Railway 要从 Empty Project 开始添加服务，不能手动设置 PORT；railway.json 里要用 `npm install`，避开 `npm ci` 的缓存冲突；Webhook URL 必须带 `https://`；Mini App 的分享链接必须是 `t.me/BOT_NAME/app` 格式。

## 内容

Skill 覆盖 React + Vite 前端、Node.js + Express + Telegraf 后端、PostgreSQL、Railway 和 GitHub CI/CD。它按步骤写成，Agent 可以逐步执行，并在关键节点验证结果。

---
title: Obsidian AI Starter
description: 一套可重复的安装脚本，把 Pi coding agent 接进已有的 Obsidian vault，支持 Windows 和 macOS。
year: 2026
category: 开源工具
type: Setup
status: Available
source: Open source
draft: false
order: 4
specimen: starter
image: project-assets/obsidian-ai-starter.png
imageAlt: Obsidian AI Starter 的公开 GitHub 仓库，包含跨平台安装脚本、补丁、测试和安装文档
evidenceCaption: 公开 GitHub 仓库：安装脚本、固定版本、跨平台 patch 与使用说明都可以查看。
problem: 本地 Agent 的集成常常卡在依赖、插件构建和跨平台差异上。
contribution: 把 Pi Agent 接入 Obsidian 的过程做成可重复、失败时会停止的安装脚本。
current: MIT 开源，支持 Windows 10/11 和 macOS；不支持 Linux 和 Obsidian 移动端。
brief:
  - label: 场景
    text: 想在自己的 Obsidian vault 里和 Pi agent 对话，但不想自己处理 Node、插件构建和平台差异。
  - label: 做法
    text: 运行一个安装脚本：检查环境，安装固定版本的 Pi 和插件，打补丁、构建，再写入 vault。任何一步失败就停止。
  - label: 现状
    text: MIT 开源，支持 Windows 10/11 和 macOS；模型账号或 API key 由你自己提供，安装器不会读取或保存。
en:
  description: A repeatable installer that brings the Pi coding agent into an existing Obsidian vault on Windows and macOS.
  imageAlt: The public Obsidian AI Starter GitHub repository, with cross-platform installers, patches, tests, and setup docs
  evidenceCaption: The public repository. Installers, pinned versions, cross-platform patches, and setup notes can all be inspected.
  brief:
    - label: Situation
      text: You want to chat with the Pi agent inside your own Obsidian vault without handling Node, plugin builds, and platform differences yourself.
    - label: What it does
      text: One installer checks the environment, installs pinned versions of Pi and the plugin, applies a patch, builds, and writes into the vault. Any failed step stops it.
    - label: Status
      text: MIT licensed, for Windows 10/11 and macOS. You provide your own model account or API key; the installer never reads or stores it.
  sections:
    - heading: The problem
      paragraphs:
        - >-
          Putting an AI inside a knowledge base sounds like a small integration. In practice it crosses Node, plugin builds, model sign-in, vault permissions, Windows and macOS differences, and private backups. One failed step can leave the idea of a personal AI workspace stuck at setup.
        - >-
          The project came from my own need: conversations with an Agent should return to my Markdown instead of remaining inside the history of a subscription product.
    - heading: The approach
      paragraphs:
        - >-
          Obsidian AI Starter combines the Pi Agent, vault tools, and an Obsidian plugin into a repeatable installation. The script validates the target directory and dependencies, installs pinned versions, checks out a fixed commit, applies cross-platform patches, builds the plugin, and writes it into the local vault.
        - >-
          A failed native command stops the process. The installer does not continue and leave behind something that only looks complete.
    - heading: Permission boundary
      paragraphs:
        - >-
          The vault is the working directory, but the Agent is not sandboxed from the permissions of the current user. GitHub backup is off by default and runs only after the user provides an empty private repository and confirms again before the push.
    - heading: Current state
      paragraphs:
        - >-
          The project is MIT licensed, with pinned dependencies and support for Windows 10/11 and macOS. It is an installation and integration layer rather than a fork of Pi or the Obsidian plugin. Windows requires Git for Windows, and Node.js must be version 22.19 or newer.
  readmeSteps:
    - Clone the repository and run the setup script for your platform with the path to an existing Obsidian vault.
    - In Obsidian, enable the Pi plugin and register the command line interface on PATH.
    - Run pi to sign in, then open Pi chat from the Command Palette.
readme:
  url: https://github.com/alexliu072903-bit/obsidian-ai-starter#install
  steps:
    - Clone 仓库后，按平台运行 setup 脚本，并传入已有 Obsidian vault 的路径。
    - 在 Obsidian 中启用 Pi plugin，并在 Command line interface 里选择 Register for PATH。
    - 运行 pi 完成登录，再从 Command Palette 打开 Pi chat。
links:
  - label: 查看 GitHub
    url: https://github.com/alexliu072903-bit/obsidian-ai-starter
---
## 问题

把 AI 放进知识库听起来是个简单的集成，实际要跨过 Node、插件构建、模型登录、vault 权限、Windows 与 macOS 的差异，还有私密备份。对第一次配置本地 Agent 的人来说，任何一步失败，都会让“拥有自己的 AI 工作环境”停在概念阶段。

这个项目来自我自己的需求：和 Agent 的对话应该回到我的 Markdown 里，而不是留在某个订阅产品的会话历史中。

## 做法

Obsidian AI Starter 把 Pi Agent、vault tools 和 Obsidian 插件组合成一套可重复安装的环境。脚本先验证目标目录和依赖，再安装固定版本、获取固定 commit、应用跨平台 patch、构建插件，并写入本地路径。任何 native command 失败，脚本都会停止，不会留下看起来完成的半成品。

## 权限边界

工作目录是 vault，但 Agent 没有被沙箱隔离，仍然拥有当前用户允许的文件、Shell 和网络权限。GitHub 备份默认关闭，只有你给出一个空的 Private repository 并再次确认后才会 push。

## 现状

MIT 开源，支持 Windows 10/11 和 macOS，依赖版本固定。它是一层安装与集成，没有 fork Pi 或 Obsidian 插件。Windows 上需要 Git for Windows，Node.js 需要 22.19 以上。

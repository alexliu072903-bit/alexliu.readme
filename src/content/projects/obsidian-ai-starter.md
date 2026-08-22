---
title: Obsidian AI Starter
description: 把一个本地 Agent 可靠地接入已有 Obsidian vault，并让安装、版本与安全边界都可以被复现。
year: 2026
type: Setup
status: Available
source: Open source
draft: false
order: 4
specimen: starter
links:
  - label: View on GitHub
    url: https://github.com/alexliu072903-bit/obsidian-ai-starter
---

## Context

把 AI 放进知识库听起来像一个简单集成，真正落地时却跨过 Node、插件构建、模型登录、vault 权限、Windows / macOS 差异和私密备份。对第一次配置本地 Agent 的用户来说，任何一个失败步骤都足以让“拥有自己的 AI 工作环境”停留在概念里。

这个项目来自我对 Obsidian 与 Agent 协作的实际需求：对话应该回到用户自己的 Markdown 中，而不是只留在某个订阅产品的会话历史里。

## Practice

Obsidian AI Starter 把 Pi Agent、vault tools 和 Obsidian 插件组合成一套可重复安装的环境。脚本先验证目标目录和依赖，再安装固定版本、获取固定 commit、应用跨平台 patch、构建插件并写入正确的本地路径。任何 native command 失败都会停止，而不是留下一个看似完成的半成品。

项目没有把安全描述得比现实更好：工作目录是 vault，并不意味着 Agent 被沙箱隔离；它仍然拥有当前用户允许的文件、Shell 与网络权限。GitHub 备份默认关闭，只有在用户明确给出空的 Private repository 并再次确认后才会 push。

## Current State

项目以 MIT License 开源，支持 Windows 10/11 与 macOS，固定了可验证的依赖版本。它不是 Pi 或 Obsidian 插件的 fork，而是一层安装与集成：目标是让复杂系统可复现，同时不模糊它真实的权限边界。

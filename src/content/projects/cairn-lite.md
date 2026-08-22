---
title: Cairn Lite
description: 一个透明、Git-friendly 的跨 Agent 项目 Context 协议，不试图成为记住一切的通用 Memory。
year: 2026
category: 开源工具
type: Protocol
status: Experimental
source: Open source
draft: false
order: 3
specimen: cairn
image: project-assets/cairn-lite.png
imageAlt: Cairn Lite 的公开 GitHub 仓库，包含协议文档、Python CLI、测试和项目历史
problem: 切换 Agent 或开启新会话时，项目判断不断丢失。
contribution: 设计一套只记录重要变化的 Markdown 协议与 CLI。
current: 已开源并可使用，但协议仍处于实验阶段。
scanTitles:
  problem: 判断为什么会丢失
  contribution: 只记录发生变化的结论
  current: 协议今天在哪里
links:
  - label: 查看 GitHub
    url: https://github.com/alexliu072903-bit/cairn-lite
---

## 切换 Agent 时，项目判断不断丢失

Claude、Codex 和其他 Agent 可以在同一个项目里工作，却不会天然继承彼此形成的判断。每次切换工具或开启新会话，人都要重新解释背景；把所有历史塞进 `AGENTS.md`，又会让 Context 越来越重，最后没有人知道什么仍然有效。

我想解决的不是“让 AI 记住一切”，而是让一个项目的重要判断能够在不同 Agent 之间恢复，同时仍然由用户理解和控制。

## 用少量 Markdown 保存变化，而不是记住一切

Cairn Lite 使用少量普通 Markdown 文件保存项目结论：一份反向时间顺序的 `LOG.md` 负责指向变化，topic 文件只维护某个主题当前成立的结论，Agent 进入项目后先读最近记录，再按任务打开相关主题。

协议只接受几类变化：产品或技术决策被修改、失败原因得到验证、旧结论被推翻，或者某个模式已经值得复用。日常进度、会议原文、未经验证的猜测与个人数据不进入 Cairn。CLI 提供初始化、验证、状态检查和跨 Agent handoff test，但不会替代 PRD、代码或任务系统自己的事实来源。

## 协议已经可用，但仍在实验

Cairn Lite 以 MIT License 开源，目前仍是 experimental protocol。它可以使用，但格式在 1.0 前仍可能变化。项目保留这个不确定状态，因为透明地说明边界，比把早期协议包装成成熟平台更重要。

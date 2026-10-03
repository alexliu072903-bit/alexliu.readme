---
title: Cairn Context
description: 让新开的 Agent session 找回与当前任务相关的、已经确认过的项目决定。支持 Claude Code、Codex 和其他读取 SKILL.md 的 Agent。
year: 2026
category: 开源工具
type: Protocol
status: Available
source: Open source
draft: false
order: 3
specimen: cairn
illustration: project-assets/cairn-context-mechanism.zh.svg
illustrationEn: project-assets/cairn-context-mechanism.en.svg
illustrationAlt: Cairn Context 机制说明图：项目决定进入 Repository，新 session 只取得与任务相关的 Context，用户纠正会形成修订记录
illustrationCaption: 机制说明图：不是把全部 Memory 塞给 Agent，而是筛选已确认且与当前任务相关的决定；纠正会回到修订历史。
image: project-assets/cairn-context.png
imageAlt: Cairn Context 的公开 GitHub 仓库，包含 Skill、安装器、模板与中英文说明
evidenceCaption: 公开 GitHub 仓库：通用 Skill 与模板公开，真实身份、项目状态和决定保存在用户自己的 Repository 里。
problem: 新的 Agent session 不知道项目已经决定过什么，容易重复解释，或推翻旧判断。
contribution: 设计决定信号的判断、相关 Context 的读取、修订历史、用户纠错，以及公开 Kernel 与私人 Instance 的边界。
current: 已开源，我在自己的工作中使用。支持 Claude Code 和 Codex，附带决定索引和格式校验；还没有关键词检索，也不会自动学习。
brief:
  - label: 场景
    text: 切换 Agent 或开新 session 后，需要恢复与当前任务相关的、已经确认的决定。
  - label: 做法
    text: Agent 从用户自己的 Cairn Repository 里只读取相关决定，并区分决定、倾向、问题和临时实验。
  - label: 局限
    text: Agent 读每条决定的一行摘要，再自己判断打开哪些；没有关键词检索或排序，纠错记录也不会自动改变后续行为。
en:
  description: A Skill that lets a fresh agent session recover only the confirmed project decisions relevant to the current task. Works with Claude Code, Codex, and other agents that load a SKILL.md.
  imageAlt: The public Cairn Context GitHub repository, with the Skill, installer, template, and bilingual README
  evidenceCaption: The public repository. The reusable Skill and template are public; identity, project state, and decisions stay in the user's own repository.
  illustrationAlt: Cairn Context mechanism diagram showing project decisions filtered into a compact task context for a new Agent session, with user corrections returning as revisions
  illustrationCaption: Mechanism diagram. The Agent receives confirmed decisions relevant to the task rather than the whole memory; corrections return to revision history.
  brief:
    - label: Situation
      text: After switching agents or starting a new session, you need the confirmed decisions that matter to the current task.
    - label: What it does
      text: The Agent reads only the relevant decisions from your own Cairn repository and tells decisions, inclinations, open questions, and temporary experiments apart.
    - label: Limits
      text: The Agent reads a one-line summary of each decision and chooses which to open. There is no keyword search or ranking, and logged corrections do not automatically change later behavior.
  readmeSteps:
    - Clone the public repository and run the installer for Claude Code, Codex, or any skills directory.
    - Set identity, project, and repository path; the installer will not overwrite a non-empty directory.
    - In later tasks the Agent reads only the relevant decisions and keeps revision history when you explicitly decide.
readme:
  url: https://github.com/alexliu072903-bit/cairn-context#install
  steps:
    - Clone 公共仓库，按你用的 Agent 运行 installer（Claude Code、Codex 或任意 skills 目录），同时创建自己的 Cairn Repository。
    - 配置身份、Project 与 Repository 路径；安装器不会覆盖已有的非空目录。
    - 在后续任务中，Agent 只读取相关决定；你明确拍板时，它会保留修订历史。
links:
  - label: 查看 GitHub
    url: https://github.com/alexliu072903-bit/cairn-context
---
## 问题

新的 Agent session 不知道项目为什么形成今天的结构。把全部历史塞进 Prompt 会带来噪音，只靠对话又会让已经确认的决定不断丢失。

## 做法

Cairn Context 把重要的项目决定保存在用户自己拥有的 Repository 里。Agent 只读取与当前任务相关的决定，并区分已经确认的结论、暂时的倾向、开放的问题和临时实验。

决定变化时，Cairn 保留原文件，用 `supersedes` 关系记录替代链。用户纠正 Agent 之后，仓库先修正事实，再记录这次反馈，避免错误判断继续影响后续 session。

公共仓库包含 Skill、安装器和模板。用户的身份、项目状态和决定保存在另一个本地或 Private Repository 里。

## 现状与限制

安装器可以装到 Claude Code、Codex 或任意 skills 目录。仓库为每个项目生成一份决定索引，每条有效决定一行；`validate.py` 检查字段、日期和替代链是否完整。

README 里写明了两条限制：没有关键词检索或排序，Agent 读完索引后自己判断打开哪些决定；没有自动学习，纠错记录只是记录。

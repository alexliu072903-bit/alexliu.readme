---
title: Cairn Context
description: 让新开的 Codex session 找回与当前任务相关的、已经确认过的项目决定。
year: 2026
category: 开源工具
type: Protocol
status: Available
source: Open source
draft: false
order: 3
specimen: cairn
image: project-assets/cairn-context.png
imageAlt: Cairn Context 的公开 GitHub 仓库，包含 Skill、安装器、模板与中英文说明
evidenceCaption: 公开 GitHub 仓库：通用 Skill 与模板公开，真实身份、项目状态和决定保存在用户自己的 Repository 里。
problem: 新的 Agent session 不知道项目已经决定过什么，容易重复解释，或推翻旧判断。
contribution: 设计决定信号的判断、相关 Context 的读取、修订历史、用户纠错，以及公开 Kernel 与私人 Instance 的边界。
current: 已开源，我在自己的工作中使用。目前只支持 Codex；没有检索索引、不会自动学习、也没有格式校验。
brief:
  - label: 场景
    text: 切换 Codex session 后，需要恢复与当前任务相关的、已经确认的决定。
  - label: 做法
    text: Agent 从用户自己的 Cairn Repository 里只读取相关决定，并区分决定、倾向、问题和临时实验。
  - label: 局限
    text: 只支持 Codex；Agent 靠文件名和标题判断相关性，没有检索索引，纠错记录也不会自动改变后续行为。
en:
  description: A Skill for Codex that lets a fresh session recover only the confirmed project decisions relevant to the current task.
  imageAlt: The public Cairn Context GitHub repository, with the Skill, installer, template, and bilingual README
  evidenceCaption: The public repository. The reusable Skill and template are public; identity, project state, and decisions stay in the user's own repository.
  brief:
    - label: Situation
      text: After switching Codex sessions, you need the confirmed decisions that matter to the current task.
    - label: What it does
      text: The Agent reads only the relevant decisions from your own Cairn repository and tells decisions, inclinations, open questions, and temporary experiments apart.
    - label: Limits
      text: Codex only. The Agent judges relevance from file names and titles, there is no search index, and logged corrections do not automatically change later behavior.
  readmeSteps:
    - Clone the public repository and run the installer to create your own Cairn repository.
    - Set identity, project, and repository path; the installer will not overwrite a non-empty directory.
    - In later tasks the Agent reads only the relevant decisions and keeps revision history when you explicitly decide.
readme:
  url: https://github.com/alexliu072903-bit/cairn-context#install
  steps:
    - Clone 公共仓库，并运行 installer 创建自己的 Cairn Repository。
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

README 里写明了四条限制：没有程序化检索，Agent 靠文件名和标题挑选决定；没有自动学习，纠错记录只是记录；没有格式校验；安装器只写入 `~/.codex/skills/`，用在其他 Agent 上需要手动适配。

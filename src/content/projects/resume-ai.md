---
title: Resume.AI
description: 把简历、岗位描述与个人知识库放进同一个改写过程，让 AI 只从真实经历中寻找更准确的表达。
year: 2026
category: 产品
type: Product
status: Public product
source: Private source
draft: false
order: 1
specimen: resume
image: project-assets/resume-ai.png
imageAlt: Resume.AI 在线编辑器，左侧导入简历、JD 和知识库，中间编辑简历，右侧与 AI 对话
problem: 每个岗位都需要重新判断哪些真实经历值得被看见。
contribution: 设计并实现简历、JD 与个人知识库共同驱动的改写流程。
current: 产品仍可访问；源代码保持私有。
links:
  - label: 访问产品
    url: https://alexliu.lol/editor
---

## 为什么知识库里的经历很难变成一份针对 JD 的简历

真正困难的不是“写一份简历”，而是面对不同岗位时，重新判断哪些经历值得被看见。传统模板只能改变排版，通用 AI 又很容易把人写得更标准，也更不像本人。

我当时已经在 Obsidian、项目文档和 GitHub 中留下了大量经历，但这些材料与一份具体 JD 之间没有稳定的连接。问题不是缺少内容，而是缺少一种把真实积累重新组织成岗位语言的方法。

## 把简历、JD 与个人经历放进同一条路径

Resume.AI 把现有简历、目标岗位 JD 和用户自己的经历知识库放进同一条路径。用户先决定哪些经历可以进入 Context，再让 AI 分析差距、逐轮改写，并在编辑器中继续调整和导出。

产品经历了从 v0.4 到 v2.1 的多轮变化。我逐渐把重点从“一键生成更好的简历”，收回到一个更克制的目标：让 AI 帮用户发现已有材料中的证据，而不是替用户创造一个不存在的人。知识库选择、岗位匹配、对话改写和编辑器因此属于同一条路径，而不是四个独立功能。

## 产品仍可访问，源码保持私有

产品目前仍可公开访问，支持上传简历、图片或文字 JD、Markdown / Word 经历材料，进行匹配分析、AI 对话改写和 Word 导出。源代码保持 Private；公开页面只呈现产品本身，不把私有实现包装成开源项目。

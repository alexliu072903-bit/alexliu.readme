---
title: Resume.AI
description: 把简历、岗位 JD 和你的经历笔记放进同一个编辑器；AI 只用你有过的经历改写简历。
year: 2026
category: 产品
type: Product
status: Historical
source: Private source
draft: false
order: 1
specimen: resume
illustration: project-assets/resume-ai-mechanism.zh.svg
illustrationEn: project-assets/resume-ai-mechanism.en.svg
illustrationAlt: Resume.AI 机制说明图：简历、JD 和经历笔记先由用户选择进入 Context，再经过改写、Diff 审阅和文档导出
illustrationCaption: 机制说明图：用户先决定哪些材料作为证据，AI 才开始改写；最终修改仍由用户审阅。
image: project-assets/resume-ai.png
imageAlt: Resume.AI 在线编辑器，左侧导入简历、JD 和知识库，中间编辑简历，右侧与 AI 对话
evidenceCaption: 最后一个版本的编辑器：左侧导入简历、JD 和知识库，中间编辑，右侧与 AI 对话改写。
problem: 每个岗位的 JD 都不同，需要重新判断哪些经历值得写进简历。
contribution: 独立设计并开发完整流程：JD 图片 OCR、简历结构解析、对话改写、修改前后 Diff 对比、中英文 Word 导出；并用两篇小红书笔记做冷启动验证。
current: 已停止公开运行，没有可访问的入口；保留最后版本的截图，源码私有。
brief:
  - label: 场景
    text: 手上有一份岗位 JD，又不想让通用 AI 替你编造经历。
  - label: 做法
    text: 导入简历、JD 和经历材料，先选定哪些材料进入 Context，再在编辑器里逐轮改写；支持 JD 截图 OCR、改前改后 Diff 对比和中英文 Word 导出。
  - label: 现状
    text: 已停止公开运行，只保留最后版本的截图；源码私有。
en:
  description: A resume editor that puts your resume, the job description, and your experience notes in one workspace. The AI rewrites only from what you have actually done.
  imageAlt: The Resume.AI online editor, with the resume, JD, and knowledge base imported on the left, the editor in the middle, and the AI chat on the right
  evidenceCaption: The last version of the editor, with imports on the left, the resume in the middle, and the rewrite chat on the right.
  illustrationAlt: Resume.AI mechanism diagram showing a resume, job description, and notes moving through user-controlled context selection, rewriting, diff review, and document export
  illustrationCaption: Mechanism diagram. The user chooses which material counts as evidence before the AI rewrites; the user still reviews the final changes.
  brief:
    - label: Situation
      text: You have a job description and do not want a general-purpose AI to invent experience for you.
    - label: What it does
      text: Import the resume, the JD, and your experience notes, choose what goes into the Context, then rewrite round by round in the editor. It supports JD screenshot OCR, before-and-after diffs, and Chinese and English Word export.
    - label: Status
      text: No longer publicly running; only a screenshot of the last version remains. The source is private.
  facts:
    - value: ~50,000
      label: views across two Xiaohongshu posts
    - value: ~5,000
      label: likes
    - value: ~2,500
      label: saves
    - value: '519'
      label: unique visitors to the product site, about 3 minutes average session
  reactions:
    - alt: Screenshot of the Xiaohongshu post "I will use AI to put this kind of scammer out of business", showing the text and the like, save, and comment counts
      caption: The first post, published the day before launch. Screenshot taken on October 1, 2026.
    - alt: Screenshot of the Xiaohongshu follow-up post, showing the text and the like, save, and comment counts
      caption: The second post. The "back online" it mentions was the state at the time; the product has since stopped running publicly. Screenshot taken on October 1, 2026.
  factsNote: Cold-start figures, from my resume.
facts:
  - value: 约 5 万
    label: 两篇小红书笔记累计浏览
  - value: 约 5,000
    label: 点赞
  - value: 约 2,500
    label: 收藏
  - value: '519'
    label: 产品网站独立访客，平均停留约 3 分钟
reactions:
  - image: project-assets/resume-ai-xhs-1.jpg
    alt: 小红书笔记《我将用 AI 使这种骗子失业》的截图，标题、正文以及点赞、收藏、评论数
    caption: 第一篇笔记，产品上线前一天发布。截图于 2026 年 10 月 1 日。
  - image: project-assets/resume-ai-xhs-2.jpg
    alt: 小红书笔记《后续来了》的截图，标题、正文以及点赞、收藏、评论数
    caption: 第二篇笔记。笔记里的“再次上线”是当时的状态，产品现在已停止公开运行。截图于 2026 年 10 月 1 日。
factsNote: 冷启动期数据，来自我的简历。
links: []
---
## 问题

对着不同的 JD 改简历，难处在于判断哪些经历值得写。传统模板只能改排版，通用 AI 又容易把每个人写成同一种标准样子。

我已经在 Obsidian、项目文档和 GitHub 里留下了很多经历，但它们和某一份具体 JD 之间没有稳定的连接。材料已经很多，缺的是把它们重组成岗位语言的方法。

## 做法

Resume.AI 把现有简历、目标岗位 JD 和个人经历知识库放进同一个工作区。用户先选定哪些经历可以进入 Context，AI 再分析差距、逐轮改写，用户在编辑器里继续修改并导出 Word。

产品从 v0.4 迭代到 v2.1。目标逐渐收窄：最初想做一键生成更好的简历，后来改成帮用户从已有材料里找到证据，不替用户编造一个不存在的人。知识库选择、岗位匹配、对话改写和编辑器因此属于同一条路径。

## 冷启动

起因是我在小红书上刷到一条求职辅导消费欺诈的帖子，决定自己做一个工具。第一版用一个周末加 Claude Code 完成，之后在小红书发了两篇笔记，累计约 5 万浏览、5,000 点赞和 2,500 收藏，带来 519 名产品网站的独立访客，平均停留约 3 分钟。这是冷启动阶段的数据，不代表长期留存。

## 现状

已停止公开运行，源码私有，没有可访问的入口。页面上的截图来自最后一个版本。

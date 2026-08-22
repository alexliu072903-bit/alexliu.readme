---
title: Evidence-First Personal Site
description: 把真实项目、经历和文章整理成一个可信、可维护的个人网站。
year: 2026
category: Skill
type: Skill
status: Available
source: Open source
draft: false
order: 6
specimen: site
image: project-assets/evidence-first-personal-site-repository.png
imageAlt: Evidence-First Personal Site README 的开头，说明它如何用真实材料建立可维护的个人网站
evidenceCaption: README 的真实内容截图：从公开证据、页面结构到发布前检查，定义这个 Skill 的工作范围。
problem: 个人网站常在泛泛自我描述、项目状态不清和难以持续更新之间失去可信度。
contribution: 将公开边界、内容结构、视觉约束与静态发布流程整理为可复用的 Codex Skill。
current: 基于 MIT License 开源；公开仓库已可访问。
brief:
  - label: 做什么
    text: 将真实项目、经历、文章和公开证据组织成可长期维护的个人网站。
  - label: 怎么做
    text: 先确认哪些事实可以公开，再用 Home、Projects、Writing、About 分配不同阅读任务。
  - label: 留下什么
    text: 提供 Astro、内容集合、GitHub Pages 与发布前 QA 的默认基础设施。
readme:
  url: https://github.com/alexliu072903-bit/evidence-first-personal-site#readme
  steps:
    - 将 Skill 文件夹放进 Codex 的 skills 目录，并提供可公开的基本信息、项目与文章材料。
    - 先建立不公开的证据清单，确认项目状态、来源可见性和不能公开的内容。
    - 在明确仓库、域名与发布边界后，构建、检查并发布静态网站。
links:
  - label: 查看 GitHub
    url: https://github.com/alexliu072903-bit/evidence-first-personal-site
---

## 个人网站不该靠形容词建立可信度

很多个人网站的问题不是没有经历，而是材料没有被组织成可验证的叙事。项目看起来很多，却没有说明它是否仍可访问；工作经历写得很强，却分不清公开事实、个人贡献和未发布内容；首页塞进过多摘要，最终既不像索引，也无法真正解释一个项目。

这个 Skill 的出发点是让网站先说清楚事实，再让设计帮助访客阅读。它不会根据零散材料自动生成一套“优秀、理性、有品味”的自我描述，也不会为了显得完整而编造结果、指标或技术细节。

## 先确定证据，再决定页面

Skill 要求先建立一份不公开的材料清单：哪些链接、截图、项目状态与经历表述已经确认，哪些仍是内部信息或待验证内容。随后再决定页面结构。默认的 Home 只负责导向，Projects 展示可查看的作品与状态，Writing 承载完整思考，About 作为事实型简历。

这样的结构不是每个人都必须照搬。没有公开文章可以省去 Writing；研究者可以使用 Publications；项目类别和视觉风格也都应由实际材料决定。但“先分清事实，再组织阅读路径”的顺序不应省略。

## 给出可长期维护的默认基础设施

除了内容判断，这个 Skill 也提供 Astro 内容集合、静态路由和 GitHub Pages 的默认结构，并在发布前检查图片、窄屏布局、键盘焦点、草稿隔离和公开页面是否真的刷新。

它的目标不是产出一套模板化作品集，而是让每个人都能从真实材料出发，做出一个能够持续更新、也经得起追问的个人网站。

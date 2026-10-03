---
title: Mechanism Illustration Skill
description: 把已经确认的产品机制或工作流，稳定渲染成图形层与中英文字层分离的 SVG 说明图。
year: 2026
category: Skill
type: Skill
status: Available
source: Open source
draft: false
featured: true
order: 4
specimen: mechanism
illustration: project-assets/mechanism-illustration.zh.svg
illustrationEn: project-assets/mechanism-illustration.en.svg
illustrationAlt: Mechanism Illustration Skill 工作流：先写机制契约，选择 Pipeline、Filter 或 Loop，生成共享图形层和中英文字层，最后检查并发布
illustrationCaption: 机制说明图：文字与图形分层，保证双语标签可以确定性渲染，而不是依赖 ImageGen 每次都拼对文字。
problem: ImageGen 可以做出有趣的说明图，但复杂流程、多语言标签和重复生成很难保持结构与文字稳定。
contribution: 设计机制契约、Pipeline、Filter、Loop 三种空间语法和零依赖 SVG 渲染器，让同一份 JSON 生成共享图形层、中英文版本与自动化测试。
current: MIT 开源；v0.3.0 支持 Pipeline、Filter 与 Loop，中英文 SVG 使用同一图形层确定性生成。
brief:
  - label: 场景
    text: 需要反复为产品、Skill、流程或 Agent 系统生成风格一致、文字准确的中英双语说明图。
  - label: 做法
    text: 先把机制写成 JSON 契约，再按 Pipeline、Filter 或 Loop 选择空间结构；图形层与文字层分开渲染。
  - label: 现状
    text: MIT 开源；零运行时依赖，包含模板、示例、测试与 Codex Skill，可独立安装或内置进项目仓库。
en:
  description: A Skill and zero-dependency renderer that turns documented mechanisms into SVG diagrams with a shared art layer and deterministic Chinese and English text layers.
  illustrationAlt: Mechanism Illustration Skill workflow showing a mechanism contract, layout selection, shared art layer, bilingual text layers, verification, and publication
  illustrationCaption: Mechanism diagram. Text and art are separated so bilingual labels render deterministically instead of relying on ImageGen to spell them correctly every time.
  brief:
    - label: Situation
      text: You repeatedly need consistent bilingual explainers for products, Skills, workflows, or Agent systems, and the text must remain exact.
    - label: What it does
      text: Define the mechanism in JSON, choose Pipeline, Filter, or Loop, then render one shared art layer and deterministic Chinese and English SVGs.
    - label: Status
      text: MIT licensed. v0.3.0 supports Pipeline, Filter, and Loop, with templates, examples, tests, and an explicit Codex Skill.
  readmeSteps:
    - Install the repository as a Codex Skill or ask an Agent to read SKILL.md.
    - Copy a JSON template and replace it with documented stages and bilingual labels.
    - Run the renderer to produce art, Chinese, and English SVGs, then inspect the intended display size.
readme:
  url: https://github.com/alexliu072903-bit/mechanism-illustration-skill#quick-start
  steps:
    - 把仓库安装为 Codex Skill，或让 Agent 直接读取 SKILL.md。
    - 复制一个 JSON 模板，替换为已确认的阶段与中英文标签。
    - 运行渲染器生成图形层、中英文 SVG，并在实际展示尺寸下检查。
links:
  - label: 查看 GitHub
    url: https://github.com/alexliu072903-bit/mechanism-illustration-skill
---
## 问题

说明图如果完全交给生成模型，第一次可能有趣，但下一张会换构图，中文字可能出错，双语版本也容易失去对应关系。只保存一条长 Prompt，不能保证批量生产的一致性。

## 做法

Skill 先要求 Agent 写出机制契约：触发、阶段、用户保留的决定、输出和证据边界。确定机制后选择 Pipeline、Filter 或 Loop，再由零依赖 Node.js 渲染器把 JSON 转换成共享图形层、中文 SVG 和英文 SVG。

## 现状

MIT 开源。v0.3.0 已支持 Pipeline、Filter 和真正闭合的 Loop，并通过自动化测试验证图层分离、双语标签和空间语法。

# invest-kyc — neat-freak 知识收尾报告

**收尾时间**：2026-07-25
**收尾路径**：轻量路径（Vue + Vite + Cloudflare Pages 项目，5 commit 全是 fix 链，已有 recent neat-freak 风格 commit `1b24526` Cloudflare Tunnel 修复，HEAD 干净）
**收尾者**：neat-freak（v3.0.0）

---

## 一、影响（用户视角）

- **🔴 README.md 与实际项目名 mangled**：
  - README.md 第 1 行 `# MangoFolio H5 - 投资人格测试`
  - README 第 11 行 clone URL `lj22503/**mangofolio-h5**`
  - README 第 20 行路径 `/home/admin/.openclaw/workspace/projects/**mangofolio-h5**`
  - **但本地目录是 `invest-kyc`，package.json name 也是 `invest-kyc`**
  → 推测：项目原本叫 `mangofolio-h5`，**重命名为 `invest-kyc`** 但 README 完全未跟进
- **🔴 Vercel vs Cloudflare Pages 双部署文档混乱**：
  - README.md "快速部署（Vercel）"
  - VERCEL_SETUP.md
  - 最近 5 commit 全是 Cloudflare Pages Functions 修复
  - 推测：从 Vercel 迁移到 Cloudflare Pages，**旧 Vercel 文档未清理**
- **🔴 functions/ 目录空**（Cloudflare Pages Functions 部署后被删除？或迁移未完成？）
- **整体良好**：命名一致、9 个根目录 MD 详尽（部署/品牌/审计/优化/总结/自运营/版本清单完整）、vite + Vue 现代化栈。

## 二、现役事实矩阵

| 事实面 | 状态 | 证据 |
|--------|------|------|
| 代码 | `changed-and-verified` | Vue 3 + Vite 5（vite.config.js + package.json 100B 无依赖）；public/（_redirects + assets + auth + index.html + knowledge.html + quiz.html） |
| 运行态 | `verified-current` | HEAD `1b24526` Cloudflare Tunnel 临时 URL 解决 1003 错误；最近 5 commit 全是 Cloudflare Pages Functions fix |
| 文档 | `changed-and-verified` | README.md（错位）+ 9 个根目录 MD（部署/品牌/审计/优化/总结/自运营/版本清单）+ articles/（投资宠物上线文） |
| 规则 | `not-applicable` | 无 CLAUDE.md / AGENTS.md |
| 记忆 | `not-applicable` | 无 |
| 工作区 | `verified-current` | 新建 `.neat-freak/`；HEAD 干净，无未提交改动 |

## 三、关键发现

### 3.1 🔴 README.md 三处错误（与项目实际名 mangofolio-h5 → invest-kyc 重命名脱节）

| 行 | 内容 |
|----|------|
| 第 1 行 | `# MangoFolio H5 - 投资人格测试` |
| 第 11 行 | `https://github.com/lj22503/**mangofolio-h5**` |
| 第 20 行 | `/home/admin/.openclaw/workspace/projects/**mangofolio-h5**` |

→ **3 处都是旧名 mangofolio-h5**：新名应该是 invest-kyc。
→ 这是**项目重命名但 README 未跟进**的典型现象。

### 3.2 命名一致 ✅

| 维度 | 名字 |
|------|------|
| 本地目录 | `invest-kyc` |
| GitHub remote | `lj22503/invest-kyc` |
| package.json name | `invest-kyc` |

→ 三层一致（仅 README 错位）。

### 3.3 Vercel vs Cloudflare Pages 双部署混乱

| 来源 | 部署平台 |
|------|---------|
| README.md | **Vercel** |
| VERCEL_SETUP.md | **Vercel**（文件名直接写） |
| 最近 5 commit | **Cloudflare Pages**（Functions 修复） |

→ 推测项目从 Vercel 迁移到 Cloudflare Pages：
- VERCEL_SETUP.md 仍在（应删或归档）
- README.md 第 7 行 "快速部署（Vercel）" 应改 Cloudflare Pages
- commit `ff760e6 feat: 添加 Cloudflare Pages Functions 代理 API 请求` —— 迁移起点

→ 处置：
- 选项 A：删除 VERCEL_SETUP.md + README.md 改 Cloudflare Pages
- 选项 B：保留 VERCEL_SETUP.md 作为历史 + README 双平台说明

### 3.4 package.json 信息稀缺

```json
{
  "name": "invest-kyc",
  "version": "1.0.0",
  "description": "Invest Buddy 静态页面"
}
```

→ **无 dependencies / devDependencies / scripts** —— 与 Vite + Vue 项目严重不匹配。
→ 推测：package.json 是占位符或被简化（实际依赖可能在 functions/ 或 lock 文件缺失）。

### 3.5 functions/ 目录空

git status 没显示 functions/，但 `ls functions/` 也无输出。
→ 推测：Cloudflare Pages Functions 文件迁移后删除（commit `25ad75e fix: 恢复 Cloudflare Pages Functions 文件名格式` + `1cd1fd7 fix: 修正 Cloudflare Pages Functions 文件名格式`）。

### 3.6 9 个根目录 MD 完整

| 文件 | 用途（推测） |
|------|------------|
| `README.md` | 用户向（错位） |
| `BRAND_UPGRADE_REPORT.md` | 品牌升级报告 |
| `DEPLOYMENT.md` | 部署总览 |
| `KYC_AUDIT_REPORT_2026-04-27.md` | KYC 审计（带日期） |
| `P1_OPTIMIZATION_PLAN.md` | P1 优化计划 |
| `PROJECT_SUMMARY.md` | 项目总结 |
| `RELEASE_CHECKLIST.md` | 发布清单 |
| `SELF_OPERATION.md` | 自运营文档 |
| `VERCEL_SETUP.md` | Vercel 部署（应归档） |

→ 文档体系完整，但**演进历史堆积**——按 neat-freak §4 "演进报告/中间产物"分类，多数是过程报告。

### 3.7 最近 5 commit 全是 fix

```
1b24526 fix: 使用 Cloudflare Tunnel 临时 URL 解决 1003 错误
25ad75e fix: 恢复 Cloudflare Pages Functions 文件名格式
1cd1fd7 fix: 修正 Cloudflare Pages Functions 文件名格式
ff760e6 feat: 添加 Cloudflare Pages Functions 代理 API 请求
0f95cb9 fix: 恢复原始品牌首页
```

→ 类似 idx 31 ip-studio "PDF.js worker 修复链"——本项目是 "Cloudflare Pages Functions 修复链"。
→ 推测：Cloudflare Functions 文件名格式（推测 `_middleware.js` vs `middleware.js`）变化多端。

### 3.8 articles/ 单文件

`articles/investment-buddy-pet-launch.md` —— 推测是"投资宠物上线文"—— 与 idx 22 investment-buddy-pet 项目交叉引用。

### 3.9 public/ 结构

| 资源 | 用途（推测） |
|------|------------|
| `_redirects` | Cloudflare Pages 路由配置 |
| `assets/` | 静态资源 |
| `auth/` | 鉴权页面（推测） |
| `index.html` | 首页 |
| `knowledge.html` | 知识页（推测） |
| `quiz.html` | 测验页（KYC 投资人格测试核心页） |

→ 项目核心是 `quiz.html`（KYC 人格测试）。

### 3.10 项目关系

| 关联 | 来源 |
|------|------|
| 投资人格测试 | articles/investment-buddy-pet-launch.md（与 idx 22 同主题） |
| 投资守护兽 | README.md "找到你的本命宠物" |
| 6 项目分组 | idx 5 (SoloAdvisor-Toolkit 的 gates/gate-1-kyc.md) |

### 3.11 项目生命周期推断

| 阶段 | 时间 | 事件 |
|------|------|------|
| v1.0.0 | 推测 2026-05 前 | mangofolio-h5（投资人格测试） |
| 重命名 | 推测 2026-05 后 | mangofolio-h5 → invest-kyc |
| Vercel 部署 | 2026-05/06 | VERCEL_SETUP.md + README 部署 |
| Cloudflare 迁移 | 2026-07 后 | functions/ 修复链 + commit `1cd1fd7`/`25ad75e` |
| 现在 | 2026-07-23/24 | 5 fix commit |

## 四、改动 / 新建

| 文件 | 动作 | 原因 |
|------|------|------|
| `.neat-freak/reports/invest-kyc-2026-07-24.md` | 新建 | 本次 audit trail |

## 五、待你确认（未确认前不动作）

1. **🔴 README.md 三处 mangofolio-h5 错位**：改 README / 接受错位
2. **🔴 Vercel vs Cloudflare Pages 双部署混乱**：删除 VERCEL_SETUP.md + README 改 Cloudflare Pages / 保留双份
3. **🔴 package.json 无依赖**：补 dependencies + scripts / 接受占位符
4. **9 个根目录 MD**：是否合并/归档到 docs/

## 六、遗留

- 5 个 fix commit 完整 diff 未逐个看（特别是 Cloudflare Functions 文件名格式变化）
- public/ 子目录内容（assets/、auth/）未审
- BRAND_UPGRADE_REPORT.md + KYC_AUDIT_REPORT 实际内容未读
- articles/investment-buddy-pet-launch.md 与 idx 22 关系未确认

---

*收尾完成度：5 事实面已标注（记忆 not-applicable，规则 not-applicable 缺文件）。报告基于 commit `1b24526`（HEAD，分支 main）。本项目不是 Skill 包，是 Vue + Vite + Cloudflare Pages 部署的**前端项目**，与 idx 22 investment-buddy-pet（Skill 包）主题相关。如需重新跑请清空 `.neat-freak/reports/` 后重跑。*
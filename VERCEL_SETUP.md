# Vercel 部署配置指南

**项目**：invest-kyc  
**创建时间**：2026-04-13

---

## 🚀 快速部署（推荐）

### 方式 1：Vercel 网页部署（最简单）

1. **访问 Vercel**
   - 打开 https://vercel.com/new

2. **导入 GitHub 仓库**
   - 点击"Import Git Repository"
   - 选择 `lj22503/invest-kyc`
   - 点击"Import"

3. **配置项目**
   - Project Name: `invest-kyc`（或自定义）
   - Framework Preset: `Vite`
   - Root Directory: `./`（默认）
   - Build Command: `npm run build`（默认）
   - Output Directory: `dist`（默认）

4. **点击"Deploy"**

5. **等待部署完成**
   - 约 1-2 分钟
   - 部署成功后会显示预览链接

6. **绑定域名（可选）**
   - Settings → Domains
   - 添加自定义域名
   - 按指引配置 DNS

---

### 方式 2：Vercel CLI 部署（需要登录）

**前提**：需要 Vercel token

**步骤**：

```bash
# 1. 登录 Vercel
vercel login

# 2. 链接项目
cd /home/admin/.openclaw/workspace/projects/invest-kyc
vercel link --repo

# 3. 部署到 Preview 环境
vercel

# 4. 部署到 Production 环境
vercel --prod
```

---

## 📋 Vercel 配置说明

### vercel.json（已配置）

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**作用**：SPA 路由支持，所有路径重定向到 index.html

### 构建配置

| 配置项 | 值 |
|--------|-----|
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node Version | 18.x |
| Install Command | `npm install` |

---

## 🔗 部署后的 URL

**默认域名**：`https://invest-kyc.vercel.app`

**自定义域名**（可选）：
- 主域名：`invest-kyc.com`（需购买）
- 子域名：`test.invest-kyc.com`（需 DNS 配置）

---

## 📊 部署检查清单

- [ ] Vercel 账号登录
- [ ] GitHub 仓库导入
- [ ] 构建配置确认
- [ ] 首次部署完成
- [ ] 预览链接测试
- [ ] 域名绑定（可选）
- [ ] 环境变量配置（如有）

---

## 🎯 下一步

1. **燃冰操作**：
   - 访问 https://vercel.com/new
   - 导入 `lj22503/invest-kyc` 仓库
   - 点击 Deploy

2. **ant 操作**：
   - 等待部署完成
   - 测试预览链接
   - 优化配置（如需要）

---

*最后更新：2026-04-13 21:15*

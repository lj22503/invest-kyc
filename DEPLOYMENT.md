# Vercel 部署指南

**快速部署到 Vercel，绑定 mangofolio 子域名**

---

## 📋 前置准备

- [ ] GitHub 账号
- [ ] Vercel 账号（可以用 GitHub 登录）
- [ ] 域名管理权限（mangofolio.com 或类似）

---

## 🚀 部署步骤

### 步骤 1：推送到 GitHub

```bash
cd /home/admin/.openclaw/workspace/projects/mangofolio-h5

# 重命名分支为 main（Vercel 默认）
git branch -m master main

# 推送到 GitHub（替换为你的仓库地址）
git remote add origin https://github.com/lj22503/mangofolio-h5.git
git push -u origin main
```

### 步骤 2：在 Vercel 导入项目

1. 访问 https://vercel.com/new
2. 点击 "Import Git Repository"
3. 选择 GitHub 账号
4. 找到 `mangofolio-h5` 仓库
5. 点击 "Import"

### 步骤 3：配置项目

**Project Name**: `mangofolio-h5`  
**Framework Preset**: `Vite`  
**Build Command**: `npm run build`  
**Output Directory**: `dist`  
**Install Command**: `npm install`

点击 "Deploy"

### 步骤 4：获取部署 URL

部署完成后，你会获得：
- **开发环境**: `https://mangofolio-h5-xxx.vercel.app`
- **生产环境**: `https://mangofolio-h5.vercel.app`

---

## 🎯 绑定自定义域名

### 方式 A：使用 Vercel 子域名（简单）

1. 进入 Vercel Dashboard → 项目 → Settings → Domains
2. 点击 "Add Domain"
3. 输入：`mangofolio.vercel.app`
4. 点击 "Add"

**完成！** 现在可以访问：`https://mangofolio.vercel.app`

---

### 方式 B：绑定自己的域名（推荐）

#### 1. 添加域名到 Vercel

- 进入 Vercel Dashboard → 项目 → Settings → Domains
- 点击 "Add Domain"
- 输入：`test.mangofolio.com` 或 `mangofolio.com`
- 点击 "Add"

#### 2. 配置 DNS 记录

**如果使用子域名（test.mangofolio.com）：**

```
类型：CNAME
名称：test
值：cname.vercel-dns.com
TTL：Automatic
```

**如果使用根域名（mangofolio.com）：**

```
类型：A
名称：@
值：76.76.21.21
TTL：Automatic

类型：CNAME
名称：www
值：cname.vercel-dns.com
TTL：Automatic
```

#### 3. 等待 DNS 生效

- 通常 5-30 分钟生效
- 最长可能需要 48 小时

#### 4. 验证域名

Vercel 会自动验证 DNS 配置，验证通过后显示 "Valid Configuration"

---

## 📱 微信分享优化

### 测试分享效果

1. 在微信中打开：`https://mangofolio.vercel.app`
2. 完成测试
3. 点击右上角 "..." → "分享到朋友圈"
4. 检查分享卡片：
   - 标题：投资人格测试 - 找到你的本命宠物
   - 描述：我的投资人格是「数据狂魔」，你的呢？
   - 图标：项目 Logo

### 自定义分享图片

创建 `public/static/share-card.png`（1200x630px）

更新 `public/index.html` 中的 meta 标签：

```html
<meta property="og:image" content="https://mangofolio.vercel.app/static/share-card.png">
```

---

## 🔧 高级配置

### 环境变量（可选）

如果后续需要添加 API 调用：

1. Vercel Dashboard → Settings → Environment Variables
2. 添加变量（如 `GA_ID` 用于 Google Analytics）
3. 在代码中通过 `import.meta.env.VITE_XXX` 访问

### 自动部署

- **推送到 main 分支** → 自动部署到生产环境
- **推送到其他分支** → 自动创建 Preview 部署

### 回滚部署

1. Vercel Dashboard → Deployments
2. 找到之前的部署
3. 点击 "..." → "Promote to Production"

---

## 📊 数据分析

### 添加 Google Analytics

1. 创建 GA 属性，获取 Measurement ID
2. 在 Vercel 添加环境变量：`VITE_GA_ID = G-XXXXXXXXXX`
3. 更新 `public/index.html` 添加 GA 代码

### 添加 Umami（隐私友好）

1. 自建或托管 Umami
2. 获取 Website ID
3. 在 `public/index.html` 添加追踪代码

### Vercel Analytics（内置）

1. Vercel Dashboard → Analytics
2. 启用 "Web Analytics"
3. 查看访问量、来源、地理位置等

---

## 🎯 部署检查清单

- [ ] 代码已推送到 GitHub
- [ ] Vercel 项目已创建
- [ ] 生产部署成功
- [ ] 域名已绑定（可选）
- [ ] DNS 已生效
- [ ] HTTPS 已启用
- [ ] 微信分享测试通过
- [ ] 手机/平板/PC 测试通过
- [ ] 数据分析已配置（可选）

---

## 📝 常用命令

```bash
# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 部署到 Vercel
vercel --prod

# 查看部署日志
vercel logs
```

---

## 🆘 故障排查

### 问题 1：部署失败

**检查**：
- `package.json` 是否正确
- `vercel.json` 配置是否正确
- 构建命令是否正确

**解决**：
```bash
# 本地测试构建
npm run build

# 查看 Vercel 构建日志
vercel logs
```

### 问题 2：域名不生效

**检查**：
- DNS 记录是否正确
- 是否等待足够时间（5-30 分钟）

**解决**：
```bash
# 检查 DNS 是否生效
nslookup test.mangofolio.com

# 或使用在线工具
https://dnschecker.org/
```

### 问题 3：微信分享不显示图片

**检查**：
- OG meta 标签是否正确
- 图片 URL 是否可访问
- 图片尺寸是否符合要求（1200x630px）

**解决**：
- 使用微信分享调试工具
- 确保图片是 HTTPS
- 添加 `wx:namespace` 标签

---

## 📞 支持

- Vercel 文档：https://vercel.com/docs
- Vercel 社区：https://github.com/vercel/vercel/discussions
- 项目 Issues：https://github.com/lj22503/mangofolio-h5/issues

---

**创建时间**：2026-04-10  
**版本**：v1.0.0  
**部署平台**：Vercel

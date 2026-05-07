# MangoFolio H5 - 投资人格测试

**轻量级 H5 测试页 - 找到你的本命宠物**

---

## 🚀 快速部署（Vercel）

### 方式 1：一键部署（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lj22503/mangofolio-h5)

### 方式 2：手动部署

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 进入项目目录
cd /home/admin/.openclaw/workspace/projects/mangofolio-h5

# 3. 登录 Vercel
vercel login

# 4. 部署
vercel --prod
```

### 方式 3：GitHub 自动部署

1. 将代码推送到 GitHub
2. 在 Vercel 导入 GitHub 仓库
3. 自动部署到 `https://mangofolio-h5.vercel.app`

---

## 🎯 绑定自定义域名

### 步骤 1：在 Vercel 添加域名

1. 进入 Vercel Dashboard
2. 选择项目 → Settings → Domains
3. 添加域名：`test.mangofolio.com` 或 `mangofolio.vercel.app`

### 步骤 2：配置 DNS

```
# 如果使用子域名
test.mangofolio.com  CNAME  cname.vercel-dns.com

# 如果使用根域名
mangofolio.com       A      76.76.21.21
```

### 步骤 3：等待 DNS 生效

通常 5-30 分钟生效

---

## 📱 功能特性

- ✅ 10 道 SSBTI 风格测试题
- ✅ 12 种投资人格标签（自嘲风格）
- ✅ 响应式设计（手机/平板/PC）
- ✅ 微信分享优化（Open Graph）
- ✅ 结果页分享按钮
- ✅ 零后端，纯静态

---

## 🎨 自定义

### 修改测试题目

编辑 `public/index.html` 中的 `QUESTIONS` 数组

### 修改宠物信息

编辑 `public/index.html` 中的 `PETS_INFO` 对象

### 修改配色方案

编辑 `<style>` 中的渐变色：

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

---

## 📊 数据追踪（可选）

### 添加 Google Analytics

```html
<!-- 在 </head> 前添加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 添加 Umami（隐私友好）

```html
<!-- 在 </head> 前添加 -->
<script async defer src="https://umami.example.com/script.js" data-website-id="xxx"></script>
```

---

## 📦 文件结构

```
mangofolio-h5/
├── public/
│   └── index.html          # 主页面（包含所有逻辑）
├── package.json            # 项目配置
├── vite.config.js          # Vite 配置（可选）
├── vercel.json             # Vercel 配置
└── README.md               # 本文档
```

---

## 🔧 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

---

## 📈 性能优化

- ✅ 单文件 HTML，无外部依赖
- ✅ 内联 CSS/JS，减少请求
- ✅ 压缩后 < 20KB
- ✅ Lighthouse 分数 > 95

---

## 📝 使用说明

### 用户流程

1. 打开测试页
2. 回答 10 道测试题
3. 查看结果（本命宠物 + 投资人格标签）
4. 分享结果到朋友圈

### 分享文案

```
我的投资人格是「数据狂魔」，本命宠物是🦉智多星！
你也来测测看：https://mangofolio.vercel.app
```

---

## 🎯 下一步

- [ ] 添加宠物形象图
- [ ] 生成分享卡片（图片）
- [ ] 添加用户数据收集（可选）
- [ ] 接入宠物技能 Skill 下载引导

---

## 📄 License

MIT License

---

**创建时间**：2026-04-10  
**版本**：v1.0.0  
**部署**：Vercel

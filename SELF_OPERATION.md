# 自运营配置指南

**配置微信群二维码、技能下载链接、自定义文案**

---

## 📱 微信群二维码配置

### 步骤 1：生成群二维码

1. 打开微信群 → 点击右上角 "..."
2. 选择 "群二维码"
3. 保存图片到本地

### 步骤 2：上传二维码图片

**方式 A：使用免费二维码托管**

1. 访问 https://api.qrserver.com/qr-code-creator/
2. 上传你的群二维码图片
3. 获取图片 URL

**方式 B：上传到 GitHub**

1. 创建 `public/static/wechat-qr.png`
2. 上传群二维码图片
3. 使用 GitHub CDN URL：
   ```
   https://raw.githubusercontent.com/lj22503/mangofolio-h5/main/public/static/wechat-qr.png
   ```

**方式 C：使用图床服务**

1. 访问 https://sm.ms/
2. 上传图片
3. 复制图片链接

### 步骤 3：更新代码

编辑 `public/index.html`，找到：

```html
<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=wechat_group_qr_code" alt="微信群二维码">
```

替换为你的二维码图片 URL：

```html
<img src="https://your-domain.com/static/wechat-qr.png" alt="微信群二维码">
```

---

## 🔗 技能下载链接配置

### 默认链接

- GitHub 仓库：`https://github.com/lj22503/investment-buddy-pet`
- 文档页面：`https://github.com/lj22503/investment-buddy-pet/blob/main/README.md`

### 自定义链接

如果你有部署好的文档页面或下载页面，编辑 `public/index.html`：

```html
<a href="https://your-domain.com/skill-download" class="viral-btn viral-btn-primary">
  📥 一键安装技能
</a>
```

---

## ✏️ 自定义文案

### 修改底部有趣话术

编辑 `public/index.html`，找到 `.funny-footer` 部分：

```html
<div class="funny-footer">
  <div class="funny-footer-text">
    <span class="funny-footer-highlight">💡 温馨提示：</span>
    <br>
    这里改成你的文案...
  </div>
</div>
```

### 修改群福利说明

编辑 `public/index.html`，找到 "群内福利" 部分：

```html
<div class="viral-text">
  <strong>群内福利：</strong>
  <br>• 这里改成你的福利 1
  <br>• 这里改成你的福利 2
  <br>• 这里改成你的福利 3
</div>
```

### 修改风险提示

编辑 `public/index.html`，找到 `.disclaimer` 部分：

```html
<div class="disclaimer-text">
  这里改成你的风险提示文案...
</div>
```

---

## 🎯 自运营数据追踪（可选）

### 添加点击统计

**方式 A：Google Analytics**

```html
<a href="..." onclick="gtag('event', 'click', {
  event_category: 'viral',
  event_label: 'skill_download'
})">
  📥 一键安装技能
</a>
```

**方式 B：Umami**

```html
<a href="..." onclick="umami.track('skill_download_click')">
  📥 一键安装技能
</a>
```

### 添加转化漏斗

1. 测试完成 → 事件：`test_complete`
2. 点击技能下载 → 事件：`skill_click`
3. 点击加群 → 事件：`wechat_click`
4. 分享结果 → 事件：`share_click`

---

## 📊 自运营效果优化

### A/B 测试文案

**测试 1：底部话术风格**

- 版本 A：自嘲幽默型
- 版本 B：温暖陪伴型
- 版本 C：专业严肃型

**测试 2：CTA 按钮文案**

- 版本 A："📥 一键安装技能"
- 版本 B："🎁 免费领取宠物"
- 版本 C："🐾 领养你的本命宠物"

### 优化建议

1. **二维码位置**：放在结果页中部（视线焦点）
2. **按钮颜色**：使用对比色（绿色 for 微信，紫色 for 技能）
3. **文案长度**：每行不超过 20 字
4. **加载速度**：二维码图片压缩到 < 50KB

---

## 🔄 更新流程

```bash
# 1. 修改代码
cd /home/admin/.openclaw/workspace/projects/mangofolio-h5
vim public/index.html

# 2. 提交更改
git add .
git commit -m "feat: 更新微信群二维码和文案"

# 3. 推送到 GitHub
git push origin main

# 4. Vercel 自动部署
# 等待 1-2 分钟，访问 https://mangofolio.vercel.app 验证
```

---

## ✅ 检查清单

- [ ] 微信群二维码已上传并更新 URL
- [ ] 技能下载链接已配置
- [ ] 风险提示文案已确认
- [ ] 底部有趣话术已自定义
- [ ] 群福利说明已完善
- [ ] 分享文案已优化
- [ ] 数据追踪已添加（可选）
- [ ] 手机/PC 测试通过
- [ ] 微信分享测试通过

---

## 📞 常见问题

### Q1: 微信群二维码过期怎么办？

**A:** 群二维码有效期 7 天，建议：
- 使用企业微信群（永久有效）
- 或定期更新二维码图片

### Q2: 如何防止二维码被滥用？

**A:** 
- 设置群邀请验证（需管理员审核）
- 或使用中间页（扫码后先 landing page）

### Q3: 如何统计加群人数？

**A:**
- 使用带参数的二维码（微信客服消息 API）
- 或在中间页添加追踪代码

---

**创建时间**：2026-04-10  
**版本**：v1.0.0  
**适用**：MangoFolio H5 自运营配置

# MangoFolio 品牌升级报告

**执行时间**：2026-04-10  
**执行内容**：H5 测试页品牌风格升级  
**状态**：✅ 完成

---

## 🎨 品牌设计理念

**核心理念**：东方节气智慧 × 西方价值投资 × 温暖水果隐喻

**三个"芒"**：
- 🥭 **芒果**（隐喻层）：财富像水果，有它自己的成熟节奏
- 📚 **芒格**（方法论层）：赚大钱的秘诀不是买卖，是等待
- 🌾 **芒种**（哲学层）：有芒之谷，当种之时

**品牌 Slogan**：种得对，等得久

---

## 🎨 品牌色彩体系

### 主色调

| 颜色名称 | 色值 | 使用场景 |
|---------|------|---------|
| 芒果渐变 | `#F5E6D3` → `#E8D5B5` → `#D4C4A8` | 页面背景、大区块背景 |
| 芒格棕 | `#5C4033` | 标题文字、重要文字 |
| 芒种金 | `#B8860B` | 强调色、按钮、链接 |
| 温暖米白 | `#FFFDF5` | 卡片背景、内容区背景 |
| 深棕 | `#8B7355` | 边框、分割线、图标 |

### 色彩应用示例

**背景渐变**：
```css
background: linear-gradient(135deg, #F5E6D3 0%, #E8D5B5 50%, #D4C4A8 100%);
```

**卡片背景**：
```css
background: linear-gradient(135deg, #FFFDF5, #F8F0E0);
```

**按钮渐变**：
```css
background: linear-gradient(135deg, #B8860B 0%, #8B7355 100%);
```

---

## 📐 字体规范

### 字体栈

```css
font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Serif SC", serif;
```

### 字号层级

| 层级 | 字号 | 字重 | 字间距 | 使用场景 |
|------|------|------|--------|---------|
| H1 | 42px | 700 | 8px | 页面主标题 |
| H2 | 32px | 600 | 3px | 结果页标题 |
| H3 | 24px | 600 | 2px | 章节标题 |
| H4 | 20px | 600 | 1px | 卡片标题/问题 |
| Body | 16px | 400 | 0 | 正文内容 |
| Small | 14px | 400 | 1px | 辅助文字 |
| Meta | 13px | 400 | 2px | 元信息/底部 |

---

## 🎭 组件升级

### 卡片（Card）

**升级前**：白色背景 + 简单圆角  
**升级后**：芒果渐变背景 + 深棕边框 + 阴影

```css
.card {
  background: linear-gradient(135deg, #FFFDF5, #F8F0E0);
  border-radius: 16px;
  padding: 35px;
  border: 2px solid #E8D5B5;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
```

### 按钮（Button）

**升级前**：紫色渐变  
**升级后**：芒种金渐变 + 悬停效果

```css
.btn-primary {
  background: linear-gradient(135deg, #B8860B 0%, #8B7355 100%);
  color: white;
  letter-spacing: 1px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(184,134,11,0.4);
}
```

### 引用块（Quote）

**新增组件**：用于品牌金句、风险提示

```css
.quote-mango {
  background: linear-gradient(135deg, #FFF8F0, #F5E6D3);
  padding: 25px 30px;
  border-radius: 12px;
  border-left: 5px solid #B8860B;
  font-style: italic;
  font-family: "Noto Serif SC", serif;
  text-align: center;
}
```

### 选项卡（Option）

**升级前**：灰色边框 + 紫色选中  
**升级后**：米白背景 + 芒种金选中

```css
.option {
  background: #FFFDF8;
  border: 2px solid #E8D5B5;
  color: #5C4033;
}

.option:hover {
  border-color: #B8860B;
  background: #FFFDF5;
}

.option.selected {
  border-color: #B8860B;
  background: linear-gradient(135deg, #B8860B 0%, #8B7355 100%);
  color: white;
}
```

---

## 📱 页面布局

### 容器（Container）

```css
.container {
  max-width: 950px;
  margin: 0 auto;
  padding: 20px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }
}
```

### 头部（Header）

```css
.header {
  text-align: center;
  color: #5C4033;
  padding: 50px 20px;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 42px;
  font-weight: 700;
  letter-spacing: 8px;
  font-family: "Noto Serif SC", serif;
}

.header p {
  font-size: 18px;
  color: #8B7355;
  font-style: italic;
  letter-spacing: 2px;
}
```

---

## ✅ 升级对比

### 视觉风格

| 维度 | 升级前 | 升级后 |
|------|--------|--------|
| 主色调 | 紫色渐变（#667eea → #764ba2） | 芒果渐变（#F5E6D3 → #D4C4A8） |
| 字体 | 系统默认字体 | Noto Serif SC 宋体 |
| 卡片 | 白色背景 | 芒果渐变背景 + 边框 |
| 按钮 | 紫色渐变 | 芒种金渐变 |
| 文字 | 黑色/灰色 | 芒格棕（#5C4033） |
| 强调色 | 紫色（#667eea） | 芒种金（#B8860B） |

### 品牌感知

| 维度 | 升级前 | 升级后 |
|------|--------|--------|
| 温度感 | 科技感、冷色调 | 温暖、人文感 |
| 专业度 | 通用 SaaS 风格 | 金融投资专业感 |
| 识别度 | 无品牌特色 | MangoFolio 独特风格 |
| 一致性 | 无规范 | 完整品牌规范 |

---

## 📊 文件变更

### 设计文档

- ✅ `content/projects/mangofolio/BRAND_DESIGN.md` - 品牌设计规范（新增）

### 代码文件

- ✅ `mangofolio-h5/public/index.html` - H5 测试页（升级）

### Git 提交

```
commit 18dbd03
Author: ant
Date: 2026-04-10
Message: style: 采用 MangoFolio 品牌风格（暖棕色系 + 宋体字体）
```

---

## 🎯 下一步

### 高优先级（P0）

- [ ] 投资宠物 Skill 页面采用相同品牌风格
- [ ] 添加品牌 Logo（芒果 + 宠物元素）
- [ ] 完善移动端适配

### 中优先级（P1）

- [ ] 生成品牌宣传图（社交媒体用）
- [ ] 制作品牌演示 PPT
- [ ] 设计宠物形象图（符合品牌风格）

### 低优先级（P2）

- [ ] 品牌周边设计（贴纸、卡片）
- [ ] 品牌视频（30 秒介绍）
- [ ] 品牌声音（宠物语音风格）

---

## 📝 品牌使用指南

### 正确使用

✅ **使用芒果渐变作为背景**  
✅ **使用芒格棕作为标题文字**  
✅ **使用芒种金作为强调色**  
✅ **使用 Noto Serif SC 作为标题字体**  
✅ **使用"种得对，等得久"作为 Slogan**

### 错误使用

❌ **使用紫色/蓝色等冷色调**  
❌ **使用纯黑文字（#000000）**  
❌ **使用无衬线字体作为标题**  
❌ **使用其他 Slogan**  
❌ **使用圆角过大的组件（>20px）**

---

## 🔗 相关资源

| 资源 | 链接 | 说明 |
|------|------|------|
| 品牌设计规范 | `content/projects/mangofolio/BRAND_DESIGN.md` | 完整规范文档 |
| H5 测试页 | `mangofolio-h5/public/index.html` | 品牌升级示例 |
| 三重芒品牌页 | `content/projects/mangofolio/triple-mango.html` | 品牌理念展示 |

---

**创建时间**：2026-04-10  
**版本**：v1.0  
**状态**：✅ H5 测试页完成，待推广到全产品线

# KYC 项目 P1 优化方案

**创建时间**：2026-04-27  
**状态**：✅ 设计完成，待执行  
**基于**：Mangofolio 品牌手册 v1.0 + KYC 审计报告

---

## 一、P1 优化清单

### 1. 用户档案（localStorage 存储）

**功能**：
- 保存用户测试结果（宠物 ID/分数/日期）
- 保存用户偏好（风险承受力/知识水平/决策风格/时间偏好）
- 保存历史测试记录（用于进化报告）

**技术实现**：
```javascript
// 用户档案结构
const userProfile = {
  userId: 'user_' + Date.now(),
  createdAt: new Date().toISOString(),
  testResults: [],
  preferences: {
    riskTolerance: '保守/平衡/激进',
    investmentHorizon: '短期/中期/长期',
    knowledgeLevel: '初级/中级/高级',
    decisionStyle: '理性/感性'
  },
  evolutionData: {
    testCount: 0,
    styleChanges: [],
    evolutionScore: 0
  }
};

// 保存测试结果
function saveTestResult(petId, scores, date) {
  const result = {
    petId: petId,
    scores: scores,
    date: date,
    preferences: userProfile.preferences
  };
  userProfile.testResults.push(result);
  userProfile.evolutionData.testCount++;
  localStorage.setItem('mangofolio-user-profile', JSON.stringify(userProfile));
}

// 加载用户档案
function loadUserProfile() {
  const saved = localStorage.getItem('mangofolio-user-profile');
  if (saved) {
    return JSON.parse(saved);
  }
  return userProfile;
}
```

### 2. 进化报告（投资风格变化/历史决策对比）

**功能**：
- 投资风格变化（激进/保守/左侧/右侧）
- 历史决策对比（上次 vs 本次）
- 能力成长轨迹（L1→L2→L3）
- 迁移成本感知（离开等于放弃进化）

**技术实现**：
```javascript
// 生成进化报告
function generateEvolutionReport(userId) {
  const profile = loadUserProfile();
  const results = profile.testResults;
  
  if (results.length < 2) {
    return {
      message: '请至少测试 2 次后再生成进化报告',
      style: '待确定',
      growth: 'L1 标准化（基础诊断/配置）'
    };
  }
  
  const latest = results[results.length - 1];
  const previous = results[results.length - 2];
  
  // 投资风格变化
  const styleChange = {
    previous: determineStyle(previous.petId),
    current: determineStyle(latest.petId),
    change: determineStyle(previous.petId) !== determineStyle(latest.petId) ? '已变化' : '稳定'
  };
  
  // 历史决策对比
  const historicalDecisions = results.map(r => ({
    date: r.date,
    petId: r.petId,
    style: determineStyle(r.petId)
  }));
  
  // 能力成长轨迹
  const growthLevel = profile.evolutionData.testCount >= 10 ? 'L3' : 
                      profile.evolutionData.testCount >= 5 ? 'L2' : 'L1';
  
  // 迁移成本
  const migrationCost = {
    testCount: profile.evolutionData.testCount,
    styleChanges: styleChange.change === '已变化' ? results.filter((r, i) => i > 0 && determineStyle(r.petId) !== determineStyle(results[i-1].petId)).length : 0,
    evolutionScore: profile.evolutionData.evolutionScore
  };
  
  return {
    styleChange,
    historicalDecisions,
    growthLevel,
    migrationCost
  };
}

// 根据宠物 ID 确定投资风格
function determineStyle(petId) {
  const styleMap = {
    'songguo': '保守/左侧',
    'wugui': '保守/左侧',
    'maotouying': '平衡/右侧',
    'lang': '激进/右侧',
    'daxiang': '平衡/左侧',
    'ying': '激进/右侧',
    'huli': '平衡/右侧',
    'haitun': '保守/右侧',
    'shizi': '激进/右侧',
    'mayi': '保守/左侧',
    'luotuo': '激进/左侧',
    'dunjiaoshou': '激进/右侧',
    'junma': '激进/右侧'
  };
  return styleMap[petId] || '待确定';
}
```

### 3. 内容文案优化（短句/观点/人称）

**优化原则**：
- 短句为主（每句≤20 字）
- 段落间留白
- 有观点，不只报告
- 适当使用"我"
- 变化句子节奏

**优化示例**：

| 原文案 | 优化后 |
|--------|--------|
| "本测试结果仅供娱乐参考，不构成任何投资建议" | "测试是娱乐，投资是学习。我的建议：先了解性格，再做决策。" |
| "宠物陪你走过市场起伏，但决策要靠自己" | "宠物陪你，决策靠自己。市场不等人，认知要跟上。" |
| "10 道题，找到你的本命宠物" | "10 道题。找到你的投资性格。然后，做出更好的决策。" |

---

## 二、技术实现方案

### 2.1 用户档案页面

```html
<!-- 用户档案入口 -->
<div class="profile-entry">
  <button class="btn btn-secondary" onclick="showUserProfile()">
    👤 查看我的档案
  </button>
  <button class="btn btn-secondary" onclick="showEvolutionReport()">
    📊 查看进化报告
  </button>
</div>

<!-- 用户档案页面 -->
<div id="profile-page" class="card hidden">
  <h2>👤 我的投资档案</h2>
  <div id="profile-content">
    <!-- 动态生成 -->
  </div>
  <button class="btn btn-primary" onclick="goBack()">返回测试</button>
</div>

<!-- 进化报告页面 -->
<div id="evolution-page" class="card hidden">
  <h2>📊 我的进化报告</h2>
  <div id="evolution-content">
    <!-- 动态生成 -->
  </div>
  <button class="btn btn-primary" onclick="goBack()">返回测试</button>
</div>
```

### 2.2 CSS 样式

```css
.profile-entry {
  text-align: center;
  margin: 20px 0;
}

.profile-card {
  background: linear-gradient(135deg, #FFFDF5, #F8F0E0);
  border-radius: 16px;
  padding: 25px;
  margin: 15px 0;
  border: 2px solid #E8D5B5;
}

.evolution-chart {
  width: 100%;
  height: 200px;
  background: #FFFDF5;
  border-radius: 12px;
  margin: 15px 0;
}

.migration-cost {
  background: linear-gradient(135deg, #FFF8F0, #F5E6D3);
  padding: 20px;
  border-radius: 12px;
  border-left: 5px solid #B8860B;
  margin: 15px 0;
}
```

### 2.3 JavaScript 功能

```javascript
// 显示用户档案
function showUserProfile() {
  const profile = loadUserProfile();
  const content = document.getElementById('profile-content');
  
  content.innerHTML = `
    <div class="profile-card">
      <h3>📊 测试记录</h3>
      <p>测试次数：${profile.evolutionData.testCount}</p>
      <p>注册时间：${new Date(profile.createdAt).toLocaleDateString()}</p>
    </div>
    
    <div class="profile-card">
      <h3>🎯 投资偏好</h3>
      <p>风险承受力：${profile.preferences.riskTolerance || '待设置'}</p>
      <p>投资期限：${profile.preferences.investmentHorizon || '待设置'}</p>
      <p>知识水平：${profile.preferences.knowledgeLevel || '待设置'}</p>
      <p>决策风格：${profile.preferences.decisionStyle || '待设置'}</p>
    </div>
    
    <div class="profile-card">
      <h3>🐾 最近测试结果</h3>
      ${profile.testResults.length > 0 ? `
        <p>本命宠物：${PETS_INFO[profile.testResults[profile.testResults.length-1].petId].emoji} ${PETS_INFO[profile.testResults[profile.testResults.length-1].petId].name}</p>
        <p>投资风格：${determineStyle(profile.testResults[profile.testResults.length-1].petId)}</p>
      ` : '<p>暂无测试结果</p>'}
    </div>
  `;
  
  document.getElementById('quiz-page').classList.add('hidden');
  document.getElementById('result-page').classList.add('hidden');
  document.getElementById('profile-page').classList.remove('hidden');
}

// 显示进化报告
function showEvolutionReport() {
  const report = generateEvolutionReport();
  const content = document.getElementById('evolution-content');
  
  if (report.message) {
    content.innerHTML = `<p>${report.message}</p>`;
  } else {
    content.innerHTML = `
      <div class="profile-card">
        <h3>📈 投资风格变化</h3>
        <p>上次：${report.styleChange.previous}</p>
        <p>本次：${report.styleChange.current}</p>
        <p>变化：${report.styleChange.change}</p>
      </div>
      
      <div class="profile-card">
        <h3>📜 历史决策对比</h3>
        ${report.historicalDecisions.map(d => `
          <p>${new Date(d.date).toLocaleDateString()} - ${PETS_INFO[d.petId].emoji} ${PETS_INFO[d.petId].name} (${d.style})</p>
        `).join('')}
      </div>
      
      <div class="profile-card">
        <h3>🌱 能力成长轨迹</h3>
        <p>当前等级：${report.growthLevel}</p>
        <p>测试次数：${report.migrationCost.testCount}</p>
        <p>风格变化：${report.migrationCost.styleChanges} 次</p>
      </div>
      
      <div class="migration-cost">
        <h3>⚠️ 迁移成本</h3>
        <p>你的投资大脑已成型，包含 ${report.migrationCost.testCount} 次交互数据、${report.migrationCost.styleChanges} 次风格变化。</p>
        <p><strong>离开等于放弃这些进化成果。</strong></p>
      </div>
    `;
  }
  
  document.getElementById('quiz-page').classList.add('hidden');
  document.getElementById('result-page').classList.add('hidden');
  document.getElementById('evolution-page').classList.remove('hidden');
}

// 返回测试
function goBack() {
  document.getElementById('profile-page').classList.add('hidden');
  document.getElementById('evolution-page').classList.add('hidden');
  document.getElementById('quiz-page').classList.remove('hidden');
}
```

---

## 三、实施计划

### 第 1 步：添加用户档案功能（0.5 天）
- [ ] 添加 localStorage 存储逻辑
- [ ] 添加用户档案页面
- [ ] 添加用户档案入口按钮

### 第 2 步：添加进化报告功能（1 天）
- [ ] 添加进化报告生成逻辑
- [ ] 添加进化报告页面
- [ ] 添加进化报告入口按钮

### 第 3 步：优化内容文案（0.5 天）
- [ ] 优化标题/描述
- [ ] 优化风险提示
- [ ] 优化底部话术

### 第 4 步：测试验证（0.5 天）
- [ ] 测试用户档案保存/加载
- [ ] 测试进化报告生成
- [ ] 测试内容文案显示
- [ ] 移动端适配测试

---

## 四、验收标准

| 功能 | 验收标准 | 测试方法 |
|------|---------|---------|
| **用户档案** | 测试结果保存到 localStorage | 刷新页面后数据仍在 |
| **进化报告** | 2 次测试后生成报告 | 测试 2 次后查看报告 |
| **内容文案** | 短句/留白/观点/人称 | 人工审核 |
| **署名规范** | 顶部/底部/元数据完整 | 查看页面源码 |
| **免责声明** | 标准文案显示 | 查看页面底部 |

---

## 五、风险与应对

| 风险 | 概率 | 影响 | 应对措施 |
|------|------|------|---------|
| **localStorage 容量限制** | 低 | 中 | 限制存储数据量，定期清理 |
| **用户隐私担忧** | 中 | 高 | 明确说明数据本地存储，不上传 |
| **进化报告不准确** | 中 | 中 | 明确标注"仅供参考" |
| **文案优化争议** | 低 | 低 | 燃冰审核定稿 |

---

**创建时间**：2026-04-27  
**版本**：v1.0  
**状态**：✅ 设计完成，待执行  
**下一步**：添加用户档案功能

# 智码科技官网

> 一个具有赛博朋克科技感的现代企业官网项目

![版本](https://img.shields.io/badge/version-1.0.0-blue)
![许可证](https://img.shields.io/badge/license-MIT-green)

## 项目简介

智码科技官网是一个为软件开发科技企业量身定制的现代化官网项目。采用深色主题配合霓虹光效，营造出专业而前卫的视觉体验。

## 设计特点

- **赛博朋克风格**：深色背景配合青色/紫色霓虹光效
- **动态粒子背景**：Canvas 实现的交互式粒子动画
- **流畅动画**：滚动入场、悬停效果、数字计数动画
- **响应式设计**：完美适配桌面、平板和手机
- **自定义光标**：非触摸设备上的个性化光标效果

## 技术栈

- **前端**：纯 HTML5 + CSS3 + JavaScript（无框架依赖）
- **字体**：Orbitron（科技标题）+ Rajdhani（现代正文）+ 思源黑体
- **图标**：内联 SVG
- **动画**：CSS3 动画 + Intersection Observer API

## 文件结构

```
corporateWebsite/
├── index.html          # 主页 HTML 结构
├── styles.css          # 样式文件（含动画、响应式）
├── script.js           # 交互脚本
└── README.md           # 项目说明
```

## 快速开始

### 方法一：直接打开

直接在浏览器中打开 `index.html` 文件即可预览网站。

### 方法二：本地服务器（推荐）

使用本地服务器以获得最佳体验：

```bash
# 使用 Python 3
python -m http.server 8000

# 或使用 Node.js
npx serve .

# 或使用 VS Code Live Server 插件
```

然后在浏览器中访问 `http://localhost:8000`

## 功能模块

### 1. 导航栏
- 固定顶部，滚动时添加背景模糊效果
- 响应式移动端菜单（汉堡按钮）
- 当前页面高亮
- 平滑滚动到锚点

### 2. Hero 区域
- 动态粒子背景
- 扫描线效果
- 旋转光环装饰
- 数字统计滚动动画

### 3. 服务介绍
- 4 个核心服务卡片
- 悬停光效和上浮动画
- 特色卡片高亮标记

### 4. 技术栈展示
- 三大技术分类（前端/后端/云与数据）
- 技术标签悬停效果

### 5. 案例展示
- 3 个项目案例卡片
- 悬停覆盖层显示
- 技术标签展示

### 6. 关于我们
- 公司介绍和价值观
- 团队统计数据

### 7. 联系表单
- 完整的表单验证
- 手机号和邮箱格式校验
- 提交成功提示动画
- 联系方式展示

### 8. 页脚
- 公司信息
- 快速链接
- 社交媒体图标

## 自定义配置

### 修改配色方案

在 `styles.css` 的 `:root` 中修改 CSS 变量：

```css
:root {
    --color-primary: #00f0ff;        /* 主色调 - 霓虹青 */
    --color-secondary: #b829dd;      /* 辅助色 - 电光紫 */
    --color-bg-primary: #050a14;     /* 主背景色 */
    /* ... 其他变量 */
}
```

### 修改公司信息

在 `index.html` 中搜索以下文本并替换：
- 公司名称："智码科技"
- 联系电话："400-888-9999"
- 邮箱地址："contact@zhimatech.com"
- 公司地址："北京市海淀区..."

### 修改案例图片

在 `index.html` 中找到 `.case-placeholder` 元素，替换为实际图片：

```html
<div class="case-image">
    <img src="path/to/your/image.jpg" alt="案例名称">
    <!-- ... -->
</div>
```

### 添加/修改服务

在 `index.html` 的 `.services-grid` 中添加新的 `.service-card`：

```html
<div class="service-card">
    <div class="card-glow"></div>
    <div class="card-icon">
        <!-- SVG 图标 -->
    </div>
    <h3 class="card-title">服务名称</h3>
    <p class="card-desc">服务描述...</p>
    <ul class="card-features">
        <li>特性 1</li>
        <li>特性 2</li>
    </ul>
</div>
```

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 性能优化

- 图片懒加载（可添加 `loading="lazy"`）
- CSS 动画使用 `transform` 和 `opacity` 确保 GPU 加速
- JavaScript 使用节流和防抖控制事件频率
- 页面不可见时暂停粒子动画

## 部署建议

### 静态托管

可以将项目部署到以下平台：
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [GitHub Pages](https://pages.github.com)
- [阿里云 OSS](https://www.aliyun.com/product/oss)

### 部署步骤

1. 压缩 CSS 和 JavaScript（生产环境）
2. 优化图片资源
3. 添加网站图标（favicon）
4. 配置 CDN 加速

## 待优化项

- [ ] 添加多语言支持（i18n）
- [ ] 集成后台表单提交 API
- [ ] 添加博客/新闻模块
- [ ] 添加客户评价模块
- [ ] 添加团队介绍页面
- [ ] SEO 优化（meta 标签、结构化数据）
- [ ] 添加暗黑/亮色主题切换

## 许可证

MIT License - 详见 LICENSE 文件

## 联系方式

如有问题或建议，欢迎联系：
- 邮箱：contact@zhimatech.com
- 电话：400-888-9999

---

**智码科技** - 用代码驱动未来

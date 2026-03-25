/**
 * 智码科技官网 - 交互脚本
 * 功能：导航栏滚动效果、移动端菜单、粒子背景、表单验证、平滑滚动、多语言切换等
 */

(function() {
    'use strict';

    // ============================================
    // 多语言翻译字典
    // ============================================
    const translations = {
        zh: {
            // 导航
            'nav_home': '首页',
            'nav_services': '服务',
            'nav_cases': '案例',
            'nav_about': '关于我们',
            'nav_contact': '联系我们',
            'nav_cta': '开始合作',
            'lang_current': '中文',

            // Hero 区域
            'hero_badge': '专业软件定制开发',
            'hero_title_1': '用代码',
            'hero_title_2': '驱动未来',
            'hero_subtitle': '我们为企业提供端到端的数字化解决方案，从需求分析到产品交付，用技术赋能业务增长',
            'hero_cta_primary': '免费咨询',
            'hero_cta_secondary': '查看案例',

            // 统计数据
            'stat_projects': '成功项目',
            'stat_clients': '企业客户',
            'stat_experience': '行业经验',

            // 服务区域
            'services_tag': '我们的服务',
            'services_title': '全方位技术解决方案',
            'services_desc': '从概念到落地，我们提供完整的技术服务链条',

            // 服务1 - 企业级应用
            'service_1_title': '企业级应用开发',
            'service_1_desc': '定制化ERP、CRM、OA等管理系统，提升企业运营效率，实现数字化转型',
            'service_1_feature_1': '微服务架构设计',
            'service_1_feature_2': '高并发性能优化',
            'service_1_feature_3': '多终端适配支持',

            // 服务2 - 移动应用
            'service_badge_hot': '热门',
            'service_2_title': '移动应用开发',
            'service_2_desc': 'iOS/Android原生及跨平台App开发，打造流畅的移动体验，覆盖全终端用户',
            'service_2_feature_1': 'Flutter/React Native',
            'service_2_feature_2': '原生性能优化',
            'service_2_feature_3': '应用商店发布支持',

            // 服务3 - 云平台
            'service_3_title': '云平台解决方案',
            'service_3_desc': '基于AWS、阿里云、腾讯云的云原生架构设计与实施，确保系统稳定可靠',
            'service_3_feature_1': '容器化部署',
            'service_3_feature_2': '自动化运维',
            'service_3_feature_3': '弹性伸缩架构',

            // 服务4 - 数据中台
            'service_4_title': '数据中台建设',
            'service_4_desc': '数据仓库、BI分析、数据可视化大屏，让数据成为企业的核心竞争力',
            'service_4_feature_1': '实时数据处理',
            'service_4_feature_2': '智能报表系统',
            'service_4_feature_3': '数据安全合规',

            // 技术栈
            'tech_tag': '技术实力',
            'tech_title': '我们的技术栈',
            'tech_desc': '采用业界领先的技术，确保项目的质量与可维护性',
            'tech_frontend': '前端开发',
            'tech_backend': '后端开发',
            'tech_database': '数据库与云',

            // 案例区域
            'cases_tag': '成功案例',
            'cases_title': '我们的作品',
            'cases_desc': '每一个项目都是我们用心打造的精品',

            // 案例1
            'case_1_image': '智慧物流平台',
            'case_1_tag': '企业级应用',
            'case_1_title': '智慧物流管理平台',
            'case_1_desc': '为大型物流企业打造的智能调度系统，实现订单管理、路径优化、实时追踪一体化',

            // 案例2
            'case_2_image': '医疗预约App',
            'case_2_tag': '移动应用',
            'case_2_title': '医疗健康预约平台',
            'case_2_desc': '连接患者与医疗机构的预约服务平台，支持在线问诊、预约挂号、报告查询等功能',

            // 案例3
            'case_3_image': '电商数据中台',
            'case_3_tag': '数据中台',
            'case_3_title': '电商数据分析中台',
            'case_3_desc': '为电商平台构建的数据分析系统，实时监控销售数据、用户行为分析、智能推荐引擎',

            // 关于我们
            'about_tag': '关于我们',
            'about_title': '创新驱动，技术为本',
            'about_text_1': '智码科技成立于2016年，是一家专注于企业数字化转型的技术服务商。我们拥有一支经验丰富的技术团队，核心成员来自知名互联网公司和科技企业。',
            'about_text_2': '多年来，我们始终坚持"技术驱动业务"的理念，为超过50家企业客户提供优质的软件定制开发服务。从初创公司到大型集团，我们都能提供最适合的技术解决方案。',

            // 价值观
            'value_1_title': '技术创新',
            'value_1_desc': '持续追踪前沿技术，为客户提供最先进的解决方案',
            'value_2_title': '品质至上',
            'value_2_desc': '严格的质量管控体系，确保交付的每一个产品都精益求精',
            'value_3_title': '客户为先',
            'value_3_desc': '深入理解业务需求，做客户最信赖的技术伙伴',

            // 团队统计
            'team_experts': '技术专家',
            'team_education': '本科及以上学历',

            // 联系区域
            'contact_tag': '联系我们',
            'contact_title': '开启您的数字化之旅',
            'contact_desc': '无论您是需要全新的系统开发，还是现有系统的升级改造，我们都将为您提供专业的咨询服务。',
            'contact_phone_label': '电话咨询',
            'contact_email_label': '邮箱联系',
            'contact_address_label': '公司地址',
            'contact_address_value': '北京市海淀区中关村软件园A座',

            // 表单
            'form_name_label': '您的姓名',
            'form_name_placeholder': '请输入您的姓名',
            'form_company_label': '公司名称',
            'form_company_placeholder': '请输入公司名称',
            'form_phone_label': '联系电话',
            'form_phone_placeholder': '请输入联系电话',
            'form_email_label': '电子邮箱',
            'form_email_placeholder': '请输入电子邮箱',
            'form_service_label': '感兴趣的服务',
            'form_service_option_0': '请选择服务类型',
            'form_service_option_1': '企业级应用开发',
            'form_service_option_2': '移动应用开发',
            'form_service_option_3': '云平台解决方案',
            'form_service_option_4': '数据中台建设',
            'form_service_option_5': '其他',
            'form_message_label': '项目需求',
            'form_message_placeholder': '请简要描述您的项目需求...',
            'form_submit': '提交咨询',

            // 页脚
            'footer_desc': '专业的软件定制化开发服务商，致力于为企业提供高质量的数字化解决方案。',
            'footer_services_title': '服务项目',
            'footer_service_1': '企业级应用',
            'footer_service_2': '移动应用开发',
            'footer_service_3': '云平台方案',
            'footer_service_4': '数据中台',
            'footer_company_title': '关于公司',
            'footer_about': '关于我们',
            'footer_cases': '成功案例',
            'footer_careers': '加入我们',
            'footer_contact': '联系方式',
            'footer_help_title': '帮助支持',
            'footer_faq': '常见问题',
            'footer_terms': '服务条款',
            'footer_privacy': '隐私政策',
            'footer_sitemap': '网站地图',
            'footer_copyright': '© 2024 智码科技. 保留所有权利. | 京ICP备XXXXXXXX号',

            // 表单验证错误消息
            'error_required': '此字段为必填项',
            'error_email': '请输入有效的邮箱地址',
            'error_phone': '请输入有效的手机号码',
            'submit_loading': '提交中...',
            'submit_success': '提交成功！',
            'submit_success_message': '我们会尽快与您联系。'
        },
        en: {
            // Navigation
            'nav_home': 'Home',
            'nav_services': 'Services',
            'nav_cases': 'Cases',
            'nav_about': 'About',
            'nav_contact': 'Contact',
            'nav_cta': 'Get Started',
            'lang_current': 'EN',

            // Hero Section
            'hero_badge': 'Custom Software Development',
            'hero_title_1': 'Code',
            'hero_title_2': 'Drives Future',
            'hero_subtitle': 'We provide end-to-end digital solutions for enterprises, from requirements analysis to product delivery, empowering business growth with technology',
            'hero_cta_primary': 'Free Consultation',
            'hero_cta_secondary': 'View Cases',

            // Statistics
            'stat_projects': 'Projects',
            'stat_clients': 'Clients',
            'stat_experience': 'Years Experience',

            // Services Section
            'services_tag': 'Our Services',
            'services_title': 'Full-Stack Solutions',
            'services_desc': 'From concept to launch, we provide complete technical services',

            // Service 1 - Enterprise
            'service_1_title': 'Enterprise Development',
            'service_1_desc': 'Custom ERP, CRM, OA management systems to improve operational efficiency and enable digital transformation',
            'service_1_feature_1': 'Microservices Architecture',
            'service_1_feature_2': 'High-Concurrency Optimization',
            'service_1_feature_3': 'Multi-Terminal Support',

            // Service 2 - Mobile
            'service_badge_hot': 'Hot',
            'service_2_title': 'Mobile App Development',
            'service_2_desc': 'iOS/Android native and cross-platform app development, creating smooth mobile experiences for all users',
            'service_2_feature_1': 'Flutter/React Native',
            'service_2_feature_2': 'Native Performance',
            'service_2_feature_3': 'App Store Support',

            // Service 3 - Cloud
            'service_3_title': 'Cloud Solutions',
            'service_3_desc': 'Cloud-native architecture design and implementation based on AWS, Alibaba Cloud, and Tencent Cloud',
            'service_3_feature_1': 'Containerized Deployment',
            'service_3_feature_2': 'Automated Operations',
            'service_3_feature_3': 'Elastic Scaling',

            // Service 4 - Data
            'service_4_title': 'Data Platform',
            'service_4_desc': 'Data warehouses, BI analytics, and data visualization dashboards to make data your core competitiveness',
            'service_4_feature_1': 'Real-time Processing',
            'service_4_feature_2': 'Smart Reporting',
            'service_4_feature_3': 'Data Security Compliance',

            // Tech Stack
            'tech_tag': 'Tech Stack',
            'tech_title': 'Our Technologies',
            'tech_desc': 'Industry-leading technologies for quality and maintainability',
            'tech_frontend': 'Frontend',
            'tech_backend': 'Backend',
            'tech_database': 'Database & Cloud',

            // Cases Section
            'cases_tag': 'Success Stories',
            'cases_title': 'Our Work',
            'cases_desc': 'Every project is crafted with care and dedication',

            // Case 1
            'case_1_image': 'Smart Logistics',
            'case_1_tag': 'Enterprise App',
            'case_1_title': 'Smart Logistics Platform',
            'case_1_desc': 'Intelligent dispatching system for large logistics enterprises, integrating order management, route optimization, and real-time tracking',

            // Case 2
            'case_2_image': 'Medical App',
            'case_2_tag': 'Mobile App',
            'case_2_title': 'Healthcare Booking Platform',
            'case_2_desc': 'Connecting patients with medical institutions, supporting online consultations, appointment booking, and report queries',

            // Case 3
            'case_3_image': 'E-commerce Data',
            'case_3_tag': 'Data Platform',
            'case_3_title': 'E-commerce Data Platform',
            'case_3_desc': 'Real-time sales monitoring, user behavior analysis, and intelligent recommendation engine for e-commerce platforms',

            // About
            'about_tag': 'About Us',
            'about_title': 'Innovation Driven, Tech First',
            'about_text_1': 'Founded in 2016, Zima Tech is a technology service provider focused on enterprise digital transformation. Our experienced team comes from leading internet and tech companies.',
            'about_text_2': 'Over the years, we have adhered to the "technology drives business" philosophy, providing quality software development services to over 50 enterprise clients.',

            // Values
            'value_1_title': 'Innovation',
            'value_1_desc': 'Tracking cutting-edge technologies to provide the most advanced solutions',
            'value_2_title': 'Quality First',
            'value_2_desc': 'Strict quality control to ensure every product is excellent',
            'value_3_title': 'Customer First',
            'value_3_desc': 'Understanding business needs deeply, being the most trusted tech partner',

            // Team Stats
            'team_experts': 'Tech Experts',
            'team_education': 'Bachelor+ Degree',

            // Contact Section
            'contact_tag': 'Contact Us',
            'contact_title': 'Start Your Digital Journey',
            'contact_desc': 'Whether you need a new system or an upgrade, we provide professional consulting services.',
            'contact_phone_label': 'Phone',
            'contact_email_label': 'Email',
            'contact_address_label': 'Address',
            'contact_address_value': 'Tower A, Zhongguancun Software Park, Beijing',

            // Form
            'form_name_label': 'Your Name',
            'form_name_placeholder': 'Enter your name',
            'form_company_label': 'Company',
            'form_company_placeholder': 'Enter company name',
            'form_phone_label': 'Phone',
            'form_phone_placeholder': 'Enter phone number',
            'form_email_label': 'Email',
            'form_email_placeholder': 'Enter email address',
            'form_service_label': 'Service Interest',
            'form_service_option_0': 'Select service type',
            'form_service_option_1': 'Enterprise Development',
            'form_service_option_2': 'Mobile App Dev',
            'form_service_option_3': 'Cloud Solutions',
            'form_service_option_4': 'Data Platform',
            'form_service_option_5': 'Other',
            'form_message_label': 'Requirements',
            'form_message_placeholder': 'Briefly describe your project requirements...',
            'form_submit': 'Submit Inquiry',

            // Footer
            'footer_desc': 'Professional custom software development services, dedicated to providing high-quality digital solutions for enterprises.',
            'footer_services_title': 'Services',
            'footer_service_1': 'Enterprise Apps',
            'footer_service_2': 'Mobile Apps',
            'footer_service_3': 'Cloud Solutions',
            'footer_service_4': 'Data Platform',
            'footer_company_title': 'Company',
            'footer_about': 'About Us',
            'footer_cases': 'Cases',
            'footer_careers': 'Careers',
            'footer_contact': 'Contact',
            'footer_help_title': 'Support',
            'footer_faq': 'FAQ',
            'footer_terms': 'Terms',
            'footer_privacy': 'Privacy',
            'footer_sitemap': 'Sitemap',
            'footer_copyright': '© 2024 Zima Tech. All rights reserved.',

            // Form validation error messages
            'error_required': 'This field is required',
            'error_email': 'Please enter a valid email',
            'error_phone': 'Please enter a valid phone number',
            'submit_loading': 'Submitting...',
            'submit_success': 'Success!',
            'submit_success_message': 'We will contact you soon.'
        }
    };

    // ============================================
    // DOM 元素缓存
    // ============================================
    const elements = {
        navbar: document.getElementById('navbar'),
        mobileToggle: document.getElementById('mobile-toggle'),
        mobileMenu: document.getElementById('mobile-menu'),
        navLinks: document.querySelectorAll('.nav-link, .mobile-link'),
        backToTop: document.getElementById('back-to-top'),
        contactForm: document.getElementById('contact-form'),
        canvas: document.getElementById('particle-canvas'),
        sections: document.querySelectorAll('section[id]'),
        langSwitcher: document.getElementById('lang-switcher')
    };

    // ============================================
    // 工具函数
    // ============================================

    /**
     * 节流函数 - 限制函数执行频率
     * @param {Function} func - 要执行的函数
     * @param {number} wait - 等待时间（毫秒）
     * @returns {Function}
     */
    function throttle(func, wait) {
        let timeout = null;
        let previous = 0;

        return function(...args) {
            const now = Date.now();
            const remaining = wait - (now - previous);

            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                func.apply(this, args);
            } else if (!timeout) {
                timeout = setTimeout(() => {
                    previous = Date.now();
                    timeout = null;
                    func.apply(this, args);
                }, remaining);
            }
        };
    }

    /**
     * 防抖函数 - 延迟执行直到停止触发
     * @param {Function} func - 要执行的函数
     * @param {number} wait - 等待时间（毫秒）
     * @returns {Function}
     */
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    // ============================================
    // 多语言国际化模块
    // ============================================
    const I18n = {
        // 当前语言
        currentLang: 'zh',

        /**
         * 初始化多语言功能
         */
        init() {
            // 从 localStorage 读取用户语言偏好
            const savedLang = localStorage.getItem('zhima-lang');
            if (savedLang && translations[savedLang]) {
                this.currentLang = savedLang;
            }

            // 应用当前语言
            this.applyLanguage(this.currentLang);

            // 绑定语言切换按钮事件
            this.bindEvents();
        },

        /**
         * 绑定语言切换按钮事件
         */
        bindEvents() {
            if (!elements.langSwitcher) return;

            elements.langSwitcher.addEventListener('click', () => {
                // 切换语言
                const newLang = this.currentLang === 'zh' ? 'en' : 'zh';
                this.changeLanguage(newLang);
            });
        },

        /**
         * 切换语言
         * @param {string} lang - 目标语言 ('zh' 或 'en')
         */
        changeLanguage(lang) {
            if (!translations[lang]) {
                console.warn(`Language "${lang}" not supported`);
                return;
            }

            // 更新当前语言
            this.currentLang = lang;

            // 保存到 localStorage
            localStorage.setItem('zhima-lang', lang);

            // 应用语言到页面
            this.applyLanguage(lang);

            // 更新页面 lang 属性
            document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

            // 触发自定义事件，通知语言已切换
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: lang }
            }));
        },

        /**
         * 应用语言到页面元素
         * @param {string} lang - 目标语言
         */
        applyLanguage(lang) {
            const texts = translations[lang];

            // 翻译所有带有 data-i18n 属性的元素
            const elementsToTranslate = document.querySelectorAll('[data-i18n]');
            elementsToTranslate.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (texts[key]) {
                    el.textContent = texts[key];
                }
            });

            // 翻译带有 data-i18n-placeholder 属性的元素（input/textarea placeholder）
            const placeholdersToTranslate = document.querySelectorAll('[data-i18n-placeholder]');
            placeholdersToTranslate.forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (texts[key]) {
                    el.placeholder = texts[key];
                }
            });

            // 更新语言切换按钮显示
            if (elements.langSwitcher) {
                const langText = elements.langSwitcher.querySelector('.lang-current');
                if (langText && texts['lang_current']) {
                    langText.textContent = texts['lang_current'];
                }
            }
        },

        /**
         * 获取当前语言的翻译文本
         * @param {string} key - 翻译键
         * @returns {string} 翻译文本
         */
        t(key) {
            return translations[this.currentLang]?.[key] || key;
        },

        /**
         * 获取当前语言代码
         * @returns {string} 语言代码
         */
        getCurrentLang() {
            return this.currentLang;
        }
    };

    // ============================================
    // 导航栏功能
    // ============================================

    const Navigation = {
        /**
         * 初始化导航栏功能
         */
        init() {
            this.handleScroll();
            this.handleMobileMenu();
            this.handleSmoothScroll();
            this.handleActiveLink();
        },

        /**
         * 处理滚动时导航栏样式变化
         */
        handleScroll() {
            const scrollThreshold = 50;

            window.addEventListener('scroll', throttle(() => {
                const scrollY = window.scrollY;

                // 导航栏背景变化
                if (scrollY > scrollThreshold) {
                    elements.navbar.classList.add('scrolled');
                } else {
                    elements.navbar.classList.remove('scrolled');
                }

                // 回到顶部按钮显示/隐藏
                if (scrollY > 500) {
                    elements.backToTop.classList.add('visible');
                } else {
                    elements.backToTop.classList.remove('visible');
                }
            }, 100));
        },

        /**
         * 处理移动端菜单
         */
        handleMobileMenu() {
            if (!elements.mobileToggle || !elements.mobileMenu) return;

            // 切换菜单
            elements.mobileToggle.addEventListener('click', () => {
                elements.mobileToggle.classList.toggle('active');
                elements.mobileMenu.classList.toggle('active');
                document.body.style.overflow = elements.mobileMenu.classList.contains('active') ? 'hidden' : '';
            });

            // 点击菜单项关闭菜单
            elements.mobileMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    elements.mobileToggle.classList.remove('active');
                    elements.mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });
            });

            // 点击外部关闭菜单
            document.addEventListener('click', (e) => {
                if (elements.mobileMenu.classList.contains('active') &&
                    !elements.mobileMenu.contains(e.target) &&
                    !elements.mobileToggle.contains(e.target)) {
                    elements.mobileToggle.classList.remove('active');
                    elements.mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        },

        /**
         * 处理平滑滚动
         */
        handleSmoothScroll() {
            elements.navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            const navHeight = elements.navbar.offsetHeight;
                            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });

            // 回到顶部
            elements.backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        },

        /**
         * 处理当前活动链接高亮
         */
        handleActiveLink() {
            const updateActiveLink = () => {
                const scrollPosition = window.scrollY + elements.navbar.offsetHeight + 100;

                elements.sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        elements.navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            };

            window.addEventListener('scroll', throttle(updateActiveLink, 100));
        }
    };

    // ============================================
    // 粒子背景效果
    // ============================================

    const ParticleBackground = {
        particles: [],
        animationId: null,
        isActive: true,

        /**
         * 初始化粒子背景
         */
        init() {
            if (!elements.canvas) return;

            this.ctx = elements.canvas.getContext('2d');
            this.resize();
            this.createParticles();
            this.animate();

            // 窗口大小改变时重新调整
            window.addEventListener('resize', debounce(() => this.resize(), 200));

            // 页面不可见时暂停动画以节省资源
            document.addEventListener('visibilitychange', () => {
                this.isActive = document.visibilityState === 'visible';
                if (this.isActive) {
                    this.animate();
                } else {
                    cancelAnimationFrame(this.animationId);
                }
            });
        },

        /**
         * 调整画布大小
         */
        resize() {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            elements.canvas.width = this.width;
            elements.canvas.height = this.height;

            // 根据屏幕大小调整粒子数量
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            this.particleCount = isMobile ? 25 : 50;
            this.connectionDistance = isMobile ? 80 : 120;
        },

        /**
         * 创建粒子
         */
        createParticles() {
            this.particles = [];
            for (let i = 0; i < this.particleCount; i++) {
                this.particles.push({
                    x: Math.random() * this.width,
                    y: Math.random() * this.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        },

        /**
         * 动画循环
         */
        animate() {
            if (!this.isActive) return;

            this.ctx.clearRect(0, 0, this.width, this.height);

            // 更新和绘制粒子
            this.particles.forEach((particle, i) => {
                // 更新位置
                particle.x += particle.vx;
                particle.y += particle.vy;

                // 边界检查
                if (particle.x < 0 || particle.x > this.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > this.height) particle.vy *= -1;

                // 绘制粒子
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                this.ctx.fillStyle = `rgba(0, 240, 255, ${particle.opacity})`;
                this.ctx.fill();

                // 绘制连接线
                for (let j = i + 1; j < this.particles.length; j++) {
                    const other = this.particles[j];
                    const dx = particle.x - other.x;
                    const dy = particle.y - other.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < this.connectionDistance) {
                        const opacity = (1 - distance / this.connectionDistance) * 0.2;
                        this.ctx.beginPath();
                        this.ctx.moveTo(particle.x, particle.y);
                        this.ctx.lineTo(other.x, other.y);
                        this.ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
                        this.ctx.lineWidth = 0.5;
                        this.ctx.stroke();
                    }
                }
            });

            this.animationId = requestAnimationFrame(() => this.animate());
        }
    };

    // ============================================
    // 滚动显示动画
    // ============================================

    const ScrollReveal = {
        /**
         * 初始化滚动显示动画
         */
        init() {
            const animatedElements = document.querySelectorAll(
                '.service-card, .case-card, .tech-item, .value-item, .contact-method'
            );

            // 添加基础类
            animatedElements.forEach((el, index) => {
                el.classList.add('fade-in');
                el.classList.add(`stagger-${(index % 4) + 1}`);
            });

            // 创建 Intersection Observer
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(el => observer.observe(el));

            // 统计数字动画
            this.animateCounters();
        },

        /**
         * 统计数字滚动动画
         */
        animateCounters() {
            const counters = document.querySelectorAll('.stat-number');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const text = counter.textContent;
                        const target = parseInt(text);
                        const suffix = text.replace(/[0-9]/g, '');
                        const duration = 2000;
                        const start = performance.now();

                        const animate = (currentTime) => {
                            const elapsed = currentTime - start;
                            const progress = Math.min(elapsed / duration, 1);
                            const easeOut = 1 - Math.pow(1 - progress, 3);
                            const current = Math.floor(target * easeOut);

                            counter.textContent = current + suffix;

                            if (progress < 1) {
                                requestAnimationFrame(animate);
                            }
                        };

                        requestAnimationFrame(animate);
                        observer.unobserve(counter);
                    }
                });
            }, { threshold: 0.5 });

            counters.forEach(counter => observer.observe(counter));
        }
    };

    // ============================================
    // 表单验证与提交
    // ============================================

    const FormHandler = {
        /**
         * 初始化表单处理
         */
        init() {
            if (!elements.contactForm) return;

            elements.contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit();
            });

            // 实时验证
            this.setupLiveValidation();

            // 监听语言切换事件，更新验证消息
            window.addEventListener('languageChanged', () => {
                this.updateValidationMessages();
            });
        },

        /**
         * 更新验证消息（语言切换时调用）
         */
        updateValidationMessages() {
            // 重新验证所有字段以更新错误消息
            const inputs = elements.contactForm.querySelectorAll('input, select, textarea');
            inputs.forEach(input => {
                if (input.classList.contains('error')) {
                    this.validateField(input);
                }
            });
        },

        /**
         * 设置实时验证
         */
        setupLiveValidation() {
            const inputs = elements.contactForm.querySelectorAll('input, select, textarea');

            inputs.forEach(input => {
                input.addEventListener('blur', () => {
                    this.validateField(input);
                });

                input.addEventListener('input', () => {
                    if (input.classList.contains('error')) {
                        this.validateField(input);
                    }
                });
            });
        },

        /**
         * 验证单个字段
         * @param {HTMLInputElement} field - 要验证的字段
         * @returns {boolean}
         */
        validateField(field) {
            const name = field.name;
            const value = field.value.trim();
            let isValid = true;
            let message = '';

            // 移除旧错误信息
            const existingError = field.parentElement.querySelector('.form-error');
            if (existingError) {
                existingError.remove();
            }
            field.classList.remove('error');

            // 必填验证
            if (field.required && !value) {
                isValid = false;
                message = I18n.t('error_required');
            }

            // 邮箱验证
            if (name === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    message = I18n.t('error_email');
                }
            }

            // 电话验证
            if (name === 'phone' && value) {
                const phoneRegex = /^1[3-9]\d{9}$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    message = I18n.t('error_phone');
                }
            }

            // 显示错误
            if (!isValid) {
                field.classList.add('error');
                const errorEl = document.createElement('span');
                errorEl.className = 'form-error';
                errorEl.textContent = message;
                field.parentElement.appendChild(errorEl);
            }

            return isValid;
        },

        /**
         * 处理表单提交
         */
        handleSubmit() {
            const inputs = elements.contactForm.querySelectorAll('input[required], textarea');
            let isFormValid = true;

            // 验证所有字段
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // 显示加载状态
                const submitBtn = elements.contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.disabled = true;
                const loadingText = I18n.t('submit_loading');
                submitBtn.innerHTML = `<span>${loadingText}</span>`;

                // 模拟提交（实际项目中这里应该发送 AJAX 请求）
                setTimeout(() => {
                    this.showSuccessMessage();
                    elements.contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalText;
                }, 1500);
            } else {
                // 滚动到第一个错误字段
                const firstError = elements.contactForm.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    firstError.focus();
                }
            }
        },

        /**
         * 显示成功消息
         */
        showSuccessMessage() {
            const toastTitle = I18n.t('submit_success');
            const toastMessage = I18n.t('submit_success_message');

            // 创建成功提示
            const toast = document.createElement('div');
            toast.className = 'toast-success';
            toast.innerHTML = `
                <div class="toast-content">
                    <span class="toast-icon">✓</span>
                    <span class="toast-message">${toastTitle} ${toastMessage}</span>
                </div>
            `;

            // 添加样式
            toast.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 12px;
                box-shadow: 0 10px 40px rgba(16, 185, 129, 0.3);
                z-index: 10000;
                animation: slideIn 0.3s ease;
            `;

            // 添加动画样式
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
                .toast-content {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .toast-icon {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.2);
                    border-radius: 50%;
                    font-weight: bold;
                }
            `;
            document.head.appendChild(style);

            document.body.appendChild(toast);

            // 3秒后自动移除
            setTimeout(() => {
                toast.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3000);
        }
    };

    // ============================================
    // 鼠标跟随效果
    // ============================================

    const MouseFollower = {
        cursor: null,
        cursorDot: null,

        /**
         * 初始化鼠标跟随效果
         */
        init() {
            // 仅在非触摸设备上启用
            if (window.matchMedia('(pointer: coarse)').matches) return;

            this.createCursor();
            this.attachEvents();
        },

        /**
         * 创建自定义光标
         */
        createCursor() {
            // 外圈
            this.cursor = document.createElement('div');
            this.cursor.className = 'custom-cursor';
            this.cursor.style.cssText = `
                position: fixed;
                width: 40px;
                height: 40px;
                border: 2px solid rgba(0, 240, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease, border-color 0.2s ease;
                transform: translate(-50%, -50%);
            `;

            // 内点
            this.cursorDot = document.createElement('div');
            this.cursorDot.className = 'cursor-dot';
            this.cursorDot.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: #00f0ff;
                border-radius: 50%;
                pointer-events: none;
                z-index: 10000;
                transform: translate(-50%, -50%);
                transition: transform 0.05s ease, background 0.2s ease;
            `;

            document.body.appendChild(this.cursor);
            document.body.appendChild(this.cursorDot);
        },

        /**
         * 附加事件监听器
         */
        attachEvents() {
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', throttle((e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                // 内点直接跟随
                this.cursorDot.style.left = mouseX + 'px';
                this.cursorDot.style.top = mouseY + 'px';
            }, 16));

            // 外圈平滑跟随
            const animate = () => {
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;

                this.cursor.style.left = cursorX + 'px';
                this.cursor.style.top = cursorY + 'px';

                requestAnimationFrame(animate);
            };
            animate();

            // 悬停效果
            const interactiveElements = document.querySelectorAll('a, button, .service-card, .case-card');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    this.cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
                    this.cursor.style.borderColor = '#b829dd';
                    this.cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
                });

                el.addEventListener('mouseleave', () => {
                    this.cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                    this.cursor.style.borderColor = 'rgba(0, 240, 255, 0.5)';
                    this.cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                });
            });
        }
    };

    // ============================================
    // 初始化
    // ============================================

    document.addEventListener('DOMContentLoaded', () => {
        // 初始化多语言功能（优先加载，确保其他模块可以使用）
        I18n.init();

        // 初始化各模块
        Navigation.init();
        ParticleBackground.init();
        ScrollReveal.init();
        FormHandler.init();
        MouseFollower.init();

        // 添加页面加载完成类
        document.body.classList.add('loaded');
    });

    // 错误处理
    window.addEventListener('error', (e) => {
        console.error('JavaScript Error:', e.error);
    });

})();

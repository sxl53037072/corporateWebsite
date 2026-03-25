/**
 * 智码科技官网 - 交互脚本
 * 功能：导航栏滚动效果、移动端菜单、粒子背景、表单验证、平滑滚动等
 */

(function() {
    'use strict';

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
        sections: document.querySelectorAll('section[id]')
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
                message = '此字段为必填项';
            }

            // 邮箱验证
            if (name === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    message = '请输入有效的邮箱地址';
                }
            }

            // 电话验证
            if (name === 'phone' && value) {
                const phoneRegex = /^1[3-9]\d{9}$/;
                if (!phoneRegex.test(value)) {
                    isValid = false;
                    message = '请输入有效的手机号码';
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
                submitBtn.innerHTML = '<span>提交中...</span>';

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
            // 创建成功提示
            const toast = document.createElement('div');
            toast.className = 'toast-success';
            toast.innerHTML = `
                <div class="toast-content">
                    <span class="toast-icon">✓</span>
                    <span class="toast-message">提交成功！我们会尽快与您联系。</span>
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

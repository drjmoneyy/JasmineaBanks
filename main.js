/* ===============================
   JASMINE BANKS PORTFOLIO - SOPHISTICATED INTERACTIONS
   Clean, minimalist JavaScript for enhanced user experience
   =============================== */

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    // Initialize all functionality
    initializeNavigation();
    initializeTypewriter();
    initializeScrollAnimations();
    initializePublicationFilters();
    initializeContactForm();
    initializeSmoothScrolling();
    initializeGeometricElements();
    
    console.log('Jasmine Banks Portfolio - Sophisticated Design Initialized');
});

/* ===============================
   NAVIGATION FUNCTIONALITY
   =============================== */
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');
    
    // Mobile menu toggle
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Update aria attributes for accessibility
            const isExpanded = navLinks.classList.contains('active');
            mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close mobile menu when clicking on links
        const navLinkItems = navLinks.querySelectorAll('.nav-link');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', false);
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                mobileMenuBtn.setAttribute('aria-expanded', false);
            }
        });
    }
    
    // Subtle navbar scroll effect
    window.addEventListener('scroll', throttle(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(254, 253, 248, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(58, 51, 40, 0.1)';
        } else {
            navbar.style.background = 'rgba(254, 253, 248, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }, 100));
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', throttle(function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        
        navLinksAll.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, 100));
}

/* ===============================
   TYPEWRITER ANIMATION
   =============================== */
function initializeTypewriter() {
    const typewriterElement = document.getElementById('typewriterText');
    const cursor = document.getElementById('cursor');
    
    if (!typewriterElement || !cursor) return;
    
    const text = 'Hello';
    const typeSpeed = 120;
    const pauseSpeed = 2000;
    const deleteSpeed = 80;
    
    let charIndex = 0;
    let isTyping = true;
    
    function typeWriter() {
        if (isTyping) {
            if (charIndex < text.length) {
                typewriterElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typeSpeed);
            } else {
                // Pause before starting to delete
                setTimeout(() => {
                    isTyping = false;
                    typeWriter();
                }, pauseSpeed);
            }
        } else {
            if (charIndex > 0) {
                typewriterElement.textContent = text.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(typeWriter, deleteSpeed);
            } else {
                // Start typing again after a pause
                isTyping = true;
                setTimeout(typeWriter, 500);
            }
        }
    }
    
    // Start the animation after initial page load
    setTimeout(typeWriter, 1500);
}

/* ===============================
   SCROLL ANIMATIONS
   =============================== */
function initializeScrollAnimations() {
    // Intersection Observer for subtle fade-in animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll([
        '.section-header',
        '.expertise-card',
        '.research-card',
        '.project-card',
        '.publication-item',
        '.contact-item',
        '.about-text'
    ].join(', '));
    
    animateElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
    
    // Staggered animation for card grids
    const grids = document.querySelectorAll('.expertise-grid, .research-grid, .projects-grid');
    grids.forEach(grid => {
        const items = Array.from(grid.children);
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });
    });
}

/* ===============================
   PUBLICATION FILTERS
   =============================== */
function initializePublicationFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');
    
    if (!filterBtns.length || !publicationItems.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button with smooth transition
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter publications with elegant animation
            publicationItems.forEach((item, index) => {
                const shouldShow = filter === 'all' || item.classList.contains(filter);
                
                setTimeout(() => {
                    if (shouldShow) {
                        item.style.display = 'grid';
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        
                        requestAnimationFrame(() => {
                            item.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        });
                    } else {
                        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(-10px)';
                        
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }, index * 30);
            });
            
            // Announce filter change to screen readers
            announceToScreenReader(`Showing ${filter === 'all' ? 'all publications' : filter + ' publications'}`);
        });
    });
}

/* ===============================
   CONTACT FORM FUNCTIONALITY
   =============================== */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        if (!validateForm(data)) {
            return;
        }
        
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Elegant loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        submitBtn.style.background = 'linear-gradient(135deg, #9cb4a8, #8fa5b5)';
        
        // Simulate form submission
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #9cb4a8, #6b8f71)';
            
            this.reset();
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
            
        }, 2000);
    });
    
    // Real-time validation with subtle feedback
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            this.classList.remove('error');
            const errorMsg = this.parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });
}

function validateForm(data) {
    let isValid = true;
    const form = document.getElementById('contactForm');
    
    // Clear previous errors
    form.querySelectorAll('.error-message').forEach(msg => msg.remove());
    form.querySelectorAll('.error').forEach(field => field.classList.remove('error'));
    
    // Validate fields
    if (!data.name || data.name.trim().length < 2) {
        showFieldError('name', 'Name must be at least 2 characters');
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFieldError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    if (!data.subject || data.subject.trim().length < 3) {
        showFieldError('subject', 'Subject must be at least 3 characters');
        isValid = false;
    }
    
    if (!data.message || data.message.trim().length < 10) {
        showFieldError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    
    switch (field.name) {
        case 'name':
            if (value.length < 2) {
                showFieldError(field.name, 'Name must be at least 2 characters');
                return false;
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field.name, 'Please enter a valid email address');
                return false;
            }
            break;
        case 'subject':
            if (value.length < 3) {
                showFieldError(field.name, 'Subject must be at least 3 characters');
                return false;
            }
            break;
        case 'message':
            if (value.length < 10) {
                showFieldError(field.name, 'Message must be at least 10 characters');
                return false;
            }
            break;
    }
    
    return true;
}

function showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const formGroup = field.closest('.form-group');
    
    field.classList.add('error');
    field.style.borderColor = '#d4a574';
    field.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.2)';
    
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.cssText = `
        color: #8b7355;
        font-size: 0.875rem;
        margin-top: 0.25rem;
        font-weight: 500;
    `;
    
    formGroup.appendChild(errorElement);
}

/* ===============================
   SMOOTH SCROLLING
   =============================== */
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===============================
   GEOMETRIC ELEMENTS ANIMATION
   =============================== */
function initializeGeometricElements() {
    const geometricShapes = document.querySelectorAll('.diamond-shape, .circle-element');
    
    // Add subtle parallax effect for geometric elements
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('scroll', throttle(function() {
            const scrolled = window.pageYOffset;
            
            geometricShapes.forEach((shape, index) => {
                const speed = 0.2 + (index * 0.1);
                const yPos = -(scrolled * speed);
                shape.style.transform = `translateY(${yPos}px) rotate(45deg)`;
            });
        }, 16));
    }
    
    // Subtle mouse interaction for geometric shapes
    geometricShapes.forEach(shape => {
        shape.addEventListener('mouseenter', function() {
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                this.style.transform = 'translateY(-5px) rotate(45deg) scale(1.1)';
                this.style.opacity = '0.8';
            }
        });
        
        shape.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(45deg) scale(1)';
            this.style.opacity = '0.6';
        });
    });
}

/* ===============================
   UTILITY FUNCTIONS
   =============================== */

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const iconClass = type === 'success' ? 'fa-check-circle' : 'fa-info-circle';
    const bgColor = type === 'success' ? '#9cb4a8' : '#8fa5b5';
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.75rem;">
            <i class="fas ${iconClass}"></i>
            <span>${message}</span>
        </div>
    `;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        background: bgColor,
        color: '#fefdf8',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(58, 51, 40, 0.2)',
        zIndex: '9999',
        transform: 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        maxWidth: '400px',
        fontFamily: 'var(--font-primary)',
        fontSize: '1rem',
        fontWeight: '500'
    });
    
    document.body.appendChild(notification);
    
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.cssText = `
        position: absolute;
        left: -10000px;
        width: 1px;
        height: 1px;
        overflow: hidden;
    `;
    
    document.body.appendChild(announcement);
    announcement.textContent = message;
    
    setTimeout(() => {
        if (document.body.contains(announcement)) {
            document.body.removeChild(announcement);
        }
    }, 1000);
}

/* ===============================
   ACCESSIBILITY ENHANCEMENTS
   =============================== */

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        if (mobileMenuBtn && navLinks && navLinks.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', false);
            mobileMenuBtn.focus();
        }
    }
});

// Focus trap for mobile menu
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="email"], select'
    );
    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    e.preventDefault();
                }
            }
        }
    });
}

/* ===============================
   PERFORMANCE MONITORING
   =============================== */

window.addEventListener('load', function() {
    setTimeout(() => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
        
        // Track largest contentful paint if available
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log(`LCP: ${lastEntry.startTime}ms`);
            });
            
            try {
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch (e) {
                // Graceful fallback if observer is not supported
                console.log('Performance observer not fully supported');
            }
        }
    }, 0);
});
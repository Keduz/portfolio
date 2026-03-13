/* ==========================================
   ANIMATIONS.JS — GSAP ScrollTrigger & Tilt
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Register GSAP Plugins ----
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        // Fallback: show all elements if GSAP not loaded
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // ---- Check reduced motion preference ----
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
        return;
    }

    // ---- Hero entrance animation ----
    const heroTimeline = gsap.timeline({ delay: 0.3 });

    heroTimeline
        .to('.hero__label', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
        .to('.hero__title', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .to('.hero__subtitle', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .to('.hero__ctas', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4');

    // Set initial states for hero elements
    gsap.set(['.hero__label', '.hero__title', '.hero__subtitle', '.hero__ctas'], {
        opacity: 0,
        y: 40
    });

    // Replay timeline
    heroTimeline.play();

    // ---- Reveal Up Animations ----
    const revealUpElements = document.querySelectorAll('.reveal-up');

    revealUpElements.forEach(el => {
        const delay = parseFloat(el.dataset.delay) || 0;

        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                end: 'top 20%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ---- Reveal Left Animations ----
    document.querySelectorAll('.reveal-left').forEach(el => {
        gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ---- Reveal Right Animations ----
    document.querySelectorAll('.reveal-right').forEach(el => {
        gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // ---- Como Funciona Timeline Line Fill ----
    const timelineFill = document.getElementById('timelineFill');
    const timelineSection = document.querySelector('.como-funciona');

    if (timelineFill && timelineSection) {
        // Desktop: horizontal fill
        if (window.innerWidth > 1024) {
            gsap.to(timelineFill, {
                width: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: timelineSection,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    scrub: 1
                }
            });
        } else {
            // Mobile: vertical fill
            gsap.to(timelineFill, {
                height: '100%',
                ease: 'none',
                scrollTrigger: {
                    trigger: timelineSection,
                    start: 'top 60%',
                    end: 'bottom 40%',
                    scrub: 1
                }
            });
        }

        // Activate timeline steps
        const steps = document.querySelectorAll('.timeline__step');
        steps.forEach((step, i) => {
            ScrollTrigger.create({
                trigger: step,
                start: 'top 70%',
                onEnter: () => step.classList.add('active'),
            });
        });
    }

    // ---- Parallax on Hero Orbs ----
    gsap.to('.hero__orb--purple', {
        y: -100,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    gsap.to('.hero__orb--teal', {
        y: -80,
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    // ---- Specialty Cards stagger ----
    const specialtyCards = document.querySelectorAll('.especialidades__card');
    if (specialtyCards.length) {
        ScrollTrigger.batch(specialtyCards, {
            onEnter: (elements) => {
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            },
            start: 'top 85%',
            once: true
        });
    }

    // ---- Service Items stagger ----
    const serviceItems = document.querySelectorAll('.servicos__item');
    if (serviceItems.length) {
        ScrollTrigger.batch(serviceItems, {
            onEnter: (elements) => {
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.7,
                    ease: 'power3.out'
                });
            },
            start: 'top 85%',
            once: true
        });
    }

    // ---- Project Cards stagger ----
    const projectCards = document.querySelectorAll('.projetos__card');
    if (projectCards.length) {
        ScrollTrigger.batch(projectCards, {
            onEnter: (elements) => {
                gsap.to(elements, {
                    opacity: 1,
                    y: 0,
                    stagger: 0.15,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            },
            start: 'top 85%',
            once: true
        });
    }

    // ---- Vanilla Tilt Initialization ----
    if (typeof VanillaTilt !== 'undefined') {
        const tiltCards = document.querySelectorAll('.tilt-card');

        VanillaTilt.init(tiltCards, {
            max: 8,
            speed: 400,
            scale: 1.02,
            glare: true,
            "max-glare": 0.1,
            gyroscope: false
        });
    }

    // ---- Sobre Mim Stats Counter Animation ----
    const statNumbers = document.querySelectorAll('.sobre__stat-number');

    statNumbers.forEach(stat => {
        const text = stat.textContent;
        const numMatch = text.match(/\d+/);
        if (!numMatch) return;

        const endValue = parseInt(numMatch[0]);
        const suffix = text.replace(/\d+/, '');

        ScrollTrigger.create({
            trigger: stat,
            start: 'top 85%',
            once: true,
            onEnter: () => {
                const counter = { val: 0 };
                gsap.to(counter, {
                    val: endValue,
                    duration: 1.5,
                    ease: 'power2.out',
                    onUpdate: () => {
                        stat.textContent = Math.round(counter.val) + suffix;
                    }
                });
            }
        });
    });

    // ---- Refresh ScrollTrigger on window resize ----
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });

});

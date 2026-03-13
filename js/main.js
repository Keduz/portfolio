/* ==========================================
   MAIN.JS — Navigation, Interactions, Form
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Project Tabs ----
    const tabs = document.querySelectorAll('.projetos__tab');
    const panels = document.querySelectorAll('.projetos__panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;

            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show target panel with animation
            panels.forEach(panel => {
                panel.classList.remove('active');
                panel.style.animation = 'none';
            });

            const targetPanel = document.getElementById(`tab-${target}`);
            if (targetPanel) {
                // Force reflow to restart animation
                void targetPanel.offsetWidth;
                targetPanel.style.animation = '';
                targetPanel.classList.add('active');

                // Re-init Vanilla Tilt on new visible cards
                if (typeof VanillaTilt !== 'undefined') {
                    const newCards = targetPanel.querySelectorAll('.tilt-card');
                    VanillaTilt.init(newCards, {
                        max: 8,
                        speed: 400,
                        scale: 1.02,
                        glare: true,
                        "max-glare": 0.1,
                        gyroscope: false
                    });
                }
            }
        });
    });

    // ---- Mobile Menu ----
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    const scrollIndicator = document.querySelector('.hero__scroll-indicator');

    function onScroll() {
        const scrollY = window.scrollY;

        // Navbar background
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 50);
        }

        // Hide scroll indicator
        if (scrollIndicator) {
            scrollIndicator.classList.toggle('hidden', scrollY > 200);
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ---- Active Section Highlighting ----
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar__link');

    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle(
                            'active',
                            link.getAttribute('href') === `#${id}`
                        );
                    });
                }
            });
        },
        {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        }
    );

    sections.forEach(section => sectionObserver.observe(section));

    // ---- Smooth Scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();
            const navHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // ---- Magnetic Button Effect ----
    const magneticButtons = document.querySelectorAll('.magnetic');

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });

        // Ripple on click
        btn.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = btn.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ---- Form Validation & Submission ----
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nome = document.getElementById('nome');
            const email = document.getElementById('email');
            const assunto = document.getElementById('assunto');
            const mensagem = document.getElementById('mensagem');

            let isValid = true;

            // Reset errors
            contactForm.querySelectorAll('.form__error').forEach(el => el.remove());
            contactForm.querySelectorAll('.form__input--error').forEach(el => {
                el.classList.remove('form__input--error');
            });

            // Validate name
            if (!nome.value.trim()) {
                showError(nome, 'Por favor, informe seu nome.');
                isValid = false;
            }

            // Validate email
            if (!email.value.trim() || !isValidEmail(email.value)) {
                showError(email, 'Por favor, informe um email válido.');
                isValid = false;
            }

            // Validate subject
            if (!assunto.value) {
                showError(assunto, 'Por favor, selecione um assunto.');
                isValid = false;
            }

            // Validate message
            if (!mensagem.value.trim()) {
                showError(mensagem, 'Por favor, escreva sua mensagem.');
                isValid = false;
            }

            if (isValid) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;

                submitBtn.innerHTML = '<span>Enviando...</span>';
                submitBtn.disabled = true;

                // Simulate sending (replace with real endpoint)
                setTimeout(() => {
                    submitBtn.innerHTML = '<span>Mensagem Enviada!</span>';
                    submitBtn.style.background = 'linear-gradient(135deg, #00D4AA, #00B894)';

                    contactForm.reset();

                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 3000);
                }, 1500);
            }
        });
    }

    function showError(input, message) {
        input.classList.add('form__input--error');
        const errorEl = document.createElement('span');
        errorEl.classList.add('form__error');
        errorEl.textContent = message;
        errorEl.style.cssText = 'display:block;color:#FF6B6B;font-size:0.75rem;margin-top:6px;padding-left:4px;';
        input.parentNode.appendChild(errorEl);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ---- Form input error state styling ----
    const style = document.createElement('style');
    style.textContent = `
        .form__input--error {
            border-color: #FF6B6B !important;
            box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1) !important;
        }
    `;
    document.head.appendChild(style);

});

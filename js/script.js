document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#' || this.hasAttribute('data-bs-toggle')) {
                return;
            }
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Adjust for sticky navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // IoT Data Simulation Logic
    const initIoTSimulation = () => {
        const tempElement = document.getElementById('iot-temp');
        const humidityElement = document.getElementById('iot-humidity');
        const lightElement = document.getElementById('iot-light');

        if (!tempElement || !humidityElement || !lightElement) return;

        setInterval(() => {
            // Temperature simulation (Range: 2.0 - 8.0 C for vaccines)
            const temp = (2 + Math.random() * 6).toFixed(1);
            tempElement.textContent = temp;

            // Humidity simulation (Range: 35 - 55%)
            const humidity = (35 + Math.random() * 20).toFixed(1);
            humidityElement.textContent = humidity;

            // Light simulation (Range: 100 - 500 Lux)
            const light = Math.floor(100 + Math.random() * 400);
            lightElement.textContent = light;
        }, 2000);
    };

    initIoTSimulation();

    // Change Navbar appearance on scroll
    const navbar = document.querySelector('.navbar-new');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll (Simple Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.custom-card, .iot-display').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Velocidad del conteo

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    const statsSection = document.querySelector('.stats-counter-section');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                startCounters();
                statsObserver.unobserve(statsSection);
            }
        }, { threshold: 0.3 });
        statsObserver.observe(statsSection);
    }
    // Typing Animation Logic (strings from i18n)
    let heroAnimToken = 0;

    const typeWriter = (selector, text, i, fnCallback, token) => {
        const el = document.querySelector(selector);
        if (!el || token !== heroAnimToken) return;

        if (i < text.length) {
            el.innerHTML = text.substring(0, i + 1);
            setTimeout(() => typeWriter(selector, text, i + 1, fnCallback, token), 25);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 400);
        }
    };

    const startHeroAnimation = () => {
        heroAnimToken += 1;
        const token = heroAnimToken;
        const H = window.MEDITRACK_I18N && window.MEDITRACK_I18N.getHero
            ? window.MEDITRACK_I18N.getHero()
            : {
                tagline: 'IoT monitoring for medicines',
                title: 'Real-time control of temperature, humidity, and light',
                desc: 'Web platform for clinics, pharmacies, and hospitals. Automated alerts and full traceability.'
            };

        const tag = document.querySelector('#typing-tagline');
        const tit = document.querySelector('#typing-title');
        const dsc = document.querySelector('#typing-desc');
        if (tag) tag.innerHTML = '';
        if (tit) tit.innerHTML = '';
        if (dsc) dsc.innerHTML = '';

        const btnLogin = document.getElementById('hero-login');
        if (btnLogin) {
            btnLogin.style.opacity = '0';
            btnLogin.style.transform = 'translateY(20px)';
        }

        typeWriter('#typing-tagline', H.tagline, 0, () => {
            typeWriter('#typing-title', H.title, 0, () => {
                typeWriter('#typing-desc', H.desc, 0, () => {
                    if (token !== heroAnimToken) return;
                    if (btnLogin) {
                        btnLogin.style.opacity = '1';
                        btnLogin.style.transform = 'translateY(0)';
                    }
                }, token);
            }, token);
        }, token);
    };

    setTimeout(startHeroAnimation, 500);

    window.addEventListener('meditrack:i18n', () => {
        startHeroAnimation();
    });

    // Global Reveal Animation Observer
    const genericObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // If it's a list or group, staggered reveal
                if (entry.target.classList.contains('reveal-item') || entry.target.classList.contains('reveal-zoom')) {
                    const parent = entry.target.parentElement;
                    const items = parent.querySelectorAll('.reveal-item, .reveal-zoom');
                    const index = Array.from(items).indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 180);
                } else {
                    entry.target.classList.add('active');
                }
                genericObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-card, .reveal-left, .reveal-right, .reveal-item, .reveal-zoom, .reveal-watermark').forEach(el => {
        genericObserver.observe(el);
    });

    // Video Poster logic: Click to play
    document.querySelectorAll('.video-poster').forEach(poster => {
        poster.addEventListener('click', function() {
            const videoId = this.getAttribute('data-youtube');
            if (!videoId) return;
            
            const iframe = document.createElement('iframe');
            iframe.setAttribute('width', '100%');
            iframe.setAttribute('height', '100%');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('title', 'YouTube video player');
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
            iframe.setAttribute('allowfullscreen', '');
            iframe.style.borderRadius = '14px';

            this.innerHTML = '';
            this.appendChild(iframe);
        });
    });
});

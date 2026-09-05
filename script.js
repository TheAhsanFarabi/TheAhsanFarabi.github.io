document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const themeToggleBtn = document.getElementById('theme-toggle');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const filterButtons = document.querySelectorAll('#research .filter-btn');
    const publicationItems = document.querySelectorAll('#research .pub-item');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // CV PDF Path
    const CV_PATH = './assets/Ahsan_Farabi_CV.pdf';

    // 1. Theme Toggle Management
    // Default theme is dark, check localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 2. Scroll-to-Top Button Visibility
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. ScrollSpy Navigation Highlighting
    const spyOptions = {
        root: null,
        rootMargin: '-20% 0px -60% 0px', // Triggers when section occupies middle of viewport
        threshold: 0
    };

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, spyOptions);

    sections.forEach(section => spyObserver.observe(section));

    // 4. Publications Filtering
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all filter buttons, add to clicked
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            publicationItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                // Toggle visibility based on category match
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    item.classList.remove('is-flipped');
                    // Trigger fade-in animation
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        item.style.opacity = '1';
                    }, 50);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // 5. Flip Publication Cards on Click
    publicationItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Do not flip if clicking on an interactive link/button
            if (e.target.closest('a') || e.target.closest('.pub-link') || e.target.closest('button')) {
                return;
            }
            item.classList.toggle('is-flipped');
        });

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                if (e.target.closest('a') || e.target.closest('.pub-link') || e.target.closest('button')) {
                    return;
                }
                e.preventDefault();
                item.classList.toggle('is-flipped');
            }
        });
    });

    // 6. Viewport Boundary Clamping for Research Interest Tooltips
    const interestItems = document.querySelectorAll('.research-interest-item');
    interestItems.forEach(item => {
        const popover = item.querySelector('.interest-popover');
        if (!popover) return;

        const adjustPosition = () => {
            popover.style.left = '50%';
            popover.style.transform = 'translateX(-50%) translateY(0)';

            const rect = popover.getBoundingClientRect();
            const padding = 16;
            if (rect.left < padding) {
                const shift = padding - rect.left;
                popover.style.transform = `translateX(calc(-50% + ${shift}px)) translateY(0)`;
            } else if (rect.right > window.innerWidth - padding) {
                const shift = rect.right - (window.innerWidth - padding);
                popover.style.transform = `translateX(calc(-50% - ${shift}px)) translateY(0)`;
            }
        };

        item.addEventListener('mouseenter', adjustPosition);
        item.addEventListener('focusin', adjustPosition);

        item.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                item.blur();
            }
        });
    });

});
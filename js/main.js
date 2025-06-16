// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript code here
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white/90', 'shadow-md');
    } else {
        nav.classList.remove('bg-white/90', 'shadow-md');
    }
});

// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('button.md\\:hidden');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed top-16 left-0 right-0 bg-white shadow-lg transform -translate-y-full transition-transform duration-300 ease-in-out';
    mobileMenu.innerHTML = `
        <div class="container mx-auto px-4 py-4">
            <div class="flex flex-col space-y-4">
                <a href="#home" class="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
                <a href="#skills" class="text-gray-700 hover:text-primary-600 transition-colors">Skills</a>
                <a href="#projects" class="text-gray-700 hover:text-primary-600 transition-colors">Projects</a>
                <a href="#blog" class="text-gray-700 hover:text-primary-600 transition-colors">Blog</a>
                <a href="#contact" class="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
            </div>
        </div>
    `;
    document.body.appendChild(mobileMenu);

    let isMenuOpen = false;
    menuButton.addEventListener('click', function() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('-translate-y-full');
        } else {
            mobileMenu.classList.add('-translate-y-full');
        }
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 图片懒加载
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}); 
document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();

    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = document.getElementById('menu-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    const handleScroll = () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-sm');
        } else {
            navbar.classList.remove('shadow-sm');
        }
    };

    window.addEventListener('scroll', handleScroll);

    const toggleMenu = () => {
        const isMenuOpen = mobileMenu.classList.contains('translate-x-0');

        if (isMenuOpen) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('-translate-x-full');
            menuIcon.setAttribute('data-lucide', 'menu');
            document.body.style.overflow = ''; 
        } else {
            mobileMenu.classList.add('translate-x-0');
            mobileMenu.classList.remove('-translate-x-full');
            menuIcon.setAttribute('data-lucide', 'x');
            document.body.style.overflow = 'hidden'; 
        }
        
        lucide.createIcons();
    };

    menuBtn.addEventListener('click', toggleMenu);

    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('translate-x-0')) {
                toggleMenu();
            }
        });
    });
});

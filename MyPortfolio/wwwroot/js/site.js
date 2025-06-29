// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// IDs ของ section และ nav
const sections = ['home', 'resume', 'portfolio', 'contract'];
const navLinks = sections.map(id => document.getElementById('nav-' + id));

window.addEventListener('scroll', () => {
    let current = '';
    for (const section of sections) {
        const el = document.getElementById(section);
        const rect = el.getBoundingClientRect();
        // ติดลบเล็กน้อยเพื่อเลื่อนเข้าจอ
        if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
        }
    }
    navLinks.forEach(link => link.classList.remove('active', 'pointer-nav'));
    if (current) {
        const activeLink = document.getElementById('nav-' + current);
        activeLink.classList.add('active', 'pointer-nav');
    }
});


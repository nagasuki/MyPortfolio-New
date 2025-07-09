// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const sidebar = document.getElementById('sidebar');
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY === 0) {
        sidebar.classList.add('show');
        sidebar.classList.remove('hide');

        backToTopBtn.classList.remove("show");
        backToTopBtn.classList.add("hide");
    } else {
        sidebar.classList.add('hide');
        sidebar.classList.remove('show');

        backToTopBtn.classList.add("show");
        backToTopBtn.classList.remove("hide");
    }
});

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

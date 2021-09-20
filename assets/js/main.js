// Navbar
var nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-white', 'shadow');
    } else {
        nav.classList.remove('bg-white', 'shadow');
    }
})

// Owl Carousel
$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 1,
    nav: true,
    loop: true
});
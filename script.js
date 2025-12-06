function openContact() {
    document.getElementById('main-site').style.display = 'none';
    document.getElementById('contact-page').style.display = 'block';
    window.scrollTo(0, 0);
}

function closeContact() {
    document.getElementById('contact-page').style.display = 'none';
    document.getElementById('main-site').style.display = 'block';
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function openModal(id) {
    document.getElementById(id).style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
    document.body.style.overflow = 'auto';
}
window.onclick = function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm', 'bg-white/95');
        navbar.classList.remove('bg-white/80');
    } else {
        navbar.classList.remove('shadow-sm', 'bg-white/95');
        navbar.classList.add('bg-white/80');
    }
});
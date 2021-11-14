const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
})
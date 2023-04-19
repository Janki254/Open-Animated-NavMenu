const closebtn = document.getElementById('toggle');
const navbar = document.getElementById('nav');

closebtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

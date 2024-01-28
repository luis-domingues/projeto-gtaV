const button = document.querySelector('.btn-platforms');
const platformsElement = document.querySelector('.btn-platforms .platforms');

button.addEventListener('click', () => {
    platformsElement.classList.toggle('active');
})
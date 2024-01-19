const button = document.querySelector('#darkBtn');
const main = document.querySelector('main');

button.addEventListener('click', () => {
    main.classList.toggle('dark');
})
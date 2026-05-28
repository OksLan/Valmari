const switcher = document.querySelector('.language-switcher');
const button = switcher.querySelector('.language-switcher__current');

button.addEventListener('click', (event) => {
  event.stopPropagation();

  switcher.classList.toggle('is-open');
});

document.addEventListener('click', () => {
  switcher.classList.remove('is-open');
});
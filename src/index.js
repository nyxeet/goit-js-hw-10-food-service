import './styles.css';
import itemsTemplate from '../src/templates/gallery-items.hbs'
import menuItems from '../src/menu.json'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const galleryRef = document.querySelector('.js-menu')
const markup = itemsTemplate(menuItems);
const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

galleryRef.insertAdjacentHTML('beforeend', markup)

window.addEventListener("load", event => {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme == 'dark-theme') {
        bodyRef.classList.add(Theme.DARK);
        checkboxRef.setAttribute('checked', true)
    } else {
        bodyRef.classList.add(Theme.LIGHT);
    }
})

checkboxRef.addEventListener("change", event => {
    if (checkboxRef.checked) {
        checkboxRef.setAttribute('checked', true)
        bodyRef.classList.add(Theme.DARK)
        bodyRef.classList.remove(Theme.LIGHT)
        localStorage.setItem('theme', Theme.DARK)
    } else {
        checkboxRef.setAttribute('checked', false)
        bodyRef.classList.remove(Theme.DARK)
        bodyRef.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', Theme.LIGHT)
    }
})
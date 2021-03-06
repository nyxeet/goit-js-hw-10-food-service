import './styles.css';
import itemsTemplate from '../src/templates/gallery-items.hbs'
import menuItems from '../src/menu.json'

const themes = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
    galleryRef: document.querySelector('.js-menu'),
    checkboxRef: document.querySelector('#theme-switch-toggle'),
    bodyRef: document.querySelector('body'),
}
const { galleryRef, checkboxRef, bodyRef } = refs;

window.addEventListener("load", getThemeFromLocalStorage)
checkboxRef.addEventListener("change", changeTheme)

function getThemeFromLocalStorage() {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme == 'dark-theme') {
        bodyRef.classList.add(themes.DARK);
        checkboxRef.setAttribute('checked', true)
    } else {
        bodyRef.classList.add(themes.LIGHT);
    }

}

function changeTheme() {
    if (checkboxRef.checked) {
        bodyRef.classList.replace(themes.LIGHT, themes.DARK)
        localStorage.setItem('theme', themes.DARK)
    } else {
        bodyRef.classList.replace(themes.DARK, themes.LIGHT)
        localStorage.setItem('theme', themes.LIGHT)
    }
}

function createMenu() {
    const markup = itemsTemplate(menuItems);
    galleryRef.insertAdjacentHTML('beforeend', markup)
}
createMenu();
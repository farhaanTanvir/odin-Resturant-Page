import './styles.css';
import { showHomepage } from './homepage.js';
import { showMenu } from './menu.js';
import { showAbout } from './about.js';

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const aboutButton = document.querySelector('#about')


showHomepage()

homeButton.addEventListener('click', () => {
    showHomepage()
})

menuButton.addEventListener('click', () => {
    showMenu()
})

aboutButton.addEventListener('click', () => {
    showAbout()
})
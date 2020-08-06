import {getMenuTemplate} from "./view/menu.js";
import {getFilmCardTemplate} from "./view/film-card.js";
import {getPopUpTemplate} from "./view/pop-up.js";
import {getShowMoreBtnTemplate} from "./view/show-more-btn.js";
import {getProfileStatusTemplate} from "./view/profile-status.js";

const FILMS_COUNT = 5;

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template)
}

const siteHeaderElement = document.querySelector('.header')
const siteMainElement = document.querySelector('.main')

render(siteHeaderElement, getProfileStatusTemplate())
render(siteMainElement, getMenuTemplate(), 'afterbegin')

const $filmsContainer = siteMainElement.querySelector('.films-list__container')

new Array(FILMS_COUNT)
.fill('')
.forEach(() => {
  render($filmsContainer,getFilmCardTemplate())
})

render(siteMainElement, getShowMoreBtnTemplate())

const $footer = document.querySelector('.footer')
render($footer, getPopUpTemplate(), 'afterend') 
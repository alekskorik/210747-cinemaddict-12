import {render} from "./utils/utils.js"

import {getMenuTemplate} from "./view/menu.js";
import {getFilmCardTemplate} from "./view/film-card.js";
import {getPopUpTemplate} from "./view/pop-up.js";
import {getShowMoreBtnTemplate} from "./view/show-more-btn.js";
import {getProfileStatusTemplate} from "./view/profile-status.js";

import {generateFilmCard} from "./mock/film-card.js";
import {getFilters} from "./mock/filters.js"


const FILMS_COUNT = 26;
const STARTING_FILMS_COUNT = 5;
const films = new Array(FILMS_COUNT).fill().map(generateFilmCard);
const firstFilms = new Array(STARTING_FILMS_COUNT).fill().map(generateFilmCard);
const filters = getFilters(films);
let renderedFilms = STARTING_FILMS_COUNT;

const renderNextFilms = () => {
  let filmsToRender = films.slice(renderedFilms, renderedFilms + STARTING_FILMS_COUNT)
  console.log({
    renderedFilms,
    filmsToRender
  })
  filmsToRender.forEach((filmCard) => {
    render($filmsContainer,getFilmCardTemplate(filmCard))
  })
  renderedFilms = renderedFilms + STARTING_FILMS_COUNT

  if (renderedFilms >= FILMS_COUNT) {
    showMoreButton.remove()
  }
};

const siteHeaderElement = document.querySelector('.header')
const siteMainElement = document.querySelector('.main')

render(siteMainElement, getMenuTemplate(filters), 'afterbegin')
render(siteHeaderElement, getProfileStatusTemplate(filters))

const $filmsContainer = siteMainElement.querySelector('.films-list__container')

firstFilms.forEach((card) => {
  render($filmsContainer,getFilmCardTemplate(card))
})


render(siteMainElement, getShowMoreBtnTemplate())
const showMoreButton = siteMainElement.querySelector('.films-list__show-more')

showMoreButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  renderNextFilms()
});

const $footer = document.querySelector('.footer')

render($footer, getPopUpTemplate(films[0]), 'afterend') 
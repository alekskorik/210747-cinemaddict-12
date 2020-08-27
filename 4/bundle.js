/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _view_film_card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/film-card.js */ "./src/view/film-card.js");
/* harmony import */ var _view_pop_up_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/pop-up.js */ "./src/view/pop-up.js");
/* harmony import */ var _view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/show-more-btn.js */ "./src/view/show-more-btn.js");
/* harmony import */ var _view_profile_status_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/profile-status.js */ "./src/view/profile-status.js");
/* harmony import */ var _mock_film_card_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mock/film-card.js */ "./src/mock/film-card.js");
/* harmony import */ var _mock_filters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mock/filters.js */ "./src/mock/filters.js");












const FILMS_COUNT = 26;
const STARTING_FILMS_COUNT = 5;
const films = new Array(FILMS_COUNT).fill().map(_mock_film_card_js__WEBPACK_IMPORTED_MODULE_6__["generateFilmCard"]);
const firstFilms = new Array(STARTING_FILMS_COUNT).fill().map(_mock_film_card_js__WEBPACK_IMPORTED_MODULE_6__["generateFilmCard"]);
const filters = Object(_mock_filters_js__WEBPACK_IMPORTED_MODULE_7__["getFilters"])(films);
let renderedFilms = STARTING_FILMS_COUNT;

const renderNextFilms = () => {
  let filmsToRender = films.slice(renderedFilms, renderedFilms + STARTING_FILMS_COUNT)
  console.log({
    renderedFilms,
    filmsToRender
  })
  filmsToRender.forEach((filmCard) => {
    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])($filmsContainer,Object(_view_film_card_js__WEBPACK_IMPORTED_MODULE_2__["getFilmCardTemplate"])(filmCard))
  })
  renderedFilms = renderedFilms + STARTING_FILMS_COUNT

  if (renderedFilms >= FILMS_COUNT) {
    showMoreButton.remove()
  }
};

const siteHeaderElement = document.querySelector('.header')
const siteMainElement = document.querySelector('.main')

Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, Object(_view_menu_js__WEBPACK_IMPORTED_MODULE_1__["getMenuTemplate"])(filters), 'afterbegin')
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteHeaderElement, Object(_view_profile_status_js__WEBPACK_IMPORTED_MODULE_5__["getProfileStatusTemplate"])(filters))

const $filmsContainer = siteMainElement.querySelector('.films-list__container')

firstFilms.forEach((card) => {
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])($filmsContainer,Object(_view_film_card_js__WEBPACK_IMPORTED_MODULE_2__["getFilmCardTemplate"])(card))
})


Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, Object(_view_show_more_btn_js__WEBPACK_IMPORTED_MODULE_4__["getShowMoreBtnTemplate"])())
const showMoreButton = siteMainElement.querySelector('.films-list__show-more')

showMoreButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  renderNextFilms()
});

const $footer = document.querySelector('.footer')

Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])($footer, Object(_view_pop_up_js__WEBPACK_IMPORTED_MODULE_3__["getPopUpTemplate"])(films[0]), 'afterend') 

/***/ }),

/***/ "./src/mock/comment.js":
/*!*****************************!*\
  !*** ./src/mock/comment.js ***!
  \*****************************/
/*! exports provided: getComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const generateComment = () => {
  const authors = [
    `Jogn`,
    `Peter`,
    `Sam`
  ];

  const emoji = [
    {
      path: `./images/emoji/angry.png`,
      alt: `angry`
    },
    {
      path: `./images/emoji/puke.png`,
      alt: `puke`
    },
    {
      path: `./images/emoji/sleeping.png`,
      alt: `sleeping`
    },
    {
      path: `./images/emoji/smile.png`,
      alt: `smile`
    }
  ];

  const commentText = [
    `Good film, highly recommend`,
    `The best!`,
    `Not bad`,
    `I've seen better`
  ];

  return {
    commentText: commentText[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, commentText.length - 1)],
    emoji: emoji[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, emoji.length - 1)],
    author: authors[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, authors.length - 1)],
    date: `2019/12/31 23:59`
  };
};

const getComments = (numberOfComments) => {
  const commentsArr = [];
  for (let i = 0; i <= numberOfComments; i++) {
    commentsArr.push(generateComment());
  }
  return commentsArr;
};


/***/ }),

/***/ "./src/mock/film-card.js":
/*!*******************************!*\
  !*** ./src/mock/film-card.js ***!
  \*******************************/
/*! exports provided: generateFilmCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmCard", function() { return generateFilmCard; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ "./src/mock/comment.js");



const generateTitle = () => {
  const titles = [
    `The Dance of Life`,
    `Sagebrush Trail`,
    `The Man with the Golden Arm`,
    `Santa Claus Conquers the Martians`,
    `Popeye the Sailor Meets Sindbad the Sailor`,
    `The Great Flamarion`,
    `Santa Claus Conquers the Martians`,
    `Made for Each Other`,
  ];
  return titles[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, titles.length - 1)];
};

const generatePoster = () => {
  const postersNames = [
    `the-dance-of-life.jpg`,
    `sagebrush-trail.jpg`,
    `the-man-with-the-golden-arm.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `popeye-meets-sinbad.png`,
    `the-man-with-the-golden-arm.jpg`,
    `the-great-flamarion.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `made-for-each-other.png`
  ];

  return postersNames[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, postersNames.length - 1)];
};

const generateDescription = () => {
  const sentences = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];
  const numberOfSentences = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 5);
  const description = new Set();

  for (let i = 0; i < numberOfSentences; i++) {
    description.add(sentences[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, sentences.length - 1)]);
  }

  return Array.from(description).join(` `);
};

const generateRating = (a = 0, b = 1) => {
  return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomFloatInteger"])(a, b);
};

const generateFilmReleaseYear = () => {
  return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1920, 2020);
};

const generateFilmDuration = () => {
  const hours = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 3);
  const minutes = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 59);
  return {
    hours,
    minutes
  };
};

const generateGenres = () => {
  const genres = [
    `Musical`,
    `Western`,
    `Drama`,
    `Comedy`,
    `Horror`,
    `Soft porn`
  ];
  const numberOfGenres = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 4);
  const genresSet = new Set();
  for (let i = 0; i < numberOfGenres; i++) {
    genresSet.add(genres[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, genres.length - 1)]);
  }
  return Array.from(genresSet);
};

const genereateCountry = () => {
  const countries = [
    `USA`,
    `Germany`,
    `UK`,
    `France`,
    `Russia`
  ];
  return countries[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, countries.length - 1)];
};

const generateDateOfRelease = () => {
  const releaseDate = new Date();
  releaseDate.setHours(23, 59, 59, 999);
  releaseDate.setFullYear(generateFilmReleaseYear(), Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 11), Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 31));
  return releaseDate.toLocaleString(`en-GB`, {day: `numeric`, month: `long`, year: `numeric`});
};

const generateCensorAge = () => {
  const limits = [
    `10+`,
    `16+`,
    `18+`,
  ];

  return limits[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, limits.length - 1)];
};

const generateActors = () => {
  const actors = [
    `Erich von Stroheim`,
    `Mary Beth Hughes`,
    ` Dan Duryea`,
  ];
  const numberOfActors = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 3);
  const actorsSet = new Set();
  for (let i = 0; i < numberOfActors; i++) {
    actorsSet.add(actors[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, actors.length - 1)]);
  }
  return Array.from(actorsSet);
};

const generateWriters = () => {
  const writers = [
    `Anne Wigton`,
    `Heinz Herald`,
    `Richard Weil`,
  ];
  const numberOfWriters = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, 3);
  const writersSet = new Set();
  for (let i = 0; i < numberOfWriters; i++) {
    writersSet.add(writers[Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, writers.length - 1)]);
  }
  return Array.from(writersSet);
};

const generateFilmCard = () => {
  return {
    title: generateTitle(),
    posterName: generatePoster(),
    description: generateDescription(),
    rating: generateRating(0, 10),
    filmReleaseYear: generateFilmReleaseYear(),
    filmDuration: generateFilmDuration(),
    genres: generateGenres(),
    director: `Anthony Mann`,
    writers: generateWriters(),
    actors: generateActors(),
    country: genereateCountry(),
    filmReleasefullDate: generateDateOfRelease(),
    censorAge: generateCensorAge(),
    isFavorite: Boolean(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isWatched: Boolean(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isInWatchlist: Boolean(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    comments: Object(_comment_js__WEBPACK_IMPORTED_MODULE_1__["getComments"])(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 5))
  };
};


/***/ }),

/***/ "./src/mock/filters.js":
/*!*****************************!*\
  !*** ./src/mock/filters.js ***!
  \*****************************/
/*! exports provided: getFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilters", function() { return getFilters; });

const getFilters = (films) => {
  const filters = {
    watchlist: films.filter((film) => film.isInWatchlist),
    watched: films.filter((film) => film.isWatched),
    favorite: films.filter((film) => film.isFavorite)
  };
  return filters;
};


/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: getRandomInteger, getRandomFloatInteger, render, getStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomFloatInteger", function() { return getRandomFloatInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomFloatInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return (lower + Math.random() * (upper - lower)).toFixed(1);
};

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const getStatus = (amountOfWatched) => {
  let status;
  if (amountOfWatched.length === 0) {
    status = ``;
  } else if (amountOfWatched.length <= 10) {
    status = `novice`;
  } else if (amountOfWatched.length >= 10 && amountOfWatched.length <= 20) {
    status = `fan`;
  } else {
    status = `movie buff`;
  }
  return status;
};


/***/ }),

/***/ "./src/view/comment.js":
/*!*****************************!*\
  !*** ./src/view/comment.js ***!
  \*****************************/
/*! exports provided: getCommentTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCommentTemplate", function() { return getCommentTemplate; });
const getCommentTemplate = (comment) => {
  const {commentText, emoji, author, date} = comment;
  return (`
    <li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="${emoji.path}" width="55" height="55" alt="${emoji.alt}">
      </span>
      <div>
        <p class="film-details__comment-text">${commentText}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${author}</span>
          <span class="film-details__comment-day">${date}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>
  `);
};


/***/ }),

/***/ "./src/view/film-card.js":
/*!*******************************!*\
  !*** ./src/view/film-card.js ***!
  \*******************************/
/*! exports provided: getFilmCardTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilmCardTemplate", function() { return getFilmCardTemplate; });
const getFilmCardTemplate = (film) => {
  const MAX_DESCRIPTION_LENGTH = 139;
  const {title, rating, filmReleaseYear, filmDuration, genres, posterName, description, comments} = film;
  const stringifyedGenres = genres.join();
  return (`
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${filmReleaseYear}</span>
        <span class="film-card__duration">${filmDuration.hours + `h` + filmDuration.minutes + `m`}</span>
        <span class="film-card__genre">${stringifyedGenres}</span>
      </p>
      <img src="./images/posters/${posterName}" alt="" class="film-card__poster">
      <p class="film-card__description">${description.length > MAX_DESCRIPTION_LENGTH ? description.slice(0, MAX_DESCRIPTION_LENGTH) + `...` : description}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>
  `);
};



/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: getMenuTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuTemplate", function() { return getMenuTemplate; });
const getMenuTemplate = (filteredFilms) => {
  const {watchlist, watched, favorite} = filteredFilms;
  return (`
    <nav class="main-navigation">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist.length}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${watched.length}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorite.length}</span></a>
      <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
    </nav>
    <ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>
  `);
};


/***/ }),

/***/ "./src/view/pop-up.js":
/*!****************************!*\
  !*** ./src/view/pop-up.js ***!
  \****************************/
/*! exports provided: getPopUpTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPopUpTemplate", function() { return getPopUpTemplate; });
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./src/view/comment.js");


const getPopUpTemplate = (film) => {
  const {title, posterName, rating, director, writers, actors, filmReleasefullDate, filmDuration, country, genres, censorAge, description, comments} = film;

  const stringifyedWriters = writers.join();
  const stringifyedActors = actors.join();

  const commentsList = comments.map((comment) => {
    return Object(_comment_js__WEBPACK_IMPORTED_MODULE_0__["getCommentTemplate"])(comment);
  }).join(`\n`);

  return (`
    <section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./images/posters/${posterName}" alt="">
              <p class="film-details__age">${censorAge}</p>
            </div>
            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">${title}</p>
                </div>
                <div class="film-details__rating">
                  <p class="film-details__total-rating">${rating}</p>
                </div>
              </div>
              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${stringifyedWriters}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${stringifyedActors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${filmReleasefullDate}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${filmDuration.hours + `h` + filmDuration.minutes + `m`}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
    ${genres.map((genreName) => {
      return `<span class="film-details__genre">` + genreName + `</span>`;
    }).join(``)}
                </tr>
              </table>
              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>
          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>
        <div class="form-details__middle-container">
        </div>
        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">0</span></h3>
        
            <ul class="film-details__comments-list">
            ${commentsList}
            </ul>
        
            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label">
                <img src="images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
              </div>
        
              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">Great movie!</textarea>
              </label>
        
              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" checked>
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>
        
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>
        
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>
        
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
        
      </form>
    </section>
  `);
};



/***/ }),

/***/ "./src/view/profile-status.js":
/*!************************************!*\
  !*** ./src/view/profile-status.js ***!
  \************************************/
/*! exports provided: getProfileStatusTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileStatusTemplate", function() { return getProfileStatusTemplate; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const getProfileStatusTemplate = (filters) => {
  const {watched} = filters;
  const status = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["getStatus"])(watched);
  return (`
  <section class="header__profile profile">
    <p class="profile__rating">${status}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
  `);
};


/***/ }),

/***/ "./src/view/show-more-btn.js":
/*!***********************************!*\
  !*** ./src/view/show-more-btn.js ***!
  \***********************************/
/*! exports provided: getShowMoreBtnTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShowMoreBtnTemplate", function() { return getShowMoreBtnTemplate; });
const getShowMoreBtnTemplate = () => {
  return (`
    <button class="films-list__show-more">Show more</button>
  `);
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map
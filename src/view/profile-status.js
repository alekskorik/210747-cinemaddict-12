import {getStatus} from "../utils/utils.js";

export const getProfileStatusTemplate = (filters) => {
  const {watched} = filters;
  const status = getStatus(watched);
  return (`
  <section class="header__profile profile">
    <p class="profile__rating">${status}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
  `);
};

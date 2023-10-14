import { openPopup } from "./popup.js";

const handleFiltersButtonClick = (event) => {
  const filtersPopup = document.querySelector(".filters-popup");
  openPopup(filtersPopup);
};

export const addFiltersButtonHandlers = () => {
  const filtersButtonElem = document.querySelector(".filters__button");

  filtersButtonElem.addEventListener("click", handleFiltersButtonClick);
  filtersButtonElem.addEventListener("touchend", handleFiltersButtonClick);
};

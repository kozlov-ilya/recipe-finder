import popularIngredientsArr from "../assets/popular-ingredients.json" assert { type: "json" };
import { openPopup, openPopupDesktop } from "./popup.js";
import { updateSelectedIngredientsList } from "./ingredients.js";

const getPopularIngredientsArr = () => {
  return popularIngredientsArr.map((ingredient) => ingredient.name);
};

const displayPopularIngredientsListItem = (ingredientName) => {
  const ingredientsListElems = document.querySelectorAll(
    ".popular-ingredients__list"
  );

  const ingredientsListItemTemplate = document.querySelector(
    ".popular-ingredients-list-item-template"
  );

  ingredientsListElems.forEach((ingredientsListElem) => {
    const ingredientsListItemFrag =
      ingredientsListItemTemplate.content.cloneNode(true);
    const ingredientsListItemElem = ingredientsListItemFrag.children[0];

    ingredientsListItemElem.textContent = ingredientName;

    ingredientsListElem.append(ingredientsListItemElem);
  });
};

const displayAllPopularIngredientsListItems = () => {
  const popularIngredientsArr = getPopularIngredientsArr();

  popularIngredientsArr.forEach((ingredientName) => {
    displayPopularIngredientsListItem(ingredientName);
  });
};

const handleFiltersButtonClick = (event) => {
  if (window.matchMedia("(width > 1024px)").matches) {
    const filtersPopupDesktop = document.querySelector(
      ".filters-popup-desktop"
    );
    openPopupDesktop(filtersPopupDesktop);

    return;
  }

  const filtersPopup = document.querySelector(".filters-popup");
  openPopup(filtersPopup);
};

const getPopularIngredientsItemElemsByName = (ingredientItemName) => {
  const ingredientsItemElems = document.querySelectorAll(
    ".popular-ingredients__list-item"
  );

  return Array.from(ingredientsItemElems).filter((ingredientsItemElem) => {
    return ingredientsItemElem.textContent === ingredientItemName;
  });
};

export const togglePopularIngredientsItemSelection = (ingredientItemName) => {
  const ingredientItemElems =
    getPopularIngredientsItemElemsByName(ingredientItemName);

  if (!ingredientItemElems) return;

  let isSelected;

  ingredientItemElems.forEach((ingredientItemElem) => {
    isSelected = ingredientItemElem.classList.toggle(
      "popular-ingredients__list-item_selected"
    );
  });

  return isSelected;
};

const handlePopularIngredientsItemClick = (event) => {
  const ingredientItemElem = event.target.closest(
    ".popular-ingredients__list-item"
  );

  if (!ingredientItemElem) return;

  const itemIsSelected = togglePopularIngredientsItemSelection(
    ingredientItemElem.textContent
  );

  const ingredientName = ingredientItemElem.textContent;

  updateSelectedIngredientsList(ingredientName, !itemIsSelected);
};

const addFiltersButtonHandlers = () => {
  const filtersButtonElem = document.querySelector(".filters__button");

  filtersButtonElem.addEventListener("click", handleFiltersButtonClick);
};

const addPopuarIngredientsHandlers = () => {
  const popularIngredientsElems = document.querySelectorAll(
    ".popular-ingredients"
  );

  popularIngredientsElems.forEach((popularIngredientsElem) => {
    popularIngredientsElem.addEventListener(
      "click",
      handlePopularIngredientsItemClick
    );
  });
};

const addFiltersHandlers = () => {
  addFiltersButtonHandlers();
  addPopuarIngredientsHandlers();
};

displayAllPopularIngredientsListItems();

document.addEventListener("DOMContentLoaded", (event) => {
  addFiltersHandlers();
});

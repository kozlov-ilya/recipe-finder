import popularIngredientsArr from "../assets/popular-ingredients.json" assert { type: "json" };
import { openPopup } from "./popup.js";
import { updateSelectedIngredientsList } from "./ingredients.js";

const getPopularIngredientsArr = () => {
  return popularIngredientsArr.map((ingredient) => ingredient.name);
};

const displayPopularIngredientsListItem = (ingredientName) => {
  const ingredientsListElem = document.querySelector(
    ".popular-ingredients__list"
  );

  const ingredientsListItemTemplate = document.querySelector(
    ".popular-ingredients-list-item-template"
  );
  const ingredientsListItemFrag =
    ingredientsListItemTemplate.content.cloneNode(true);
  const ingredientsListItemElem = ingredientsListItemFrag.children[0];

  ingredientsListItemElem.textContent = ingredientName;

  ingredientsListElem.append(ingredientsListItemElem);
};

const displayAllPopularIngredientsListItems = () => {
  const popularIngredientsArr = getPopularIngredientsArr();

  popularIngredientsArr.forEach((ingredientName) => {
    displayPopularIngredientsListItem(ingredientName);
  });
};

const handleFiltersButtonClick = (event) => {
  const filtersPopup = document.querySelector(".filters-popup");
  openPopup(filtersPopup);
};

const getPopularIngredientsItemElemByName = (ingredientItemName) => {
  const ingredientsItemElems = document.querySelectorAll(
    ".popular-ingredients__list-item"
  );

  return Array.from(ingredientsItemElems).find((ingredientsItemElem) => {
    return ingredientsItemElem.textContent === ingredientItemName;
  });
};

export const togglePopularIngredientsItemSelection = (ingredientItemName) => {
  const ingredientItemElem =
    getPopularIngredientsItemElemByName(ingredientItemName);

  if (!ingredientItemElem) return;

  return ingredientItemElem.classList.toggle(
    "popular-ingredients__list-item_selected"
  );
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
  const popularIngredientsElem = document.querySelector(".popular-ingredients");

  popularIngredientsElem.addEventListener(
    "click",
    handlePopularIngredientsItemClick
  );
};

export const addFiltersHandlers = () => {
  addFiltersButtonHandlers();
  addPopuarIngredientsHandlers();
};

displayAllPopularIngredientsListItems();

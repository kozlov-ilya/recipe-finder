import allIngredientsArr from "../assets/ingredients.json" assert { type: "json" };
import { togglePopularIngredientsItemSelection } from "./filters";

export const getAllIngredientsArr = () => {
  return allIngredientsArr.map((ingredient) => ingredient.name);
};

const getSelectedIngredientName = (selectedIngredientsListItem) => {
  return selectedIngredientsListItem.dataset.name;
};

export const getSelectedIngredientsArr = () => {
  const selectedIngredientsItemElems = document.querySelectorAll(
    ".selected-ingredients-menu__item"
  );

  return Array.from(selectedIngredientsItemElems).map((ingredientsItem) => {
    return getSelectedIngredientName(ingredientsItem);
  });
};

const updateSelectedIngredientsListEmptyAttr = (
  selectedIngredientsListElem
) => {
  const selectedIngredientsCount = selectedIngredientsListElem.querySelectorAll(
    ".selected-ingredients-menu__item"
  ).length;

  selectedIngredientsCount
    ? selectedIngredientsListElem.removeAttribute("empty")
    : selectedIngredientsListElem.setAttribute("empty", "");
};

const handleSelectedIngredientsMenuClick = (event) => {
  const ingredientsMenuElem = event.currentTarget;

  if (event.target.closest(".selected-ingredients-menu__header")) {
    ingredientsMenuElem.classList.toggle("selected-ingredients-menu_active");
  }
};

const displaySelectedIngredient = (
  ingredientName,
  selectedIngredientsListElem
) => {
  const selectedIngredientsItemTemplate = document.querySelector(
    ".selected-ingredients-menu-item-template"
  );

  const selectedIngredientItemDocFragment =
    selectedIngredientsItemTemplate.content.cloneNode(true);

  const selectedIngredientItemElem =
    selectedIngredientItemDocFragment.children[0];
  const selectedIngredientTitleElem = selectedIngredientItemElem.querySelector(
    ".selected-ingredients-menu__item-title"
  );

  selectedIngredientItemElem.dataset.name = ingredientName;

  const ingredientNameToDisplay =
    ingredientName[0].toUpperCase() + ingredientName.slice(1);

  selectedIngredientTitleElem.textContent = ingredientNameToDisplay;

  selectedIngredientsListElem.append(selectedIngredientItemDocFragment);
};

const getSelectedIngredientElemByName = (ingredientName) => {
  const ingredientsItemElems = document.querySelectorAll(
    ".selected-ingredients-menu__item"
  );

  return Array.from(ingredientsItemElems).find((ingredientElem) => {
    return (
      getSelectedIngredientName(ingredientElem) === ingredientName.toLowerCase()
    );
  });
};

const deleteSelectedIngredient = (
  ingredientName,
  selectedIngredientsListElem
) => {
  selectedIngredientsListElem.removeChild(
    getSelectedIngredientElemByName(ingredientName)
  );
};

export const isIngredientAlreadySelected = (ingredientName) => {
  const selectedIngredientsArr = getSelectedIngredientsArr();

  return selectedIngredientsArr.includes(ingredientName);
};

export const updateSelectedIngredientsList = (
  ingredientName,
  deleteIngredient = false
) => {
  const selectedIngredientsListElem = document.querySelector(
    ".selected-ingredients-menu__list"
  );

  if (deleteIngredient) {
    deleteSelectedIngredient(ingredientName, selectedIngredientsListElem);

    updateSelectedIngredientsListEmptyAttr(selectedIngredientsListElem);

    return;
  }

  if (isIngredientAlreadySelected(ingredientName)) {
    return;
  }

  displaySelectedIngredient(ingredientName, selectedIngredientsListElem);

  updateSelectedIngredientsListEmptyAttr(selectedIngredientsListElem);
};

const handleSelectedIngredientsItemClick = (event) => {
  const ingredientsItemElem = event.target.closest(
    ".selected-ingredients-menu__item"
  );

  if (!ingredientsItemElem) return;

  const ingredientName = getSelectedIngredientName(ingredientsItemElem);

  updateSelectedIngredientsList(ingredientName, true);

  togglePopularIngredientsItemSelection(ingredientName);
};

const addIngredientsHandlers = () => {
  const selectedIngredientsMenuElem = document.querySelector(
    ".selected-ingredients-menu"
  );

  selectedIngredientsMenuElem.addEventListener(
    "click",
    handleSelectedIngredientsMenuClick
  );

  selectedIngredientsMenuElem.addEventListener(
    "click",
    handleSelectedIngredientsItemClick
  );
};

document.addEventListener("DOMContentLoaded", () => {
  addIngredientsHandlers();
});

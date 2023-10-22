import allIngredientsArr from "../ingredients.json" assert { type: "json" };

export const getAllIngredientsArr = () => {
  return allIngredientsArr.map((ingredient) => ingredient.name);
};

export const getSelectedIngredientsArr = () => {
  const selectedIngredientsItemElems = document.querySelectorAll(
    ".selected-ingredients-menu__item"
  );

  return Array.from(selectedIngredientsItemElems).map((ingredientsItem) => {
    return ingredientsItem.textContent.toLowerCase();
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
  const selectedIngredientItemElem = document.createElement("li");

  const ingredientNameToDisplay =
    ingredientName[0].toUpperCase() + ingredientName.slice(1);

  selectedIngredientItemElem.classList.add("selected-ingredients-menu__item");
  selectedIngredientItemElem.innerHTML = `<span class='selected-ingredients-menu__item-title'>${ingredientNameToDisplay}</span><svg class="selected-ingredients-menu__item-cross-icon" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`;

  selectedIngredientsListElem.appendChild(selectedIngredientItemElem);
};

const getSelectedIngredientElemByName = (ingredientName) => {
  const ingredientsItemElems = document.querySelectorAll(
    ".selected-ingredients-menu__item"
  );

  return Array.from(ingredientsItemElems).find((ingredientElem) => {
    return (
      ingredientElem.textContent.toLowerCase() === ingredientName.toLowerCase()
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

const isIngredientAlreadySelected = (ingredientName) => {
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

  const ingredientName = ingredientsItemElem.textContent;
  updateSelectedIngredientsList(ingredientName, true);
};

export const addIngredientsHandlers = () => {
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

// const displayIngredientsCategory = (
//   categotyTitle,
//   ingredientsArr,
//   ingredientsElem
// ) => {
//   const ingredientsCategoryElem = document.createElement("div");
//   ingredientsCategoryElem.classList.add("ingredients-category");

//   const ingredientsCategoryBodyElem = document.createElement("div");
//   ingredientsCategoryBodyElem.classList.add("ingredients-category__body");

//   const ingredientsListElem = document.createElement("ul");
//   ingredientsListElem.classList.add("ingredients-list");

//   ingredientsArr.splice(7, 0, `+${ingredientsArr.length - 7} more`);

//   ingredientsArr.forEach((ingredientItem, index) => {
//     const ingredientsItemElem = document.createElement("li");
//     ingredientsItemElem.classList.add(
//       "ingredients-item",
//       index != 7 ? "ingredients-item-product" : "ingredients-item-more-btn"
//     );

//     ingredientsItemElem.textContent = ingredientItem;

//     ingredientsListElem.appendChild(ingredientsItemElem);
//   });

//   ingredientsCategoryBodyElem.appendChild(ingredientsListElem);

//   ingredientsCategoryElem.innerHTML = `
//     <div class="ingredients-category__header">
//       <div class="ingredients-category__title">${categotyTitle}</div>
//       <svg class="arrow-icon" width="16" height="16" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M8 9.58236L12.7931 4.79249C13.1838 4.4021 13.817 4.40232 14.2073 4.79297C14.5977 5.18363 14.5975 5.8168 14.2069 6.20719L8.70687 11.7034C8.3164 12.0936 7.6836 12.0936 7.29313 11.7034L1.79313 6.20719C1.40248 5.8168 1.40226 5.18363 1.79265 4.79297C2.18304 4.40232 2.81621 4.4021 3.20687 4.79249L8 9.58236Z" fill="currentColor"></path></svg>
//     </div>
//   `;

//   ingredientsCategoryElem.appendChild(ingredientsCategoryBodyElem);

//   ingredientsElem.appendChild(ingredientsCategoryElem);
// };

// export const displayAllIngredientsCategories = () => {};

// const handleIngredientsItemProductClick = (event) => {
//   if (event.target.closest(".ingredients-item-product")) {
//     const ingredientsItem = event.target.closest(".ingredients-item-product");

//     ingredientsItem.classList.toggle("ingredients-item-product_active");
//   }
// };

// const handleIngredientsItemMoreBtnClick = (event) => {
//   if (event.target.closest(".ingredients-item-more-btn")) {
//     const ingredientsCategoryElem = event.target.closest(
//       ".ingredients-category"
//     );

//     ingredientsCategoryElem.classList.toggle("ingredients-category_active");
//   }
// };

// const handleIngredientsCategoryHeaderClick = (event) => {
//   if (event.target.closest(".ingredients-category__header")) {
//     const ingredientsCategoryElem = event.target.closest(
//       ".ingredients-category"
//     );

//     ingredientsCategoryElem.classList.toggle("ingredients-category_active");
//   }
// };

// export const addIngredientsHandlers = () => {
//   const ingredientsElem = document.querySelector(".ingredients-database");

//   ingredientsElem.addEventListener("click", handleIngredientsItemProductClick);
//   ingredientsElem.addEventListener(
//     "click",
//     handleIngredientsCategoryHeaderClick
//   );
//   ingredientsElem.addEventListener("click", handleIngredientsItemMoreBtnClick);
// };

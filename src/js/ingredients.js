import { ingredientsCategoriesArr } from "./ingredientsList";

const displayIngredientsCategory = (
  categotyTitle,
  ingredientsArr,
  ingredientsElem
) => {
  const ingredientsCategoryElem = document.createElement("div");
  ingredientsCategoryElem.classList.add("ingredients-category");

  const ingredientsCategoryBodyElem = document.createElement("div");
  ingredientsCategoryBodyElem.classList.add("ingredients-category__body");

  const ingredientsListElem = document.createElement("ul");
  ingredientsListElem.classList.add("ingredients-list");

  ingredientsArr.splice(7, 0, `+${ingredientsArr.length - 7} more`);

  ingredientsArr.forEach((ingredientItem, index) => {
    const ingredientsItemElem = document.createElement("li");
    ingredientsItemElem.classList.add(
      "ingredients-item",
      index != 7 ? "ingredients-item-product" : "ingredients-item-more-btn"
    );

    ingredientsItemElem.textContent = ingredientItem;

    ingredientsListElem.appendChild(ingredientsItemElem);
  });

  ingredientsCategoryBodyElem.appendChild(ingredientsListElem);

  ingredientsCategoryElem.innerHTML = `
    <div class="ingredients-category__header">
      <div class="ingredients-category__title">${categotyTitle}</div>
      <svg class="arrow-icon" width="16" height="16" fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M8 9.58236L12.7931 4.79249C13.1838 4.4021 13.817 4.40232 14.2073 4.79297C14.5977 5.18363 14.5975 5.8168 14.2069 6.20719L8.70687 11.7034C8.3164 12.0936 7.6836 12.0936 7.29313 11.7034L1.79313 6.20719C1.40248 5.8168 1.40226 5.18363 1.79265 4.79297C2.18304 4.40232 2.81621 4.4021 3.20687 4.79249L8 9.58236Z" fill="currentColor"></path></svg>
    </div>
  `;

  ingredientsCategoryElem.appendChild(ingredientsCategoryBodyElem);

  ingredientsElem.appendChild(ingredientsCategoryElem);
};

export const displayAllIngredientsCategories = () => {
  const ingredientsElem = document.querySelector(".ingredients");

  for (let ingredientCategory of ingredientsCategoriesArr) {
    displayIngredientsCategory(
      ingredientCategory.title,
      ingredientCategory.ingredientsArr,
      ingredientsElem
    );
  }
};

const handleIngredientsItemProductClick = (event) => {
  if (event.target.closest(".ingredients-item-product")) {
    const ingredientsItem = event.target.closest(".ingredients-item-product");

    ingredientsItem.classList.toggle("ingredients-item-product_active");
  }
};

const handleIngredientsItemMoreBtnClick = (event) => {
  if (event.target.closest(".ingredients-item-more-btn")) {
    const ingredientsCategoryElem = event.target.closest(
      ".ingredients-category"
    );

    ingredientsCategoryElem.classList.toggle("ingredients-category_active");
  }
};

const handleIngredientsHeaderClick = (event) => {
  if (event.target.closest(".ingredients-category__header")) {
    const ingredientsCategoryElem = event.target.closest(
      ".ingredients-category"
    );

    ingredientsCategoryElem.classList.toggle("ingredients-category_active");
  }
};

export const addIngredientsHandlers = () => {
  const ingredientsElem = document.querySelector(".ingredients");

  ingredientsElem.addEventListener("click", handleIngredientsItemProductClick);
  ingredientsElem.addEventListener("click", handleIngredientsHeaderClick);
  ingredientsElem.addEventListener("click", handleIngredientsItemMoreBtnClick);
};

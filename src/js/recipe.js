export const displayParsedRecipe = ({
  image,
  title = "untitled",
  src = "",
  cookingTime = "",
}) => {
  const recipesElem = document.querySelector(".recipes");

  const recipeCardElem = document.createElement("div");
  recipeCardElem.classList.add("recipe-card");

  recipeCardElem.innerHTML = `
    <div class="recipe-card__img-wrapper">
      <img src=${image} class="recipe-card__img" />
    </div>
      <div class="recipe-card__description">
      <div class="recipe-card__title">${title}</div>
      <div class="recipe-card__cooking-time"><span class="text_bold">${cookingTime}</span> minutes</div>
    </div>
  `;

  recipesElem.appendChild(recipeCardElem);
};

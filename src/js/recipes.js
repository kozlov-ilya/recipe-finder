import { getSelectedIngredientsArr } from "./ingredients";
import { fetchData } from "./api";

const displayParsedRecipe = ({
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

const clearRecipesList = () => {
  const recipesElem = document.querySelector(".recipes");
  recipesElem.innerHTML = "";
};

const parseRecipes = (fetchedData) => {
  clearRecipesList();

  fetchedData.results.forEach((fetchedRecipe) => {
    const {
      image: image,
      title,
      readyInMinutes: cookingTime,
      sourceUrl: src,
    } = fetchedRecipe;
    const parsedRecipe = { image, title, cookingTime, src };
    displayParsedRecipe(parsedRecipe);
  });
};

const createRecipesSearchQuery = (ingredientsArr, recipesNumber) => {
  let query = `includeIngredients=${ingredientsArr.join(",")}`;

  query = query + "&" + `number=${recipesNumber}`;
  query = query + "&" + `sort=min-missing-ingredients`;
  query = query + "&" + `ignorePantry=${true}`;
  query = query + "&" + `instructionsRequired=${true}`;
  query = query + "&" + `addRecipeInformation=${true}`;
  query = query + "&" + `fillIngredients=${true}`;

  return query;
};

const handleRecipesSearchButtonClick = (event) => {
  const selectedIngredientsArr = getSelectedIngredientsArr();

  if (!selectedIngredientsArr.length) return;

  const searchQuery = createRecipesSearchQuery(selectedIngredientsArr, 2);

  fetchData(searchQuery, parseRecipes);
};

export const addRecipesHandlers = () => {
  const recipesSearchButton = document.querySelector(".recipe-search-button");

  recipesSearchButton.addEventListener("click", handleRecipesSearchButtonClick);
};

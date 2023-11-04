import { getSelectedIngredientsArr } from "./ingredients";
import { fetchData } from "./api";

const displayRecipe = ({
  image = "#",
  title = "untitled",
  src = "",
  cookingTime = "",
}) => {
  const recipesListElem = document.querySelector(".recipes__list");

  const recipeCardTemplate = document.querySelector(".recipe-card-template");
  const recipeCardElem = recipeCardTemplate.content.cloneNode(true);

  const recipeCardImgElem = recipeCardElem.querySelector(".recipe-card__img");
  const recipeCardTitleElem = recipeCardElem.querySelector(
    ".recipe-card__title"
  );
  const recipeCardCookingTimeValueElem = recipeCardElem.querySelector(
    ".recipe-card__cooking-time-value"
  );

  recipeCardImgElem.src = image;
  recipeCardTitleElem.textContent = title;
  recipeCardCookingTimeValueElem.textContent = cookingTime;

  recipesListElem.appendChild(recipeCardElem);
};

const clearRecipesList = () => {
  const recipesElem = document.querySelector(".recipes__list");
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

    displayRecipe(parsedRecipe);
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

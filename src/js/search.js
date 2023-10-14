import { fetchData } from "./api.js";
import { displayParsedRecipe } from "./recipe.js";

/* FUNCTIONS */

const getSearchInputValue = () => {
  const searchInput = document.querySelector(".search__input");

  return searchInput.value;
};

const createRecipeQueries = (searchInputValue, numberOfRecipes) => {
  let queries = [];

  queries.push(["query", searchInputValue]);
  queries.push(["number", numberOfRecipes]);
  queries.push(["addRecipeInformation", true]);

  return queries;
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

const handleSearchFormSubmit = (event) => {
  event.preventDefault();

  const searchInputValue = getSearchInputValue();
  const queries = createRecipeQueries(searchInputValue, 5);

  fetchData([...queries], parseRecipes);
};

export const addSearchFormHandlers = () => {
  const searchForm = document.querySelector(".search__form");

  searchForm.addEventListener("submit", handleSearchFormSubmit);
};

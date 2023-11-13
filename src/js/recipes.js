import { getSelectedIngredientsArr } from "./ingredients";
import { fetchData } from "./api";
import { preventBodyScrolling, allowBodyScrolling } from "./general";
import savedRecipes from "../tmp/recipes.json" assert { type: "json" };

const fetchedRecipes = [];

const displayRecipeCard = ({ title, image, cookingTime, id }) => {
  const recipesListElem = document.querySelector(".recipes__cards-list");

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

  recipesListElem.append(recipeCardElem);

  recipesListElem.lastElementChild.dataset.recipeId = id;
};

const clearRecipesList = () => {
  const recipesElem = document.querySelector(".recipes__cards-list");
  recipesElem.innerHTML = "";
};

const parseRecipes = (fetchedData) => {
  clearRecipesList();

  // fetchedRecipes = fetchedData.results.map((fetchedRecipe) => {
  //   return ({ id, readyInMinutes } = fetchedRecipe);
  // });
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

const displayFetchedRecipes = () => {
  fetchedRecipes.forEach((fetchedRecipe) => {
    displayRecipeCard(fetchedRecipe);
  });
};

const handleRecipesSearchButtonClick = (event) => {
  const selectedIngredientsArr = getSelectedIngredientsArr();

  if (!selectedIngredientsArr.length) return;

  const searchQuery = createRecipesSearchQuery(selectedIngredientsArr, 2);

  fetchData(searchQuery, parseRecipes);
};

const showRecipe = () => {
  const recipeElem = document.querySelector(".recipe");

  recipeElem.classList.add("recipe_show");
};

const hideRecipe = () => {
  const recipeElem = document.querySelector(".recipe");

  recipeElem.classList.remove("recipe_show");
};

const getRecipeObjById = (recipeId) => {
  return fetchedRecipes.find((fetchedRecipe) => {
    return fetchedRecipe.id === recipeId;
  });
};

const sortRecipeIngredients = (ingredientsArr) => {
  ingredientsArr.sort((a, b) => {
    return a.isUsed ? -1 : 1;
  });
};

const getIngredientsInfo = (recipeId) => {
  const recipeObj = getRecipeObjById(recipeId);

  const usedIngredientsArr = recipeObj.usedIngredients.map((ingredientObj) => {
    return ingredientObj.name;
  });

  const allIngredientsArr = recipeObj.allIngredients.map((ingredientObj) => {
    const {
      name,
      measures: {
        metric: { amount, unitShort: unit },
      },
    } = ingredientObj;

    return { name, amount, unit, isUsed: usedIngredientsArr.includes(name) };
  });

  sortRecipeIngredients(allIngredientsArr);

  return allIngredientsArr;
};

const displayRecipeIngredient = (ingredientObj) => {
  const recipeIngredientsList = document.querySelector(
    ".recipe__ingredients-list"
  );

  const ingredientTemplate = document.querySelector(
    ".recipe-ingredient-template"
  );

  const ingredientElem = ingredientTemplate.content.cloneNode(true);
  const ingredientNameElem = ingredientElem.querySelector(
    ".recipe__ingredient-name"
  );
  const ingredientAmountElem = ingredientElem.querySelector(
    ".recipe__ingredient-amount"
  );

  ingredientNameElem.textContent =
    ingredientObj.name[0].toUpperCase() + ingredientObj.name.slice(1);
  ingredientAmountElem.textContent = `${ingredientObj.amount} ${ingredientObj.unit}`;

  if (ingredientObj.isUsed) {
    ingredientElem.children[0].classList.add("recipe__ingredient_used");
  }

  recipeIngredientsList.append(ingredientElem);
};

const clearRecipeIngredientsList = () => {
  const recipeIngredientsList = document.querySelector(
    ".recipe__ingredients-list"
  );

  recipeIngredientsList.innerHTML = "";
};

const getInstructionsInfo = (recipeId) => {
  const recipeObj = getRecipeObjById(recipeId);

  const instructionsArr = recipeObj.instruction.map((instructionStep) => {
    return { number: instructionStep.number, step: instructionStep.step };
  });

  return instructionsArr;
};

const displayRecipeInstructionStep = (instructionStepObj) => {
  const recipeInstructionStepsList = document.querySelector(
    ".recipe__instruction-steps-list"
  );

  const instructionStepTemplate = document.querySelector(
    ".recipe-instruction-step-template"
  );

  const instructionStepElem = instructionStepTemplate.content.cloneNode(true);

  const stepNumberElem = instructionStepElem.querySelector(
    ".instruction-step__number"
  );
  const stepStepElem = instructionStepElem.querySelector(
    ".instruction-step__step"
  );

  stepNumberElem.textContent = `${instructionStepObj.number}.`;
  stepStepElem.textContent = instructionStepObj.step;

  recipeInstructionStepsList.append(instructionStepElem);
};

const clearRecipeInstructionStepsList = () => {
  const recipeInstructionsList = document.querySelector(
    ".recipe__instruction-steps-list"
  );

  recipeInstructionsList.innerHTML = "";
};

const displayRecipeInfo = (recipeId) => {
  const recipeObj = getRecipeObjById(recipeId);

  const recipeTitleElem = document.querySelector(".recipe__title");
  const recipeImgElem = document.querySelector(".recipe__img");
  const recipeCookingTimeValueElem = document.querySelector(
    ".recipe__cooking-time-value"
  );
  const recipeIngredients = getIngredientsInfo(recipeId);
  const recipeInstruction = getInstructionsInfo(recipeId);

  clearRecipeIngredientsList();
  clearRecipeInstructionStepsList();

  recipeTitleElem.textContent = recipeObj.title;
  recipeImgElem.src = recipeObj.image;
  recipeCookingTimeValueElem.textContent = recipeObj.cookingTime;
  recipeIngredients.forEach((ingredientObj) => {
    displayRecipeIngredient(ingredientObj);
  });
  recipeInstruction.forEach((instructionStepObj) => {
    displayRecipeInstructionStep(instructionStepObj);
  });
};

const handleRecipeCardClick = (event) => {
  const recipeCardElem = event.target.closest(".recipe-card");

  if (!recipeCardElem) return;

  const recipeId = parseInt(recipeCardElem.dataset.recipeId);

  displayRecipeInfo(recipeId);
  showRecipe();
  preventBodyScrolling();
};

const handleRecipeCloseButtonClick = (event) => {
  hideRecipe();
  allowBodyScrolling();
};

const handleTabMenuButtonClick = (event) => {
  const clickedTabElem = event.target.closest(".tab-menu__tab-button");

  if (!clickedTabElem) return;

  const tabs = document.querySelectorAll(".tab-menu__tab-button");
  const contentItems = document.querySelectorAll(".tab-menu__content-item");
  let clickedTabIndex = 0;

  tabs.forEach((tab, index) => {
    tab.classList.remove("tab-menu__tab-button_active");

    clickedTabIndex = tab === clickedTabElem ? index : clickedTabIndex;
  });

  contentItems.forEach((contentItem) => {
    contentItem.classList.remove("tab-menu__content-item_active");
  });

  clickedTabElem.classList.add("tab-menu__tab-button_active");
  contentItems[clickedTabIndex].classList.add("tab-menu__content-item_active");
};

export const addRecipesHandlers = () => {
  const recipesList = document.querySelector(".recipes__cards-list");
  const recipesSearchButton = document.querySelector(".recipe-search-button");
  const recipeElem = document.querySelector(".recipe");
  const recipeCloseButton = document.querySelector(".recipe__close-button");

  recipesSearchButton.addEventListener("click", handleRecipesSearchButtonClick);
  recipesList.addEventListener("click", handleRecipeCardClick);
  recipeElem.addEventListener("click", handleTabMenuButtonClick);
  recipeCloseButton.addEventListener("click", handleRecipeCloseButtonClick);
};

const loadSavedRecipes = () => {
  savedRecipes.results.forEach((fetchedRecipe) => {
    let {
      id,
      readyInMinutes: cookingTime,
      extendedIngredients: allIngredients,
      usedIngredients,
      title,
      sourceUrl: src,
      image,
      analyzedInstructions: [{ steps: instruction }],
    } = fetchedRecipe;

    fetchedRecipes.push({
      id,
      cookingTime,
      allIngredients,
      usedIngredients,
      title,
      src,
      image,
      instruction,
    });
  });
};

loadSavedRecipes();
displayFetchedRecipes();

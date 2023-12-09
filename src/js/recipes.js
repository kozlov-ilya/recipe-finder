import { navigateUrl, ROOT } from "./router";
import { getSelectedIngredientsArr } from "./ingredients";
import { fetchData } from "./api";
import { preventBodyScrolling, allowBodyScrolling } from "./general";
import savedRecipes from "../assets/recipes.json" assert { type: "json" };

let fetchedRecipes = [];

const changeRecipeImageSrcResolution = (recipeImageSrc) => {
  const regex = /(?<=-)(.*?)(?=\.jpg)/;
  return recipeImageSrc.replace(regex, "636x393");
};

const displayRecipeCard = ({ title, image, cookingTime, id, servings }) => {
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
  const recipeCardServingsValueElem = recipeCardElem.querySelector(
    ".recipe-card__servings-value"
  );

  recipeCardImgElem.src = image;
  recipeCardTitleElem.textContent = title;
  recipeCardCookingTimeValueElem.textContent = `${cookingTime} mins`;
  recipeCardServingsValueElem.textContent = `${servings} servings`;

  recipesListElem.append(recipeCardElem);

  recipesListElem.lastElementChild.dataset.recipeId = id;
};

const clearRecipesList = () => {
  const recipesElem = document.querySelector(".recipes__cards-list");
  recipesElem.innerHTML = "";
};

const createRecipesSearchQuery = (ingredientsArr, recipesNumber) => {
  let query = `includeIngredients=${ingredientsArr.join(",")}`;

  query = query + "&" + `number=${recipesNumber}`;
  query = query + "&" + `sort=max-used-ingredients`;
  query = query + "&" + `ignorePantry=${true}`;
  query = query + "&" + `instructionsRequired=${true}`;
  query = query + "&" + `addRecipeInformation=${true}`;
  query = query + "&" + `fillIngredients=${true}`;
  query = query + "&" + `addRecipeNutrition=${true}`;

  return query;
};

const displayFetchedRecipes = () => {
  fetchedRecipes.forEach((fetchedRecipe) => {
    displayRecipeCard(fetchedRecipe);
  });
};

const showRecipe = () => {
  const recipeElem = document.querySelector(".recipe");

  recipeElem.scrollTop = 0;

  recipeElem.classList.add("recipe_show");
};

const hideRecipe = () => {
  const recipeElem = document.querySelector(".recipe");

  recipeElem.classList.remove("recipe_show");
};

const getRecipeObjById = (recipeId) => {
  return fetchedRecipes.find((fetchedRecipe) => {
    return fetchedRecipe.id.toString() === recipeId.toString();
  });
};

const sortRecipeIngredients = (ingredientsArr) => {
  ingredientsArr.sort((a, b) => {
    return a.isUsed ? -1 : 1;
  });
};

const getIngredientsInfo = (recipeId) => {
  const recipeObj = getRecipeObjById(recipeId);

  const selectedIngredientsArr = getSelectedIngredientsArr();

  const usedIngredientsArr = recipeObj.usedIngredients
    .map((ingredientObj) => {
      return ingredientObj.name;
    })
    .concat(selectedIngredientsArr);

  const allIngredientsArr = recipeObj.allIngredients.map((ingredientObj) => {
    const {
      name,
      measures: {
        metric: { amount, unitShort: unit },
      },
    } = ingredientObj;

    return {
      name,
      amount,
      unit,
      isUsed: usedIngredientsArr.includes(name),
    };
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

  const instructionsArr = recipeObj.instruction?.map((instructionStep) => {
    return { number: instructionStep.number, step: instructionStep.step };
  });

  return instructionsArr ? instructionsArr : [];
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
    ".recipe__time-value"
  );
  const recipeServingsValueElem = document.querySelector(
    ".recipe__servings-value"
  );
  const recipeSourceLink = document.querySelector(".recipe__src-link");
  const recipeIngredients = getIngredientsInfo(recipeId);

  const recipeInstructions = getInstructionsInfo(recipeId);

  clearRecipeIngredientsList();
  clearRecipeInstructionStepsList();

  recipeTitleElem.textContent = recipeObj.title;
  recipeImgElem.src = recipeObj.image;
  recipeCookingTimeValueElem.textContent = `${recipeObj.cookingTime} mins`;
  recipeServingsValueElem.textContent = `${recipeObj.servings} servings`;
  recipeSourceLink.href = recipeObj.src;

  recipeIngredients.forEach((ingredientObj) => {
    displayRecipeIngredient(ingredientObj);
  });
  recipeInstructions.forEach((instructionStepObj) => {
    displayRecipeInstructionStep(instructionStepObj);
  });
};

const hideRecipeBackground = () => {
  const recipeBgElem = document.querySelector(".recipe-bg");

  recipeBgElem.classList.remove("recipe-bg_show");
};

const showRecipeBackground = () => {
  const recipeBgElem = document.querySelector(".recipe-bg");

  recipeBgElem.classList.add("recipe-bg_show");
};

const hideRecipesMessage = () => {
  const recipesMessageBoxElem = document.querySelector(".recipes-message-box");

  recipesMessageBoxElem.classList.remove("recipes-message-box_show");
};

const showRecipesMessage = () => {
  const recipesMessageBoxElem = document.querySelector(".recipes-message-box");

  recipesMessageBoxElem.classList.add("recipes-message-box_show");
};

const changeRecipesMessage = (title, subtitle) => {
  const recipesMessageTitleElem = document.querySelector(
    ".recipes-message-title"
  );
  const recipesMessageSubtitleElem = document.querySelector(
    ".recipes-message-subtitle"
  );

  recipesMessageTitleElem.textContent = title;
  recipesMessageSubtitleElem.textContent = subtitle;
};

export const openRecipe = (recipeId) => {
  displayRecipeInfo(recipeId);

  hideRecipeBackground();

  showRecipe();

  if (matchMedia("(width < 1024px)").matches) {
    preventBodyScrolling();
  }
};

export const closeRecipe = () => {
  showRecipeBackground();

  hideRecipe();

  allowBodyScrolling();
};

const clearFetchedRecipesArr = () => {
  fetchedRecipes = [];
};

const parseRecipes = (fetchedData) => {
  clearRecipesList();
  clearFetchedRecipesArr();

  fetchedData.results.forEach((fetchedRecipe) => {
    let {
      id,
      readyInMinutes: cookingTime,
      servings,
      extendedIngredients: allIngredients,
      usedIngredients,
      title,
      sourceUrl: src,
      image,
      analyzedInstructions: [{ steps: instruction } = {}] = [],
    } = fetchedRecipe;

    fetchedRecipes.push({
      id,
      cookingTime,
      servings,
      allIngredients,
      usedIngredients,
      title,
      src,
      image: changeRecipeImageSrcResolution(image),
      instruction,
    });
  });

  if (fetchedRecipes.length > 0) {
    displayFetchedRecipes();
  } else {
    changeRecipesMessage("No recipes found :(", "Try one more time");
    showRecipesMessage();
  }
};

const showRecipesSearchMessage = () => {
  const recipeSearchMessageBoxElem = document.querySelector(
    ".recipe-search__message-box"
  );

  recipeSearchMessageBoxElem.classList.add("recipe-search__message-box_show");
};

const hideRecipesSearchMessage = () => {
  const recipeSearchMessageBoxElem = document.querySelector(
    ".recipe-search__message-box"
  );

  recipeSearchMessageBoxElem.classList.remove(
    "recipe-search__message-box_show"
  );
};

const handleRecipesSearchButtonClick = (event) => {
  event.stopPropagation();

  const selectedIngredientsArr = getSelectedIngredientsArr();

  if (selectedIngredientsArr.length < 3) {
    showRecipesSearchMessage();

    document.addEventListener("click", hideRecipesSearchMessage);

    return;
  }

  hideRecipesSearchMessage();

  const searchQuery = createRecipesSearchQuery(selectedIngredientsArr, 5);

  hideRecipesMessage();

  fetchData(searchQuery, parseRecipes);
};

const handleRecipeCardClick = (event) => {
  const recipeCardElem = event.target.closest(".recipe-card");

  if (!recipeCardElem) return;

  const recipeId = parseInt(recipeCardElem.dataset.recipeId);

  navigateUrl(`${ROOT}recipe/${recipeId}`);
};

const handleRecipeCloseButtonClick = (event) => {
  navigateUrl(ROOT);
};

const handleRecipeTouchstart = (event) => {
  let startTouchData = {};

  startTouchData.startX = event.touches[0].clientX;
  startTouchData.startTime = Date.now();

  const handlePopupTouchend = (event) => {
    const endX = event.changedTouches[0].clientX;

    const deltaX = endX - startTouchData.startX;
    const deltaTime = Date.now() - startTouchData.startTime;

    const touchVelocity = deltaX / deltaTime;

    if (touchVelocity > 0.4) {
      hideRecipe();

      navigateUrl(ROOT);
    }
  };

  event.currentTarget.addEventListener("touchend", handlePopupTouchend);
};

const manageRecipesHandlers = () => {
  const recipesList = document.querySelector(".recipes__cards-list");
  const recipesSearchButton = document.querySelector(".recipe-search-button");
  const recipeElem = document.querySelector(".recipe");
  const recipeCloseButton = document.querySelector(".recipe__close-button");

  recipesSearchButton.addEventListener("click", handleRecipesSearchButtonClick);

  recipesList.addEventListener("click", handleRecipeCardClick);

  if (matchMedia("(width < 1024px)").matches) {
    recipeCloseButton.addEventListener("click", handleRecipeCloseButtonClick);

    recipeElem.addEventListener("touchstart", handleRecipeTouchstart);
  } else {
    recipeCloseButton.removeEventListener(
      "click",
      handleRecipeCloseButtonClick
    );

    recipeElem.removeEventListener("touchstart", handleRecipeTouchstart);
  }
};

document.addEventListener("DOMContentLoaded", (event) => {
  manageRecipesHandlers();
});

window.addEventListener("resize", (event) => {
  manageRecipesHandlers();
});

const loadSavedRecipes = () => {
  savedRecipes.results.forEach((fetchedRecipe) => {
    let {
      id,
      readyInMinutes: cookingTime,
      servings,
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
      servings,
      allIngredients,
      usedIngredients,
      title,
      src,
      image: changeRecipeImageSrcResolution(image),
      instruction,
    });
  });
};

// loadSavedRecipes();
// displayFetchedRecipes();

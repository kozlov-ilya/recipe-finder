import {
  getAllIngredientsArr,
  updateSelectedIngredientsList,
} from "./ingredients";
import { togglePopularIngredientsItemSelection } from "./filters";

const openSearchSuggestions = () => {
  const searchSuggestionsElem = document.querySelector(
    ".ingredients-search__suggestions"
  );

  searchSuggestionsElem.classList.add("ingredients-search__suggestions_show");
};

const closeSearchSuggestions = () => {
  const searchSuggestionsElem = document.querySelector(
    ".ingredients-search__suggestions"
  );

  searchSuggestionsElem.classList.remove(
    "ingredients-search__suggestions_show"
  );
};

const displaySuggestionsItem = (suggestionsItemValue, suggestionsListElem) => {
  const suggestionsItemElem = document.createElement("li");
  suggestionsItemElem.classList.add("ingredients-search__suggestions-item");

  suggestionsItemElem.textContent = suggestionsItemValue;

  suggestionsListElem.appendChild(suggestionsItemElem);

  return suggestionsItemElem;
};

const clearSuggestionsList = (suggestionsListElem) => {
  suggestionsListElem.innerHTML = "";
};

const highlightSuggestionsItemByIndex = (suggestionsItemIndex) => {
  const suggestionsItemElems = document.querySelectorAll(
    ".ingredients-search__suggestions-item"
  );

  suggestionsItemElems[suggestionsItemIndex].classList.add(
    "ingredients-search__suggestions-item_active"
  );
};

const highlightSuggestionsItemByElem = (suggestionsItemElem) => {
  suggestionsItemElem.classList.add(
    "ingredients-search__suggestions-item_active"
  );
};

const getHighlightedItemIndex = (suggestionsItemElems) => {
  return Array.from(suggestionsItemElems).findIndex((suggestionsItem) => {
    return suggestionsItem.classList.contains(
      "ingredients-search__suggestions-item_active"
    );
  });
};

const getHighlightedSuggestionsItem = (suggestionsItemElems) => {
  const highlightedItemIndex = getHighlightedItemIndex(suggestionsItemElems);

  return suggestionsItemElems[highlightedItemIndex];
};

const unhighlightAllSuggestionsItems = () => {
  const suggestionsItemElems = document.querySelectorAll(
    ".ingredients-search__suggestions-item"
  );

  suggestionsItemElems.forEach((suggestionsItem) => {
    suggestionsItem.classList.remove(
      "ingredients-search__suggestions-item_active"
    );
  });
};

const scrollToHighlightedSuggestionsItems = (suggestionsItemElems) => {
  const suggestionsListElem = document.querySelector(
    ".ingredients-search__suggestions-list"
  );
  const suggestionsElem = document.querySelector(
    ".ingredients-search__suggestions"
  );
  const highlightedSuggestionsItemElem =
    getHighlightedSuggestionsItem(suggestionsItemElems);

  const itemOffsetTop = highlightedSuggestionsItemElem.offsetTop;
  const itemHeight = highlightedSuggestionsItemElem.clientHeight;
  const listScrollTop = suggestionsListElem.scrollTop;
  const suggestionsHeight = suggestionsElem.clientHeight;

  if (itemOffsetTop < listScrollTop) {
    suggestionsListElem.scrollTop = itemOffsetTop;
  } else if (itemOffsetTop >= listScrollTop + suggestionsHeight) {
    suggestionsListElem.scrollTop =
      itemOffsetTop - suggestionsHeight + itemHeight;
  }
};

const clearSearchInput = () => {
  const searchInputElem = document.querySelector(".ingredients-search__input");

  searchInputElem.value = "";
};

const handleSuggestionsItemHover = (event) => {
  const hoveredSuggestionsItem = event.currentTarget;

  unhighlightAllSuggestionsItems();
  highlightSuggestionsItemByElem(hoveredSuggestionsItem);
};

const handleSearchInputInput = (event) => {
  const searchInputElem = event.target;
  const searchSuggestionsListElem = document.querySelector(
    ".ingredients-search__suggestions-list"
  );

  const allIngredientsArr = getAllIngredientsArr();

  const searchValue = searchInputElem.value.toLowerCase();

  if (searchValue.length < 3) {
    closeSearchSuggestions();
    return;
  }

  clearSuggestionsList(searchSuggestionsListElem);

  const filteredSuggestionsArr = allIngredientsArr.filter((ingredient) => {
    return ingredient.includes(searchValue) && ingredient.split(" ").length < 3;
  });

  filteredSuggestionsArr.forEach((suggestion) => {
    const suggestionsItemElem = displaySuggestionsItem(
      suggestion,
      searchSuggestionsListElem
    );
    suggestionsItemElem.addEventListener(
      "mouseenter",
      handleSuggestionsItemHover
    );
  });

  if (filteredSuggestionsArr.length) {
    highlightSuggestionsItemByIndex(0);
    openSearchSuggestions();
  }
};

const handleSearchInputKeydown = (event) => {
  if (event.code === "ArrowUp" || event.code === "ArrowDown") {
    event.preventDefault();

    const suggestionsItemElems = document.querySelectorAll(
      ".ingredients-search__suggestions-item"
    );

    const highlightedItemIndex = getHighlightedItemIndex(suggestionsItemElems);

    let itemIndexToHighlight =
      highlightedItemIndex + (event.code === "ArrowUp" ? -1 : 1);

    itemIndexToHighlight =
      itemIndexToHighlight >= suggestionsItemElems.length
        ? 0
        : itemIndexToHighlight < 0
        ? suggestionsItemElems.length - 1
        : itemIndexToHighlight;

    unhighlightAllSuggestionsItems();
    highlightSuggestionsItemByIndex(itemIndexToHighlight);
    scrollToHighlightedSuggestionsItems(
      suggestionsItemElems,
      itemIndexToHighlight
    );
  }
};

const handleSuggestionsItemClick = (event) => {
  const clickedSuggestionsItem = event.target.closest(
    ".ingredients-search__suggestions-item"
  );

  if (!clickedSuggestionsItem) {
    return;
  }

  const ingredientName = clickedSuggestionsItem.textContent;

  updateSelectedIngredientsList(ingredientName);

  togglePopularIngredientsItemSelection(ingredientName);

  clearSearchInput();
  closeSearchSuggestions();
  unhighlightAllSuggestionsItems();
};

const handleIngredientsSearchFormSubmit = (event) => {
  event.preventDefault();

  const suggestionsItemElems = document.querySelectorAll(
    ".ingredients-search__suggestions-item"
  );

  const highlightedSuggestionsItemElem =
    getHighlightedSuggestionsItem(suggestionsItemElems);

  if (!highlightedSuggestionsItemElem) {
    return;
  }

  const ingredientName = highlightedSuggestionsItemElem.textContent;

  updateSelectedIngredientsList(ingredientName);

  togglePopularIngredientsItemSelection(ingredientName);

  clearSearchInput();
  closeSearchSuggestions();
  unhighlightAllSuggestionsItems();
};

const handleDocumentWithSuggestionsOpenedClick = (event) => {
  if (!event.target.closest(".ingredients-search__suggestions")) {
    closeSearchSuggestions();
  }
};

export const addIngredientsSearchFormHandlers = () => {
  const searchFormElem = document.querySelector(".ingredients-search__form");
  const searchInputElem = document.querySelector(".ingredients-search__input");

  searchFormElem.addEventListener("submit", handleIngredientsSearchFormSubmit);
  searchFormElem.addEventListener("click", handleSuggestionsItemClick);
  searchInputElem.addEventListener("input", handleSearchInputInput);
  searchInputElem.addEventListener("keydown", handleSearchInputKeydown);
  document.addEventListener("click", handleDocumentWithSuggestionsOpenedClick);
};

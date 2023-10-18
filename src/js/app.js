import { addSearchFormHandlers } from "./search.js";
import { addFiltersHandlers } from "./filters.js";
import { addHandlersToAllPopups } from "./popup.js";
import {
  addIngredientsHandlers,
  displayAllIngredientsCategories,
} from "./ingredients.js";

document.addEventListener("DOMContentLoaded", (event) => {
  displayAllIngredientsCategories();

  addSearchFormHandlers();
  addFiltersHandlers();
  addHandlersToAllPopups();
  addIngredientsHandlers();
});

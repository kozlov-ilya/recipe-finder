import { addIngredientsSearchFormHandlers } from "./search.js";
import { addFiltersHandlers } from "./filters.js";
import { addHandlersToAllPopups } from "./popup.js";
import { addIngredientsHandlers } from "./ingredients.js";

document.addEventListener("DOMContentLoaded", (event) => {
  addIngredientsSearchFormHandlers();
  addFiltersHandlers();
  addHandlersToAllPopups();
  addIngredientsHandlers();
});

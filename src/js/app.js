import "./router.js";
import { addIngredientsSearchFormHandlers } from "./ingredientsSearch";
import { addFiltersHandlers } from "./filters.js";
import { addHandlersToAllPopups } from "./popup.js";
import { addIngredientsHandlers } from "./ingredients.js";
import { addRecipesHandlers } from "./recipes";

document.addEventListener("DOMContentLoaded", (event) => {
  addIngredientsSearchFormHandlers();
  addFiltersHandlers();
  addHandlersToAllPopups();
  addIngredientsHandlers();
  addRecipesHandlers();
});

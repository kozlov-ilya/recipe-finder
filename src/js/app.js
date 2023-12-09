import "./router.js";
import { addIngredientsSearchFormHandlers } from "./ingredientsSearch";
import "./filters.js";
import "./popup.js";
import "./ingredients.js";
import "./recipes";

document.addEventListener("DOMContentLoaded", (event) => {
  addIngredientsSearchFormHandlers();
});

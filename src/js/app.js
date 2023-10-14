import { addSearchFormHandlers } from "./search.js";
import { addFiltersButtonHandlers } from "./filters.js";
import { addHandlersToAllPopups } from "./popup.js";

/* HANDLERS */
document.addEventListener("DOMContentLoaded", (event) => {
  addSearchFormHandlers();
  addFiltersButtonHandlers();
  addHandlersToAllPopups();
});

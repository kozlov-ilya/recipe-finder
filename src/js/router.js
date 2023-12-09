import { openRecipe, closeRecipe } from "./recipes";

export const ROOT = "/recipe-finder/";

export const navigateUrl = (url) => {
  window.history.pushState(null, null, url);

  handleRoute();
};

const handleRoute = () => {
  const path = window.location.pathname;

  const routes = [
    {
      path: /^\/recipe-finder\/$/g,
      // path: /^\/$/g,
      response: () => {
        closeRecipe();
      },
    },
    {
      path: /^\/recipe-finder\/recipe\/.*$/g,
      // path: /^\/recipe\/.*$/g,
      response: () => {
        const recipeId = path.split("/").at(-1);

        openRecipe(recipeId);
      },
    },
  ];

  const potentialMatches = routes.map((route) => {
    return { route, isMatch: route.path.test(path) };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = { route: routes[0], isMatch: true };
    window.location.href = ROOT;
  }

  match.route.response();
};

document.addEventListener("DOMContentLoaded", () => {
  handleRoute();
});

window.addEventListener("popstate", handleRoute);

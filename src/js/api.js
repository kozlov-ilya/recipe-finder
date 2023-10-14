const ACESS_POINT = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c7a90a5da456492890c94a3e2f7e9b38";

export const fetchData = async function (queries, successCallback) {
  const query = queries?.join("&").replace(/,/g, "=");

  const url = `${ACESS_POINT}?apiKey=${API_KEY}${query ? `&${query}` : ""}`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    successCallback(data);
  }
};

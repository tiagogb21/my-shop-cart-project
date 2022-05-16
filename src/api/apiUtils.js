const URL_CATEGORIES = "https://api.mercadolibre.com/sites/MLB/categories";

const URL_CATEGORIES_BY_ID =
  "https://api.mercadolibre.com/sites/MLB/search?category=";

export const getCategories = async () => {
  const request = await fetch(URL_CATEGORIES);
  const requestJSON = request.json();
  return requestJSON;
};

export const getCategoriesById = async (id) => {
  const request = await fetch(`${URL_CATEGORIES_BY_ID}${id}`);
  const requestJSON = request.json();
  return requestJSON;
};


const KEY = process.env.COCKAIL_API_SECRET_KEY

const fetchTailByName = async (name) => {
  const response = await fetch(`www.thecocktaildb.com/api/json/v1/${KEY}/search.php?s=${name}`);
  const data = await response.json();
  return data;
};

const fetchTailByFLetter = async (letter) => {
  const response = await fetch(`www.thecocktaildb.com/api/json/v1/${KEY}/search.php?f=${letter}`);
  const data = await response.json();
  return data;
};

const fetchByIngredient = async (ingredient) => {
  const response = await fetch(`www.thecocktaildb.com/api/json/v1/${KEY}/search.php?i=${ingredient}`);
  const data = await response.json();
  return data;
};

const fetchTailByID = async (ID) => {
  const response = await fetch(`www.thecocktaildb.com/api/json/v1/${KEY}/lookup.php?i=${ID}`);
  const data = await response.json();
  return data;
};

const fetchRandomTail = async () => {
    const response = await fetch(`www.thecocktaildb.com/api/json/v1/${KEY}/random`);
    const data = await response.json();
    return data;
  };

const addTailToFavs = (cocktailObject, token) => { 
  return fetch(BASE_URL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: "POST",
    body: JSON.stringify(cocktailObject)
  });
};

export {
  fetchByIngredient,
  fetchRandomTail,
  fetchTailByID,
  fetchTailByName,
  fetchTailByFLetter,
  addTailToFavs,
};
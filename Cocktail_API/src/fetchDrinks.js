// fetch de l'url

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

export default async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.drinks;
    console.log(person);
    return person;
  } catch (error) {
    console.log(error);
  }
};

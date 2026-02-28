import { BASE_IMAGE_URL } from './configs';

const getPokemonId = function (url) {
  return url.split('/').at(-2);
};

const capitalizeFirstLetter = function (str) {
  if (!str.trim()) return;

  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const transformData = function (data) {
  return data.map(datum => {
    return {
      id: crypto.randomUUID(),
      name: capitalizeFirstLetter(datum.name),
      imgUrl: `${BASE_IMAGE_URL}${getPokemonId(datum.url)}.png`,
    };
  });
};

// The Fisher-Yates Shuffle
export const shuffleArray = function (array) {
  // Copy the passed in array to avoid mutations (keeping the function pure)
  const newArry = array.slice(0);

  let currentIndex = newArry.length,
    randomIndex;

  // While there remain items to shuffle.
  while (currentIndex > 0) {
    // Pick a random item (index) from the remaining items
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current item using array destructuring.
    // prettier-ignore
    [newArry[currentIndex], newArry[randomIndex]] = [newArry[randomIndex], newArry[currentIndex]];
  }

  return newArry;
};

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

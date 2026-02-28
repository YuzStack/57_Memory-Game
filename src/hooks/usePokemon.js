import { useEffect, useState } from 'react';
import { API_URL } from '../configs';
import { transformData } from '../helpers';

function usePokemon(callback) {
  const [pokes, setPokes] = useState([]);

  useEffect(
    function () {
      async function getData() {
        const response = await fetch(API_URL);
        const data = await response.json();

        setPokes(transformData(data.results));
        callback && setPokes(curPokes => callback(curPokes));
      }

      getData();
    },
    [callback],
  );

  return { pokes, setPokes };
}

export default usePokemon;

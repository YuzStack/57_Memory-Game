import { useEffect, useState } from 'react';
import { API_URL } from '../configs';
import { transformData } from '../helpers';

function usePokemon() {
  const [pokes, setPokes] = useState(null);

  useEffect(function () {
    async function getData() {
      const response = await fetch(API_URL);
      const data = await response.json();

      setPokes(transformData(data.results));
    }

    getData();
  }, []);

  return { pokes };
}

export default usePokemon;

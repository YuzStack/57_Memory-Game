import { useEffect, useState } from 'react';
import { API_URL } from '../configs';
import { transformData } from '../helpers';

function App() {
  const [pokes, setPokes] = useState([]);

  useEffect(function () {
    async function getData() {
      const response = await fetch(API_URL);
      const data = await response.json();

      setPokes(transformData(data.results));
    }

    getData();
  }, []);

  const handleLearnMore = function () {
    alert(
      'You win if you can click on all the available cards without clicking on the same card twice. Goodluck!',
    );
  };

  return (
    <div className='min-h-screen bg-gray-900 px-4 py-3 text-white'>
      <div className='mx-auto w-fit space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-center text-4xl font-bold tracking-wider'>
            Pokémon Memory Game
          </h1>
          <p className='italic'>
            Get points by clicking on an image, but don't click on any image
            more than once!
          </p>
          <button
            onClick={handleLearnMore}
            className='mx-auto flex cursor-pointer text-lg font-semibold text-purple-500 transition-colors hover:text-purple-400'
          >
            Learn More...
          </button>
        </div>

        <div>
          <p className='text-lg font-semibold'>Score: 0</p>
          <p className='text-lg font-semibold'>Best Score: 0</p>
        </div>
      </div>
    </div>
  );
}

export default App;

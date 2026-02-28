import Cards from './Cards';
import usePokemon from '../hooks/usePokemon';
import { shuffleArray } from '../helpers';
import { useEffect, useState } from 'react';

function App() {
  const { pokes, setPokes } = usePokemon(shuffleArray);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pickedCards, setPickedCards] = useState([]);

  const handleLearnMore = function () {
    alert(
      'You win if you can click on all the available cards without clicking on the same card twice. Goodluck!',
    );
  };

  const endGame = function () {
    if (score > bestScore) setBestScore(score);
    alert('Game Over!');

    setPickedCards([]);
    setScore(0);
  };

  const winGame = function () {
    alert('You won!🏆🏆');
    setPickedCards([]);
    setScore(0);
  };

  const handlePickCard = function (poke) {
    const isPicked = pickedCards.some(card => card.id === poke.id);
    if (isPicked) return endGame();

    setPickedCards(curPickedCards => [...curPickedCards, poke]);
    setScore(curScore => curScore + 1);
    setPokes(shuffleArray(pokes));
  };

  useEffect(
    function () {
      /* eslint-disable */
      if (score > bestScore) setBestScore(score);
    },
    [score, bestScore],
  );

  useEffect(
    function () {
      if (pokes.length > 0 && pickedCards.length === pokes.length) winGame();
    },
    [pickedCards],
  );

  return (
    <div className='min-h-screen bg-gray-900 px-4 py-3 text-white'>
      <div className='space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-center text-4xl font-bold tracking-wider'>
            Pokémon Memory Game
          </h1>
          <p className='text-center italic'>
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
          <p className='text-lg font-semibold'>Score: {score}</p>
          <p className='text-lg font-semibold'>Best Score: {bestScore}</p>
        </div>

        <Cards pokes={pokes} onPickCard={handlePickCard} />
      </div>
    </div>
  );
}

export default App;

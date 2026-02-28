import Card from './Card';

function Cards({ pokes }) {
  return (
    <ul className='grid grid-cols-3 gap-5 md:grid-cols-4 xl:grid-cols-6'>
      {pokes.map(poke => (
        <Card poke={poke} key={poke.id} />
      ))}
    </ul>
  );
}

export default Cards;

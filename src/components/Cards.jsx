import Card from './Card';

function Cards({ pokes, onPickCard }) {
  return (
    <ul className='grid grid-cols-3 gap-5 md:grid-cols-4 xl:grid-cols-6'>
      {pokes.map(poke => (
        <Card key={poke.id} poke={poke} onPickCard={onPickCard} />
      ))}
    </ul>
  );
}

export default Cards;

function Card({ poke }) {
  return (
    <li className=''>
      <img
        src={poke.imgUrl}
        alt={poke.name}
        className='rounded-t-lg bg-emerald-500 md:rounded-t-2xl'
      />
      <p className='rounded-b-lg bg-gray-500 p-1 text-center text-sm sm:p-2 sm:text-base md:rounded-b-2xl md:text-xl lg:text-2xl'>
        {poke.name}
      </p>
    </li>
  );
}

export default Card;

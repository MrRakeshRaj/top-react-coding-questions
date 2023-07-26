function Tile({ char, tileKey }) {
  return (
    <>
      <div
        key={tileKey}
        className="tile border-black border-2 border-solid w-10 h-10 rounded-lg uppercase text-2xl flex justify-center items-center"
      >
        {char}
      </div>
    </>
  );
}

export default Tile;

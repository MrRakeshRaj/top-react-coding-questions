function Tile({ char }) {
  return (
    <>
      <div className="tile border-black border-2 border-solid w-10 h-10 rounded-lg">
        {char}
      </div>
    </>
  );
}

export default Tile;

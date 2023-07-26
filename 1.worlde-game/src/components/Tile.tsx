function Tile({ char, tileKey, applyStyles }) {
  return (
    <>
      <div key={tileKey} className={applyStyles}>
        {char}
      </div>
    </>
  );
}

export default Tile;

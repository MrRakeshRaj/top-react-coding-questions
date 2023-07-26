import Tile from "./Tile";

const WORD_LENGTH = 5;

function Row({ guess, rowkey }) {
  const tiles = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    tiles.push(<Tile key={i} tileKey={i} char={char} />);
  }
  return (
    <>
      <div
        key={rowkey}
        className="row flex flex-row justify-center items-center gap-3"
      >
        {tiles}
      </div>
    </>
  );
}

export default Row;

import Tile from "./Tile";

const WORD_LENGTH = 5;

function Row({ guess }) {
  const tiles = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    tiles.push(<Tile char={char} />);
  }
  return (
    <>
      <div className="row flex flex-row justify-center items-center gap-3">
        {tiles}
      </div>
    </>
  );
}

export default Row;

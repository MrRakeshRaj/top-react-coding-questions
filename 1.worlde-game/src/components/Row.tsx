import Tile from "./Tile";

const WORD_LENGTH = 5;

function Row({ guess, rowKey, isFinal, solution }) {
  const tiles = [];
  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];
    let applyStyles =
      "tile border-black border-2 border-solid w-10 h-10 rounded-lg uppercase text-2xl flex justify-center items-center";
    if (isFinal) {
      if (char === solution[i]) {
        applyStyles += " bg-green-500";
      } else if (solution.includes(char)) {
        applyStyles += " bg-yellow-500";
      } else {
        applyStyles += " bg-gray-400";
      }
    }

    tiles.push(
      <Tile key={i} applyStyles={applyStyles} tileKey={i} char={char} />
    );
  }
  return (
    <>
      <div
        key={rowKey}
        className="row flex flex-row justify-center items-center gap-3 "
      >
        {tiles}
      </div>
    </>
  );
}

export default Row;

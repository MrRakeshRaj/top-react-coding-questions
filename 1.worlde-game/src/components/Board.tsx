import { useEffect, useState } from "react";
import { words } from "../words";
import Row from "./Row";

function Board() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));

  useEffect(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    setSolution(word);
  }, []);
  return (
    <div className="board flex flex-col gap-3 animate__animated animate__slideInLeft">
      {guesses.map((guess) => (
        <Row guess={guess ?? ""} />
      ))}
    </div>
  );
}

export default Board;

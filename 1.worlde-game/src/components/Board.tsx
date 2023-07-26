import { useEffect, useState } from "react";
import { words } from "../words";
import Row from "./Row";

function Board() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    setSolution(word.toLowerCase());
    console.log(word);
  }, []);

  useEffect(() => {
    if (isGameOver) return;

    const handleType = (e) => {
      if (e.key === "Enter") {
        if (currentGuess.length != 5) return;

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex((val) => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");

        const isCorrect = currentGuess === solution;
        if (isCorrect) {
          setIsGameOver(true);
          return;
        }
      }

      if (e.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }

      if (currentGuess.length >= 5) return;
      setCurrentGuess((oldguess) => oldguess + e.key);
    };

    window.addEventListener("keydown", handleType);

    return () => {
      window.removeEventListener("keydown", handleType);
    };
  }, [currentGuess, solution, guesses, isGameOver]);

  return (
    <div className="board flex flex-col gap-3 animate__animated animate__slideInLeft">
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === guesses.findIndex((val) => val == null);
        return (
          <Row
            solution={solution}
            isFinal={!currentGuess && guess != null}
            key={i}
            rowKey={i}
            guess={isCurrentGuess ? currentGuess : guess ?? ""}
          />
        );
      })}
    </div>
  );
}

export default Board;

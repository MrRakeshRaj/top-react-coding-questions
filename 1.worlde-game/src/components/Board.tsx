import { useEffect, useState } from "react";
import { words } from "../words";
import Row from "./Row";

const WORD_LENGTH = 5;
const NUM_OF_GUESSES = 6;

function Board() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  // const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    setSolution(word.toLowerCase());
    console.log(word);
  }, []);

  useEffect(() => {
    if (!solution) return;

    const handleType = (e) => {
      if (guesses.includes(solution) || guesses[NUM_OF_GUESSES - 1] != null)
        return;

      const charCode = e.key.toLowerCase().charCodeAt(0);
      const isLetter =
        e.key.length === 1 &&
        charCode >= "a".charCodeAt(0) &&
        charCode <= "z".charCodeAt(0);

      setCurrentGuess((prevGuess) => {
        if (e.key === "Enter" && prevGuess.length === WORD_LENGTH) {
          const guessesClone = [...guesses];
          guessesClone[guesses.findIndex((guess) => guess == null)] = prevGuess;
          setGuesses(guessesClone);
          return "";
        } else if (e.key === "Backspace") {
          return prevGuess.slice(0, -1);
        } else if (prevGuess.length < WORD_LENGTH && isLetter) {
          return prevGuess + e.key.toLowerCase();
        }
        return prevGuess;
      });

      // if (e.key === "Enter") {
      //   if (currentGuess.length != 5) return;

      //   const newGuesses = [...guesses];
      //   newGuesses[guesses.findIndex((val) => val == null)] = currentGuess;
      //   setGuesses(newGuesses);
      //   setCurrentGuess("");

      //   const isCorrect = currentGuess === solution;
      //   if (isCorrect) {
      //     setIsGameOver(true);
      //     return;
      //   }
    };

    window.addEventListener("keydown", handleType);

    return () => {
      window.removeEventListener("keydown", handleType);
    };
  }, [solution, guesses]);

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

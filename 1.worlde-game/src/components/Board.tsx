import { useEffect, useState, useRef } from "react";
import { words } from "../words";
import Row from "./Row";

const WORD_LENGTH = 5;
const NUM_OF_GUESSES = 6;

function Board() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const message = useRef("Start guessing...");

  useEffect(() => {
    const word = words[Math.floor(Math.random() * words.length)];
    setSolution(word.toLowerCase());
    console.log(word);
  }, []);

  useEffect(() => {
    if (!solution) return;

    const handleType = (e) => {
      message.current = "";
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
          const isCorrect = prevGuess === solution;
          if (isCorrect) {
            message.current = "You Won!!!";
          }
          return "";
        } else if (e.key === "Backspace") {
          return prevGuess.slice(0, -1);
        } else if (prevGuess.length < WORD_LENGTH && isLetter) {
          return prevGuess + e.key.toLowerCase();
        }
        return prevGuess;
      });
    };

    window.addEventListener("keydown", handleType);

    return () => {
      window.removeEventListener("keydown", handleType);
    };
  }, [solution, guesses]);

  if (guesses[NUM_OF_GUESSES - 1] != null)
    message.current = `You Lost!!!. The word was '${solution.toUpperCase()}'.`;

  return (
    <>
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
      <div className="flex justify-center items-center m-4 p-4 animate__animated animate__zoomIn animate__delay-1s">
        <h3 className="text-lg font-medium">{message.current}</h3>
      </div>
    </>
  );
}

export default Board;

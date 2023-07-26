# Wordle Game

In Wordle, there is a secret five-letter word. The player has six tries and must guess different five-letter words to see how close they are to the secret word.


<img width="391" alt="wordle board" src="https://github.com/MrRakeshRaj/top-react-coding-questions/assets/76464379/f0dc2c32-45ff-4c7b-a67b-83c41211682a">

After the player submits a guess, Wordle uses colors to tell the player how close they are to the secret word. If a letter has the color yellow, it means that the letter is in the secret word, but in the wrong position.

The green color tells the user that the letter is in the secret word and in the right position, while the grey color tells the player that the letter is not in the word.

<img width="526" alt="wordle rules" src="https://github.com/MrRakeshRaj/top-react-coding-questions/assets/76464379/edf96360-549b-4a7f-904f-df776bb86406">

## Screencast

https://github.com/MrRakeshRaj/top-react-coding-questions/assets/76464379/f68252d9-3297-4867-93a0-b2b19f4ef642

https://github.com/MrRakeshRaj/top-react-coding-questions/assets/76464379/02da95fe-0108-40bc-bb73-402a0bdd160f


## Tech Stack Used
React, Vite, Typescript, Tailwind CSS, Animate CSS

## Deployment
View my deployment on Netlify => [Live Demo]().

## Explanation

1. Setting up Developement Server 
The project uses the Vite build tool via the Command Line Interface (CLI) for scaffolding. 
NPM Package must be installed to create one. Open your terminal and run the following command:
```
npm create vite@latest
```

2. Creating Board UI

<img width="400" alt="wordle board ui" src="https://github.com/MrRakeshRaj/top-react-coding-questions/assets/76464379/d2acd7a9-1d17-483e-86c0-44b5c124511a">

```
const [guesses, setGuesses] = useState(Array(6).fill(null));

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
```

First I have divided the UI into 3 parts mainly
Board > 6 Rows (for 6 attempts) > Tiles (each row having 5 input boxes)

To render the board with five boxes in each of the six rows using HTML elements, use nested loops to iterate and create the elements. Finally, append them to the board. here I have used map method for the same.

3. Adding the Keyboard and Listening to Keyboard Input
we can listen to keyboard events using window object with addEventListener.

```
window.addEventListener("keydown", handleType);
   
window.removeEventListener("keydown", handleType);
```

5. Evaluating the Player’s Guess. 
Once the UI gets loaded, next we need to handle type events on the keyboard

cases:
- ensure user only types alphabets from a-z
- if user clicks the Enter button, check if the guess has been made and based on that change the class name for that particular tile
- if user clicks on backspace remove the entered character from the tile
- if user types anything other than the above mentioned keys, do nothing

Crux of the project:
- When handling key presses we can detect backspace with 'event.key' of "Backspace" and detect enter with 'event.key' of "Enter"
- Consider keeping 3 pieces of state, the solution, the current guess and the array of finalized gusses.

```
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
```

```
const charCode = e.key.toLowerCase().charCodeAt(0);
const isLetter =
        e.key.length === 1 &&
        charCode >= "a".charCodeAt(0) &&
        charCode <= "z".charCodeAt(0);
```
the above code determines if the user entered a char from a-z


6. Setting CSS colors for the tiles
```
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
```
getting each char from the guess array and checking the same with solution string and respectively giving the class names.

## Setup

To run the Weather App locally on your machine, follow these steps:

1. Make sure you have Node.js installed on your machine.
2. Clone this repository or download the source code.

```
https://github.com/MrRakeshRaj/top-react-coding-questions.git
```
3. Open a terminal and navigate to the project directory.

```
cd 1.wordle-game
```
4.Run the following command to install the project dependencies:

```
npm install
```

5.Start the development server with the following command:
```
npm run dev
```
6. Open the app in your browser:
- Open http://localhost:5173/ in your preferred browser.
- The wordle App should now be running and accessible in your browser.

## Usage
- Upon opening the application, the user is presented with the wordle board.
- The User can start typing on the keyboard for guessing the word
- Once the guess is made and Enter is pressed the Row displays the color based on the match with the solution as mentioned
- The User can continue guessing the solution.
- I user exhuasts all the rows by filling the guesses then, game ends and the the user loses the game. if the correct guess is made then game ends and the user wins the game.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## External Links
- [How to setup tailwind CSS in raect vite project](https://www.freecodecamp.org/news/how-to-install-tailwindcss-in-react/)
- [How to use Animate CSS in React](https://animate.style/)

## License
This project is licensed under the [MIT License](https://github.com/MrRakeshRaj/top-react-coding-questions/blob/main/LICENSE).



  




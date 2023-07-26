import "animate.css";
import Board from "./Board";

function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center animate__animated animate__slideInRight m-10 p-10">
        WORDLE
      </h1>
      <Board />
    </>
  );
}

export default Home;

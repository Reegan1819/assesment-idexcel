import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Assesments from "./Assements";

const choices = ["rock", "paper", "scissors"];

function getRandomChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a Tie!";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You Win!";
  }

  return "Computer Wins!";
}

function App() {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const handlePlayerChoice = (choice) => {
    const computerSelection = getRandomChoice();
    const gameResult = getWinner(choice, computerSelection);

    setPlayerChoice(choice);
    setComputerChoice(computerSelection);
    setResult(gameResult);
  };
  return (
    <div className="game-container">
      <h1>Stone, Paper, Scissors</h1>
      <div className="choices">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handlePlayerChoice(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      {playerChoice && computerChoice && (
        <div className="results">
          <p>
            You chose:{" "}
            <strong>
              {playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}
            </strong>
          </p>
          <p>
            Computer chose:{" "}
            <strong>
              {computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}
            </strong>
          </p>
          <h2>{result}</h2>
        </div>
      )}
      <div>
        <Assesments />
      </div>
    </div>
  );
}

export default App;

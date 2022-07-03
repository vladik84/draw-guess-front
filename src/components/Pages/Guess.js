import React, { useState, useRef } from "react";

const Guess = (props) => {
  const [userGuess, setUserGuess] = useState("");
  const [isCorrectGuess, setIsCurrectGusee] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const userGuessHandler = (event) => {
    setUserGuess(event.target.value);
  };

  const submitHandler = () => {
    setIsCurrectGusee(userGuess === props.drawData.word);
    setErrorMessage("try again!");
    setUserGuess("");
  };

  return (
    <div>
      {!isCorrectGuess && (
        <div>
          <h4>Guess the drawing</h4>
          <p>{errorMessage}</p>
          <input type="text" value={userGuess} onChange={userGuessHandler} />
          <button onClick={submitHandler}>Click</button>
          <div>
            <img src={props.drawData.draw} />
          </div>
        </div>
      )}
      {isCorrectGuess && <h4>You guessed the word! ({props.drawData.word})</h4>}
    </div>
  );
};

export default Guess;

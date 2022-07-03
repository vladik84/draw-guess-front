import React, { useState, useRef } from "react";
import SelectWord from "./SelectWord";
import CanvasDraw from "react-canvas-draw";
import { postDraw} from "../axios/axiosFunctions";

const Game = (props) => {
  const canvasRef = useRef();
  const [playerSelection, setPlayerSelection] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [drawing, setDrawing] = useState();
  const [isDrawed, setIsDrawed] = useState(false);

  const wordSelectedHandler = (selectedWord) => {
    setPlayerSelection(selectedWord);
    setIsSelected(true);
  };

  const getDrawingHandler = () => {
    const draw = canvasRef.current.canvasContainer.childNodes[1].toDataURL();
    setDrawing(draw);
    setIsDrawed(true);
    canvasRef.current.clear();
    props.onPlayerFinishDrawing([draw, playerSelection]);
    postDraw(props.gameId, draw, playerSelection);
  };

  return (
    <div>
      {!isDrawed && (
        <div>
          {!isSelected && (
            <div>
              <h2>Select a word to draw:</h2>
              <SelectWord onSelectWord={wordSelectedHandler} />
            </div>
          )}
          {isSelected && (
            <div>
              <h2>Please draw: {playerSelection}</h2>
              <CanvasDraw brushRadius={2} ref={canvasRef} />
              <button onClick={getDrawingHandler}>Submit drawing</button>
            </div>
          )}
        </div>
      )}
      {isDrawed && (
        <div>
          <h2>please wait for the other player to guess...</h2>
        </div>
      )}
    </div>
  );
};

export default Game;

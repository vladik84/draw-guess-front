import React, { useState, useMemo} from "react";

const SelectWord = (props) => {

  var eazy = require("random-words");
  var medium = require("random-words");
  var hard = require("random-words");

  var firstWord = useMemo( () => eazy({ exactly: 1, minLength: 3, maxLength: 4 }), []);
  var secondWord = useMemo ( ()=> medium({ exactly: 1, Length: 5 }),[]);
  var thirdWord = useMemo (()=>hard({ exactly: 1, minLength: 6 }),[]);

  const [isSelected, setIsSelected] = useState(false);
  const [playerSelection, setPlayerSelection] = useState("");

  const selectedHandler = (event) => {
    setIsSelected(true);
    setPlayerSelection(event.target.value);
    props.onSelectWord(event.target.value);
  };

  return (
    <div>
      {!isSelected && (
        <div>
          <button onClick={selectedHandler} value={firstWord}>
            {firstWord}
          </button>
          <button onClick={selectedHandler} value={secondWord}>
            {secondWord}
          </button>
          <button onClick={selectedHandler} value={thirdWord}>
            {thirdWord}
          </button>
        </div>
      )}
      {isSelected && <h3>Please draw: {playerSelection}</h3>}
    </div>
  );
};

export default SelectWord;

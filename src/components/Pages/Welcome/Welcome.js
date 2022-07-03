import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { postConnect } from "../../axios/axiosFunctions";


const Welcome = (props) => {

  const navigate = useNavigate();

   async function startGame() {
    const gameData = await postConnect();
    console.log(gameData);
    const role = gameData.players == 1 ? "drawing" : "guessing";
  
    navigate(`/game?gameId=${gameData.gameId}&role=${role}`);

  }
  const startClickHandler =()=>{
    props.handler();
  };

  return (
    <div>
        <h1>Welcome to our Draw And Guess game!</h1>
        <button onClick={() =>{startGame()}}>Click to start</button>
        
    </div>
  );
};

export default Welcome;

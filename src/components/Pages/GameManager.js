import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getPlayers, getDraw } from "../axios/axiosFunctions";
import { useQuery } from "react-query";
import Draw from "./Draw";
import Guess from "./Guess";

function useQueryParams() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const GameManager = () => {
  const [isFinishedDrawing, setIsFinishedDrawing] = useState(false);
  const [playerDrawing, setPlayerDrawing] = useState();
  const [playerSelection, setPlayerSelection] = useState("");

  const onFinishDrawingHandler = (props) => {
    setPlayerDrawing(props[0]);
    setPlayerSelection(props[1]);
    setIsFinishedDrawing(true);
  };

  const params = useQueryParams();
  const role = params.get("role");
  const gameId = params.get("gameId");
  const { data } = useQuery("players", () => getPlayers(gameId), {
    refetchInterval: 2000,
  });
  const { data: drawData } = useQuery("data", () => getDraw(gameId), {
    refetchInterval: 2000,
  });

  return (
    <div>
      {data && data.players === 1 && <div>waiting</div>}
      {data && data.players === 2 && role === "drawing" && (
        <Draw onPlayerFinishDrawing={onFinishDrawingHandler} gameId={gameId} />
      )}
      {data && data.players === 2 && role === "guessing" && (
        <Guess drawData={drawData} />
      )}
    </div>
  );
};

export default GameManager;

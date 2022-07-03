import axios from "axios";

export const getPlayers = (gameId) => {
  const Url = "/games/" + gameId.toString() + "/players";
  return axios.get(Url).then((response) => response.data);
};

export const postConnect = () => {
  return axios({
    method: "post",
    url: "/connect",
  }).then((response) => response.data);
};

export const postDraw = (gameId, drawing, selectedWord) => {
  axios({
    method: "post",
    url: `/games/${gameId}/draw`,
    data: {
      draw: drawing,
      word: selectedWord,
    },
  });
};

export const getDraw = (gameId) => {
  const Url = `/games/${gameId}/draw`;
  return axios.get(Url).then((response) => response.data);
};

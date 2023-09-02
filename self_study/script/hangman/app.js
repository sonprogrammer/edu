// import "./app.css";
import "../../css/hangman/app.css"
import {
  initializeState,
  initialState,
  startGame,
  decreaseTimer,
  selectCharacter,
  checkGameStatus,
  setWordLoading,
} from "./state";
import { render } from "./components.js";
import { GameStatus, fetchWord, isGameEnded } from "./util.js";
import { fetchAllImages } from "./image-util.js";

const App = () => {
  let state = { ...initialState };
  let imageSources = null;

  function changeState(callback) {
    state = callback(state);
    render(state, onClickItem, onClickStart, imageSources);
  }

  function initializeData() {
    return fetchAllImages().then((images) => {
      imageSources = images;
    });
  }

  function onClickItem(c) {
    changeState((state) => selectCharacter(state, c));
  }

  function onClickStart() {
    if (state.wordLoading) return;

    changeState((state) => setWordLoading(state, true));

    fetchWord().then((word) => {
      const intervalId = setInterval(() => {
        if (isGameEnded(state.gameStatus)) {
          clearInterval(intervalId);
          return;
        }

        changeState((state) => checkGameStatus(decreaseTimer(state)));
      }, 1000);

      changeState((state) =>
        startGame(initializeState(setWordLoading(state, false), word))
      );
    });
  }

  initializeData().then(() =>
    render(state, onClickItem, onClickStart, imageSources)
  );
};

export default App;

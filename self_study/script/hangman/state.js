import { GameStatus, wordToMap } from "./util.js";

export const initialState = {
  enteredCharacters: {},
  charMap: {},
  wordArr: [],
  charsLeft: 0,
  chancesLeft: 7,
  timer: 60,
  gameStatus: GameStatus.READY,
  wordLoading: false,
};

export function startGame(state) {
  return { ...state, gameStatus: GameStatus.START };
}

export function initializeState(state, word) {
  const charMap = wordToMap(word);
  const wordArr = Array.from({ length: word.length }).map((_, idx) =>
    word[idx] === " " ? " " : "*"
  );
  const charsLeft = Object.keys(charMap).length - 1;

  return {
    ...initialState,
    charMap,
    wordArr,
    charsLeft,
    gameStatus: GameStatus.START,
  };
}

export function decreaseTimer(state) {
  return { ...state, timer: state.timer - 1 };
}

export function checkGameStatus(state) {
  if (state.charsLeft === 0) {
    return { ...state, gameStatus: GameStatus.WIN };
  } else if (state.chancesLeft === 0 || state.timer === 0) {
    return { ...state, gameStatus: GameStatus.LOSE };
  }

  return state;
}

export function selectCharacter(state, enteredCharacter) {
  const enteredCharacters = {
    ...state.enteredCharacters,
    [enteredCharacter]: true,
  };

  if (!state.charMap[enteredCharacter]) {
    const chancesLeft = state.chancesLeft - 1;
    const gameStatus = chancesLeft === 0 ? GameStatus.LOSE : state.gameStatus;

    return {
      ...state,
      chancesLeft,
      gameStatus,
      enteredCharacters,
    };
  }

  const wordArr = [...state.wordArr];
  state.charMap[enteredCharacter].forEach((i) => {
    wordArr[i] = enteredCharacter;
  });
  const charsLeft = state.charsLeft - 1;
  const gameStatus = charsLeft === 0 ? GameStatus.WIN : state.gameStatus;

  return {
    ...state,
    wordArr,
    charsLeft,
    gameStatus,
    enteredCharacters,
  };
}

export function setWordLoading(state, wordLoading) {
  return { ...state, wordLoading };
}

import { GameStatus, isGameEnded, generateGameMessage } from "./util.js";
import { calculateImageSize } from "./image-util.js";
import { h, id } from "./dom.js";

export const HangmanImage = (chancesLeft, images) => {
  const container = id("hangman-image");
  const context = container.getContext("2d");
  context.clearRect(0, 0, container.width, container.height);

  images.slice(chancesLeft).map((item, idx) => {
    context.drawImage(
      item.image,
      item.dx,
      item.dy,
      ...calculateImageSize(item.image.width, item.image.height, 70)
    );
  });
};

export const Word = (gameStatus, chancesLeft, wordArr) => {
  const container = id("word");
  container.innerHTML = "";

  if (isGameEnded(gameStatus)) {
    const message = h("p");
    message.innerText = generateGameMessage(gameStatus, chancesLeft);
    container.appendChild(message);
    return;
  }

  const wordText = h("div");
  wordText.classList.add("word-text");

  const spans = wordArr.map((c) => {
    const span = h("span");

    if (c !== " ") {
      span.classList.add("character");
    }

    span.innerText = c;
    return span;
  });

  wordText.append(...spans);
  container.appendChild(wordText);
};

export const KeyboardLayout = (gameStatus, enteredCharacters, onClickItem) => {
  const container = id("keyboard-layout");
  container.innerHTML = "";

  const ul = h("ul");
  ul.classList.add("keyboard-layout");

  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    .split("")
    .map((c) => {
      const li = h("li");
      const button = h("button");

      button.addEventListener("click", () => onClickItem(c));
      button.classList.add("keyboard-button");
      button.innerText = c;
      button.disabled = isGameEnded(gameStatus) || enteredCharacters[c];

      li.appendChild(button);
      return li;
    })
    .forEach((node) => ul.appendChild(node));

  container.appendChild(ul);
};

export const ButtonBox = (
  wordLoading,
  gameStatus,
  chancesLeft,
  timer,
  onClickStart
) => {
  const container = id("button-box");
  container.innerHTML = "";

  // chances text
  const chances = h("div");
  chances.classList.add("chances-text");
  chances.innerText = `Chances: ${chancesLeft}`;

  // timer
  const timerText = h("div");
  timerText.classList.add("timer-text");
  timerText.innerText = timer;

  // Game start button
  const button = h("button");
  button.classList.add("start-button");
  button.innerText = "START";
  button.disabled = wordLoading || !isGameEnded(gameStatus);
  button.addEventListener("click", onClickStart);

  container.append(chances, timerText, button);
};

export function render(state, onClickItem, onClickStart, imageSources) {
  KeyboardLayout(state.gameStatus, state.enteredCharacters, onClickItem);
  Word(state.gameStatus, state.chancesLeft, state.wordArr);
  ButtonBox(
    state.wordLoading,
    state.gameStatus,
    state.chancesLeft,
    state.timer,
    onClickStart
  );
  HangmanImage(state.chancesLeft, imageSources);
}

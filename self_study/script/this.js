
import this2 from "this2.js";

const App = () => {
  const nameInput = document.getElementById("name");
  const amountInput = document.getElementById("amount");

  const setNameButton = document.getElementById("set-name-button");
  const saveButton = document.getElementById("save-button");
  const withdrawButton = document.getElementById("withdraw-button");
  const result = document.getElementById("result");

  setNameButton.addEventListener("click", () => {
    this2.changeName(nameInput.value);
    result.innerHTML = JSON.stringify(this2, null, 2);
  });

  saveButton.addEventListener("click", () => {
    this2.saveMoney(Number(amountInput.value));
    result.innerHTML = JSON.stringify(this2, null, 2);
  });

  withdrawButton.addEventListener("click", () => {
    this2.withdrawMoney(Number(amountInput.value));
    result.innerHTML = JSON.stringify(this2, null, 2);
  });
};

export default App;

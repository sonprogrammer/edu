

const Form = () => {
  const form = document.getElementById("input-form");
  const button = document.getElementById("form-button");
  const result = document.getElementById("result-text");

  button.addEventListener("click", (e) => {
    const formData = formDataToObject(new FormData(form));
    const { variableCost, expense, revenue } = formData;
    const amount = calculateCompoundInterest(variableCost, expense, revenue);
    result.innerText = `손익분기점 매출액은\n${amount}원 입니다.`;
  });
  result.innerText = "";
};

function calculateCompoundInterest(variableCost, expense, revenue) {
  const result = expense / (1 - variableCost / revenue);

  return Math.floor(result).toLocaleString("ko-KR");
}

function formDataToObject(formData) {
  return Array.from(formData.entries()).reduce(
    (acc, [k, v]) => ((acc[k] = Number(v)), acc),
    {}
  );
}

const app = () => {
  Form();
};


const run = () => {
    window.addEventListener("DOMContentLoaded", () => {
      app();
    });
  };
  
  run();
  
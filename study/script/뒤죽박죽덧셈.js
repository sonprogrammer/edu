//(연산자1)N(연산자2) 
// N이 5배수이면 연산자1만큼 N을 출력
// N이 3배수이면 연산자2만큼 N을 출력

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var s;

rl.on("line", function (line) {
  s = line.split("");

  rl.close();
}).on("close", function () {
  var o1 = s[0]; // 연산자 1
  var o2 = s[s.length - 1]; // 연산자 2
  s.pop();
  s.shift();
  s = s.join("");

  var num = parseInt(s); // 연산자가 아닌 숫자 부분

  // 조건에 맞추어 코딩해주시면 됩니다.
  if(num % 3 == 0 && num % 5 !== 0){
      document.write(num * o1)
  }else if(num % 3 !== 0 && num % 5 == 0){
      document.write(num * o2)
  }
});

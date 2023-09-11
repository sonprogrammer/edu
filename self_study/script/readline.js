// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하세요.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputLines = [];
let count = 0; // 입력 횟수를 카운트하기 위한 변수

rl.on('line', (line) => {
    count += 1;

    if (count === 1) {
        // 첫 번째 입력: N을 받아서 입력받을 줄 수로 설정
        const N = parseInt(line);
        inputLines = new Array(N);
    } else if (count <= inputLines.length + 1) {
        // 두 번째 이후 입력: 문자열을 배열에 저장
        inputLines[count - 2] = line;
    }

    if (count === inputLines.length + 1) {
        // 모든 입력이 완료되면 입력된 문자열을 합쳐서 출력
        const result = inputLines.join('');
        console.log(result);
        rl.close(); // 입력 종료
    }
});

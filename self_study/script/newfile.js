const readline = require("readline");
const rl = readline.createInterface(
    {input: process.stdin, output: process.stdout}
);
let line = 0;
let n;
let s = [];
rl
    .on("line", function (x) {
        if (line === 0) { // 파일의 개수 n 저장
            n = parseInt(x);
        } else if (line === n) {
            s.push(x); // 마지막 문자열 저장
            fileName(s); // 함수 호출
            rl.close();
        } else { // line이 n이 아닐때까지 입력 받음
            s.push(x);
        }
        line++;

    })
    .on("close", function () {
        process.exit();
    });
function fileName(file) {
    let newFile = [];
    for (var i = 0; i < file.length; i++) { // 각 파일에 접근
        var newName = ""; // 수정한 문자열 저장할 변수
        for (var j = 0; j < file[i].length; j++) { // 각 파일 문자열에 접근
            if (j === 0) { // 1st char
                newName += file[i]
                    .charAt(0)
                    .toUpperCase(); //대문자로 변경하고 newName에 추가
            } else {
                newName += file[i]
                    .charAt(j)
                    .toLowerCase(); //소문자로 변경하고 newName에 추가
            }
        }
        newFile.push(newName); // 수정한 이름 배열 newFile에 저장
    }
    console.log(newFile.join("\n")); // newline으로 배열 출력
}
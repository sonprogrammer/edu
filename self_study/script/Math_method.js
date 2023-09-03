Math.max(1, 2, 3); // 3

// 배열 요소 중에서 최대값 취득
// max()  인수로 배열을 받을 수 없으니, 배열을 인수로 받는 apply를 사용
const arr = [1, 2, 3];
const max = Math.max.apply(null, arr); // 3
// ES6 문법
Math.max(...arr); // 3
[...rest] = [1,2,4]; // rest = [1,2,4]
Math.max(...rest); //4
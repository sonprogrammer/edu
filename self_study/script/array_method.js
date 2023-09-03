// // 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
// const arr1 = Array.of(1);
// console.log(arr1); // // [1]

// const arr2 = Array.of(1, 2, 3);
// console.log(arr2); // [1, 2, 3]

// const arr3 = Array.of('string');
// console.log(arr3); // 'string'



// const items1 = [1, 2, 3, 4];

// // items[1]부터 2개의 요소를 제거하고 제거된 요소를 배열로 반환
// const res1 = items1.splice(1, 2);

// // 원본 배열이 변경된다.
// console.log(items1); // [ 1, 4 ]
// // 제거한 요소가 배열로 반환된다.
// console.log(res1);   // [ 2, 3 ]

// -------------------------------------------

const items2 = [1, 2, 3, 4];

// items[1]부터 모든 요소를 제거하고 제거된 요소를 배열로 반환
const res2 = items2.splice(1);

// 원본 배열이 변경된다.
console.log(items2); // [ 1 ]
// 제거한 요소가 배열로 반환된다.
console.log(res2);   // [ 2, 3, 4 ]
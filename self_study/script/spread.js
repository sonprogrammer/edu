// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// const arrWrap = [...arr1, ...arr2, ...arr3];

// console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 9]



const strings = 'abcdefg'; 

const strings2 = {...strings}
console.log(strings2) // {0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g'}

const strings3 = [...strings]
console.log(strings3) // (7) ['a', 'b', 'c', 'd', 'e', 'f', 'g']
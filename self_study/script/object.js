let obj = {
    a: 1,
    b: 2,
    c: 3
}

Object.defineProperty(obj, 'b', { enumerable: false }); // b속성을 순회불가능하게 설정

console.log(Object.keys(obj)); // ['a', 'c']
console.log(Object.getOwnPropertyNames(obj)); // ['a', 'b', 'c']
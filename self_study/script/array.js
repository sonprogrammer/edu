
                                //1. 배열 자르기 
// var arr = [1, true, "Java"];

// // push() 메소드를 이용하는 방법
// arr.push("Script"); 
// console.log(arr + "<br>"); // 1,true,Java,Script

// // length 프로퍼티를 이용하는 방법
// arr[arr.length] = 100; 
// console.log(arr + "<br>"); // 1,true,Java,Script,100

// // 특정 인덱스를 지정하여 추가하는 방법
// arr[10] = "자바스크립트"; 
// console.log(arr + "<br>"); // 1,true,Java,Script,100,,,,,,자바스크립트

// // 배열의 홀(hole)
// console.log(arr); // undefined

// delete arr[10]

// console.log(arr); 

// arr.splice(2, 1)// splice(start index, 삭제할 요소 수)
// console.log(arr); 



// let fruits = ['사과', '바나나', '체리', '딸기', '포도'];

// //배열 요소 삭제하기
// let selectedFruits = fruits.splice(0, 1); // splice(시작인덱스, 삭제할 요소 수)
// // 체리삭제됨, 삭제한 요소들을 새 배열로 반환함
// console.log(selectedFruits); // ['바나나', '체리', '딸기']
// console.log(fruits); // 원본 배열은 변경되지 않음: ['사과', '바나나', '체리', '딸기', '포도']

// selectedFruits = fruits.slice(1, 3) // 인덱스 1부터 4까지의 요소를 추출, 추출할것을 x라 두면 1 <= x < 2이거다 그러니깐 1번 인덱스만 나온다
// // slice(start index, end index)
// // slice는 배열의 일부를 추출하여 새 배열로 반환함
// console.log(selectedFruits)
// console.log(fruits)


                            // 2. 배열요소 정렬하기 
// sort(): 배열의 요소를 정렬
// let arr = [3, 1, 4, 2, 5];
// arr.sort();
// console.log(arr); // [1, 2, 3, 4, 5]

// // reverse(): 배열의 요소를 역순으로 정렬
// let arr2 = [1, 2, 3, 4, 5];
// arr2.reverse();
// console.log(arr2); // [5, 4, 3, 2, 1]


                            // 3. 배열 여부 확인하기

// var arr = [1, true, "JavaScript"]; // 배열 생성
// console.log(typeof arr); // object

// console.log(Array.isArray(arr));    //배열확인 맞으면 true, 아니면 false를 반환
// console.log(Array.isArray('문자열'));    //false

//다른 방법
// console.log(arr instanceof Array)   //배열 맞으면 true, 아니면 false



                            // 4. 다차원 배열

// 2차원 배열
// const twoDimensionalArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   // 1행 2열의 값 가져오기
//   const value = twoDimensionalArray[0][1];
//   console.log(value); // 2
  
  
//   // 3차원 배열
//   const threeDimensionalArray = [
//     [
//       [1, 2],
//       [3, 4]
//     ],
//     [
//       [5, 6],
//       [7, 8]
//     ]
//   ];
  
//   // 1번째 배열의 2번째 배열의 1번째 값 가져오기
//   const value2 = threeDimensionalArray[0][1][0];
//   console.log(value2); // 3

//   //다차원 배열 추가
//   let animals = [
//     ["고양이", 1],
//     ["강아지", 2],
//     ["개구리", 3],
//  ];
 
//  animals.push(["코끼리", 4]);
 
//  console.log(animals);
//  /*
//  [
//     ["고양이", 1],
//     ["강아지", 2],
//     ["개구리", 3],
//     ["코끼리", 4]
//  ]
//  */
// animals.pop(); // 상위 배열 맨 끝 요소 삭제
// animals.shift(); // 상위 배열 맨 앞 요소 삭제
// animals.splice(2,2); // 상위 배열 인덱스[2] 요소부터 2개 자식 배열을 삭제
// console.log(animals)

// let abc =['a','b','c']

// abc.shift()//a제거(배열 맨앞요소 제거)
// console.log(abc) //[ 'b', 'c' ]
// abc.unshift('d') //d생성(배열 맨앞에 요소 생성)
// console.log(abc) //[ 'd', 'b', 'c' ]

// let fruits = ["사과", "오렌지", "배"];

// fruits.pop() //맨뒤요소 '배'제거
// console.log(fruits) //[ '사과', '오렌지' ]

// fruits.push('포도') //맨뒤에 포도 생성
// console.log(fruits) //[ '사과', '오렌지', '포도' ]



                            // 문자열 배열
let str = "안녕하세요"

console.log(str[1]) //녕 출력

str.split('') //음절단위로 쪼개어 배열로 반환
console.log(str.split(''))
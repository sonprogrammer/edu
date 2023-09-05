//인수 없을 때
// const date = new Date()

// console.log(date) 현재 시간 반환

//인수 있을 때
// let date = new Date('May 16, 2023 17:22:10');
// console.log(date); // Thu May 16 2023 17:22:10 GMT+0900 (한국 표준시)

// date = new Date('2019/05/16/17:22:10');
// console.log(date); // Thu May 16 2019 17:22:10 GMT+0900 (한국 표준시)


//new 연산자 없이 호출
// let date = Date()
// let date1 = new Date();

// console.log(date)   //현재 시간 출력 - 문자열로
// console.log(date1)   //현재 시간 출력 - 문자열로

// console.log(typeof date) //string
// console.log(typeof date1) //object


// const today = new Date();

// console.log(today) //현재 시간 출력
// // 년도 지정
// today.setFullYear(2000);

// console.log(today);
// console.log(today.getFullYear());  // 년도만 2000년이고 나머지는 현재시간이랑 일치

// // 년도 월 일 지정
// today.setFullYear(1900, 0, 1);

// console.log(today); 
// console.log(today.getFullYear());  // 1900


// const d = new Date('2019/5/16/18:30');

// console.log(d.toString());     // Thu May 16 2019 18:30:00 GMT+0900 (한국 표준시)
// console.log(d.toDateString()); // Thu May 16 2019
// console.log(d.toTimeString()); // 18:30:00 GMT+0900 (한국 표준시)




//현재 날짜와 시간을 초단워로 반복 출력하는 예제
// (function Now(){
//     const today = new Date()

//     const dayNames =['monday','tueday','wedenday','thursday','friday','saturday','sunday']

//     const day = dayNames[today.getDay()]

//     const year = today.getFullYear()
//     const month = today.getMonth() + 1
//     const date = today.getDate()
//     const hour = today.getHours()
//     const minute = today.getMinutes()
//     const second = today.getSeconds()

//     // const ampm = hour >= 12 ? 'PM' : 'AM'

//     const now = `현재 시간은 ${year}년 ${month}월 ${date}일 ${day} ${hour}: ${minute}: ${second}초이다`
    
//     console.log(now)
//     setTimeout(Now, 1000)
// })()




//몇일전 몇일 후 날짜 계산 법

const now = new Date()

console.log(`현재 시간은 ${now}이다`)

const yesterday = new Date(now.setDate(now.getMonth() - 1)) 
// 위처럼 하면 month는 1월이 0이니깐 현재 9월이면 값은 8이다 8 - 1 = 7 이니깐 now.setDate(7)로하면 일이 7일로 된다
console.log(yesterday)
// try {
//     lalala; // 에러, 변수가 정의되지 않음!
//   } catch(err) {
//     console.log(err.name); // ReferenceError
//     console.log(err.message); // lalala is not defined
    
//     console.log(err.stack); // ReferenceError: lalala is not defined at ... (호출 스택)
//   }



// function a() {
// 	console.log('a: calling b');
// 	b();
// 	console.log('a: done');
// }
// function b() {
// 	console.log('b: calling c');
// 	c();
// 	console.log('b: done');
// }
// function c() {
// 	console.log('c: throwing error');
// 	throw new Error('c error');
// 	console.log('c: done');
// }
// try {
// 	a();
// } catch (err) {
// 	console.log(err.stack);
// }



////////////////////////////////////
// try {
//     setTimeout(function() {
//        noSuchVariable; // 스크립트는 여기서 죽습니다.
//     }, 1000);
//   } catch (e) { // 스크립트는 이미 멈췄기 때문에, 비동기 환경에서 뭐가 됬든 작동 안함.
//     console.log( "작동 멈춤" );
//   }
// setTimeout(function() {
//     try {
//       noSuchVariable; // 이제 try..catch에서 에러를 핸들링 할 수 있습니다!
//     } catch {
//       console.log( "에러를 잡았습니다!" );
//     }
//   }, 1000);//정상작동


////////////////////////////////////////////////
const p = new Promise(resolve => {
    const even = parseInt(prompt('짝수를 입력하세요'));
    if (even % 2 !== 0) {
      throw new Error('짝수가 아닙니다.');
    } else {
      // 짝수면 fullfiled되어 then메소드의 첫번째 인수로 들어간 함수가 실행
      resolve(even);
    }
  });
  
  // then 콜백에서 반환된 값이 다음Promise의 값이 된다.
  p
      .then(even => {
        return '짝수입니다.'; // resolve() 됬을 경우
      })
      .catch(e => {
        return e.message; // throw 됬을 경우
      })
      .then(alert); // 앞서 리턴값을 alert의 인자값으로 대입
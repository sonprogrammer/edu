const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>{
    console.log(request, request.readyState)
})


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.send();

// 위에서 GET은 통신 방식을 의미한다  
//통신방식 종류 : GET, POST(우리가 서버에 포스트를 저장하라고 요청하는것),
//  PUT(글수정관련), PATCH(글 수정 관련), DELETE()

//naver -> https://www.naver.com
// 


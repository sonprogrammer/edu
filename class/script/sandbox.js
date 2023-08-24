const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>{
    // console.log(request, request.readyState)
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText)
    } else if(request.readyState === 4){ //readyState 가 4라는 건 통신이 완료되엇다는 뜻(파일을 찾든 못찾든)
        console.log('통신에 장애가 발생했습니다.')
    }
})


// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
request.open('GET', 'https://jsonplaceholder.typicode.com/todosㅇㄹㄹ/')    //통신장애가 발생했습니다 뜸
request.send();

// 위에서 GET은 통신 방식을 의미한다  
//통신방식 종류 : GET, POST(우리가 서버에 포스트를 저장하라고 요청하는것),
//  PUT(글수정관련), PATCH(글 수정 관련), DELETE()

//naver -> https://www.naver.com
// 


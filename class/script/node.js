//* process는 Node.js의 프로세스 정보를 얻거나 제어할 수 있는 모듈이다 

//*process는 글로벌 객체이다
//*require을 하지 않아도 사용 가능


//*process모듈 속성 및 메소드
// process.arch //*! node.js가 컴파일된 프로세서의 아키텍처

// process.argv //*!프로세서가 시작될 때 명령어와 함께 전달된 인수

// process.env //*!사용자 환경 정보를 가진 객체

// process.exit([code]) //*!프로세스 종료

// process.memoryUsage() //*!메모리 사용 정보를 가진 객체

// process.platform //*!node.js가 컴파일된 운영체제 플랫폼

// process.uptime() //*!프로세스가 실행된 시간
// process.versions //*!node.js 버전

//*서버 생성하기
const http = require('http') //*node.js에서 HTTP서버를 만들고 관리하기 위한 모듈
const fs = require('fs') //*파일 시스템과 상호작용하기 위한 모듈, 파일 읽기 등의 작업에 사용됨

// 서버를 생성
const server = http.createServer((req, res) =>{
    //*http.createServer()메서드를 사용하여 HTTP서버를 생성한다
    //*서버는 클라이언트의 요청(req)에 대한 응답(res)를 처리한다  
    
    
    //*클라이언트 요청에 대한 처리를 정의
    fs.readFile('poetry.txt','utf8', (err, data)=>{
        //*fs.readFile()함수를 사용하여 poetry.txt파일을 비동기 적으로 읽어온다 
        //*파일은 UTF-8인코딩으로 읽는다
        if(err){
            res.writeHead(500, { 'Content-Type': 'text/pain'})
            res.end('Internal Server Error')
        
            //*클라이언트에게 응답을 전송한다 
        }else{
            res.writeHead(200, { 'Content-Type': 'text/plain'})
            res.end(data)
            //*정상적인경우(200 ok)에는 res.writeHead()를 사용하여 응답 헤더를 설정
            //* HTTP 상태 코드로 200은 요청이 성공적으로 처리되었음을 의미한다 
            //*여기서는 text/plain으로 설정하여 텍스트를 응답으로 보낸다
        }
    })
})
const port = 8080

server.listen(port, () =>{
    //*server.listen()메서드를 사용하여 서버를 특정 포트에서 실행한다 
    console.log('Server is running on port ${port}')
})
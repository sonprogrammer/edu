//*기본 노드 서버를 구성할 때 Http의 기본 모듈을 사용해봄
const http = require('http') //http객체 생성

//*노드 서버에 외부 모듈인 express사용 
// const express = require('express')


const server = http.createServer((req, res) =>{ //server객체 생성
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.write('Hello node.js')
    res.end()
})

server.listen(3000, (req, res)=>{
    console.log('server is listening on 3000')
})
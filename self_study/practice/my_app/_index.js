//*기본 노드 서버를 구성할 때 Http의 기본 모듈을 사용해봄
// const http = require('http') //http객체 생성
import { createServer } from 'http';

//*노드 서버에 외부 모듈인 express사용 
// const express = require('express')


const server = createServer((req, res) =>{ //server객체 생성
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    res.write('node.js')
    res.end()
})

server.listen(3000, (req, res)=>{
    console.log('server is listening on 3000')
})
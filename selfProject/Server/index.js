const express = require('express');
const app = express();

app.get('/dog', (req, res) => { //여기서 /는 라우팅이다 쉽게 말하면 뒤에는 콜백이니깐 경로 /로 들어오면 뒤에 콜백함수를 실행해라라는 말이다 
    res.send('멍멍');
})

app.get('/cat', (req, res) => {
    res.send({'sound': '야옹'});
})

//* req.params로 하는 방법
// app.get('/user/:id', (req, res) => {
//     const q = req.params //콜론을 쓰고 변수명을 정해주면 req.params로 들어온다  
//     console.log(q.id) //q.id는 req.params.id이다 예를들어 localhost/3000/user/son하면 son이 q.id가된다 

//     res.send({'userid': q.id})
// })

//*req.query로 하는 방법
app.get('/user/:id', (req, res) => {
    const q = req.query// user/dfd?q=jocoding&name=jo&age=20
    console.log(q.name)//q.name을 하면 jocoding이 나온다 
})




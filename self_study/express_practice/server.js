const express = require('express')
const app = express()

app.listen(8080, function(){
    console.log('listening on 8080')
})


//*아래 한국어를 코딩해보기
// 누군가가 /pet으로 방문을 하면...
// pet관련된 안내문을 띄워주자

// app.get('/pet', function(요청, 응답){
//     응답.send()
// })
app.get('/pet', function(요청, 응답){
    응답.send('펫 용품을 쇼핑할 수 잇는 페이지입니다.')
})

app.get('/beauty', (req, res) => {
    res.send('it is beauty page')
})

//*html파일 띄워주기
app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})
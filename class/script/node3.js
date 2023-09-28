//*module.exports 해보기
// //./lib/mart.js
// module.exports =  shopping = (TF)=>{
//     if(TF === true){
//         for(let i = 0; i< 6; i++){
//             console.log('Buy milk')
//         }
//     }
// }

// //index.js
// var shopping = require('./lib/mart');

// shopping(true)


//* test라우터 만들기
//index.js
const express = require('express')
const midtermRouter = require('./routes/midterm')
const finalRouter = require('./routes/final')

const app = express() 
//*app은 express.js모듈에서 생성된 express애플리케이션 객체이다
//*app객체를 사용하여 애플리케이션의 라우팅을 정의하고 HTTP요청 및 응답을 처리할 수 있다

// 8080번 포트를 이용해 서버를 열고,routes 폴더에 있는 두 라우터를 등록하세요.
const port = 8080

// midterm.js는 "/midterm" 경로에, final.js는 "/final" 경로에 연결
app.use('/midterm', midtermRouter)
app.use('/final', finalRouter)

app.listen(port)

//midterm.js
// "중간고사입니다."를 출력하는 라우터를 정의하고 export하세요.
const { Router } = require('express') 
// express모듈에서 Router라는 객체를 가져오는 거임
const router = Router(); 
//가져온 Router객체를 router 변수에 집어넣음

router.get('/', (req, res) => {
    res.send('중간고사입니다.')
})

module.exports = router;

//final.js
// "기말고사입니다."를 출력하는 라우터를 정의하고 export하세요.
const { Router } = require('express')
const router = Router()

router.get('/', (req, res) =>{
    res.send('기말고사입니다.')
})

module.exports = router
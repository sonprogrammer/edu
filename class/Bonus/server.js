require('dotenv').config() //*dotenv설정
const express = require('express') //*express 라이브러리 import
const mongoose = require('mongoose') //*mongoose 라이브러리 import
const app = express()
const {
    MONGO_USER,
    MONGO_PASS,
    PORT
} = process.env
const userRouter = require('./router/userRouter')
const User = require('./models/users')

//*몽고디비 연결(아틀란스에서 Connect에 있음)
mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.9fy2rir.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('connected to MongoDB Database')
    })
    .catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// *!위는 기본적 요소이다

//* ejs세팅 -> view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')



//*라우터 세팅
app.use('/user', userRouter);


// *get요청 '/' 경로로 들어왔을 때 모든 유저를 조회해서 보내줌
app.get('/', (req, res) =>{
    User.find({}).exec().then((users) =>{
        res.render('index', { users: users})
    })
    .catch((err) => res.sendStatus(500))
})

// * 서버 실행 -> 포트연결

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

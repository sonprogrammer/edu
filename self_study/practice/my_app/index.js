import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import fs from 'fs'
import mongoose from 'mongoose'

const app = express();

const __dirname = path.resolve()

//file path
//my_app/data/writing.json
const filePath = path.join(__dirname, 'data', 'writing.json')

// body parser set
app.use(bodyParser.urlencoded({ extended: false })); // express 기본 모듈 사용
app.use(bodyParser.json());

// view engine set
app.set('view engine', 'html'); // main.html -> main(.html)

// nunjucks
nunjucks.configure('views', {
    watch: true, // html 파일이 수정될 경우, 다시 반영 후 렌더링
    express: app
})

// mongoose connect
mongoose.connect('mongodb://127.0.0.1:27017')
    .then(() =>{
        console.log('db연결 성공')
    })
    .catch(e => console.log(e))

//mongoose 세팅
const { Schema } = mongoose;

const WritingSchema = new Schema({
    title: String,
    contents: String,
    date:{
        type: Date,
        default: Date.now
    }
})

const Writing = mongoose.model('Writing', WritingSchema)

// middleware
// main page GET
app.get('/', async (req, res) => {
    // const fileData = fs.readFileSync(filePath)
    // const writings = JSON.parse(fileData)

 
    let writings = await Writing.find({})

    // console.log(writings)
    res.render('main', { list: writings });
});

app.get('/write', (req, res) => {
    res.render('write');
});

app.post('/write', async (req, res) => {
    const title = req.body.title;
    const contents = req.body.contents;


    //데이터 저장
    //Data/writing.json안에 글 내용이 저장
    // const fileData = fs.readFileSync(filePath); //파일 읽기
    // // console.log(fileData)

    // const writings = JSON.parse(fileData) //파일 변환 
    // // console.log(writings)

    // //request 데이터를 저장
    // writings.push({
    //     'title': title,
    //     'contents': contents,
    //     'date': date
    // })

    // //data/writing.json에 저장하기
    // fs.writeFileSync(filePath, JSON.stringify(writings))

    //mongodb에 저장
    const writing = new Writing({
        title: title,
        contents: contents
    })

    const result = await writing.save().then(()=>{
        console.log('success')
        res.render('detail', { 'detail': { title: title, contents: contents } });

    })
    .catch((err)=>{
        console.log(err)
        res.render('write')
    })

});

app.get('/detail/:id', async (req, res) => {
    const id = req.params.id

    const detail = await Writing.findOne({ _id: id})
        .then((result)=>{
            res.render('detail', {'detail': detail})
        })
        .catch((err)=>{
            console.error(err)
        })
    // res.render('detail');
})

app.get('/edit/:id', async (req, res) => {
    const id = req.params.id;

    const edit = await Writing.findOne({ _id: id }).then((result) => {
        res.render('detail', { 'edit': result })
    }).catch((err) => {
        console.error(err)
    })
})

app.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const contents = req.body.contents;

    const edit = await Writing.replaceOne({ _id: id }, { title: title, contents: contents }).then((result) => {
        console.log('update success')
        res.render('detail', { 'detail': { 'id': id, 'title': title, 'contents': contents } });
    }).catch((err) => {
        console.error(err)
    })
})

app.post('/delete/:id', async(req, res)=>{
    const id = req.params.id;
    const delete_content = await Writing.deleteOne({ _id: id})
        .then(()=>{
            console.log('delete success')
            res.redirect('/')
        }).catch((err) =>{
            console.error(err)
        })
})

app.listen(3000, () => {
    console.log('Server is running');
});
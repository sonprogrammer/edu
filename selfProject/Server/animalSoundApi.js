const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/sound/:name', (req, res) => {
    // const p = req.params
    // p.name
    const { name } = req.params //*여기서 중괄호 안에 name을 쓰면 req.params했던거에서 name이 바로 들어온다 안그럼 위처럼해야함
    console.log(name)
    if(name == "dog"){
        res.send({'soudn':'멍멍'})
        
    }else if(name == "cat"){
        res.send({'soudn':'야옹'})

    }
})

app.listen(port)
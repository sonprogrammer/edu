const express = require('express');
const ReactDOMServer = require('react-dom-server');
const React = require('react');
const App = require('./client/App').default;

const app = express();

app.use(
    express.static('public')
)

app.get('*',(req, res)=>{
    
    const html = ReactDOMServer.renderToString(<App />)
    res.send(html);

})

app.listen('3000', ()=>{
    console.log()
})
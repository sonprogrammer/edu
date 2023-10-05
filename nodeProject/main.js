var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname + url); //현재 main.js의 위치경로 + 어떤 html인지가 나옴

    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);
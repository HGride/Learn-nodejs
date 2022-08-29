const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const connectToDb = require('./DataBase/db')

const _PORT = 3000;




// Middlewears
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

// Router
const routes = require('./Routes/index.routes');
app.use(routes);


connectToDb().then(
    app.listen(_PORT, (err)=>{
        if(err) throw err;
        console.info(`Server started at http://localhost:${_PORT}`);
    })
)


/* const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.writeHead(200, {'ContentType':'text/html'});
        fs.readFile('pages/home.html',(err, data)=>{
            if (err) throw err;
            res.write(data);
            res.end()
        })
    }
    else if(req.url === "/hello"){
        res.writeHead(200, {'ContentType':'text/html'});
        fs.readFile('pages/hello.html', 'utf8',(err, data)=>{
            if (err) throw err;
            res.write(data);
            res.end()
        }) 
    }
    else {
        res.writeHead(404, {'ContentType':'text/html'});
        fs.readFile('pages/404.html',(err, data)=>{
            if (err) throw err;
            res.write(data);
            res.end()
        })        
    }
    
});

server.listen(3000, ()=>{
    console.info('Server started at http://127.0.0.1:3000/');
}) */
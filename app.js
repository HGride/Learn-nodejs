const express = require('express')
const app = express()
const _PORT = 3000


// Router
const routes = require('./routes/index.routes')

// Middlewears
app.use(routes)
app.use(express.json())
app.use(express.urlencoded())

// View engine
app.set("view engine", "pug"); 

app.listen(_PORT, (err)=>{
    if(err) throw err;
    console.info(`Server started at http://localhost:${_PORT}`)
})

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
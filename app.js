const http = require('node:http')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'ContentType':'application/json'});

    res.end(JSON.stringify({
        data: [2,6,4,8,8,4,5,66,4,94,5,6,5]
    }));
});

server.listen(3000, ()=>{
    console.info('Server started at http://127.0.0.1:3000/');
})
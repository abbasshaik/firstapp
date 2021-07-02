
const file = require('fs');
const a =file.readFileSync('C:\\Users\\Shaik Abbas\\Desktop\\ftpCred.txt');

console.log(a.toString());
console.log("HogayaChekc");

const http = require('http');

const port = process.env.PORT || 8080;

console.log(port);

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hi ra puka </h1> <p> Inka nerchukovalsindi chala undi dengey</p>');
});

server.listen(port, ()=>{
    console.log("Server is listening to port : "+port);
});
console.log("HelloWorld");
var text ="aValEl "


var http = require("http");
var fs = require("fs")

http.createServer((req , res) =>{
    fs.readFile('test.txt',(err , data)=>{
        res.write(data);
        res.end();
        console.log(" running")
    })
       
}).listen(8080)
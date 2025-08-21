http = require('http')

var a = 10
var b = 2000
var c = a + b

http.createServer(function(req,res){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("Hello World 1<br/>")
        res.write(`A vaue is ${a} </br>B value is ${b} </br> Value of C after the sum is ${c}`)
        res.end("</br>Hello Line 2")
    }
).listen(4000)

console.log("server started at http://localhost:4000")
console.log("server started at http://127.0.0.1:4000")
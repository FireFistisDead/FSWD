http = require('http')

http.createServer(function(req, res){
    if(req.url == '/home'){
        res.write('<h1>Welcome to the Home Page</h1>')
        res.end()
    } else if(req.url == '/about'){
        res.write(JSON.stringify({'flag' : 1, 'mssg' : 'Record Added'}))
        res.end()
    } else{
        res.write('Welcome to website')
        res.end()
    }
}).listen(4000)

console.log("server started at http://localhost:4000")
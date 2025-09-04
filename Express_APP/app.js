const express = require('express')
const app = express()
const port = 3000
//MiddleWare
app.use(express.static('publlic'))
// template Engine
app.set('view engine', 'ejs')
app.set('views', __dirname+'/views')
app.use(express.urlencoded())

app.get('/', (req, res) =>{
    res.send("Hello World!")
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/home.html')
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})

app.get('/product/:id', (req, res) =>{
    var a = req.params.id
    res.send(`The requested param is ${a}`)
})

app.get('/search', (req, res) => {
    var a = req.query.q
    res.send(`Product searched is ${a}`)
})
app.get('/contact', (req, res) =>{
    res.sendFile(__dirname + '/contact.html')
})

app.get('/contactprocessor', (req, res) =>{
    var a = req.query.op1
    var b = req.query.op2
    var c = parseInt(a) + parseInt(b)
    res.send(`The sum of the A and B is ${c}`)
})
app.get('/sum', (req, res) =>{
    res.render('sum')
})
app.post('/sumprocessor', (req, res) =>{
    console.log(req.body)
    var a = req.body.op1
    var b = req.body.op2
    var c = parseInt(a) + parseInt(b)
    res.render('res', {yesa : a, yesb : b, yesc : c})
    
})
app.listen(port, ()=>{
    console.log(`listening to port : http://127.0.0.1:${port}`)
}) 
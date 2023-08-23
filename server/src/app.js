let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



let port = 8081
app.listen(port, function(){
    console.log('server running on ' + port)
})
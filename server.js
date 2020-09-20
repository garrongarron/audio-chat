const fs = require('fs');//https1
const https = require('https');//https2 
const express = require('express')
const app = express()
const { setSocketIo } = require('./server/socket');


let options = {//https3
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

const server = https.createServer(options, app)//https4
const io = require('socket.io')(server)

setSocketIo(io)
app.set('port', process.env.PORT || 3000)
server.listen(app.get('port'), function () {//https5
  console.log("My https server listening on port " + app.get('port') + "...");
});


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})



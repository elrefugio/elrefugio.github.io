var connect = require('connect')
var morgan = require('morgan')
var serveStatic = require('serve-static')

var app = connect()

app.use(morgan('dev'))

app.use(serveStatic(__dirname))

var listenPort = process.env.PORT || 3000
app.listen(listenPort)
console.log(`listening on *:${listenPort}`)

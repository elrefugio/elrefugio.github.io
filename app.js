var connect = require('connect')
var morgan = require('morgan')
var serveStatic = require('serve-static')
var path = require('path')

var app = connect()

app.use(morgan('dev'))
app.use(serveStatic(path.resolve('./dist')))

var listenPort = 3000
app.listen(listenPort)
console.log(`listening on *:${3000}`)

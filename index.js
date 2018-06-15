const Koa = require('koa')
const debug = require('debug')
const ioredis = require('koa-2-ioredis')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose')
const router = require('./router/router.js')
const config = require('./config/default.json')

const app = new Koa()

mongoose.Promise = require('bluebird')

mongoose.connect(config.mongo.uri, { user: config.mongo.user, pass: config.mongo.pass })
mongoose.connection.on('error', function (err) {
  console.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

app.use(ioredis())
app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)

console.info('server listen on port 3000...')
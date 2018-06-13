const Koa = require('koa')
const debug = require('debug')
const ioredis = require('koa-2-ioredis')
const router = require('./router/router.js')

const app = new Koa()

app.use(ioredis())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)

console.info('server listen on port 3000...')
const Koa = require('koa')
const app = new Koa()
const fs = require('fs.promised')

app.use(async ctx => {
  ctx.body = '<p>123</p>'
})

app.listen(3000)

console.log('server listen on port 3000...')
const Koa = require('koa')
const app = new Koa()
const compose = require('koa-compose')

const logger = (ctx, next) => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  next()
}

const main = function(ctx) {
  const n = Number(ctx.cookies.get('view') || 0) + 1;
  ctx.cookies.set('view', n);
  ctx.response.body = n + ' views';
}

const middlewares = compose([logger, main])
app.use(middlewares)

app.listen(3000)

console.log('server listen on port 3000...')
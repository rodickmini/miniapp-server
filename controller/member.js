const geohash = require('ngeohash')
const debug = require('debug')('member')

const getMembers = async (ctx, next) => {
  debug(ctx.request.body)
  const [lat, lon, userinfo] = [ctx.request.body.lat, ctx.request.body.lon, ctx.request.body.userinfo]
  const hash = geohash.encode(lat, lon)
  await ctx.redis.sadd(`pos:geohash:${hash}`, JSON.stringify(userinfo))
  const memberListArr = await ctx.redis.smembers(`pos:geohash:${hash}`)
  const memberList = memberListArr.map(m => {return JSON.parse(m)})
  ctx.body = {
    code: 0,
    data: {
      geohash: hash,
      memberList
    }
  }
}

module.exports = {
  getMembers
}
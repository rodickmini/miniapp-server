const geohash = require('ngeohash')
const debug = require('debug')('hash')

const addMember = async (ctx, next) => {
  const [lat, lon, userinfo] = [ctx.request.body.lat, ctx.request.body.lon, ctx.request.body.user_info]
  const hash = geohash.encode(lat, lon)
  debug('userinfo: ', userinfo)
  debug(hash)
  await ctx.redis.sadd(`pos:geohash:${hash}`, JSON.stringify(userinfo))
  ctx.body = {
    code: 0,
    data: {
      geohash: hash
    }
  }
}

const getMembers = async (ctx, next) => {
  const members = await ctx.redis.smembers(`pos:geohash:${ctx.params.hash}`)
  debug(members)
  const json = members.map(m => {
    return JSON.parse(m)
  })
  debug(json)
  ctx.body = {
    code: 0,
    data: {
      members: json
    }
  }
}

module.exports = {
  addMember,
  getMembers
}
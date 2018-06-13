const geohash = require('ngeohash')
const debug = require('debug')('hash')

const addMember = async (ctx, next) => {
  const [lat, lon] = [ctx.params.lat, ctx.params.lon]
  const username = ctx.params.username
  const hash = geohash.encode(lat, lon)
  debug(hash)
  await ctx.redis.sadd(hash, username)
  ctx.body = "ok"
}

const getMembers = async (ctx, next) => {
  const members = await ctx.redis.smembers(ctx.params.hash)
  ctx.body = {members}
}

module.exports = {
  addMember,
  getMembers
}
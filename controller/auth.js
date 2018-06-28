const debug = require('debug')('auth')
const axios = require('axios')
const md5 = require('md5')
const wxappConfig = require('./../.wxapp-config')

const generateToken = async (ctx, next) => {
  const [code] = [ctx.request.body.code]
  const APPID = wxappConfig.APPID
  const SECRET = wxappConfig.SECRET
  debug('code: %O', code)
  debug('APPID: %O', APPID)
  debug('SECRET: %O', SECRET)
  const res = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${SECRET}&js_code=${code}&grant_type=authorization_code`)
  debug('res data: %O', res.data)
  const token = md5(res.data.session_key)
  debug('token: %O', token)
  ctx.body = {
    code: 0,
    data: {
      openid: res.data.openid,
      token
    }
  }
}

module.exports = {
  generateToken
}
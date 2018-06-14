const UserModel = require('../model/user.model')
const debug = require('debug')('user')

const addUser = async (ctx, next) => {
  debug(ctx.request.body)
  const res = await UserModel.create(ctx.request.body)
  debug(res)
  ctx.body = {
    code: 0,
    data: {
      res: res
    }
  }
}

module.exports = {
  addUser
}
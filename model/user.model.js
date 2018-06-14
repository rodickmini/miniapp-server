const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

var UserSchema = new mongoose.Schema({
  openid: String,
  nickname: String,
  avatarUrl: String,
  gender: String,
  quote: String, // 签名
  location: Object, // {city: , province: , country: }
  lang: String,
  createTime: { type: Number, default: new Date().getTime() },
  status: {
    type: Number, required: true, default: 0, enum: [0, 1]
  }
})

module.exports = mongoose.model('User', UserSchema)
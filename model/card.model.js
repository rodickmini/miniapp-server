const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

var CardSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    phone: String,
    wechatid: String,
    company: String,
    title: String, //职务
    mail: String,
    tradeId: Number, // 行业
    cityId: Number, // 城市
    address: String, // 地址
    gender: Number,
    avatarUrl: String, // 头像
    quote: String, // 签名
    createTime: { type: Number, default: new Date().getTime() },
    status: {
        type: Number, required: true, default: 0, enum: [0, 1]
    }
})

module.exports = mongoose.model('Card', CardSchema)
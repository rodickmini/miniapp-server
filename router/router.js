const Router = require('koa-router')
const hashController = require('../controller/hash')

const router = new Router()

router.put('/member', hashController.addMember) // @params {lat: , lon: , user_info: {}} @return geohash
router.get('/geohash/:hash/members', hashController.getMembers)



module.exports = router
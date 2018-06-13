const Router = require('koa-router')
const hashController = require('../controller/hash')

const router = new Router()

router.get('/hash/:lat/:lon/:username', hashController.addMember)
router.get('/geohash/:hash/members', hashController.getMembers)

module.exports = router
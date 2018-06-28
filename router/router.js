const Router = require('koa-router')
const hashController = require('../controller/hash')
const userController = require('../controller/user')
const memberController = require('../controller/member')
const authController = require('../controller/auth')

const router = new Router()

router.put('/member', hashController.addMember) // @params {lat: , lon: , user_info: {}} @return geohash
router.get('/geohash/:hash/members', hashController.getMembers)

router.put('/users', userController.addUser)

router.post('/getMembers', memberController.getMembers)
router.post('/login', authController.generateToken)



module.exports = router
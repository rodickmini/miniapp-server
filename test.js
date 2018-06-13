let geohash = require('ngeohash')
let cord = [37.8324, 112.5584], hash

console.log('cord: ', cord)
hash = geohash.encode(...cord, 6)
console.log(hash)
cord = [37.8325, 112.5583]
console.log('cord: ', cord)
hash = geohash.encode(...cord, 6)
console.log(hash)
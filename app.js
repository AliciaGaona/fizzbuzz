require('dotenv').config({ debug: process.env.TOKEN })


const dotenv = require('dotenv')
const buf = Buffer.from('TOKEN=token')
const config = dotenv.parse(TOKEN) // will return an object
console.log(typeof config, config) // object { BASIC : 'basic' }
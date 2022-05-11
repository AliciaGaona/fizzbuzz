
const ExplorerController = require('./lib/controllers/ExplorerController');
require('dotenv').config()
console.log(process.env.TOKEN) 


const fiz =ExplorerController.applyValidationInNumber(3);
console.log(fiz)
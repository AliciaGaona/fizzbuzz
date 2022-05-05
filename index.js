const ExplorerService = require("./lib/services/ExplorerService")
const FizzbuzzService = require("./lib/services/FizzbuzzService")
//const Reader = require("../lib/utils/Reader")


const Reader = require('./lib/utils/Reader.js');
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
console.log(explorers)
console.log("hi")
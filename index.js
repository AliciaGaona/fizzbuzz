// const ExplorerService = require("./lib/services/ExplorerService")
// const FizzbuzzService = require("./lib/services/FizzbuzzService")
// //const Reader = require("../lib/utils/Reader")


// const Reader = require('./lib/utils/Reader.js');
// const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
// console.log(explorers)
// console.log("hi")

const ExplorerService=require('./lib/services/ExplorerService')
const FizzbuzzService=require('./lib/services/FizzbuzzService')
const Reader = require('./lib/utils/Reader');

const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
//console.log(explorers)


// Aplicación del ExplorerService sobre la lista de explorers
const filterByMission=ExplorerService.filterByMission(explorers, "node");
const getAmountOfExplorersByMission=ExplorerService.getAmountOfExplorersByMission(explorers, "node");
const getExplorersUsernamesByMission=ExplorerService.getExplorersUsernamesByMission(explorers, "node");

// console.log(filterByMission)
// console.log(getAmountOfExplorersByMission)
// console.log(getExplorersUsernamesByMission)


const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorers, "node") // {name: "Explorer1", score: 1, trick: 1} 
//console.log(FizzbuzzService.applyValidationInExplorer(explorers, "node"))
const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer5))

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
//console.log(FizzbuzzService.applyValidationInExplorer(explorer15) )


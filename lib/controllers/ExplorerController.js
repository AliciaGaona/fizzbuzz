const ExplorerService=require('../services/ExplorerService')
const FizzbuzzService=require('../services/FizzbuzzService')
const Reader = require('../utils/Reader');

// Crea un método para obtener la lista de explorers filtrados por misión:
class ExplorerController{

    static getExplorersByMission(mission){
     const explorers=Reader.readJsonFile("explorers.json")
     const filterMission=ExplorerService.filterByMission(explorers ,mission);

        return filterMission
    }
}

module.exports=ExplorerController
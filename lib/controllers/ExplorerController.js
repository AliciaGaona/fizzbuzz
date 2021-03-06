const ExplorerService=require('../services/ExplorerService');
const FizzbuzzService=require('../services//FizzbuzzService');
const BotService= require('../bot');
const Reader = require('../utils/Reader');

class ExplorerController{
    static getExplorersByMission(mission){
     const explorers=Reader.readJsonFile("explorers.json")
     const filterMission=ExplorerService.filterByMission(explorers ,mission);
        return filterMission
    }
    static getExplorersUsernamesByMission(mission){
        const explorers=Reader.readJsonFile("explorers.json")
        const getExplorersUsernamesByMission= ExplorerService.getExplorersUsernamesByMission(explorers ,mission)
        return getExplorersUsernamesByMission   
    }

    static getAmountOfExplorersByMission(mission){
        const explorers=Reader.readJsonFile("explorers.json")
        const getAmountOfExplorersByMission= ExplorerService.getAmountOfExplorersByMission(explorers ,mission)
        return getAmountOfExplorersByMission   
    }

    static applyValidationInNumber(number){
        const explorers= Reader.readJsonFile("explorers.json")
        const applyValidationInNumber= FizzbuzzService.applyValidationInNumber(number)
        return applyValidationInNumber
    }

    static GetFizzbuzzTelegram(){
        const explorers= Reader.readJsonFile("explorers.json")
        const numberToApplyFb= BotService.FizzbuzzTelegram()
        return numberToApplyFb
    }

    static GetExplorersFilterMissionTelegram(){
        const explorers= Reader.readJsonFile("explorers.json")
        const getExplorersUsernamesByMission= BotService.GetExplorersFilterMissionTelegram(explorers)
        return getExplorersUsernamesByMission
    }
}

module.exports=ExplorerController
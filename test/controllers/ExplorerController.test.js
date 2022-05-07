
const ExplorerController=require('../../lib/controllers/ExplorerController')

describe("Test service ExplorerController", ()=>{
    test("1.Probando metodo static getExplorersByMission, que recibe lista de explorers", ()=>{
        const getExplorers=ExplorerController.getExplorersByMission("node")
        expect(getExplorers).toBeDefined()
    })

    test("2.Test service metodo ExplorerController getExplorersUsernamesByMission", ()=>{
        const getExplorersUsernamesByMission= ExplorerController.getExplorersUsernamesByMission("node")
        expect(getExplorersUsernamesByMission).toBeDefined()
    })

    test ("3.Test service metodo ExplorerControoller getExplorersAmonutByMission(mission)", ()=>{
        const getAmountOfExplorersByMission= ExplorerController.getAmountOfExplorersByMission("node")
        expect(getAmountOfExplorersByMission).toBeDefined()
    })

    test ("3.Test service metodo ExplorerControoller applyValidationInNumber(number)", ()=>{
        const applyValidationInNumber= ExplorerController.applyValidationInNumber(3)
        expect(applyValidationInNumber).toBeDefined()
    })
})
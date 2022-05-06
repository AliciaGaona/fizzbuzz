const { TestScheduler } = require('jest')
const ExplorerController=require('../../lib/controllers/ExplorerController')

describe("Test service ExplorerController", ()=>{
    test("1.Probando metodo static getExplorersByMission, que recibe lista de explorers", ()=>{
        const getExplorers=ExplorerController.getExplorersByMission("mission")
        expect(explorers).toBeDefined()
    })


})
const ExplorerService= require('./../../lib/services/ExplorerService')

    test("1. Crear filtro de explorers en una mission", ()=>{
        const explorers = [{mission: "node"}]
        const explorersInNode = ExplorerService.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(1)
    })



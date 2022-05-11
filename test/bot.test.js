const BotService= require('./../lib/bot')

    test("1. probar boot FizziTelegram", ()=>{
        const explorersInNode = BotService.FizzbuzzTelegram(1)
        expect(explorersInNode).not.toBeUndefined()
    })

    test("2. probar boot GetExplorersTelegram", ()=>{
        const explorers = [{mission: "node"}]
        const explorersInNode = BotService.GetExplorersFilterMissionTelegram(explorers, "node")
        expect(explorersInNode.length).toBe(1)
    })


const FizzbuzzService= require('./../../lib/services/FizzbuzzService')


test("1. Validacion de explorers applyValidationInExplorer", ()=>{
    const explorers = [{name: "Woopa6", score: 1}]
    const explorersList= FizzbuzzService.applyValidationInExplorer(explorers)
    expect(explorers).toBe(explorers.name, explorers.score)
})
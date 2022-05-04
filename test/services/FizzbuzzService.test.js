const FizzbuzzService= require('./../../lib/services/FizzbuzzService')

test("1. Validacion de explorers applyValidationInExplorer score divisible entre 3&&5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer("Woopa15")   
    expect(explorer).toBe({name: "Woopa6", score: 15, trick:"FIZZBUZZ"})
})

test("2. Validacion de explorers applyValidationInExplorer score divisible entre 3", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer("Woopa6") 
    const trick="FIZZ"  
    expect(explorer.trick).toBe(trick)
})
test("3. Validacion de explorers applyValidationInExplorer score divisible entre 5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer("Woopa5")   
    expect(explorer).toBe({name: "Woopa6", score: 5, trick:"BUZZ"})
})
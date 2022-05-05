const FizzbuzzService= require('./../../lib/services/FizzbuzzService')

test("1. Validacion de explorers applyValidationInExplorer score divisible entre 3&&5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer("Woopa15")   
    expect(explorer).not.toBeUndefined()
})

test("2. Validacion de explorers applyValidationInExplorer score divisible entre 3", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer("Woopa6")  
    expect(explorer).not.toBeUndefined()
})
test("3. Validacion de explorers applyValidationInExplorer score divisible entre 5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer("Woopa5")   
    expect(explorer).not.toBeUndefined()
})
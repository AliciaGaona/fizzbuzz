const FizzbuzzService= require('./../../lib/services/FizzbuzzService')

test("1. Validacion de explorers applyValidationInExplorer score divisible entre 1", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer1", score: 1})  
    const res= {name: "Explorer1", score: 1,  trick: 1}
    expect(explorer).toStrictEqual(res)
})

test("2. Validacion de explorers applyValidationInExplorer score divisible entre 3&&5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer2", score: 15})  
    const res= {name: "Explorer2", score: 15,  trick: "FIZZBUZZ", trick: 15}
    expect(explorer).toStrictEqual(res)
})

test("2. Validacion de explorers applyValidationInExplorer score divisible entre 3", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer3", score: 3})  
    const res= {name: "Explorer3", score: 3, trick: "FIZZ", trick: 3}
    expect(explorer).toStrictEqual(res)
})
test("3. Validacion de explorers applyValidationInExplorer score divisible entre 5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer5", score: 5}) 
    const res= {name: "Explorer5", score: 5, trick: "BUZZ", trick:5}
    expect(explorer).toStrictEqual(res)
})

test("4. Validacion de explorers applyValidationInExplorer score divisible entre 5", ()=>{
    const explorer = FizzbuzzService.applyValidationInExplorer({name: "Explorer5", score: 5}) 
    const res= {name: "Explorer5", score: 5, trick: "BUZZ", trick:5}
    expect(explorer).not.toBeUndefined()
})

test("4. Validacion de explorers applyValidationInNumber ", ()=>{
    const explorer = FizzbuzzService.applyValidationInNumber({number:  5}) 
    const res= {score: 3, trick: "Fizzz"}
    expect(explorer).not.toBeUndefined()
}) 
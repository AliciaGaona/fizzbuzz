const Reader= require('./../../lib/utils/Reader')


    test("1. leer archivo Json que no existe", ()=>{
     const explorers = Reader.readJsonFile("explorers1.json"); 
     expect(explorers).toBe(explorers)
     })

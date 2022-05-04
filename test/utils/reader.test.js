const Reader= require('./../../lib/utils/Reader')

decribe("Pruebas unitarias para Reader", ()=>{
    test("1. leer archivo Json", ()=>{
     const explorers = Reader.readJsonFile("explorers.json"); 
     expect(explorers).toBe(explorers)
     });
})
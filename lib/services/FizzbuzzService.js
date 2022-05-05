const Reader= require('./../../lib/utils/Reader')
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo


class FizzbuzzService{ 
// reglas para validaciones:
// -si score es divisible entre 3 => trick =FIZZ
// -si score es divisible entre 5 => trick =BUZZ
// -si score es divisible entre 3 y 5 => trick =FIZZBUZZ
   static applyValidationInExplorer(explorer){ 

    if(explorers.score%3 ===0&& explorers.score%5===0)
        {
            explorers.trick=="FIZZBUZZ"
          
            return "Woopa15"
        }
        else if(explorers.score%3===0){
            explorers.trick=="FIZZ"
            const explorersInNodeAndBuzzTrick = explorersInNode.map((explorers) => ExplorerService.filterByMission(explorers, "node"));
            return explorersInNodeAndBuzzTrick
        }
        else if(explorers.score%5===0){
            explorers.trick=="BUZZ"  
            const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorers) => ExplorerService.filterByMission(explorers, "node"));         
            return explorersInNodeAndFizzBuzzTrick
        }
        else{
             explorer.trick = explorer.score;
        return explorer;
        }
   }
}


module.exports=FizzbuzzService
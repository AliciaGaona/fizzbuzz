const Reader= require('./../../lib/utils/Reader')
const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo

class FizzbuzzService{ 
   static applyValidationInExplorer(explorer){ 
    if(explorers.score%3 ===0&& explorers.score%5===0)
        {
            explorers.trick=="FIZZBUZZ"
            const explorersInNodeAndFizzBuzz = explorersInNode.map((explorers) => ExplorerService.filterByMission(explorers, "node"));
            return explorersInNodeAndFizzBuzz
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

   static applyValidationInNumber(number){
    if(number%3 ===0&& number%5===0)
    {
        explorers.trick=="Fizzbuzz"
       
        return explorers

    }
    else if(number%3===0){
        explorers.trick=="Fizzz"
      
       return explorers

    }
    else if(number%5===0){
        explorers.trick=="Buzz"  
  
        return     explorers

    }
    else{
        explorers.trick=number
       
        return explorers
        }
   }


}


module.exports=FizzbuzzService
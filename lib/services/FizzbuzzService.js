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
            const explorersInNodeAndFizzBuzz = explorersInNode.map((explorers) => ExplorerService.filterByMission(explorer, "node"));
            return explorersInNodeAndFizzBuzz
        }
        else if(explorers.score%3===0){
            explorers.trick=="FIZZ"
            const explorersInNodeAndBuzzTrick = explorersInNode.map((explorers) => ExplorerService.filterByMission(explorer, "node"));
            return explorersInNodeAndBuzzTrick
        }
        else if(explorers.score%5===0){
            explorers.trick=="BUZZ"  
            const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorers) => ExplorerService.filterByMission(explorer, "node"));         
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
       const explorers1= {trick:"Fizzbuzz" ,score:number}    
       return   explorers1
    }
    else if(number%3===0){
      
        const explorers2= {trick:"Fizzz" ,score:number}      
        return   explorers2
    }
    else if(number%5===0){
        explorers.trick=="Buzz"  
        const explorers2= {trick:"Buzz" ,score:number}      
        return   explorers2
    }
    else{
        const explorers3= {trick:number ,score:number}      
        return   explorers3
        }
   }
}


module.exports=FizzbuzzService
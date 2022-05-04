
console.log(explorers)
class FizzbuzzService{ 
// reglas para validaciones:
// -si score es divisible entre 3 => trick =FIZZ
// -si score es divisible entre 5 => trick =BUZZ
// -si score es divisible entre 3 y 5 => trick =FIZZBUZZ
   static applyValidationInExplorer(explorers){
        if(explorer.score%3 ===0&& explorer.score%5===0)
        {
            explorer.trick=="FIZZBUZZ"
            return explorer
        }
        else if(explorer.score%3===0){
            explorer.trick=="FIZZ"
            return explorer
        }
        else if(explorer.score%5===0){
            explorer.trick=="BUZZ"           
            return explorer
        }
   }
}

module.exports=FizzbuzzService
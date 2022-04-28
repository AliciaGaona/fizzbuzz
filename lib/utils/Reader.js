const fs = require("fs");// módulo del filesystem

class Reader{
  static readJsonFile(path){
const rawdata=
fs.readFileSync(path);
return JSON.parse(rawdata);
  } 
}



//esporto mi clase
module.exports= Reader
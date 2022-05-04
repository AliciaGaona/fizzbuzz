// Reader: en esta clase necesitaremos un método 
// static para leer el archivo y obtener la información dado 
// el nombre archivo.

const fs = require("fs");// módulo del filesystem

class Reader{//lógica para leer el archivo
  static readJsonFile(path){ 
      const rawdata=
      fs.readFileSync(path);
        return JSON.parse(rawdata);//regresar la información
  } 
}



//esporto mi clase
module.exports= Reader
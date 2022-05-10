require('dotenv').config()

if(!process.env.TOKENBOTTELEGRAM){
  throw new Error('No hay configuración con Api Key y con Token')
}

process.env.NTBA_FIX_319=1;
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require('../lib/controllers/ExplorerController');
require("dotenv").config();
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.

// bot.on("message", (msg) => {
//     const chatId = msg.chat.id;
// console.log(msg.text)
//     const numberToApplyFb = parseInt(msg.text);
// console.log(numberToApplyFb)
//     if(!isNaN(numberToApplyFb)){
// 		const applyValidationInNumber =ExplorerController.applyValidationInNumber(numberToApplyFb);
//         console.log(applyValidationInNumber);
//         const responseBot= `Tu número es: ${numberToApplyFb}. Validación: ${applyValidationInNumber.trick}`;
// 	//	bot.sendMessage(chatId, "Aplica aqui tu validacion al número "+numberToApplyFb);
// 	bot.sendMessage(chatId,responseBot);
//     } else {
//         bot.sendMessage(chatId, "Envía un número válido");
//     }
// });

bot.on("message", (msg)=>{
    const chatId = msg.chat.id;
    const mission= msg.text.toLowerCase;
    console.log(mission);
  
        const getExplorersUsernamesByMission= ExplorerController.getExplorersUsernamesByMission(mission);
        console.log(getExplorersUsernamesByMission);
        const responseBot =`Explorers: ${getExplorersUsernamesByMission}`;
        
        bot.sendMessage(chatId, responseBot);
   
});
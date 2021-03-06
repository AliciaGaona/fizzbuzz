const ExplorerController = require('./controllers/ExplorerController');
const express = require('express');
const { request } = require('express');
const ExplorerService = require('./services/ExplorerService');
const { json } = require('express/lib/response');
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response)=>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
}); 

app.get("/v1/explorers/amount/:mission", (request, response)=>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    const getAmountOfExplorersByMission = ExplorerController.getAmountOfExplorersByMission(mission);
    response.json({mission: mission, quantity: getAmountOfExplorersByMission});
}); 

app.get("/v1/explorers/usernames/:mission", (request, response)=>{
    const mission = request.params.mission;
    const getExplorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(getExplorersUsernamesByMission);
})

app.get("/v1/fizzbuzz/:score", (request, response)=>{
    const score = request.params.score;
    const applyValidationInNumber =ExplorerController.applyValidationInNumber(score);
    response.json(applyValidationInNumber);
})

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
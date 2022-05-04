
class ExplorerService{
    static filterByMission(explorers, mission){
        const explorersInNodeToGetUsernames =explorers.filter((explorer)=>explorer.mission == mission);
        return explorersInNodeToGetUsernames;
    }//Obtener la lista de explorers que solo están en misiion(node)).

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        return explorersInNode.length;
    }//Obtener la cantidad de explorers filtrados filterByMission.

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNode = ExplorerService.filterByMission(explorers, mission);
        const usernamesInNode = explorersInNode.map((explorer) => explorer.githubUsername);
        return usernamesInNode;   
    }//Obtener la lista de usuarios de github de los explorers filtrados filterByMission
}

module.exports= ExplorerService
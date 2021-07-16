const team = {
    _players:[{    //team object with three actual players
                  firstName: 'Pablo',
                  lastName: 'Sanchez',
                  age: 11
                },
                {
                  firstName: 'John',
                  lastName: 'Conorz',
                  age: 13
                },
                {
                  firstName: 'Mike',
                  lastName: 'Salens',
                  age: 14
                }
    ],
    _games: [ {   //object with three actual games
                opponent: 'Broncos',
                teamPoints: 42,
                opponentPoints: 27
               },
               {
                opponent: 'Bronco',
                teamPoints: 32,
                opponentPoints: 26
               },
               {
                opponent: 'Bron',
                teamPoints: 12,
                opponentPoints: 29
               }
    ],
//getter methods for _players and _games keys
    get players() {
        return this._players;        
    },

    get games() {
        return this._games;        
    },
//Method adds a player object to Player array
    addPlayer(firstName, lastName, age){
        const newPlayer = {
            firstName: firstName,
            latName: lastName,
            age: age
        };
        this._players.push(newPlayer);
    },
//Method adds a game object to Player array
    addGame(opponent, teamPoints, opponentPoints ){
        const newGame = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this._games.push(newGame);

    }
};

team.addPlayer('Steph','Curry', 28);
team.addPlayer('Lisa','Leslie',44)
team.addPlayer('Bugs','Bunny',76);
console.log(team.players);

team.addGame('A', 1, 2);
team.addGame('B', 3, 4);
team.addGame('C', 5, 6);
console.log(team.games);
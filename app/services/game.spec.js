describe('Game Service', function () {
    var gameService;
    var dummyPlayers;
    var rock;
    var paper;
    var scissor;

    beforeEach(angular.mock.module('app.services'));

    beforeEach(inject(function (GameService, CpuService) {
        gameService = GameService;
    }));

    beforeEach(function () {
        rock = {
            cpu: true,
            weapon: {
                id: 1,
                name: 'Rock',
                beats: 3
            }
        }

        paper = {
            cpu: false,
            weapon: {
                id: 2,
                name: 'Paper',
                beats: 1
            }
        }

        scissor = {
            cpu: false,
            weapon: {
                id: 3,
                name: 'Scissor',
                beats: 2
            }
        }
    });

    it('service should be defined', function () {
        expect(gameService).toBeDefined();
    });

    it('should have a function called playRockPaperScissor', function () {
        expect(gameService.playRockPaperScissor).toBeDefined();
    });

    it('should return rock as the winner when it plays against scissor', function () {
        var players = [];
        players.push(rock);
        players.push(scissor);

        expect(gameService.playRockPaperScissor(players).won).toEqual(players[0])
    });

    it('should return scissor as the winner when it plays against paper', function () {
        var players = [];
        players.push(scissor);
        players.push(paper);

        expect(gameService.playRockPaperScissor(players).won).toEqual(players[0])
    });

    it('should return paper as the winner when it plays against rock', function () {
        var players = [];
        players.push(paper);
        players.push(rock);

        expect(gameService.playRockPaperScissor(players).won).toEqual(players[0])
    });

    it('Should return null which means draw', function () {
        var players = [];
        players.push(rock);
        players.push(rock);

        expect(gameService.playRockPaperScissor(players).draw).toEqual(true)
    });

     it('Should return a array of player including a bot when I send in a real player.', function () {
        
        expect(gameService.createPlayerPool(paper).length).toBeGreaterThan(0);
    });


})
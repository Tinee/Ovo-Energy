describe('PlayController', function () {
  var scope, createController;
  var mockWeaponService, mockGameService, mockCpuService, mockGameObject;
  beforeEach(function () {
    angular.mock.module('app.game');
  });

  beforeEach(inject(function ($rootScope, $controller) {
    mockGameObject = {
      won: {
        cpu: false,
        weapon: {
          id: 2,
          name: 'Paper'
        }
      },
      lost: {
        cpu: true,
        weapon: {
          id: 1,
          name: 'Rock'
        }
      },
      draw: false
    };

    mockWeaponService = {
      get: function () {
        return [
          {
            id: 1,
            name: 'Rock',
            image: './app/assets/images/140 Rock.png',
            beats: 3
          },
          {
            id: 2,
            name: 'Paper',
            image: './app/assets/images/140 Paper.png',
            beats: 1
          },
          {
            id: 3,
            name: 'Scissors',
            image: './app/assets/images/140 Scissors.png',
            beats: 2
          }
        ]
      }
    }
    mockCpuService = {
      getRandomCpuWithWeapon: function () {
        return {
          cpu: true,
          weapon: {
            id: 3,
            name: 'Scissors',
            image: './app/assets/images/140 Scissors.png',
            beats: 2
          }
        }
      }
    }

    mockGameService = {
      createPlayerPool: function () {
        return [
          {
            cpu: false,
            weapon: {
              id: 2,
              name: 'Paper'
            }
          },
          {
            cpu: true,
            weapon: {
              id: 1,
              name: 'Rock'
            }
          }
        ];

      },
      playRockPaperScissor: function () {
        return mockGameObject;
      }
    }
    mockCpuService = {};
    scope = $rootScope.$new();

    createController = function () {
      return $controller('PlayController', {
        'GameService': mockGameService,
        'WeaponService': mockWeaponService,
        'CpuService': mockCpuService
      });
    };
  }));

  it('Play should generate a show a winner and call checkResult()', function () {
    var controller = createController();

    expect(controller.play()).toBeDefined;
    expect(controller.gameMessage).toEqual('You Won with Paper');
  });

  describe('checkResult', function () {
    it('should take a game object from play method and change gameMessage and point out the winner.', function () {
      var controller = createController();

      controller.game = mockGameObject;
      controller.checkResult();
      expect(controller.gameMessage).toEqual('You Won with Paper');

    });
  });
});

describe('Cpu Service', function () {
    var cpuService;

    beforeEach(angular.mock.module('app.services'));

    beforeEach(inject(function (CpuService) {
        cpuService = CpuService;
    }));

    it('should exist', function () {
        expect(cpuService).toBeDefined();
    });

    it('should have function called getRandomCpuWeapon', function () {
        expect(cpuService.getRandomCpuWithWeapon).toBeDefined();
    });

    it('should give back 1 random weapon', function () {
        expect(cpuService.getRandomCpuWithWeapon(3)).toBeDefined();
    });

    it('should give back the first weapon', function () {
        expect(cpuService.getRandomCpuWithWeapon(1).weapon).toEqual({
            id: 1,
            name: 'Rock',
            image: './app/assets/images/140 Rock.png',
            beats: 3
        });
    });
});
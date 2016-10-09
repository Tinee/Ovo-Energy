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
        expect(cpuService.getRandomCpuWeapon).toBeDefined();
    });

    it('should give back 1 random weapon', function () {
        expect(cpuService.getRandomCpuWeapon(3)).toBeDefined();
    });

    it('should give back the first weapon', function () {
        expect(cpuService.getRandomCpuWeapon(1)).toEqual({
            id: 1,
            name: 'Rock',
            image: './app/assets/images/60 Rock.png',
            beats: 3
        });
    });
});
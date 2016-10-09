describe('Weapon Service', function () {
    var weaponService;

    beforeEach(angular.mock.module('app.services'));

    beforeEach(inject(function (WeaponService) {
        weaponService = WeaponService;
    }));

    it('should exist', function () {
        expect(weaponService).toBeDefined();
    });

    it('should have a get function', function () {
        expect(weaponService.get).toBeDefined();
    });

    it('should contain more then 0 weapons', function () {
        var weapons = weaponService.get();
        expect(weapons.length).toBeGreaterThan(0);
    });

    it('should return an even number, else one of the weapon is overpowered.', function () {
        var weapons = weaponService.get().length;

        expect(weapons % 2 === 1).toBeTruthy();
    });
});
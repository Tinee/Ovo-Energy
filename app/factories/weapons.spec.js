describe('Users factory', function () {
    var weaponFactory;

    beforeEach(angular.mock.module('app.factories'));

    beforeEach(inject(function (WeaponsFactory) {
        weaponFactory = WeaponsFactory;
    }));

    it('should exist', function () {
        expect(weaponFactory).toBeDefined();
    });

    it('should have a get function', function () {
        expect(weaponFactory.get).toBeDefined();
    });

    it('should contain more then 0 weapons', function () {
        var weapons = weaponFactory.get();
        expect(weapons.length).toBeGreaterThan(0);
    });
});
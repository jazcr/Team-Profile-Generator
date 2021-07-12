const Manager = require('../lib/managerClass');

describe('Manager class', () => {
    it('should set office number in Manager class', () => {
        const testNumber = 123;
        const e = new Manager('James', 1, 'email@email.com', testNumber);
        expect(e.officeNumber).toBe(testNumber);
    });

    it('should return "Manager" with getRole()', () => {
        const testRole = 'Manager';
        const e = new Manager('James', 1, 'email@email.com', 123);
        expect(e.getRole()).toBe(testRole);
    });

    it('should get office number via getOffice()', () => {
        const testNumber = 123;
        const e = new Manager('James', 1, 'email@email.com', testNumber);
        expect(e.getOffice()).toBe(testNumber);
    })
})
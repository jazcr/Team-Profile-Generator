const Intern = require('../lib/internClass');

describe('Intern class', () => {
    it('should set school in Intern class', () => {
        const schoolValue = 'DU';
        const e = new Intern('James', 1, 'email@email.com', schoolValue)
        expect(e.school).toBe(schoolValue);
    });

    it('should return "Intern" using getRole()', () => {
        const testRole = "Intern";
        const e = new Intern('James', 1, 'email@email.com', 'DU');
        expect(e.getRole()).toBe(testRole);
    });

    it('should get school name via getSchool()', () => {
        const testSchool = 'DU';
        const e = new Intern('James', 1, 'email@email.com', testSchool);
        expect(e.getSchool()).toBe(testSchool);
    });
});
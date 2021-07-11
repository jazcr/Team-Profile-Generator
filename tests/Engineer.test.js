const Engineer = require('../lib/engineerClass');

describe('Employee class', () => {

    test('should set GitHub username in Engineer class', () => {
        const testGitName = 'GitName';
        const e = new Engineer('James', 1, 'email@email.com', testValue);
        expect(e.gitHub).toBe(testGitName);
    });

    test('should return "Engineer" with getRole()', () => {
        const testRole = 'Engineer';
        const e = new Engineer('James', 1, 'email@email.com', 'GitName');
        expect(e.getRole()).toBe(testRole);
    });

    test('should get GitHub username via getGithub()', () => {
        const testGitName = 'GitName';
        const e = new Engineer('James', 1, 'email@email.com', testValue);
        expect(e.getGitHub()).toBe(testGitName);
    });

});

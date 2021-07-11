const Engineer = require('../lib/engineerClass');

test('should set GitHub username in object', () => {
    const testValue = 'GitName';
    const e = new Engineer('James', 1, 'email@email.com', testValue);
    expect(e.gitHub).toBe(testValue);
});

test('should return "Engineer" with getRole()', () => {
    const testValue = 'Engineer';
    const e = new Engineer('James', 1, 'email@email.com', 'GitName');
    expect(e.getRole()).toBe(testValue);
});

test('should get GitHub username via getGithub()', () => {
    const testValue = 'GitName';
    const e = new Engineer('James', 1, 'email@email.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});
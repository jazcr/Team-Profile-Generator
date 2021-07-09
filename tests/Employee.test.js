
// const jest = require('jest');
const { italic } = require('colorette');
const Employee = require('../lib/employeeClass');

describe('Employee class', () => {
    it('Create employee object', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });

    it('Can set name in Employee object', () => {
        const name = 'John';
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it('Can set ID in Employee object', () => {
        const testValue = 100;
        const e = new Employee('James', testValue);
        expect(e.id).toBe(testValue);
    });

    it('Can set email in Employee object', () => {
        const testValue = 'email@email.com';
        const e = new Employee('James', 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe('getName', () => {
        it('Can get name via getName()', () => {
            const testValue = 'John';
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe('getId', () => {
        it('Can get ID via getID()', () => {
            const testValue = 100;
            const e = new Employee('James', testValue);
            expect(e.getID()).toBe(testValue);
        });
    });
        
    describe('getEmail', () => {
        it('Can get email via getEmail()', () => {
            const testValue = 'test@test.com';
            const e = new Employee('James', 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe('getRole', () => {
        it('getRole() should return "Employee"', () => {
            const testValue = 'Employee';
            const e = new Employee('John', 1, 'test@test.com');
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});


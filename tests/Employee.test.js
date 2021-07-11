
// const jest = require('jest');
const { italic } = require('colorette');
const Employee = require('../lib/employeeClass');

describe('Employee class', () => {
    it('should create employee object', () => {
        const e = new Employee();
        expect(typeof(e)).toBe('object');
    });

    it('should set name in Employee object', () => {
        const name = 'John';
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it('should set ID in Employee object', () => {
        const testValue = 100;
        const e = new Employee('James', testValue);
        expect(e.id).toBe(testValue);
    });

    it('should set email in Employee object', () => {
        const testValue = 'email@email.com';
        const e = new Employee('James', 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe('getName', () => {
        it('should get name via getName()', () => {
            const testValue = 'John';
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe('getId', () => {
        it('should get ID via getID()', () => {
            const testValue = 100;
            const e = new Employee('James', testValue);
            expect(e.getID()).toBe(testValue);
        });
    });
        
    describe('getEmail', () => {
        it('should get email via getEmail()', () => {
            const testValue = 'email@email.com';
            const e = new Employee('James', 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe('getRole', () => {
        it('should return "Employee" with getRole() ', () => {
            const testValue = 'Employee';
            const e = new Employee('John', 1, 'email@email.com');
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});


const Employee = require('../lib/Employee.js')
const { Engineer } = require('../lib/Engineer.js')
const { Manager } = require('../lib/manager.js')
const { Intern } = require('../lib/intern.js')
// ----------TESTING MANAGER------------------
describe('Manager👲', () => {
  describe('Initialize🚀', () => {
    it("should return a Manager class🎁", () => {
      const obj = new Manager("Manager", "Angela", "123", "test@test.com", "001");
      // console.log(obj.role);
      expect(obj.role).toBeDefined();
    })
  })
  describe('getRole()🏷️', () => {
    it("It should return 'Manager'👲", () => {
      const obj = new Manager("Manager", "Angela", "123", "test@test.com", "001");
      // console.log(obj.getRole());
      expect(obj.getRole()).toMatch(/Manager/);
    })
  })
  describe('getOffice()🖥️', () => {
    it("It Should return the office Number🚪", () => {
      const obj = new Manager("Manager", "Angela", "123", "test@test.com", "001");
      // console.log(obj.getRole());
      expect(obj.getOffice()).toBeDefined();
    })
  })
})

//------------TESTING INTERN --------------------------
describe('Intern💼', () => {
  describe('Initialize🚀', () => {
    it("should return a Intern class📗🎁", () => {
      const obj = new Intern("Intern", "Angela", "123", "test@Intern.com", "University of WA");
      // console.log(obj.role);
      expect(obj.role).toBeDefined();
    })
  })
  describe('getRole()🏷️', () => {
    it("It should return 'Intern💼'", () => {
      const obj = new Intern("Intern", "Angela", "123", "test@Intern.com", "University of WA");
      // console.log(obj.getRole());
      expect(obj.getRole()).toMatch(/Intern/);
    })
  })
  describe('getSchool()🏫', () => {
    it("It Should return the School Name", () => {
      const obj = new Intern("Intern", "Angela", "123", "test@Intern.com", "University of WA");
      // console.log(obj.getRole());
      expect(obj.getSchool()).toBeDefined();
    })
  })
})

//----------------------- TESTING ENGINEER-----------------
describe('Engineer🛠️', () => {
  describe('Initialize', () => {
    it("should return a Engineer class🛠️🎁", () => {
      const obj = new Engineer("Engineer", "Angela", "123", "test@test.com", "001");
      // console.log(obj.role);
      expect(obj.role).toBeDefined();
    })
  })
  describe('getRole()', () => {
    it("It should return 'Engineer'", () => {
      const obj = new Engineer("Engineer", "Angela", "123", "test@test.com", "001");
      // console.log(obj.getRole());
      expect(obj.getRole()).toMatch(/Engineer/);
    })
  })
  describe('getGithub()', () => {
    it("It Should return the Github username", () => {
      const obj = new Engineer("Engineer", "Angela", "123", "test@engineer.com", "angelaDeveloper");
      // console.log(obj.getRole());
      expect(obj.getGithub()).toBeDefined();
    })
  })
})
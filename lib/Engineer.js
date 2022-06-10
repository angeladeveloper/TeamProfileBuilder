const { Employee } = require('./Employee')



class Intern extends Employee {
  constructor(name, id, email, engineer) {
    super(name, id, email)
    this.engineer = engineer
  }

  getRole() {
    return "Intern"
  }

  getOffice() {
    return this.engineer
  }
}
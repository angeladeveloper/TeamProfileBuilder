const { Employee } = require('./Employee')




class Intern extends Employee {
  constructor(name, id, email, intern) {
    super(name, id, email)
    this.intern = intern
  }

  getRole() {
    return "Intern"
  }

  getOffice() {
    return this.intern
  }
}
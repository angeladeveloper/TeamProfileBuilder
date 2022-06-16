const { Employee } = require('./Employee')




class Intern extends Employee {
  constructor(role, name, id, email, unique) {
    super(role, name, id, email)
    this.unique = unique
  }

  getRole() {
    return "Intern"
  }

  getSchool() {
    return this.unique
  }
}

module.exports = {
  Intern,
}
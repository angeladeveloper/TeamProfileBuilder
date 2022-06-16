const incrementListIndex = require('inquirer/lib/utils/incrementListIndex')
const { Employee } = require('./Employee')


class Manager extends Employee {
  constructor(role, name, id, email, unique) {
    super(role, name, id, email)
    this.unique = unique
  }

  getRole() {
    return "Manager"
  }

  getOffice() {
    return this.unique
  }
}

module.exports = {
  Manager,
}
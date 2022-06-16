const { Employee } = require('./Employee')



class Engineer extends Employee {
  constructor(role, name, id, email, unique) {
    super(role, name, id, email)
    this.unique = unique,
      this.unique = ` https://github.com/${unique}`
  }

  getRole() {
    return "Engineer"
  }

  getGithub() {
    return this.unique
  }
}

module.exports = {
  Engineer,
}
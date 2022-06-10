
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }
  getRole() {
    return "employee"
  }
}


















var LarryBoy = {}

const randomizer = (value) => {
  console.log(Date.now() - 1_654_750_000_000);
  return Date.now() - 1_654_750_000_000
}

LarryBoy = {
  type: "input",
  name: "name",
  message: "What is the employees Office NUmber?",
  validate(answer) {
    if (!answer) {
      return "Please Enter a valid name!";
    }
    return true;
  },
}

const EmployeeQuestions = [
  {
    type: "list",
    name: "role",
    message: "What is the employees role?",
    choices: ["engineer", "intern", "manager"],
    default: 'intern',
  },
  {
    type: "input",
    name: "name",
    message: "What is the employees name?",
    validate(answer) {
      if (!answer) {
        return "Please Enter a valid name!";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    default: "⛔@none.none",
    message(answers) {
      return `What's ${answers.name} email address?`
    },
    validate: (answer) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(answer)) {
        return "You have to provide a valid email address!"
      }
      return true
    }
  },
  {
    type: "number",
    name: "ID",
    message: "What is the employees ID?  \n Random by Default",
    default: randomizer(),
    validate(answer) {
      if (!answer) {
        return "Please Enter a valid name!";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "engineer",
    message: "is this an engineer",
    when(answers) {
      return answers.role === "engineer"
    }
  },

  LarryBoy
]

module.exports = { EmployeeQuestions, Employee }
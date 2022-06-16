
class Employee {
  constructor(role, name, id, email) {
    this.name = name;
    this.role = role;
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


const randomizer = (value) => {
  console.log(Date.now() - 1_654_750_000_000);
  return Date.now() - 1_654_750_000_000
}

const EmployeeQuestions = [
  {
    type: "list",
    name: "role",
    message: "What is the employees role?",
    choices: ["Engineer", "Intern", "Manager"],
    default: 'Intern',
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
    default: "none@none.none",
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
    name: "unique",
    message: "What is the engineer's GitHub?",
    default: "githubUser",
    when(answers) {
      return answers.role === "Engineer"
    }
  },
  {
    type: "input",
    name: "unique",
    message: "What school is the Intern From?",
    default: "Uni. None",
    when(answers) {
      return answers.role === "Intern"
    }
  },
  {
    type: "input",
    name: "unique",
    message: "What is the Manager's Office #?",
    default: "001",
    when(answers) {
      return answers.role === "Manager"
    }

  }
]

const continueQuestion = [
  {
    type: "confirm",
    name: "anotherOne",
    message: "Do you want to add another member?",
  }
]

module.exports = { EmployeeQuestions, Employee, continueQuestion }
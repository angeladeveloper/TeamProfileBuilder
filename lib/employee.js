const randomizer = (value) => {
  console.log(Date.now() - 1_654_750_000_000);
  return Date.now() - 1_654_750_000_000
}

const EmployeeQuestions = [
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
    type: "input",
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
    type: "list",
    name: "role",
    message: "What is the employees role?",
    choices: ["employee", "engineer", "intern", "manager"],
    default: "employee"
  }
]

module.exports = EmployeeQuestions
var inquirer = require("inquirer");
const EmployeeQuestions = require("./lib/employee")
const teamMembers = []
const confirmString = async (input) => {
  if (input === undefined || null) {
    return 'invalid name'
  } else if (typeof input === 'number') {
    return 'please enter valid name'
  } else {
    return true
  }
}


inquirer.prompt(EmployeeQuestions).then({
  type: "input",
  name: "feedback",
  message: "Please give us open feedback (optional)",
  when(answers) {
    return answers.role === "employee"
  }
})
  .then(res => {
    teamMembers.push(res)
    console.log(teamMembers);
  })

// inquirer.prompt([
//   {
//     name: "managerName",
//     type: "input",
//     message: "What is the Manager's name?",
//     validate(answer) {
//       if (!answer) {
//         return 'please enter valid name'
//       }
//       return true
//     }
//   },
//   {
//     name: "managerID",
//     type: "number",
//     message: "What is the Manager's ID?",
//     default: "random",
//     validate(answer) {
//       if (!answer) {
//         return 'please enter valid id'
//       }
//       return true
//     }
//   },
//   {
//     name: "managerEmail",
//     type: "number",
//     message: "What is the Manager's email?",
//     default: "test@test.com",
//     validate(answer) {
//       if (!answer) {
//         return 'please enter valid id'
//       }
//       return true
//     }
//   },
//   {
//     name: "managerOffice",
//     type: "number",
//     message: "What is the Manager's Office?",
//     default: "1",
//     validate(answer) {
//       if (!answer) {
//         return 'please enter valid id'
//       }
//       return true
//     }
//   },
// ])
//   .then((answers => console.log(answers)));
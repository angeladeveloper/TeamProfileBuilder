var inquirer = require("inquirer");
const { EmployeeQuestions } = require("./lib/Employee")
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


inquirer.prompt(
  EmployeeQuestions,
  // {
  //   type: "input",
  //   name: "engineer",
  //   message: "is this an engineer",
  //   when(answers) {
  //     return answers.role === "engineer"
  //   }
  // }
)
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
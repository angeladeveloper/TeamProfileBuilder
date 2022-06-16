var inquirer = require("inquirer");
const fs = require('fs')
const { Engineer } = require('./lib/Engineer');
const { Intern } = require('./lib/intern');
const { Manager } = require('./lib/manager');
const { EmployeeQuestions, continueQuestion } = require("./lib/Employee")
const teamMembers = [];
const teamMembersFinal = [];

function inquirerPrompts() {
  inquirer.prompt(EmployeeQuestions,).then(res => {
    teamMembers.push(res)
    console.log(teamMembers);
    continuePrompt()
  })
}


function continuePrompt() {
  (inquirer.prompt(continueQuestion))
    .then(res => {
      if (res.anotherOne) {
        console.log(res.anotherOne)
        inquirerPrompts();
      } else {
        console.log('done')
        createDom()
      }
    })

}
inquirerPrompts()


function createDom() {
  fs.writeFileSync("dist/index1.html", '');
  appendThings();
}

function appendThings() {
  // fs.appendFile('./dist/index1.html',html)
  fs.appendFileSync('dist/index1.html', `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="shortcut icon" href="#" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      src="https://kit.fontawesome.com/ef81dcc31e.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <script src="/index.js" defer></script>
    <title>Team Builder</title>
  </head>
  <body>
    <header><h1>My Team</h1></header>

    <main>
      <div class="container">
  `)
  for (const member of teamMembers) {
    fs.appendFileSync('dist/index1.html', `<div class="member-card">
    <div class="card-header">
      <h2>
        <img src="/dist/assests/name.png" alt="" />
        ${member.name}
      </h2>
      <h2>
        <img src="/dist/assests/${member.role}.png" alt="manager icon" /> ${member.role}
      </h2>
    </div>
    <ul>
      <li id="ID">
        <img src="/dist/assests/fingerprint.png" alt="email icon" />
        <span>${member.ID}</span>
      </li>
      <li id="email">
        <img src="/dist/assests/email.png" alt="email icon" />
        <span
          ><a href="mailto:cullen97@gmail.com">${member.email}</a>
        </span>
      </li>
      <li id="unique">
        <span>
          <img src="/dist/assests/unique-${member.role}.png" alt="email icon" />
          ${member.unique}</span
        >
      </li>
    </ul>
  </div>`)
  }
  fs.appendFileSync('dist/index1.html', `
  </div>
  </main>
  </body>
  </html>
  `)
  assignRoles(teamMembers)
}

function assignRoles(array) {
  for (member of array) {
    if (member.role === 'Manager') {
      const employeeID = member.name + member.ID
      const newEmployee = new Manager(member.role, member.name, member.ID, member.email, member.unique)
      console.log(newEmployee.getRole());
      teamMembersFinal.push(newEmployee);
    } else if (member.role === 'Intern') {
      const newEmployee = new Intern(member.role, member.name, member.ID, member.email, member.unique)
      teamMembersFinal.push(newEmployee);

    } else {
      const newEmployee = new Engineer(member.role, member.name, member.ID, member.email, member.unique)
      teamMembersFinal.push(newEmployee);

    }
    // console.log('FINAL', teamMembersFinal)
  }
  console.log('FINAL', teamMembersFinal)
};


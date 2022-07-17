/** @format */

const inquirer = require("inquirer");

// const fs = require('fs');
// const generatePage = require('../page-template.js');
// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err => {
//     if (err) throw err;
//     console.log('Porfolio complete! Check out index.html');
// }
// );

inquirer;
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ]);
};

promptUser().then((answers) => console.log(answers));

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project\'s title?',
    },
    {
      type: 'input',
      message: 'Please provide the discription',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'Which Licence do you have?',
      name: 'license',
      choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" License',' BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0','GNU Lesser General Public License v2.0','GNU Lesser General Public License v2.1','Mozilla Public License 2.0','The Unlicense (No License)'],
    },
    {
      type: 'input',
      message:'How can other developers contribute to your project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'How to run your Tests?',
      name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUsername',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (For additional questions)',
    }
    
  ])
  .then((data) => {
    console.log(data)
    fs.writeFile("README.md",generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('README.md file has been successfully generated!'))
})
}
// function call to initialize program
init();

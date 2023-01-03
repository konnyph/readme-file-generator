// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require("fs")
const inquirer = require("inquirer")

const runner = async () => {
    try {
        const userInput = await inquirer.prompt([
            {
                type: "input",
                name: "project_title",
                message: "What is your project tittled?"
              },
              {
                type: "input",
                name: "description",
                message: "Briefly describe your project"
              },
              {
                type: "input",
                name: "install",
                message: "Are there any installations required?"
              },
              {
                type: "input",
                name: "use",
                message: "What is the use of the application"
              },
              {
                type: "input",
                name: "contributions",
                message: "Are there any contribution rules?"
              },
              {
                type: "input",
                name: "test",
                message: "Please provide test instructions if applicable"
              },
              {
                type: "list",
                message: "License?",
                name: "license",
                choices: [
                  "[MIT License](LICENSE.txt)", 
                  "[GNU GPLv3 License](COPYING.txt)", 
                ]
              },
              {
                type: "input",
                name: "email",
                message: "Enter your email account"
              },
              {
                type: "input",
                name: "github",
                message: "Enter your github username"
              }
        ]);
let badge = ""
if (userInput.license == "[MIT License](LICENSE.txt)") {
  badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}
else if (userInput.license == "[GNU GPLv3 License](COPYING.txt)") {
  badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]"
}

var template = `
${badge}

# Title: ${userInput.project_title}

## Description:
${userInput.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [test](#test)
- [license](#license)
- [question](#questions)

## Installation: 
${userInput.install}

## Usage:
${userInput.use}

## Contribution: 
${userInput.contributions} 

## Test:
${userInput.test}
## License: 
${userInput.license}
## Questions 
${userInput.email}

Github:
${userInput.github}`
        fs.writeFileSync(`README.md`, template)
        console.log(`README file information saved to the folder..`)        

    } catch (err) {
        console.log(err)
    }

}


runner()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

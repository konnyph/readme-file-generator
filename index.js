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
                type: "checkbox",
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

        fs.writeFileSync(`${userInput.project_title}.json`, JSON.stringify(userInput))
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

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)"
    },
    {
        type: "input",
        name: "description",
        message: "Give a description of your project. (Required)"
    },
    {
        type: "input",
        name: "installation",
        message: "Provide step by step instructions on how to get the development environment running. (Required)"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide Instructions on how to use the your project."
    },
    {
        type: "choice",
        name: "liscense",
        message: "Choose a liscense that best fits your project. (Check one)",
        choices: [
            ""
        ]
    }
    
    
   
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            writeToFile("test.md", generateMarkdown(response))
        })
}

// Function call to initialize app
init();



// Description, Table of Contents, Installation, Usage, License, 
// Contributing, Tests, and Questions
// Required libraries
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// Array of Inquirer questions
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project's description?"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Pick one from the following licenses.",
        choices:["MIT", "IBM", "Apache", "I wish to specify my own"]
    },
    {
        type: "input",
        name: "credits",
        message: "Did you collaborate with anybody? Include the names and GitHub links."
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how to use your project."
    },
    {
        type: "input",
        name: "contribute",
        message: "How can people contribute to your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please write some tests or examples for your project."
    },
    {
        type: "input",
        name: "questions",
        message: "Answer some questions about your application. What are your GitHub link and email address, for example? What is the best way to contact you with further questions?"
    }
];

// Displays the questions and writes the README file
function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data)
        fs.writeFileSync("./output/README.md", generateMarkdown(data))
    })
}

// Calls the function
init();

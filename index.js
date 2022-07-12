const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

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
        choices:["MIT", "IBM", "Apache"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(data)
        fs.writeFileSync("./output/README.md", generateMarkdown(data))
    })
}

init();

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'Title'
    }, 
    {
        type: 'input',
        message: 'Provide a short description explaining the what, why, and how of your project.',
        name: 'Description'
    }, 
    {
        type: 'input',
        message: 'Add a Table of Contents? (Optional)',
        name: 'Table of Contents',
        validate: tableOfContents => {
            if (tableOfContents) {
                return true;
            } else {
                return false;
            }
        }
    }, 
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (ex. iquirer, express, etc.)',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples on how to use your application.',
        name: 'Usage'
    },
    {
        type: 'list',
        message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.',
        choices: [ 
            'Apache License 2.0', 
            'MIT', 
            'GPLv2',
            'None'
        ],
        name: 'License',
        validate: selectLicense => {
            if (selectLicense) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.',
        name: 'Contributing'
    },
    // {
    //     type: 'input',
    //     message: '',
    //     name: 'Tests'
    // },
    // Question section of the README that will include the contact information
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub'
    },
];



// Function to write README file
function writeToFile(fileName, data) {
        fs.writeFile('README.md', fileContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md file!')
    )};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
        var markdownFile = generateMarkdown(answer);
        writeToFile(markdownFile)
        });
}

// Function call to initialize app
init();

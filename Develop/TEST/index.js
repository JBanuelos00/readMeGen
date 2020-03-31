const api = require("./api");
const inquirer = require("inquirer");

const questions = [
    {type: "input",
     name: "input", 
     message: "Write something, please."
    }
];

inquirer.prompt(questions).then(function({input}) {
    
    return api;
});


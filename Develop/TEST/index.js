const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");
const api = require("./utils/api");
const genMkDwn = require("./utils/generateMarkdown");

const writeToFile = util.promisify(fs.writeFile);

const questions = [
    {
        type: "input",
        name: "fileName",
        message: "Please type in the filname for your Readme."
    },
    //   * User GitHub Profile
    {
        type: "input",
        name: "userName",
        message: "Please type in your Github user name."
    },
    //   * User GitHub email
    {
        type: "input",
        name: "email",
        message: "Please enter your email."
    },
    // * Project title
    {
        type: "input",
        name: "projTitle",
        message: "Please enter the title of your project."
    },
    // * Description
    {
        type: "input",
        name: "projDescr",
        message: "Please enter a summary of your project."
    },

    // * Usage
    {
        type: "input",
        name: "use",
        message: "Please enter the project's intended use."
    },

    // * Installation
    {
        type: "input",
        name: "installInstr",
        message: "Please enter any installation instructions."
    },

    // * License
    {
        type: "input",
        name: "license",
        message: "Please enter any licenses."
    },

    // * Contributing
    {
        type: "input",
        name: "contribs",
        message: "Please list any contributors."
    },

    // * Tests
    {
        type: "input",
        name: "tests",
        message: "Please enter any tests that may be required."
    }

];

function promptUser() {
    return inquirer.prompt(questions);
}

async function init() {
    console.log("Welcome to my Readme Generator");

    try {
        const answers = await promptUser();

        const queryURL = api.getUser(answers);

        axios.get(queryURL).then(function (res) {
            console.log("Accessing your gitHub profile and generating "+`${answers.fileName}.md`);

            const mkDwn = genMkDwn(answers);

            writeToFile(`${answers.fileName}.md`, mkDwn);

            console.log("Readme successfully generated!");
        });

    } catch (err) {
        console.log(err);
    }
}

init();

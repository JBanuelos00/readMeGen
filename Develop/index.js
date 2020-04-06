const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    // The README will be populated with the following:

    // * At least one badge
    // * Table of Contents
    //   * User GitHub profile picture

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

inquirer.prompt(questions)
    .then(function ({
        userName,
        email,
        projTitle,
        projDescr,
        use,
        installInstr,
        license,
        contribs,
        tests
    }) {
        console.log(`Hi ${userName}`);

        const queryUrl = `https://api.github.com/users/${userName}/repos?per_page=100`;

        axios.get(queryUrl).then(function (res) {
            const profPic = res.data.avatar_url;

            const readMeGen = `
            # ${projTitle}
            
            ![Profile Picture](${profPic} =250x)
            
            ${projDescr}
        
            ## Table of Contents
            - [Installation](#Installation)
            - [Usage](#Usage)
            - [License](#License)
            - [Contributing](#Contributing)
            - [Test](#Test)
            - [Questions](#FAQs)
        
            ## Usage
            ${use}
            ## Installation
            ${installInstr}
            ## License
            ${license}
            ## Contributing
            ${contribs}
            ## Test
            ${tests}
            ## Contact
            [${email}](mailto:${email})
            
        
            `
            writeFileAsync("myReadMeGen.txt", readMeGen, function (err) {
                if (err) {
                    throw err;
                }

                console.log(`ReadMe has been successfully created`);
            });


        });
    });

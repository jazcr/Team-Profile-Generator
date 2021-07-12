const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineerClass');
const Intern = require('./lib/internClass');
const Manager = require('./lib/managerClass');

// empty array for employees
const employeeArr = [];

function initApp() {
    initHTML();
    addTeamMember();
}

//function to add members to roster
function addTeamMember() {
    inquirer.prompt([
        {
            type: `input`,
            message: `Enter team member's name: `,
            name: `name`,
        },
        {
            type: `list`,
            message: `Select member's role: `,
            choices: [
                `Engineer`,
                `Intern`,
                `Manager`
            ],
            name: `role`,
        },
        {
            type: `number`,
            message: `Insert a unique employee ID number: `,
            name: `id`,
        },
        {
            type: `input`,
            message: `Enter member's email address: `,
            name: `email`,
        }
    ])

    //identifying role and adding additional info per role
    .then(function ({ name, role, id, email }) {
        let roleInfo = "";
        if (role === `Engineer`) {
            roleInfo = `GitHub username`;
        } else if (role === `Intern`) {
            roleInfo = `school name`;
        } else {
            roleInfo = `office phone number`;
        }

        inquirer.prompt([
            {
                message: `Enter team member's ${roleInfo}`,
                name: `roleInfo`,
            },
            {
                type: `list`,
                message: `Would you like to add more team members?`,
                choices: [
                    `yes`,
                    `no`,
                ],
                name: "moreTeamMembers",
            },
        ]).then(function ({ roleInfo, moreTeamMembers }) {
            let newTeamMember;
            if (role === `Engineer`) {
                newTeamMember = new Engineer(name, id, email, roleInfo);
            } else if (role === `Intern`) {
                newTeamMember = new Intern(name, id, email, roleInfo);
            } else {
                newTeamMember = new Manager(name, id, email, roleInfo);
            }
            employeeArr.push(newTeamMember);
            addHTML(newTeamMember)
                .then(function () {
                    //if user wants to add members, restart prompts, if not create HTML doc
                    if (moreTeamMembers === `yes`) {
                        addTeamMember();
                    } else {
                        finishHTML();
                    }

                })
        })
    });
};

function initHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="card-group">`;
    fs.writeFile("./output/team.html", html, function (err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("start");
}

function addHTML(member) {
    return new Promise(function (resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getID();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGitHub();
            data = `<div class="col-4
            ">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Name: ${name}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="col-4
            ">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Name: ${name}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const officePhone = member.getOffice();
            data = `<div class="col-4
            ">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Name: ${name}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${officePhone}</li>
            </ul>
            </div>
        </div>`
        }
        console.log("adding team member(s)");
        fs.appendFile("./output/team.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });

}

function finishHTML() {
    const html = ` </div>
    </div>
    
</body>
</html>`;

    fs.appendFile("./output/teamMembers.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("HTML Page is in Output folder.");
};

initApp();
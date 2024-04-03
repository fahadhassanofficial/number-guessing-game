#! /usr/bin/env node
import inquirer from "inquirer";
//1 computer generate random number. done
//2 user input for guessing number. done
//3compare user input with computer generated number and show result. done
const randonNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "Numbering",
        type: "number",
        message: "please guess number between 1-10",
    }
]);
if (answer.Numbering === randonNumber) {
    console.log("Right Answer! You win.");
}
else {
    console.log("sorry you lose try again.");
}

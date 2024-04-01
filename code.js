import inquirer from "inquirer";
//1 computer generate random number.
//2 user input for guessing number.
//3compare user input with computer generated number and show result.
const randonNumber = 13;
const answer = await inquirer.prompt([
    {
        name: "Numbering",
        type: "number",
        message: "please guess number",
    }
]);
if (answer.Numbering === randonNumber) {
    console.log("Right Answer! You win.");
}
else {
    console.log("sorry you lose try again.");
}

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initialize user balance and pin code.
let myBalance = 10000; // Dollar
let mypin = 1234;
// print welcome message.
console.log(chalk.blue("\n \twelcome to code with kiran - ATM Machine\n"));
// object
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow("Enter your pin code:"),
        type: "number",
    },
]);
if (pinAnswer.pin === mypin)
    '{';
console.log(chalk.green("\npin is correct, Login Successfully!\n"));
// console.log(`Current Account Balance is ${myBalance}`)
let operationAnswer = await inquirer.prompt([
    {
        name: "operation",
        message: "Select on operation:",
        type: "list",
        choices: ["withdraw Ammount", "check balance"]
    }
]);
if (operationAnswer.operation === "withdraw Ammount")
    '{';
let withdrawAnswer = await inquirer.prompt([
    {
        name: "withdrawMethod",
        message: "Select a withdrawal method:",
        type: "list",
        choices: ["Fast Cash", "Entre Amount"]
    }
]);
if (withdrawAnswer.withdrawMethod === "Fast Cash") {
    let fastCashAnswer = await inquirer.prompt([
        {
            name: "fastCash",
            message: "Select Amount:",
            type: "list",
            choices: [1000, 2000, 5000, 10000, 20000, 50000]
        }
    ]);
    if (fastCashAnswer.fastCash > myBalance) {
        console.log(chalk.red("Insufficient Balance"));
    }
    else {
        myBalance -= fastCashAnswer.fastCash;
        console.log(`${fastCashAnswer.fastCash} withdraw successfully`);
        console.log(`your Remaining Balance is: ${myBalance}`);
    }
}
else if (withdrawAnswer.withdrawaMethod === "Enter Amount") {
    let amountAnswer = await inquirer.prompt([
        {
            name: "amount",
            message: "enter the amount to withdraw:",
            type: "number"
        }
    ]);
    // =, -=, +=
    if (amountAnswer.amount > myBalance) {
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAnswer.amount;
        console.log(`${amountAnswer.amount} withdraw successfully`);
        console.log(`your Remaining Balance is: ${myBalance}`);
    }
}
else if (operationAnswer.operation === "Check Balance") {
    console.log(`your Account Balance is: ${myBalance}`);
}
else {
    console.log(chalk.red("pin is Incorrect,Try Again!"));
}

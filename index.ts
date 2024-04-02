#! /usr/bin/env node

import inquirer from "inquirer";

// Intialize user balance and pin code
let myBalance = 10000;
let mypin = 1234;

// Welcome Message
console.log("Wellcome to Rakhail Style Codes - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
       name: "pin",
       type: "number",
       message: "Please enter your PIN code:", 
    }
])
if (pinAnswer.pin === mypin ){
    console.log("Your Pin is correct, Login Successfully!");
    

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:",
            }
        ])
        if(amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else{
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance"){
        console.log(`Your Current Balance is: ${myBalance}`);        
    }
}
else{
    console.log("Your Pin is Incorrect, Please Try Again");
}
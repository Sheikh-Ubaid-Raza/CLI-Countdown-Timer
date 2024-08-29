#! /usr/bin/env node
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
console.log("\t Welcome to CLI CountDown Timer \t");
const response = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Enter the Second to Start the Count Down Timer!",
        validate: (input) => {
            if (isNaN(input)) {
                return "Please Enter Valid Number!";
            }
            else if (input > 60) {
                return "Seconds Must be Lesser Than or Equal to 60 ";
            }
            else if (input > 60) {
                return "Seconds Must be Lesser Than or Equal to 60 ";
            }
            else {
                return true;
            }
        }
    }
]);
let input = response.userInput;
function startTime(value) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + value);
    const intervalTime = new Date(initialTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            console.log("Timer has Ended!!");
            process.exit();
        }
        const min = Math.floor((timeDifference % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDifference % 60);
        console.log(`${min.toString().padStart(2, "0")}: ${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);

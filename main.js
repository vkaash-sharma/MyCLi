
let helpFunc = require("./commands/help");

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch(command){

    case "help":
        // console.log("we are in help section");
        helpFunc.help();
        break;

    case "organize":
        console.log(" we are in organize section");
        break;
        
    case "tree":
        console.log("we are in tree section");
        break;
    default:
        console.log("Entering Invalid Command");
        break;        
}
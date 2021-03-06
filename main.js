
let helpFunc = require("./commands/help");
let orgFunc = require("./commands/organize");
let treeFunc = require("./commands/tree");

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

switch(command){

    case "help":
        // console.log("we are in help section");
        helpFunc.help();
        break;

    case "organize":
        // console.log(" we are in organize section");
        orgFunc.organize(path);
        break;
        
    case "tree":
          treeFunc.treeKey(path);  
        break;
    default:
        console.log("Entering Invalid Command");
        break;        
}
//this file is totally based on how do we perform task using our cli tools , and call diff operations to perform by  calling there function call.
const taskfile = require('./task-service');
//here task file plays a role of object and theh functions which we export from other file act as a key , so if we want to access the function we will write it as taskfile.addTask()
const Process = process.argv;
const Command = Process.slice(2);//we extract an array containing the commands such as add "I will work", where it usually starts form index 2, so we slcie it as (2).

//Now command of 0 or 1 is "add" and "description or "id".
switch(Command[0]) {//here command[0] means action which the user wants to take, add, delete, list, mark_in_progress etc 
    case "add" :
        if(Command.length()<2){
            console.log("Please Enter The Description");
            process.exit(1);//process exit is a way to stop the program , if something get succeed we usually return as process.exit(0), which means success.1 indicates failure
        }

        taskfile.addTask(Command[1]);
        break;
    
    

}

// User Input-> node index.js add "I have to eat food by 2 a.m"

// [
//     node -> 0,
//     index.js-> 1,
//     add -> 2,
//     "I have to eat food by 2 a.m" ->3
// ]

// stored by process.argv[], it contains the data in the form of strings , where we dont need everything but we do need the command of actions which is given and the description  and the id 

// Like for deleting we do need the id of the task whcih  we want to delete
// same of mark progress and mark done 


















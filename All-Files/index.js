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
     // as in update we are expecting two things the new description and the task , which we can get by id only 
     //Input -> node index.js update "I have to study "
      case "update":
        if(Command.length()< 3){
            console.log("Please Enter Description and Id if not Done");
            process.exit(1);
        }
        taskfile.UpdateTask(Command[1],{description : Command[3]});
        break;
     

        // node index.js list or node index.js list Done , we can get two types of input here , so we do have to manage, just list, status list and incorrect out of bound list 
        case "list"://list 
            if(Command.length()===1){
                taskfile.UpdateTask(null);//here null indicates that no status is been passed to the update fucntoin in taskservice file,  
            }
            else if(!["in_progress","Done!","todo"].includes(Command[1])){
                console.log("Please Enter a Valid Status, such as in_progress, Done!, todo");
                process.exit(1);

            }
            //now what that user has typed the command such as list Done!, in this case based on the requested status , call the list functions
            else{
                taskfile.ListTask(Command[1]);

            }
            break;

            case "delete":
                if(Command.length()<2){
                    console.log("Required Condition Does Not Provide Id ");
                    process.exit(1);
                }

                taskfile.DeleteTask(Command[1]);
                break;


                //in mark in progress means take any task from the list and send the status of in_progress to change the current status from todo or done to in_progress
                case "mark-in-progress":
                    if(Command.length()<2){
                        console.log("Provide the required Id of the Task You want to update");
                        process.exit(1);
                    }

                    taskfile.mark_in_Progress(Command[1],{status : "in_progress"});

                    break;


                    case "mark-in-done":
                    if(Command.length()<2){
                        console.log("Please Enter an Id to Mark Task as Done!");
                        process.exit(1);
                    }

                    taskfile.mark_in_Done(Command[1],{status : "Done!"});

                    break;

                    case "help":
                        display_help();
                        break;
                        
                        default:
                            console.log("Incorrect use of Command Line Interfacs (CLI)");
                            display_help();
                        

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


















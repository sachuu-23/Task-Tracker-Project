// In this file we will write all the bussiness logic, of adding a task, updating a task , listing a task and deleting a task.

// ORDER of functions which i am implementing 
// 1)  addTask (simplest, confidence builder)
// 2️⃣ listTasks
// 3️⃣ markInProgress / markDone
// 4️⃣ updateTask
// 5️⃣ deleteTask

const {STATUS,COLOR} = require('./constants')
const {readTask , writeTask} = require('./file-service');

//this is required because when we will list the task there we have to read the data from our data file , and that reading will happen in fileservice file and there we need to send the file name as an paramter , so that we can use there that file name to connect the path and then perform opeartions on that path 


// for adding task purpose we are going to use write task , which will call the function in our file service and from there we can add or write he task into our data.json file and update the file 
// The logic to get new id everytime a new task is added is by definig a global counter which keeps track of the pervious id and the current id 


function addTask(description){
       const currentTaskState = readTask();
       //here i wll get the list of all task and the last task of the list also 
    const newId = currentTaskState.length===0?1:currentTaskState[currentTaskState.length- 1].id + 1;
    //means last task id , we get and then we append + 1 to that value like 10 + 1  = 11 which is now our new id value.
    // here we are creating the obejct of all the json data
    //from task service file we have to send the array to file servie file , writetask fuunction which will parse it into json and then write it in taskjson file 

    const CurrentTime = new Date().toISOString();
   
        const NewTask = {
        "id" : newId,
         description ,
        "status" :STATUS.TODO,
        "color":COLOR.green,
        "createdTime":CurrentTime,
        "updatedTime":CurrentTime,
    }
    currentTaskState.push(NewTask);
    writeTask(currentTaskState);

    console.log("The task Has been added",NewTask);
}
function ListTask(status){
    // In list task get all the task from the database but send only that data which the user has requetsed for , based on the status we can understand that what the user is requesting for , like only done task, or in-progress task or just task , we need to handle alll the cases
    const ListAllTask = readTask();
    if(!status){
        console.log(ListAllTask);//this means if there is no status given by the user then just return all the task list 
    // Or else return the task which is asked for , so this is where we use array method called as filter whcih creates a new array and insert or selects only those elemnts which is asked for , so basically we can use when we want to get the list of a specific task.

    return ListAllTask.filter((t) =>t.status === status);//it gets the status of all the task whcih contains the status which is being requested for,and then it is compared ,if it is same then it will  return a new array containig all the task of requested status
}
}
function DeleteTask(id){
    const tasks = readTask();
    const updatedTask = tasks.filter((list)=>list.id !== id);
    if(updatedTask.length() === tasks.length() ) return false;

    writeTask(updatedTask);
    console.log("Task Has been Deleted",updatedTask);

}

function UpdateTask(id){
    const tasks = readTask();
    const task = tasks.find((list)=>list.id === id);

    if(!task) return null ;
    task.description = description;//here des is acting like a object vlaue , ok object value
    task.updatedTime = new Date().toISOString();
    task.color = COLOR.green.

     writeTask(tasks);
     console.log("The task has been Updated",task);

}
function mark_in_Progress(id){
    //first get all the task from taskjson file using readTask function
    const Tasks= readTask();
    const task = Tasks.find((t)=>t.id === id);
    

    if(!task) return null;
    task.status  = STATUS.PROGRESS;
    task.color = COLOR.yellow;

    task.updatedTime = new Date().toISOString();

    writeTask(Tasks);
   console.log("Mark in progress Task is marked",task);
    //this means it will show now the updated task that is now mark as in progress task ,and this will also get displayed on the screen of user CLI.
}

function mark_in_Done(id){
    console.log("wait here");
    const Tasks = readTask();
    const task = Tasks.find((List)=> List.id === Number(id));
    console.log("helloooo");

     console.log("hii");
     if(!task) return null;

    task.status = STATUS.DONE;
   

    task.updatedTime = new Date().toISOString();

    writeTask(Tasks);
     console.log("Mark in Done is done",task);
}

module.exports = {
    addTask,
    ListTask,
    DeleteTask,
    UpdateTask,
    mark_in_Progress,
    mark_in_Done,
}

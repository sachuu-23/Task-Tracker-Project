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
    const newId = currentTaskState.length()===0?1:currentTaskState[currentTaskState.length()- 1].id + 1;//means last task id , we get and then we append + 1 to that value like 10 + 1  = 11 which is now our new id value.
    // here we are creating the obejct of all the json data
    //from task service file we have to send the array to file servie file , writetask fuunction which will parse it into json and then write it in taskjson file 

    const CurrentTime = new Date().toISOString();
   
        const NewTask = {
        "id" : newId,
        "description":description ,
        "status" :STATUS.TODO,
        "color":COLOR.green,
        "createdTime":CurrentTime,
        "updateTime":CurrentTime,
    }
    currentTaskState.push(data);
    writeTask(currentTaskState);

    return NewTask;
}

function ListTask(){

    const ListAllTask = readTask();

}




function DeleteTask(){

}
module.exports = {
    data,
}

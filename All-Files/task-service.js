// In this file we will write all the bussiness logic, of adding a task, updating a task , listing a task and deleting a task.

const {STATUS,COLOR} = require('./constants')
const {readTask , writeTask} = require('./file-service');

//this is required because when we will list the task there we have to read the data from our data file , and that reading will happen in fileservice file and there we need to send the file name as an paramter , so that we can use there that file name to connect the path and then perform opeartions on that path 


// for adding task purpose we are going to use write task , which will call the function in our file service and from there we can add or write he task into our data.json file and update the file 
// The logic to get new id everytime a new task is added is by definig a global counter which keeps track of the pervious id and the current id 

const PreviousId = 0;
function addTask(description){
       const currentTaskState = readTask();
       //here i wll get the list of all task and the last task of the list also 
    const newId = PreviousId + 1;
    // here we are creating the obejct of all the json data
    //from task service file we have to send the array to file servie file , writetask fuunction which will parse it into json and then write it in taskjson file 

    const CurrentTime = new Date().toISOString();
   
        const data = {
        "id" : newId,
        "description":description ,
        "status" :STATUS.TODO,
        "color":COLOR.green,
        "createdTime":now,
        "updateTime":now,


    }

    currentTaskState.push(data);
    writeTask(currentTaskState);


}

module.exports = {
    data,
}

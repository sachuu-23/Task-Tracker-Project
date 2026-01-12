// This file work is just to get the input from user and based on that update and perform actions on taskjson file.
// Like  take the required input data from other file, if it is read, means just tos show the task list of our todos and write means adding new task to todo and deleting means delete the task from our json file.
// These all acitons are triggered from task file and asked in this file to take again an actions.

const fs = require('fs');
const path = require('path');
// By using path.join(), we create paths of all file into this file and we can perform operatiions in all the file from here by using (FILE SYSTEM)
function readTask(){
    try{

        //we connect the path using its current directory and by writing the file name
        const datajson = path.join(__dirname,"data.json")

        //check if file even exist or not, if not then create an empty array and then stringify it and then return the empty array
        if(!fs.existsSync(datajson)){
           fs.writeFileSync(datajson,JSON.stringify([],null,2),"utf8");
           return [];
        }

        const data = fs.readFileSync(datajson,"utf8");
        return data ? JSON.parse(data) : [];
    }
    catch(error){
        return [];

    }
}
//for write you will get the parameter from task file , as that thing only you have to write into task json file 
function writeTask(data){

    try{
        fs.writeFileSync(datajson,JSON.stringify(data,null,2),"utf8")

    }catch(error){
    //   No need to perform any sort of logic here if foud errro just sty silent 
    }

}

module.exports = {
    readTask,
    writeTask,

}



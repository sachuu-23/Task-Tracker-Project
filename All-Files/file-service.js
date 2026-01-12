// This file work is just to get the input from user and based on that update and perform actions on taskjson file.
// Like  take the required input data from other file, if it is read, means just tos show the task list of our todos and write means adding new task to todo and deleting means delete the task from our json file.
// These all acitons are triggered from task file and asked in this file to take again an actions.

const fs = require('fs');
const path = require('path');


// By using path.join(), we create paths of all file into this file and we can perform operatiions in all the file from here by using (FILE SYSTEM)

const taskjson = path.join(__dirname,"task.json");
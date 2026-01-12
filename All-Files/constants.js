//File to store repetitive keyword of all project,such as :
// STATUS code 
// STATUS color etc and we will
// We write it using object, key and its value
// And then we export into diff file,just callig the object name and its key which will give me the value.
// And by importing into diff file we can use there 
//this will get extracted from here and will get printed in our terminal ok

// when i will call STATUS.TODO-> this will get replaced by todo 
const STATUS = {
    TODO:"todo",
    PROGRESS:"in-progress",
    DONE:"done",

};


// To use this we will export it from this file and use in other file when required, by writing, COLOR.red -> Will give me red color message to be printed out, so we use ANSI color code when we want our todo data to be in color , when asked about the progress the progress must be in color , delete, done etc 
const COLOR = {
    red:"\x1b[31m",
    green:"\x1b[32m",
    reset:"x1b[0m",
    cyan:"\x1b[36m",
    yellow:"\x1b[33m",

}

module.exports ={
    STATUS,
    COLOR,
}


const yargs = require('yargs')
const chalk = require('chalk')


//Customizing version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log("Adding")
    }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function () {
        console.log("Removing")
    }
})

//Create list command

yargs.command({
    command: "list",
    describe: "List the notes",
    handler: function() {
        console.log("Listing");
    }
})

//Create read command

yargs.command({
    command: 'read',
    describe: 'Reading the notes',
    handler: function() {
        console.log("Reading the note");
        
    }
})
console.log(yargs.argv)
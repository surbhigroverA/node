const fs = require('fs')

console.log('App running')

fs.writeFileSync('notes.txt','This is notes-app file created in node js as demo!')

fs.appendFileSync('notes.txt','\nCreated by Surbhi Grover')
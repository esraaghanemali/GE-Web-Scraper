/**
 * js file called befor the window
 * pass parameters from the current window
 */
 global.ELECTRON_IPC = require("electron").ipcRenderer

global.remote = require("electron").remote

global.serialize = require('node-serialize');

// console.log("remote from preload: "+global.remote.getCurrentWindow().rendererSideName.myFunction())

global.ELECTRON_IPC.on('serilize', (event, message) => {
    console.log('enter '+message)
    // console.log('global '+global.serialize)

    var unser = global.serialize.unserialize(message)
    

    console.log("user "+ unser)
    
})
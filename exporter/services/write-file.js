var savefile = require('electron').remote
var dialog = savefile.dialog
var fs = require('fs')

var result = {
    write: function writeFun(content) {
        
        dialog.showSaveDialog((fileName) => {
            if (fileName === undefined) {
            global.notification.show("Oops!", "you dont choose any thing :\ nothing saved.", 1)         
                return;
            }
            

           // fileName is a string that contains the path and filename created in the save file dialog.  
            fs.writeFile(fileName, content, (err) => {
                if (err) {
                       global.notification.show("Error Writing File!", "somthing went wrong :(, "+err.message, 1)
                  //  alert("An error ocurred creating the file " + err.message)
                }
              global.notification.show("Finished :)", "the file saved correctly ;)", 1)         
            });
        });
    }
}

module.exports = result
var savefile = require('electron').remote
var dialog = savefile.dialog
var fs = require('fs')

var result = {
    write: function writeFun(content) {
        dialog.showSaveDialog((fileName) => {
            if (fileName === undefined) {
                console.log("You didn't save the file");
                return;
            }

            // fileName is a string that contains the path and filename created in the save file dialog.  
            fs.writeFile(fileName, content, (err) => {
                if (err) {
                    alert("An error ocurred creating the file " + err.message)
                }

                alert("The file has been succesfully saved");
            });
        });

    }

}

module.exports = result
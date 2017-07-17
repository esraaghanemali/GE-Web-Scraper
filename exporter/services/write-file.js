var savefile = require('electron').remote
var dialog = savefile.dialog
var fs = require('fs')

var result = {
    write: function writeFun(type,content) {
        
        dialog.showSaveDialog((fileName) => {
            if (fileName === undefined) {
            global.notification.show("Oops!", "you dont choose any thing :\ nothing saved.", 1)         
                return;
            }
            

if(type==3)
{
    try{
content.pipe(fs.createWriteStream(fileName+'.csv'))
         global.notification.show("Finished :)", "the file saved correctly ;)", 1)         

    }catch(err)
    {
      global.notification.show("Error Writing File!", "somthing went wrong :(, "+err, 1)

    }

}  
else 
if(type==4)
{
    try{
content.getReadStream().pipe(fs.createWriteStream(fileName+'.xlsx'));
              global.notification.show("Finished :)", "the file saved correctly ;)", 1)         

    }catch(err)
    {
      global.notification.show("Error Writing File!", "somthing went wrong :(, "+err, 1)

    }
} 
else

{
  fs.writeFile(fileName, content, (err) => {
                if (err) {
                       global.notification.show("Error Writing File!", "somthing went wrong :(, "+err.message, 1)
                  //  alert("An error ocurred creating the file " + err.message)
                }
              global.notification.show("Finished :)", "the file saved correctly ;)", 1)         
            });
}       
 



        });
    }
}

module.exports = result
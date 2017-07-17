var ipcMain = require("electron").ipcMain;


   ipcMain.on('query', function (event, value) {
  console.log("value reached "+value);
 
});

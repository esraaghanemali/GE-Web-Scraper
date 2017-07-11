//  const ipc1 = require('electron').ipcRenderer
//   ipc1.send('open-information-dialog')



const ipc = require('electron').ipcRenderer
const dialog = require('electron').dialog


ipc.on('open-information-dialog', function (event) {
  const options = {
    type: 'info',
    title: 'Error',
    message: "This is an information dialog. Isn't it nice?",
    buttons: ['Yes']
  }
  console.log("on work")
  // dialog.showMessageBox(options, function (index) {
  //   // event.sender.send('information-dialog-selection', index)
  // })
})

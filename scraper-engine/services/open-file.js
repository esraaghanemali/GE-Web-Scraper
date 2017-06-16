var openfile = require('electron').remote
var dialog = openfile.dialog
var parse = require(global.appRoot + '/scraper-engine/services/parseXml')
var selectFile =
 {
openSelectDialog : function openDialog()
{
    dialog.showOpenDialog(function (fileNames) {
    if (fileNames === undefined) {
      document.getElementById('showxmlpath').innerHTML = 'nothing selected'
    } else {
         document.getElementById('showxmlpath').innerHTML = 'u select: '+ fileNames[0] 
      parse.parseFile(fileNames[0] )
        }
      })}
}
module.exports = selectFile
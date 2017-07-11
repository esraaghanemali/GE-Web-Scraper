
var result = {
    showInfo : function showInfoFun (options , cb)
    {
var info = require('electron').remote
infodialog = info.dialog

infodialog.showMessageBox(options, function (index) {

   cb (index)
  })
    }
}
module.exports = result
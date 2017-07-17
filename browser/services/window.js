const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')


  const modalPath = path.join('file://', global.appRoot, '/sections/windows/modal.html')
  const csslPath = path.join('file://', global.appRoot, '/extention/selectorgadget_combined.js')
  let win = new BrowserWindow({ width: 400, height: 320 ,  webPreferences: {
      experimentalFeatures :true,
      experimentalCanvasFeatures :true,
      nativeWindowOpen :true,
        preload: csslPath,
        plugins :true,
        sandbox :true
    }})
  win.on('close', function () { win = null })
   win.loadURL(modalPath)
 
 
  win.show()


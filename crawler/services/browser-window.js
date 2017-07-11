/*
create new browser window 
load the url 
 */
const {BrowserWindow} = require('electron').remote
global.sharedObject = {};
//    var query = require("E:/project2/second/GE-Web-Scraper/assets/jquery-3.2.1.min")
  //      myex.tog()
// js in 1.html
//require('remote').getGlobal('sharedObject').someProperty = 'some value';
//var serialize = require('node-serialize');
 var result = {
   showWindow : function windowFun(page)
   {
     var myex = require("E:/project2/second/GE-Web-Scraper/extention/selectorgadget_combined")

    var somethingIWantToShare = {
       select :  myex
    }
 
 
    var objS = serialize.serialize(myex);
    typeof objS === 'string';

     let mainWindow = new BrowserWindow({width: 800, height: 600 ,
      webPreferences: {
        nodeIntegration: false,
        preload: global.appRoot+'/crawler/services/preload.js'
    }})


 mainWindow.loadURL('https://www.ebay.com/')


//  console.log("mainWindow.rendererSideName "+mainWindow.rendererSideName.myFunction())


//   mainWindow.loadUrl('http://www.google.com');
  mainWindow.openDevTools();

  mainWindow.on('closed', function() {
    console.log("The page has been closed");
    mainWindow = null;
  });




 mainWindow.webContents.on('did-finish-load', function() {
//         mainWindow.webContents.executeJavaScript("console.log('global '+global.ELECTRON_IPC)", function (result) {

//   console.log("res "+result)
// })
  //  mainWindow.webContents.executeJavaScript(`document.querySelector('input[name="q"]').value`, function (result) {

    
    
//   mainWindow.webContents.executeJavaScript("console.log('the fun '+global.remot.getGlobal('selec'))", function (result) {
// console.log("res "+result)  
// })
  mainWindow.webContents.send('serilize', objS)

   
 

//        mainWindow.webContents.executeJavaScript("global.ELECTRON_IPC.on('message', (event, message) => {console.log('enter '+message)})", function (result) {

//   console.log("res "+result)
// })
  })



  mainWindow.webContents.on('dom-ready', function() {
//   console.log("dom is ready");
//          mainWindow.webContents.executeJavaScript(' require("E:/project2/second/GE-Web-Scraper/assets/jquery-3.2.1.min") ', function (result) {

//   console.log("res "+result)
// })
//     mainWindow.webContents.executeJavaScript('require("E:/project2/second/GE-Web-Scraper/extention/selectorgadget_combined").toggle()', function (result) {

//   console.log("res "+result)
// })

});

  // mainWindow.webContents.on('did-finish-load', function() {
  //   console.log(mainWindow.webContents.getUrl());
  // });

   }
 }

 module.exports = result

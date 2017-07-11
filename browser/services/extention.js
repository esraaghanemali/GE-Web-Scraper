 //const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer-offline');
 
 result = {
     addExtention : function addExtentionFun ()
     {
const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

     }
 }

 module.exports = result

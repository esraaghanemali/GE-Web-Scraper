
// const test = require('tape')
// const Chrome = require('../index')
// const path = require('path')
// const fs = require('fs')

// test('the textContent is extracted', assert => {
//   const location = path.join(__dirname, 'browser0.js')

//   const chrome = Chrome(fs.readFileSync(location, 'utf8'))
//   chrome.on('stdout', data => {
//     assert.equal(data, 'Hello')
//     assert.end()
//   })
// })

// test('the textContent is extracted using non default html', assert => {
//   const js = path.join(__dirname, 'browser1.js')
//   const html = path.join(__dirname, 'alternate-index.html')

//   const chrome = Chrome({ js, html })
//   chrome.on('stdout', (data) => {
//     assert.equal(data, 'OK')
//     assert.end()
//   })
// })

// test('support node', assert => {
//   const source = `console.log(!!require('os')); window.close()`
//   const chrome = Chrome(source, true)
//   chrome.on('stdout', data => {
//     assert.equal(data, true)
//     assert.end()
//   })
// })

// module.exports = test


var Chrome =require(global.appRoot + '/browser/services/chrome-init')



 var result = {
   startChrome : function startChromeFun()
   {


const chrome = Chrome('<h1>Hello World</h1>')


chrome.on('stdout', (data) => console.log(data))
chrome.on('exit', (code, sig) => process.exit(code, sig))

   }
 }

 module.exports = result

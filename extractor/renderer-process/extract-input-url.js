 const urlInput = document.getElementById('urlInput')

  const extractUrl = document.getElementById('extractUrl')
  const seletorInputUrl = document.getElementById('seletorInputUrl')
var buildXmlFile = require(global.appRoot+'/main-process/writeXmlFile')

 var ExtractUrlservice = require(global.appRoot+'/extractor/services/extract-input-url')

   extractUrl.addEventListener('click', function () {
   if (urlInput.value == '') urlInput.placeholder = 'enter url please.'
   else if (seletorInputUrl.value == '') seletorInputUrl.placeholder = 'enter selecto please.'
    else
    {

ExtractUrlservice.extractData(extractUrl,seletorInputUrl,function(data)
{

// buildXmlFile.write(data)

console.log('url: '+ extractUrl)
console.log('data from input: '+ data.length)
})
    }
     })





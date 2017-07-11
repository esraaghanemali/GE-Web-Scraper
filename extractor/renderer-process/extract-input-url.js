 const urlInput = document.getElementById('urlInput')

  const extractUrl = document.getElementById('extractUrl')
  const seletorInputUrl = document.getElementById('seletorInputUrl')
var buildXmlFile = require(global.appRoot+'/main-process/writeXmlFile')

 var ExtractUrlservice = require(global.appRoot+'/extractor/services/extract-input-url')
var startExtractBegin = document.getElementById('startExtractBegin')
   extractUrl.addEventListener('click', function () {
   if (urlInput.value == '') urlInput.placeholder = 'enter url please.'
   else if (seletorInputUrl.value == '') seletorInputUrl.placeholder = 'enter selecto please.'
    else
    {
      startExtractBegin.innerHTML = 'Starting....'
      console.log("enter ")
     ExtractUrlservice.extract(urlInput.value,seletorInputUrl.value,function(data)
{
  startExtractBegin.innerHTML = 'Finished :) extracting '+ data.length+' elements'

})
    }
     })





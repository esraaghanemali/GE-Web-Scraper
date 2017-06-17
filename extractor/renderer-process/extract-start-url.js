var StartUrlService = require(global.appRoot+'/extractor/services/extract-start-url')


const selectorInputStartUrl = document.getElementById('selectorInputStartUrl')
const extractStartUrl =  document.getElementById('extractStartUrl')

extractStartUrl.addEventListener('click', function () {
  if (selectorInputStartUrl.value == '') selectorInputStartUrl.placeholder = 'enter selector please.'
  else
  {

  }
  
})

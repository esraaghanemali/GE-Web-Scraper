var openFileService = require(global.appRoot+'/scraper-engine/services/open-file');
const selectxmlfile = document.getElementById('selectxmlfile')

selectxmlfile.addEventListener('click', function (event) {
  
openFileService.openSelectDialog()

})
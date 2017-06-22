var startExtractService = require(global.appRoot+'/scraper-engine/services/startExtract');

var startExtractSpan = document.getElementById('startExtractSpan')
var startExtract = document.getElementById('startExtract')
startExtract.addEventListener('click',function(event)
{
startExtractSpan.innerHTML='extracting begin.'
startExtractService.nav_Extract(function(data)
{
    console.log("data get: "+ data)
    //do whatever in data
})
//extract from each page

//get data
})
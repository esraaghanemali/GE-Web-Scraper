var startExtractService = require(global.appRoot+'/scraper-engine/services/startExtract');

var startExtractSpan = document.getElementById('startExtractSpan')
var startExtract = document.getElementById('startExtract')
startExtract.addEventListener('click',function(event)
{
startExtractSpan.innerHTML='extracting begin.'
startExtractService.nav_Extract(function(result)
{
    if(result.code==0)
    {
    }
    else
    {
console.log("data get: "+ result.msg)
    }
    
    //do whatever in data
})

})
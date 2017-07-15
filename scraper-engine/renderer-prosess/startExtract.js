var startExtractService = require(global.appRoot+'/scraper-engine/services/startExtract');

var startExtractSpan = document.getElementById('startExtractSpan')
var startExtract = document.getElementById('startExtract')
var i = 1
startExtract.addEventListener('click',function(event)
{
    global.finalData=[]
startExtractSpan.innerHTML='extracting begin.'
startExtractService.nav_Extract(function(result)
{
    if(result.code==0)
    {
    }
    else
    {
        if(global.finish==true)
        {
 startExtractSpan.innerHTML='finished :) '
        }
        
         else
         {
  startExtractSpan.innerHTML='extracting page: '+i
        i++
         }
      
console.log("data get: "+ result.msg)
    }
    
    //do whatever in data
})

})
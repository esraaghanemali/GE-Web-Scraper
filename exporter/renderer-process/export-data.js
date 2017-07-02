 const exportbtn = document.getElementById('export')
 var exportService = require(global.appRoot+'/exporter/services/export-data')

 var radioXml = document.getElementById('xml')
 var radioJson = document.getElementById('json')
 var radioCsv = document.getElementById('csv')

   exportbtn.addEventListener('click', function () {
       var clicked = 0

if (radioXml.checked) 
{
clicked = 1
}

// if (radioJson.checked) 
// {
// clicked = 2
// }

// if (radioCsv.checked) 
// {
// clicked = 3
// }

exportService.export(clicked)

     })
  

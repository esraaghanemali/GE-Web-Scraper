const exportbtn = document.getElementById('export')
var exportService = require(global.appRoot + '/exporter/services/export-data')
 var info = require(global.appRoot + '/renderer-process/information')

var radioXml = document.getElementById('xml')
var radioJson = document.getElementById('JSON')
var radioCsv = document.getElementById('csv')
var radioExcel = document.getElementById('xlsx')

exportbtn.addEventListener('click', function () {

    var clicked = 0

    if (radioXml.checked) {
        clicked = 1
    }

    if (radioJson.checked) {
        clicked = 2
    }

    if (radioCsv.checked) {
        clicked = 3
    }
      if (radioExcel.checked) {
        clicked = 4
    }
    

    exportService.export(clicked)

})

showalldata = document.getElementById('showalldata')
showalldata.addEventListener('click', function () {
    var $ = require('jquery');
var DataTable = require('datatables.net')(window, $);


     $( "#example_wrapper" ).remove()
stepb()
    
if(global.finalData[0]==undefined)
{
                                const options = {
    type: 'info',
    title: 'Error!',
    message: "Error No Data. If you didn't Load the model file. Please Load the correct model file from our extention :) or wait till the extractor finish",
    buttons: ['Ok']
  }
                       info.showInfo(options , function(index)
                       {
                           // console.log(index)
                       })
}
else{
    var data = '<table id="example" class="table table-striped table-bordered" width="100%" cellspacing="0"><thead><tr>'


    var allDataObj = {}
 for (var i = 0; i < global.finalData.length; i++) {
      for (var j = 0; j < global.finalData[i].extracted.length; j++) {
         
allDataObj[global.finalData[i].extracted[j].title] =[]
         

      }
 }

  for (var i = 0; i < global.finalData.length; i++) {
      for (var j = 0; j < global.finalData[i].extracted.length; j++) {
         
for(var k=0 ; k<global.finalData[i].extracted[j].data.length;k++)
{
allDataObj[global.finalData[i].extracted[j].title].push(global.finalData[i].extracted[j].data[k])
}
         

      }
 }
 var maxRow = 0

 for(var key in allDataObj) {
    // var value = allDataObj[key];
    // console.log(value)
    // console.log(key)
     data = data + '<th>' + key + '</th>'
    if(allDataObj[key].length>maxRow)
    {
        maxRow = allDataObj[key].length
    }
}
data = data + '</tr></thead><tfoot><tr>'


 for(var key in allDataObj) {
   
     data = data + '<th>' + key + '</th>'
  
}
data = data + '</tr></tfoot><tbody>'


for (var i = 0 ; i<maxRow ; i++)
{
    data = data + '<tr>'
     for(var key in allDataObj) {
    if(allDataObj[key].length>i)
    {
          data = data + '<td>'+allDataObj[key][i]+'</td>'
    }
    else
    {
         data = data + '<td>no result</td>'
    }
  
}
  data = data + '</tr>'
}

    data = data + '</tbody></table>'
    $(data).appendTo('#tablediv')

    $('#example').DataTable()


}


})
function stepb()
{
   
}
const exportbtn = document.getElementById('export')
var exportService = require(global.appRoot + '/exporter/services/export-data')
 var info = require(global.appRoot + '/renderer-process/information')

var radioXml = document.getElementById('xml')
var radioJson = document.getElementById('JSON')
var radioCsv = document.getElementById('csv')

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
    message: "Error loading the model file. It dosent seem you Load model file. Please Load the correct model file from our extention :)",
    buttons: ['Ok']
  }
                       info.showInfo(options , function(index)
                       {
                           // console.log(index)
                       })
}
else{
    var data = '<table id="example" class="table table-striped table-bordered" width="100%" cellspacing="0"><thead><tr>'

    for (var j = 0; j < global.finalData[0].extracted.length; j++) {
        data = data + '<th>' + global.finalData[0].extracted[j].title + '</th>'
    }
    //  data = data + '<th>page url</th>'
    data = data + '</tr></thead><tfoot><tr>'
    for (var j = 0; j < global.finalData[0].extracted.length; j++) {
        data = data + '<th>' + global.finalData[0].extracted[j].title + '</th>'
    }
    //  data = data + '<th>page url</th>'
    data = data + '</tr></tfoot><tbody>'
    var contentArray = []

        for (var i = 0; i < global.finalData.length; i++) {
       var maxRow = 0;
            for (var j = 0; j < global.finalData[i].extracted.length; j++) {
                if(global.finalData[i].extracted[j].data.length >= maxRow)
                {
                    maxRow = global.finalData[i].extracted[j].data.length
                }
                
           
            }
         //   console.log("max "+ maxRow)
            for(var k= 0 ; k< maxRow ; k++)
            {
                dataRow = []
                    for (var j = 0; j < global.finalData[i].extracted.length; j++) {
                      //  console.log("global.finalData[i].extracted[j].data.length "+global.finalData[i].extracted[j].data.length)
                if(k <global.finalData[i].extracted[j].data.length  )
                {
                   dataRow.push(global.finalData[i].extracted[j].data[k])
                }
                else
                {
                     dataRow.push('no data')
                }
                
           
            }
contentArray.push(dataRow)
               
            }

        }


    for (var i = 0; i < contentArray.length; i++) {
        data = data + '<tr>'
        // console.log("contentArray[i].length "+contentArray[i].length)
        for (var j = 0; j < contentArray[i].length; j++) {
            if(contentArray[i][j] == undefined)
            {
   data = data + '<td>no result</td>'
            }
         
            else
            {
                 data = data + '<td>' + contentArray[i][j] + '</td>'
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
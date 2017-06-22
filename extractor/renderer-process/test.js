var testService = require(global.appRoot + '/extractor/services/test')

const testTable = document.getElementById('testTable')
const testxmlfile = document.getElementById('testxmlfile')
const showdatap = document.getElementById('showdatap')

//var table = document.getElementById("testTable");
var chooseFile = document.getElementById("htmlPage");
var pageName = document.getElementById("pageName")


testxmlfile.addEventListener('click', function () {

if(chooseFile.value=='')
{
  chooseFile.placeholder='-_-'
}
else
{

  testService.extract(chooseFile.value,function (data) {
var table = document.getElementById("testTable")
while(table.hasChildNodes())
{
  table.removeChild(table.firstChild)
}
    var header = table.createTHead();
    var row = header.insertRow(0);
    //console.log('data ' + data[0].title)


    for (var i = 0; i < data.length; i++) {
      var cell = row.insertCell(i)
      cell.innerHTML = data[i].title
    }

    var maxRowNumber = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].data.length > maxRowNumber)
        maxRowNumber = data[i].data.length
    }
    console.log('max rows' + maxRowNumber)
    for (var i = 1; i <= maxRowNumber; i++) {
      var row = table.insertRow(i);
      for (var j = 0; j < data.length; j++) {
        var cell = row.insertCell(j);
        if(data[j].data[i - 1] == undefined)
        cell.innerHTML = "no result";
        else
        cell.innerHTML = data[j].data[i - 1];
      }

    }
  }
  )
}
  //  console.log('testService '+testService.extract)

})
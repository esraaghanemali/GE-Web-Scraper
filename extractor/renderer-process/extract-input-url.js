 var $ = require('jquery');
        var DataTable = require('datatables.net')(window, $);

const urlInput = document.getElementById('urlInput')
const extractFromUrldiv = document.getElementById('extractFromUrldiv')
const extractUrl = document.getElementById('extractUrl')
const seletorInputUrl = document.getElementById('seletorInputUrl')

var ExtractUrlservice = require(global.appRoot + '/extractor/services/extract-input-url')
var startExtractBegin = document.getElementById('startExtractBegin')
extractUrl.addEventListener('click', function () {
  if (urlInput.value == '') urlInput.placeholder = 'enter url please.'
  else if (seletorInputUrl.value == '') seletorInputUrl.placeholder = 'enter on selector at least please.'
  else {
    var str = seletorInputUrl.value
    var selectorArray = str.split(",");
 $('#inputUrlTable_wrapper').remove()
    startExtractBegin.innerHTML = 'Starting...'

    ExtractUrlservice.extract(urlInput.value, selectorArray, function (res) {
      if (res.code == 1) {


       


        var data = '<table id="inputUrlTable" class="table table-striped table-bordered" width="100%" cellspacing="0"><thead><tr>'


        for (var j = 0; j < res.msg.length; j++) {
          data = data + '<th> Colume' + (j + 1) + '</th>'
        }
        //  data = data + '<th>page url</th>'
        data = data + '</tr></thead><tfoot><tr>'
        for (var j = 0; j < res.msg.length; j++) {
          data = data + '<th> Colume' + (j + 1) + '</th>'
        }
        //  data = data + '<th>page url</th>'
        data = data + '</tr></tfoot><tbody>'
        var contentArray = []
        var maxRow = 0;

        for (var i = 0; i < res.msg.length; i++) {

          if (res.msg[i].length >= maxRow) {
            maxRow = res.msg[i].length
          }

        }
        startExtractBegin.innerHTML = 'Finished :) extracting ' + maxRow + ' elements'

        for (var k = 0; k < maxRow; k++) {
          dataRow = []

          for (var j = 0; j < res.msg.length; j++) {


            if (k <= res.msg[j].length) {
              dataRow.push(res.msg[j][k])
            }
            else {
              dataRow.push('no data')
            }


          }
          contentArray.push(dataRow)

        }




        for (var i = 0; i < contentArray.length; i++) {
          data = data + '<tr>'

          for (var j = 0; j < contentArray[i].length; j++) {
            if (contentArray[i][j] == undefined) {
              data = data + '<td>no result</td>'
            }

            else {
              data = data + '<td>' + contentArray[i][j] + '</td>'
            }

          }
          data = data + '</tr>'
        }
        data = data + '</tbody></table>'
        $(data).appendTo('#extractFromUrldiv')

        $('#inputUrlTable').DataTable()

      }
      else {
        startExtractBegin.innerHTML = 'error: ' + res.msg
      }
    })
  }
})





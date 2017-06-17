const cheerio = require('cheerio')
var fs = require('fs')
var extractedData = []

 var htmlPagePath = global.appRoot+'/test.html'

function getSelectors () 
{
    var data_element_selectors = global.xmlfile.data
//console.log('global.xmlfile.data.length '+global.xmlfile.data.length)

    return data_element_selectors
}


var res = {

    extract : function getData (cb)
{
      var selectors = getSelectors() 
    fs.readFile(htmlPagePath, function (err, data)
    { 
      var text = cheerio.load(data)
              for(var i =0 ; i<selectors.length ; i++)
  {
      var selectedArray = []
 text(selectors[i].element_selector).each( function (j,em)
        {
             
               selectedArray.push(text(this).text())
        }
        )
        extractedData.push({title: selectors[i].title , data: selectedArray})
   }
   cb(extractedData)

 })
 // console.log('fs: '+d)
}

}


module.exports = res 

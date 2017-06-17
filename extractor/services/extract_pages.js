const cheerio = require('cheerio')
var fs = require('fs')
var extractedData = []

function getSelectors () 
{
    var data_element_selectors = global.xmlfile.data
    return data_element_selectors
}


var res = {

    extract : function getData ()
{
      var selectors = getSelectors() 
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
   return extractedData
 // console.log('fs: '+d)
}

}


module.exports = res 


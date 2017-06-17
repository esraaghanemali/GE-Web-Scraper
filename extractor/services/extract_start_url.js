const cheerio = require('cheerio')
const page = require('./models/fileds')

function getHtmlStartPage () {
//get url

//get page

//return page

 }

function getSelectors () 
{
    var data_element_selectors = global.xmlfile.data
    return data_element_selectors
}

function extractData ()
 {

  var page = getHtmlStartPage()
  var selector = getSelectors()
  var text = cheerio.load(page)
  return text(selector, '#fruits').text()
}

var res = {

    extract : function getData ()
{
      var selectors = getSelectors() 
      var page = getHtmlStartPage()
      var text = cheerio.load(page)
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



module.exports = res 



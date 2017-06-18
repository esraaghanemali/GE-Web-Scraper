const cheerio = require('cheerio')
var request = require('request');

var res = {

    extract : function extractData (url,selectors,cb)
 {
     var extractedData = []

//get page
request(url, function (error, response, html) {
  if (!error && response.statusCode == 200) {
   
      var text = cheerio.load(html)
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
  }
});
      

 
 
}

}

module.exports = res 
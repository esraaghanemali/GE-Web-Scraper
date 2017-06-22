const cheerio = require('cheerio')
var xml = require(global.appRoot + '/main-process/getXmlFileInfo')
var fs = require('fs')
var htmlPagePath = global.appRoot + '/koora.html'
var map = {};

var res = {

  Href: function getHref(selectors,page,cb)
   {
    //var selectors = xml.navigationSelectors()
    fs.readFile(htmlPagePath, function (err, data) {
//console.log("nav: "+ selectors)
      var text = cheerio.load(data)
      for (var i = 0; i < selectors.length; i++) {
            links=[]
        text(selectors[i].element_selector).each(function (j, em) {
          //  console.log("text href: "+text(this).text())
             var link=   text(this).closest('a').attr('href')
             //console.log("j: "+j)
            links.push({index:j,href:link})
            
        })
        map[selectors[i].element_selector]=links
       // extractedData.push({ title: selectors[i].title, data: selectedArray })
      } 
       cb(map)
    })
    // console.log('fs: '+d)
  }

}


module.exports = res 

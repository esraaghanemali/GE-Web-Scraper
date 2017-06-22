const cheerio = require('cheerio')
var xml = require(global.appRoot + '/main-process/getXmlFileInfo')
var extractedData = []
 var crawler = require(global.appRoot+'/crawler/services/navigate-pages')
    


var res = {

  extract: function getData(url, cb) {
  //console.log("extract_pages service begin")
    var selectors = xml.dataSelectors()
crawler.navigatePages(url,function(page){
  //  console.log("extractPages crawler return page: "+page.body.length)
 var text = cheerio.load(page.body)
    //var text = cheerio.load(data)
      for (var i = 0; i < selectors.length; i++) {
        var selectedArray = []
        text(selectors[i].element_selector).each(function (j, em) {

          selectedArray.push(text(this).text())
        })
        extractedData.push({ title: selectors[i].title, data: selectedArray })
        global.finalData.addData(selectors[i].title,selectedArray)
 
      }
      cb(extractedData)
})
  }

}


module.exports = res 


const cheerio = require('cheerio')
var xml = require(global.appRoot + '/main-process/getXmlFileInfo')

var crawler = require(global.appRoot + '/crawler/services/navigate-pages')

var map = {}

var res = {

  extract: function getData(url, cb) {
    //console.log("extract_pages service begin")
    var selectors = xml.dataSelectors()
    crawler.navigatePages(url, function (page) {
      var extractedData = []
      var pageTitle = page.$("title").text()

      var text = cheerio.load(page.body)
      for (var i = 0; i < selectors.length; i++) {
        var selectedArray = []
        text(selectors[i].element_selector).each(function (j, em) {

          selectedArray.push(text(this).text())
        })
        extractedData.push({ title: selectors[i].title, data: selectedArray })

        global.finalData[selectors[i].title] = selectedArray
      }


      cb(extractedData)
    })
  }

}


module.exports = res


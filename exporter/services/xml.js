var builder = require('xmlbuilder');
var xml = require(global.appRoot + '/main-process/getXmlFileInfo')

var result =
  {

    buildXml: function buildXmlfile(cb) {
      var selectors = xml.dataSelectors()
      var root = builder.create('finalData');
      root.ele('url').txt(xml.url())
      var content = root.ele('allData')
      for (var i = 0; i < selectors.length; i++) {
        var item = content.ele('table')
        item.ele('tableTitle').txt(selectors[i].title)
        var dataContent = item.ele('tableContent')
        for (var j = 0; j < global.finalData[selectors[i].title].length; j++) {
          dataContent.ele('row').txt(global.finalData[selectors[i].title][j])
        }
      }
      cb(root)

    }
  }


module.exports = result
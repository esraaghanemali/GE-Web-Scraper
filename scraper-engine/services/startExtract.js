var extractService = require(global.appRoot + '/extractor/services/extract_pages')
var xml = require(global.appRoot + '/main-process/getXmlFileInfo')

var storeData = require(global.appRoot + '/models/extractedData')

var res = {
nav_Extract : function getAllData(cb)
{
  var url = xml.url()
   //console.log ("startextract start url: "+url)

  //console.log("startextract service begin")
  extractService.extract(url,function (data) {
     //console.log("startextract service returned data: "+data)
    cb(data)
  }
  )
}

}

module.exports = res

var fs = require('fs')
var xml2js = require('xml2js')
var parser = new xml2js.Parser()

var dataFiled = require(global.appRoot + '/models/data-field')
var navFiled = require(global.appRoot + '/models/navigation-field')
var collections = require(global.appRoot + '/models/xmlFile')

var parse = {
    parseFile : 
    function parseXmlFile(filePath)
{
var data_selectors=[]
var nav_selectors=[]
    fs.readFile(filePath, function (err, data) { 
              parser.parseString(data, function (err, result) {
                var  url = result['webscraper']['current_url'][0];

                var data = result['webscraper']['Data'];
                for (var i=0 ; i< data[0].data.length;i++)
                {
                    var data_element =dataFiled.generateData('text',data[0].data[0].title[0],data[0].data[0].element_selector[0]) 
                  
                   data_selectors.push(data_element)

                }
     

                var nav  = result['webscraper']['Nav'];
                 for (var i=0 ; i< nav[0].nav.length;i++)
                {
                  var nav_element = navFiled.generateNav('category','element_selector')
                
                    nav_selectors.push(nav_element)
                }
                saveData(url,data_selectors,nav_selectors)
               
            })
              })
}
}

function  saveData(url,data_selectors,nav_selectors)
{
global.xmlfile = collections.generateXmlFile(url,data_selectors,nav_selectors)
//console.log('global.xmlfile parse  '+global.xmlfile.data.length)
//console.log('parse url:  '+global.xmlfile.url )
}

module.exports = parse
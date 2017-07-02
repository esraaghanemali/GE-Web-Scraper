var fs = require('fs')
var xml2js = require('xml2js')
var parser = new xml2js.Parser()

var dataFiled = require(global.appRoot + '/models/data-field')
var navFiled = require(global.appRoot + '/models/navigation-field')
var collections = require(global.appRoot + '/models/xmlFile')
//testing
var maping = require(global.appRoot + '/scraper-engine/services/map-selec-href')

var parse = {
    parseFile : 
    function parseXmlFile(filePath)
{
var data_selectors=[]
var nav_selectors=[]
    fs.readFile(filePath, function (err, data) { 
              parser.parseString(data, function (err, result) {
                var  url = result['webscraper']['current_url'];
                  //console.log("parsexml url "+ url)
                var data = result['webscraper']['Data'];
                for (var i=0 ; i< data[0].data.length;i++)
                {
                    var data_element =dataFiled.generateData('text',data[0].data[i].title[0],data[0].data[i].element_selector[0]) 
                  
                   data_selectors.push(data_element)

                }
     

                var nav  = result['webscraper']['Nav'];
                 for (var i=0 ; i< nav[0].nav.length;i++)
                {
                  var nav_element = navFiled.generateNav('category',nav[0].nav[i])
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
       

}

module.exports = parse
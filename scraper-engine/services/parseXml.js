var fs = require('fs')
var xml2js = require('xml2js')
var parser = new xml2js.Parser()

 var info = require(global.appRoot + '/renderer-process/information')
var dataFiled = require(global.appRoot + '/models/data-field')
var navFiled = require(global.appRoot + '/models/navigation-field')
var collections = require(global.appRoot + '/models/xmlFile')

var parse = {
    parseFile:
    function parseXmlFile(filePath, cb) {
        var data_selectors = []
        var nav_selectors = []
        fs.readFile(filePath, function (err, data) {
            if (err) {
                
   const options = {
    type: 'info',
    title: 'Oops! Reading Error',
    message: "Error when reading model file. the error: " + err.message +". Please try again.",
    buttons: ['Ok']
  }
                       info.showInfo(options , function(index)
                       {
                           // console.log(index)
                       })
               // global.notification.show("Oops! Reading Error", "error when reading model file. the error: " + err.message, 0)
            }

            else {
                var str = data.toString()
                var xml = str.replace(/[\n\r]/g, '\\n')
                    .replace(/&/g, "&amp;")
                    .replace(/-/g, "&#45;");
                parser.parseString(xml, function (err, result) {
                    if (err) {
                           const options = {
    type: 'info',
    title: 'Oops! Parsing Error',
    message: "Error when loading the model file. Please Load .xml file.",
    buttons: ['Ok']
  }
                       info.showInfo(options , function(index)
                       {
                           // console.log(index)
                       })
                   //     global.notification.show("Oops! Parsing Error", "error when parsing model file. the error: " + err.message, 0)
                        cb({ code: 0, msg: err })
                    }
                    else {
                        try {
                            var url = result['webscraper']['current_url'];
                            var data = result['webscraper']['Data'];
                            for (var i = 0; i < data[0].data_element.length; i++) {
                                var data_element = dataFiled.generateData(data[0].data_element[i].type[0], data[0].data_element[i].title[0], data[0].data_element[i].element_selector[0])

                                data_selectors.push(data_element)

                            }
                            var nav = result['webscraper']['Nav'];
                            for (var i = 0; i < nav[0].nav_element.length; i++) {
                                var nav_element = navFiled.generateNav(nav[0].nav_element[i].type[0], nav[0].nav_element[i].element_selector[0])
                                nav_selectors.push(nav_element)

                            }

                            saveData(url, data_selectors, nav_selectors)
                            cb({ code: 1, msg: 'Parsing finish correctly.' })
                        }
                        catch (e) {
                             const options = {
    type: 'info',
    title: 'Oops! Parsing Error',
    message: "Error when loading the model file. It dosent seem to be a correct file. Please Load the correct model file from our extention :)",
    buttons: ['Ok']
  }
                       info.showInfo(options , function(index)
                       {
                           // console.log(index)
                       })
                           // global.notification.show("Oops! Parsing Error", "please Load Correct model file. " + e.message, 0)
                            cb({ code: 0, msg: 'exception.' + e })


                        }
                    }
                })
            }

        })

    }
}

function saveData(url, data_selectors, nav_selectors) {
    global.xmlfile = collections.generateXmlFile(url, data_selectors, nav_selectors)


}

module.exports = parse


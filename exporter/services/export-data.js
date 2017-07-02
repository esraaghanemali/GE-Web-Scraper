var writeFileService =  require(global.appRoot + '/exporter/services/write-file')

var xmlService = require(global.appRoot + '/exporter/services/xml')
var jsonService = require(global.appRoot + '/exporter/services/json')
var csvService = require(global.appRoot + '/exporter/services/csv')

var result =
    {
        export: function exportFun(choosen) {
            if (choosen == 1) {
                xmlService.buildXml(function (content)
                {
                writeFileService.write(content)
                })
            }

        }
    }

    module.exports = result
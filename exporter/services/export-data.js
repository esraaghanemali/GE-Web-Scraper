var writeFileService =  require(global.appRoot + '/exporter/services/write-file')

var xmlService = require(global.appRoot + '/exporter/services/xml')
var jsonService = require(global.appRoot + '/exporter/services/json')
var csvService = require(global.appRoot + '/exporter/services/csv')
var xlsxService = require(global.appRoot + '/exporter/services/xlsx')

var fs = require('fs')
var result =
    {
        export: function exportFun(choosen) {
            if (choosen == 1) {
                xmlService.buildXml(function (content)
                {
                writeFileService.write(choosen,content)
                })
            }


            
       if (choosen == 2) {
             xmlService.buildXml(function (content)
                { 
                     jsonService.buildJson(content,function (jsoncontent)
                {
                    var strongobj =JSON.stringify(jsoncontent.msg)
                writeFileService.write(choosen,strongobj)
                })
               
            })    
            }

                if (choosen == 3) {
                       var jsonObject  = require(global.appRoot + '/exporter/services/csv-data')
                        jsonObject.buildJsonObj(function(jsonResult)
                        {
                            if(jsonResult.code==1)
                            {
                           csvService.buildCsv(jsonResult.msg,function (content)
                            {
                                if(content.code==1)
                                {
  writeFileService.write(choosen,content.msg)
                                } 
                                else
                                {
                                    console.log('error in csv service')
                                }  
                        
                            })
                        }
                        else
                        {
                            console.log('error in json')
                        }
                        })      
            }

                if (choosen == 4) {
                 var jsonObject  = require(global.appRoot + '/exporter/services/csv-data')
                 jsonObject.buildJsonObj(function(jsonResult)
                        {

                                   if(jsonResult.code==1)
                            {
                           xlsxService.buildXlsx(jsonResult.msg,function (content)
                            {
                                  if(content.code==1)
                                {
  writeFileService.write(choosen,content.msg)
                                } 
                                else
                                {
                                    console.log('error in xlsx service')
                                }  
                            })
                        }
                        else
                        {
                            console.log('error in json')
                        }



                        })

                 
            }



        }
    }

    module.exports = result
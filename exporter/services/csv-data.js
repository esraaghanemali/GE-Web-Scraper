var xml = require(global.appRoot + '/main-process/getXmlFileInfo')

var result =
  {

    buildJsonObj: function buildJsonObjFun(cb) {
        try {
          headers = []
    
   for (var j = 0; j < global.finalData[0].extracted.length; j++) {
     headers.push(global.finalData[0].extracted[j].title)
    }

      
   var contentArray = []

        for (var i = 0; i < global.finalData.length; i++) {
       var maxRow = 0;
            for (var j = 0; j < global.finalData[i].extracted.length; j++) {
                if(global.finalData[i].extracted[j].data.length >= maxRow)
                {
                    maxRow = global.finalData[i].extracted[j].data.length
                }
                
           
            }
            console.log("max "+ maxRow)
            for(var k= 0 ; k< maxRow ; k++)
            {
                dataRow = []
                    for (var j = 0; j < global.finalData[i].extracted.length; j++) {
                        console.log("global.finalData[i].extracted[j].data.length "+global.finalData[i].extracted[j].data.length)
                if(k <global.finalData[i].extracted[j].data.length  )
                {
                   dataRow.push(global.finalData[i].extracted[j].data[k])
                }
                else
                {
                     dataRow.push('no data')
                }
                
           
            }
contentArray.push(dataRow)
               
            }

        }

      
      var res = {
          head: headers,
          data : contentArray

      }
       cb({code : 1 , msg :res })
        }
        catch(err)
        {
            console.log(err)
 cb({code : 0 , msg :err })
        }

     
    }
  }


module.exports = result
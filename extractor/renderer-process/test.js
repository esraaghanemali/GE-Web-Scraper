var testService = require(global.appRoot+'/extractor/services/test')

const testxmlfile = document.getElementById('testxmlfile')
const showdatap = document.getElementById('showdatap')

 testxmlfile.addEventListener('click', function ()
  {

        //  console.log('testService '+testService.extract)
 testService.extract(function (data)
        {
          console.log('data '+data)

              var t =''
          for(var i =0 ; i<data.length ; i++)
          {
             t = t+ data[i]+'********************************** \n'

          }
              showdatap.innerHTML=t
        })
   

 })




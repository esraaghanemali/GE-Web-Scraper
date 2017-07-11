/**
 * created by esraa ali 9/7/2017
 * 
 * create csv file
 * convert from json to csv
 * 
 */


var csvWriter = require('csv-write-stream')
// var json2csv = require('json2csv');
const flatten = require('lodash/flatten');
//    try 
//       {
//         var test = [
//         {
// finalData : {
//   all_pages: {
//     page : {
//       page_url : 'hello'
//       ,
//       page_title : ["blue","green","yellow"]

//     }

//   }

// }
//         }
//         ]
//         var fields = ['finalData.all_pages.page.page_url', 'finalData.all_pages.page.page_title'];
//        var fieldNames = ['page url', 'page title'];
//         var result = json2csv({ data: test, fields: fields,fieldNames: fieldNames });
//         console.log("result "+ result)

//       } catch (err) {
//           console.error(err);

//         // Errors are thrown for bad options, or if the data is empty and no fields are provided. 
//         // Be sure to provide fields if it is possible that your data array will be empty. 

//       }


var res = {
  buildCsv: function buildCsvFile(jsonData, cb) {


    try {

var writer = csvWriter()
var fs = require('fs')



var writer = csvWriter({ headers:jsonData.head})
writer.pipe(fs.createWriteStream('esoo.csv'))

for(var j = 0 ; j < jsonData.data.length ; j++)
{
writer.write(jsonData.data[j])
}



     writer.end()

      cb({ code: 1, msg: writer })
    } catch (err) {
      console.error(err);
      cb({ code: 0, msg: err })
      // Errors are thrown for bad options, or if the data is empty and no fields are provided. 
      // Be sure to provide fields if it is possible that your data array will be empty. 

    }


  }
}

module.exports = res





// // var csvWriter = require('csv-write-stream')
// // var xml = require(global.appRoot + '/main-process/getXmlFileInfo')
// // var writer = csvWriter()
// // var fs = require('fs')

// //  var selectors = xml.dataSelectors()

// // var item = []
// // item .push("esraa1")
// // item .push("esraa2")
// // var writer = csvWriter({ headers: ["hello", "foo"]})
// // writer.pipe(fs.createWriteStream('esraa.csv'))
// // writer.write(['world', 'bar'])
// // writer.write(["world",  "hea3"])


// // writer.end()
// // console.log("writer "+writer)

// var result = {
//     buildCsv : function buildCsvFile (cb)
//     {
// var writer = csvWriter()
// var fs = require('fs')



// var writer = csvWriter({ headers: ["hello", "foo"]})
// writer.pipe(fs.createWriteStream('esraa.csv'))
// writer.write(['world', 'bar'])
// writer.write(["world",  "hea3"])

//       for (var i = 0; i < global.finalData.length; i++) {
//         var page = pages.ele('page')
//         var page_url = page.ele('page_url').txt(global.finalData[i].page.url)
//         var page_title = page.ele('page_title').txt(global.finalData[i].page.title)
//         var content = page.ele('allData')
//         for (var j = 0; j < global.finalData[i].extracted.length; j++) {
//           var item = content.ele('table')
//           item.ele('tableTitle').txt(global.finalData[i].extracted[j].title)
//           var dataContent = item.ele('tableContent')
//           for (var k = 0; k < global.finalData[i].extracted[j].data.length; k++) {
//             dataContent.ele('row').txt(global.finalData[i].extracted[j].data[k])
//           }
//         }
//       }

// writer.end()
// console.log("writer "+writer)

// cb (writer)

//     }
// }


// module.exports = result

// // var csv = require('csv');


// //  var generator = csv.generate({seed: 1, columns: 2, length: 20});
// // var parser = csv.parse();
// // var transformer = csv.transform(function(data){
// //   return data.map(function(value){return value.toUpperCase()});
// // });

// // var stringifier = csv.stringify();

// // generator.on('readable', function(){
// //   while(data = generator.read()){
// //     parser.write(data);
// //   }
// // });

// // parser.on('readable', function(){
// //   while(data = parser.read()){
// //     transformer.write(data);
// //   }
// // });

// // transformer.on('readable', function(){
// //   while(data = transformer.read()){
// //     stringifier.write(data);
// //   }
// // });

// // stringifier.on('readable', function(){
// //   while(data = stringifier.read()){
// //     process.stdout.write(data);
// //   }
// // });


// // // csv.generate({seed: 1, columns: 2, length: 20}, function(err, data)
// // // {
// // //   csv.parse(data, function(err, data){

// // //     csv.transform(data, function(data){

// // //       return data.map(function(value){return value.toUpperCase()});
// // //     }, function(err, data){
// // //       csv.stringify(data, function(err, data){
// // //         process.stdout.write(data);
// // //         console.log("data " + data)
// // //       });
// // //     })


// // //   });
// // // });
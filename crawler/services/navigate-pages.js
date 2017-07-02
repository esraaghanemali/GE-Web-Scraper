var urlsService = require(global.appRoot + '/scraper-engine/services/map-selec-href')
//var linkService = require(global.appRoot + '/models/links')

var links = []

var Crawler = require("crawler");

var navResult =
    {
        navigatePages: function getPages(navUrls, cb) {
            var link = { url: navUrls, visited: true }
            links.push(link)
            console.log("crawler service begin")
            var c = new Crawler({
                maxConnections: 10, callback: function (error, res, done) {
                    if (error) {
                        console.log(error);
                    } else {
                     // console.log("page title : " + res.$("title").text())

                        urlsService.Href(res, function (hrefArray) {
                           // console.log("hrefArray.length : " + hrefArray.length)

                            for (var i = 0; i < hrefArray.length; i++) {
                              //  console.log("hrefArray["+i+"]: "+hrefArray[i] )

                                var found = false;
                             // console.log("links.length "+links.length)
                                for (var j = 0; j < links.length; j++) {
                                    //console.log("links["+j+"] "+links[j].url)
                                    if (links[j].url == hrefArray[i]) {
                                     // console.log("found")

                                        found = true;
                                        break;
                                    }
                                }
                                if (found == false) {
                                   // console.log("pushed: " + hrefArray[i])
                                    links.push({ url: hrefArray[i], visited: false })
                                }
                            }
                            for (var i = 0; i < links.length; i++) {
                                if (links[i].visited == false) {
                                    console.log("enque: " + links[i].url)
                                    c.queue(links[i].url);
                                    links[i].visited = true;
                                }
                            }
                        })
                        cb(res)
                    }
                    done();
                }
            });

            c.queue(navUrls);

            //            c.queue([{
            //     uri: navUrls,
            //     jQuery: false,

            //     // The global callback won't be called
            //     callback: function (error, res, done) {
            //         if(error){
            //             console.log(error);
            //         }else{
            //             console.log('Grabbed', res.body.length, 'bytes');
            //         }
            //         done();
            //     }
            // }]);
        }
    }

function checkLinks(hrefArray) {
    for (var i = 0; i < hrefArray.length; i++) {
        console.log("links: " + hrefArray[i])

        var found = false;
        for (var j = 0; j < links.length; j++) {
            if (links[j].url == hrefArray[i]) {
                found = true;
                break;
            }
        }
        if (found == false) {
            links.push({ url: hrefArray[i], visited: false })
        }
    }
    for (var i = 0; i < links.length; i++) {
        if (links[i].visited == false) {
            //  c.queue(links[i].url);
            // links[i].visited=true;
        }
    }
}

module.exports = navResult
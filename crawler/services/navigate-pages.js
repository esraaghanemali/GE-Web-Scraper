var maping = require(global.appRoot + '/scraper-engine/services/map-selec-href')

var Crawler = require("crawler");

var navResult =
    {
        navigatePages: function getPages(navUrls,cb) {
           //   console.log("crawler service begin")
            var c = new Crawler({
                maxConnections: 10, callback: function (error, res, done) 
                {
                    if (error) {
                        console.log(error);
                    } else {
                        cb(res)
                    }
                    done();
                }
            });

           c.queue(navUrls);
        }
    }

module.exports = navResult
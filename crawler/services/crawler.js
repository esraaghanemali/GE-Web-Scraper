
// var crawler = require('./node_modules/crawl/lib/crawler'),
//     _ = require('underscore'),
//     url = require('url'),
//     qs = require('qs'),
//     ent = require('ent'),
//     startUrl = process.argv[2],
//     urlPath = process.argv[3] || '',
//     parsedStartUrl = url.parse(startUrl);

// crawler.crawl(startUrl, { headers: false, body: false }, function(err, pages) {

//   if (err) {
//     console.log("An error occured: " + err);
//     process.exit(1);
//   }

//   var // An array of unique urls within the site, falsy values removed
//       allLinks = _.uniq(_.compact(_.flatten(_.pluck(pages, 'links')))),

//       // Internal links: check if it contains our original host or is relative
//       // if it is relative, prepend 'protocol//host'
//       internalLinks = _.map(allLinks, function(link) {
//         link = link.split('#')[0];
//         if (link.indexOf(parsedStartUrl.host) > -1) {
//           return link;
//         } else {
//           return link.charAt(0) === '/' ? parsedStartUrl.protocol + '//' + parsedStartUrl.host + link : '';
//         }
//       }),

//       // Remove falsy and make unique again to account for relative links that are now absolute
//       uniqueLinks = _.uniq(_.compact(internalLinks)),

//       alreadyViewedQueryStrings = [],

//       results = {};

//   _.each(uniqueLinks, function(link) {

//     // The query string (minus the ?)
//     var queryString = (url.parse(link).search || '').slice(1);

//     /* Continue if:
//      * our link contains our passed in path
//      * our link has a query string
//      * we haven't seen this query string before
//      */
//     if (link.indexOf(urlPath) > -1 && queryString && !_.contains(alreadyViewedQueryStrings, queryString)) {

//       alreadyViewedQueryStrings.push(queryString);

//       // Decode html entities, +'s to spaces, pass to decodeURIComponent, then parse to an object with qs
//       queryString = qs.parse(decodeURIComponent(ent.decode(queryString).replace(/\+/g, ' ')));

//       /* For each key:value pair of the query string we either create a new array with the value
//        * if we haven't seen that key before, or if we have then we push to that array.
//        * Also, always make the value lowercase.
//        */
//       _.each(queryString, function(value, key) {
//         if (typeof results[key] === 'undefined') {
//           results[key] = [value.toLowerCase()];
//         } else {
//           results[key].push(value.toLowerCase());
//         }
//       });

//       // Make each key only contain unique values in its array
//       _.each(results, function(value, key) {
//         results[key] = _.uniq(results[key]);
//       });
//     }
//   });
  
//   console.log(JSON.stringify(results, null, 4));

// });

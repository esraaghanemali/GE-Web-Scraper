const cheerio = require('cheerio')
const page = require('./models/fileds')

function getHtmlStartPage () {


  return '<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li> <li class="pear">Pear</li> </ul>'
}

function getSelectors () {
  return '.apple'
}

function extractData () {
  var page = getHtmlStartPage()
  var selector = getSelectors()
 // var text = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li> <li class="pear">Pear</li> </ul>');
  var text = cheerio.load(page)
  return text(selector, '#fruits').text()
}


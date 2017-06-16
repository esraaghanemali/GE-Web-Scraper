const cheerio = require('cheerio')

const testxmlfile = document.getElementById('testxmlfile')
const showdatap = document.getElementById('showdatap')
function readXmlFile()
{

}
 testxmlfile.addEventListener('click', function ()
  {
var text = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li> <li class="pear">Pear</li> </ul>')
   var res = text('.apple').text()
   showdatap.innerHTML=res
 })




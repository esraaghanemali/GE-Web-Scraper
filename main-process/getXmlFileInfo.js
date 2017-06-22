
var xmlFileInfo = {
dataSelectors:
function getDataSelectors () 
{
   return global.xmlfile.data
  
}
,
navigationSelectors :
function getNavSelectors () 
{
    return  global.xmlfile.navigation
}
,
url:
function getUrl () 
{
    return global.xmlfile.url
}

}

module.exports = xmlFileInfo
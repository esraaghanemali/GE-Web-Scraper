currentPageUrl = document.getElementById('currentPageUrl')
currentPageUrlBtn = document.getElementById('currentPageUrlBtn')



currentPageUrlBtn.addEventListener('click', function () {
// global.getpage.getpage(function(page)
// {
//     url = page.request.uri.href
//     currentPageUrl.innerHtml = url
// })
function getpage(callback)
 {
    return callback(global.curPage)
  }
getpage(function(curntpage)
{
    //console.log("curntpage "+curntpage.request.uri.href)
 
     url = curntpage.request.uri.href
     currentPageUrl.innerHtml = url
})
}
)



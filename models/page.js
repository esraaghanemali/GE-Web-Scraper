/**
 * Created by esraa on 6/14/2017.
 */
'use strict';
 class page_item {
 constructor(url, page) {
    this._url = url;
    this._page = page;
  }

  get url ()
  {
   return this._url
  }
  set url (newUrl){
    this._url = newUrl
  }

    get page ()
  {
  return this._page;
  }
  set page(newPage)
  {
    this._page = newPage
  }
}

var exportPage = {
  generatePage :  function (type, element_selector)
{
return new nav_item(type, element_selector);
}
}

module.exports = exportPage
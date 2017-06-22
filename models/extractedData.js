/**
 * Created by esraa on 6/14/2017.
 */
'use strict';

class extractedData {
  constructor(data) {
     this._data = data;
  }

    get data ()
  {
  return this._data;
  }
  set data(newData)
  {
    this._data = newData
  }

   addData (key,newData)
  {
this._data[key]=newData
  }
}

//funtion to ceate new xml
var createXmlFile = {
  generateXmlExportFile :  function (data)
{
return new extractedData(data);
}
}

module.exports = createXmlFile

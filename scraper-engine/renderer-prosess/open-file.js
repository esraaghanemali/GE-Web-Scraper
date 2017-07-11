var openFileService = require(global.appRoot + '/scraper-engine/services/open-file');
const selectxmlfile = document.getElementById('selectxmlfile')
var startAfterExtract = document.getElementById('startAfterExtract')
var secStep = document.getElementById('secStep')

selectxmlfile.addEventListener('click', function (event) {

    openFileService.openSelectDialog(function (res) {

        document.getElementById('showxmlpath').innerHTML = res.msg
        if (res.code == 1) {
            secStep.style.display = "block"
            startAfterExtract.style.display = "block"
            global.notification.show("Parse File", "finish parsing correctly!. move to next step ;)", 0)
        }
    
    })
})
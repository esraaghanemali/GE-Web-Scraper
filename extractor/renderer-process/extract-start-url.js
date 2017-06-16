
const selectorInputStartUrl = document.getElementById('selectorInputStartUrl')
const extractStartUrl =  document.getElementById('extractStartUrl')

extractStartUrl.addEventListener('click', function () {
  if (selectorInputStartUrl.value == '') selectorInputStartUrl.placeholder = 'enter selector please.'
  
})

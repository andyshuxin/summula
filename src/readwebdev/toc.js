(function(window, document) {
  'use strict'

  function activate(event) {
    let sibiling = event.target.nextElementSibling
    event.target.parentNode.classList.toggle('active')
    while (sibiling) {
      sibiling.classList.toggle('display')
      sibiling = sibiling.nextElementSibling
    }
  }
  document.body.addEventListener('click', activate)

})(window, window.document)
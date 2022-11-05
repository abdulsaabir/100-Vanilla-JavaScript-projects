replaceText(document.body)

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
  } else if (element.nodeType === Text.TEXT_NODE) {

        element.parentElement.style.backgroundColor='#003'
        element.parentElement.style.color='#333'
       
  }
}
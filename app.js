var btntranslate = document.querySelector("#btn-translate")

var txtinput = document.querySelector("#txt-input")

var output = document.querySelector("#output")

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

/* btntranslate.addEventListener("click", function clickEventHandler(params) {
    console.log("Clicked")
}) */

//Constructs query parameter

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text 
}

function errorHandler(error) {
    console.log("Error occurred: ",error)
}


btntranslate.addEventListener("click", function logTextValue() {

    //output.innerText = txtinput.value
    fetch(getTranslationURL(txtinput.value))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated
        })
    .catch(errorHandler)
    
})
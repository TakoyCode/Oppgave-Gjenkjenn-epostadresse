//Modell

let textInput = "";
let topText = "Skriv inn en email i feltet under:";
let include1 = false;
let include2 = false;
let include3 = false;
let validEmail = false;

//View
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div>${topText}</div>    
    <div>
        <input id="input" type="text" oninput="textInput = this.value" value="${textInput}"/>   
        <button onclick="isInputEmail()">Check Input</button>
    </div>
    <div>Is this a email? : ${validEmail}</div>
    <br/>
    <div>Does the input include @? : ${include1}</div>
    <div>Does the input include spaces? : ${include2}</div>
    <div>Does the input include a period after @? : ${include3}</div>
    `;

    document.getElementById("input").focus();
}


//Controller

function isInputEmail() {
    include1 = false;
    include2 = false;
    include3 = false;
    validEmail = false;

    if (textInput.indexOf('@') >= 0) include1 = true;
    if (textInput.indexOf(' ') >= 0) include2 = true;
    if (textInput.indexOf('.') > textInput.indexOf('@') && textInput.indexOf('@') >= 0) include3 = true;
    if (include1 == true && include2 == false && include3 == true) validEmail = true;
    updateView();

    console.log(textInput)
    console.log(textInput.indexOf('.'), "dette er indexen for .")
    console.log(textInput.indexOf('@'), "dette er indexen for @")

}
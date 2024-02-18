let text = document.getElementById("exampleFormControlTextarea1");
let showText = document.getElementById("display");
let text1 = document.getElementById("textbox1").value;
let text2 = document.getElementById("textbox2").value;
var upper;
function clicked() {
    upper = text.value;    
}

function uppertext() {
    if (upper !== "") {
        var change = upper.toUpperCase();
        showText.innerHTML = change;
    } else {
        text = "Please enter text in the above box";
    }
        
}


function findText() {
    var inputtext1 = textbox1.value;
    var inputtext2 = textbox2.value;
    var finaldata = text.value;  // Use innerText instead of value if working with plain text
    var replacedata = finaldata.replace(new RegExp(inputtext1, 'gi'), inputtext2);
    console.log(replacedata);
    text.value = replacedata;
    textbox1.value = "";
    textbox2.value = "";
}
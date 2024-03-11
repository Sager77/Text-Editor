

let text = document.getElementById("exampleFormControlTextarea1");
text.value = null;
let showText = document.getElementById("display");
let text1 = document.getElementById("textbox1");
let text2 = document.getElementById("textbox2");
let totalChar = document.getElementById("totalChar");
var upper = null, change;

function clicked() {
    countCharacters();
    upper = text.value;    
}

function uppertext() {
    if (upper == null) {
        text.value = "Please Enter Text🙏🏻";
    } else {
        change = upper.toUpperCase();
        showText.innerHTML = change;
    }
        
}

function removeExtraspace() {
    var removSpace = text.value.replace(/\s+/g, ' ');
    text.value = removSpace;
}

function capitalizetext() {
    let words = text.value.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        // words[i] = words[i].toLowerCase();
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    text.value = words.join(' ');
}

function findText() {
    var inputtext1 = text1.value;
    var inputtext2 = text2.value;
    var finaldata = text.value;  // Use innerText instead of value if working with plain text
    var replacedata = finaldata.replace(new RegExp(inputtext1, 'gi'), inputtext2);
    console.log(replacedata);
    text.value = replacedata;
    textbox1.value = "";
    textbox2.value = "";
    upper = text.value;
    countCharacters();
}


function countCharacters() {
    // Remove spaces using regular expression
    var stringWithoutSpaces = text.value.replace(/\s/g, '');

    // Count characters in the modified string
     totalChar.innerHTML = `Total Character ${stringWithoutSpaces.length}`;
}
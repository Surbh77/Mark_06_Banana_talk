// console.log("Script is working from a different file!");
// // imput
// var username=prompt('Give me username');

// // Process
// var welcomemessage='This Script is working!!'+username;

// // output
// alert(welcomemessage)
var btntranslate=document.querySelector('#btn-translate')
var txtinput=document.querySelector('#txt-input');
console.log(txtinput)
// console.log(btntranslate)

function clickhandler(){
    console.log('Clicked!')
    console.log("Input:- "+txtinput.value)
}

btntranslate.addEventListener('click',clickhandler)


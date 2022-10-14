/*
 * Starter file 
Raven Cunanan Fall 2022
 */
document.addEventListener('DOMContentLoaded',function() {
  console.log("Window loaded!");
},false);

function encrypt(){
  console.log("Button Clicked!");
  var ctype = document.getElementById("cipher-type");
  var text = document.getElementById("input-text").value;

  if(ctype.value=="shift"){
    console.log("Shift is selected.");
    shiftCipher(text);
  }

  if(ctype.value=="random"){
    console.log("Random is selected.");
    randomCipher(text);
  }

}

function reset(){
  document.getElementById("input-text").value=null;
}

function twelve(){
  document.getElementById("input-text").style.fontSize = "12pt";
  document.getElementById("result-text").style.fontSize = "12pt";
}

function twenty4(){
  document.getElementById("input-text").style.fontSize = "24pt";
  document.getElementById("result-text").style.fontSize = "24pt";
}

function randomCipher(text){
  text=text.toLowerCase();
  let result="";
  var charbank='abcdefghijklmnopqrstuvwxyz'
  var charbanklen=charbank.length;
  for(let i=0;i<text.length;i++)
  {
    if(text[i]==' '){
      result+=' '
    }
    else{
      result+=charbank.charAt(Math.floor(Math.random()*charbanklen));
    }
  
  }
  var all=document.getElementById("all-caps");
  if( all.checked==true){
    result=result.toUpperCase();
  }
  document.getElementById("result-text").value=result;

}

function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  var all=document.getElementById("all-caps");
  if( all.checked==true){
    result=result.toUpperCase();
  }
  document.getElementById("result-text").value=result;
}



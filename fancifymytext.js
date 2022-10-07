
function bigger() {
    alert("Hello, World!");
    document.getElementById("textarea").style.fontSize = "24pt";
  }

  function fancy() {
    alert("Activating Fanciness");
    document.getElementById("textarea").style.fontWeight = "bold";
    document.getElementById("textarea").style.color = "blue";
    document.getElementById("textarea").style.textDecoration = "underline";
  }

  function boring() {
    alert("Actviating Boringness.");
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.color = "black";
    document.getElementById("textarea").style.textDecoration = "none";
    document.getElementById("fancy_textarea").style.fontSize = "12pt";
  }

  function moo(){
    alert("MOO!");

    var str= document.getElementById("textarea").value;
    var alter= str.toUpperCase();
    document.getElementById("textarea").str=alter;
    var parts = str.split(" ");  // ["How", "are", "you?"]
    var i;

    for (i=0;i<parts.length;i++){

      var x =parts[i].toUpperCase();
      parts[i]=x;

      if(parts[i].includes(".")){
        x=parts[i].slice(0,-1);
        parts[i]=x.concat("-Moo.");
      }
    }
    str = parts.join("_");       // "How_are_you?"
    document.getElementById("textarea").value=str;
  }

  

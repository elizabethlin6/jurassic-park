// Hide the dino table
var x = document.getElementById("dino");
x.style.display = "none";


// user input name and load the game page
function startTheStuff() {
    var person = prompt("What's your name?");
    // hide starting page divs
    var stuffToHide = document.getElementsByClassName("info");
    for(var i=0; i < stuffToHide.length; i++) {
        stuffToHide[i].style.display = "none";
    }
    // add the dialogue above dino table
    document.getElementById("more_info").innerHTML = '<div id="dialogue"><p><img src="img/owen_on.png" width="2%"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome, ' + person + '! We need to kill some dinosaurs that are running loose in Jurassic Park!</p></div>';
    // change dino table from hidden to visible
    document.getElementById("dino").style.display = "block";
  }

  // function to play and pause audios
  var x = document.getElementById("myAudio");
  function playAudio() {
    x.play();
  }

  function pauseAudio() {
    x.pause();
  }

  // function to remove dinosaurs and replace with a logo
  function removeDino(dino) {
    dino.src = 'logo.png';
  }

var x = document.getElementById("dino");
x.style.display = "none";
function startTheStuff() {
    var person = prompt("What's your name?");

    var stuffToHide = document.getElementsByClassName("info");

    for(var i=0; i < stuffToHide.length; i++) {
        stuffToHide[i].style.display = "none";
    }
    document.getElementById("more_info").innerHTML = '<div id="dialogue"><p><img src="img/owen_on.png" width="2%"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome, ' + person + '! We need to kill some dinosaurs that are running loose in Jurassic Park!</p></div>';
    document.getElementById("dino").style.display = "block";
  }


  var x = document.getElementById("myAudio");
  function playAudio() {
    x.play();
  }

  function pauseAudio() {
    x.pause();
  }

  function removeDino(dino) {
    dino.src = 'logo.png';
  }

  var y = document.getElementById("dino");
  y.style.display = "none";

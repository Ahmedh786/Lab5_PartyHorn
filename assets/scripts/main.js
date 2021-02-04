// main.js

// volume input
var volumeinput = document.getElementById("volume-number");
volumeinput.addEventListener('change', changeVolume);

function changeVolume(e) {
  var aud = document.getElementById("horn-sound");
  aud.volume = e.target.valueAsNumber / 100;
  var slider = document.getElementById("volume-slider");
  slider.value = aud.volume * 100;
  var image = document.getElementById("volume-image");
  if ((aud.volume >= .66) && (aud.volume <= 1)) {
    image.src = "assets\\media\\icons\\volume-level-3.svg";
  }
  if ((aud.volume >= .34) && (aud.volume <= .66)) {
    image.src = "assets\\media\\icons\\volume-level-2.svg";
  }
  if ((aud.volume >= .01) && (aud.volume <= .33)) {
    image.src = "assets\\media\\icons\\volume-level-1.svg";
  }
  if (aud.volume == 0.0) {
    image.src = "assets\\media\\icons\\volume-level-0.svg";
  }
}


// volume slider
var volumeslider = document.getElementById("volume-slider");
volumeslider.addEventListener('change', changeVolumeAgain);

function changeVolumeAgain(e) {
  var aud = document.getElementById("horn-sound");
  aud.volume = e.target.valueAsNumber / 100;
  var input = document.getElementById("volume-number");
  input.value = e.target.valueAsNumber;
  var image = document.getElementById("volume-image");
  if ((aud.volume >= .66) && (aud.volume <= 1)) {
    image.src = "assets\\media\\icons\\volume-level-3.svg";
  }
  if ((aud.volume >= .34) && (aud.volume <= .66)) {
    image.src = "assets\\media\\icons\\volume-level-2.svg";
  }
  if ((aud.volume >= .01) && (aud.volume <= .33)) {
    image.src = "assets\\media\\icons\\volume-level-1.svg";
  }
  if (aud.volume == 0.0) {
    image.src = "assets\\media\\icons\\volume-level-0.svg";
  }
}


// radio buttons
var soundinputs = document.getElementsByName("radio-sound");
for (var i = 0; i < soundinputs.length; ++i) {
  soundinputs[i].addEventListener('click', changeSound);
}

function changeSound(e) {
  var aud = document.getElementById("horn-sound");
  var img = document.getElementById("sound-image");
  if (e.target.id == "radio-air-horn") {
    aud.src = "assets\\media\\audio\\air-horn.mp3";
    img.src = "assets\\media\\images\\air-horn.svg";
  }
  if (e.target.id == "radio-car-horn") {
    aud.src = "assets\\media\\audio\\car-horn.mp3";
    img.src = "assets\\media\\images\\car.svg";
  }
  if (e.target.id == "radio-party-horn") {
    aud.src = "assets\\media\\audio\\party-horn.mp3";
    img.src = "assets\\media\\images\\party-horn.svg";
  }
}


// honk button
var honk = document.getElementById("honk-btn");
var aud = document.getElementById("horn-sound");
honk.type = "button";
if (aud.volume == 0.0) {
  honk.disabled = true;
}
else {
  honk.disabled = false;
}
honk.addEventListener('click', playSound);

function playSound(e) {
  var aud = document.getElementById("horn-sound");
  aud.play();
  alert("yeee");
}

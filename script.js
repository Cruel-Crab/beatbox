document.addEventListener("keydown", (event) => {
  console.log(event.keyCode)
  var key = event.keyCode //some files are too long to listen , what if we want to stop that audio by clicking on other button ? instead of refreshing the page again ?
  if (key == 65) {
    var audio = new Audio("./assets/Piano Chord 208.mp3")
    audio.currentTime = 0
    audio.play()
    document.getElementById("65").style.backgroundColor = "aqua"
    document.getElementById("65").style.boxShadow = "0px 0px 20px 0px aqua"
    setTimeout(function () {
      document.getElementById("65").style.backgroundColor = "transparent"
      document.getElementById("65").style.boxShadow = "none"
    }, 500)
  }
  if (key == 83) {
    var audio = new Audio("./assets/Piano Chord 209.mp3")
    audio.currentTime = 0
    audio.play()
    document.getElementById("83").style.backgroundColor = "aqua"
    document.getElementById("83").style.boxShadow = "0px 0px 20px 0px aqua"
    setTimeout(function () {
      document.getElementById("83").style.backgroundColor = "transparent"
      document.getElementById("83").style.boxShadow = "none"
    }, 500)
  }
  if (key == 68) {
    var audio = new Audio("./assets/Piano Chord 331.mp3")
    audio.currentTime = 0
    audio.play()
    document.getElementById("68").style.backgroundColor = "aqua"
    document.getElementById("68").style.boxShadow = "0px 0px 20px 0px aqua"
    setTimeout(function () {
      document.getElementById("68").style.backgroundColor = "transparent"
      document.getElementById("68").style.boxShadow = "none"
    }, 500)
  }
  if (key == 70) {
    var audio = new Audio("./assets/Drum Sticks Hit 3.mp3")
    audio.currentTime = 0
    audio.play()
    document.getElementById("70").style.backgroundColor = "#ff00ff"
    document.getElementById("70").style.boxShadow = "0px 0px 20px 0px aqua"
    setTimeout(function () {
      document.getElementById("70").style.backgroundColor = "transparent"
      document.getElementById("70").style.boxShadow = "none"
    }, 500)
  }
  if (key == 71) {
    var audio = new Audio("./assets/Drum Snare Roll.mp3")
    audio.currentTime = 0
    audio.play()
    document.getElementById("71").style.backgroundColor = "#ff00ff"
    document.getElementById("71").style.boxShadow = "0px 0px 20px 0px aqua"
    setTimeout(function () {
      document.getElementById("71").style.backgroundColor = "transparent"
      document.getElementById("71").style.boxShadow = "none"
    }, 500)
  }
  if (key == 72) {
    var audio = new Audio("./assets/PREL Musical 57.mp3")
    audio.currentTime = 0
    audio.play()
    document.getElementById("72").style.backgroundColor = "#ff00ff"
    document.getElementById("72").style.boxShadow = "0px 0px 20px 0px aqua"
    setTimeout(function () {
      document.getElementById("72").style.backgroundColor = "transparent"
      document.getElementById("72").style.boxShadow = "none"
    }, 500)
  }
  if (key == 74) {
    var audio = new Audio("./assets/Cymbal Suspended 2.mp3")
    audio.currentTime = 0
    audio.play()
    document.getElementById("74").style.backgroundColor = "#ff00ff"
    document.getElementById("74").style.boxShadow = "0px 0px 20px 0px aqua"
    setTimeout(function () {
      document.getElementById("74").style.backgroundColor = "transparent"
      document.getElementById("74").style.boxShadow = "none"
    }, 500)
  }
  if (key == 75) {
    var audio = new Audio("./assets/Musical Compos 33.mp3")
    audio.currentTime = 0
    audio.play()
    document.getElementById("75").style.backgroundColor = "white"
    document.getElementById("75").style.boxShadow = "0px 0px 20px 0px aqua"
    setTimeout(function () {
      document.getElementById("75").style.backgroundColor = "transparent"
      document.getElementById("75").style.boxShadow = "none"
    }, 500)
  }
  if (key == 76) {
    var audio = new Audio("./assets/Musical Orches 4.mp3")
    audio.currentTime = 0
    audio.play()
    document.getElementById("76").style.backgroundColor = "white"
    document.getElementById("76").style.boxShadow = "0px 0px 20px 0px aqua"
    setTimeout(function () {
      document.getElementById("76").style.backgroundColor = "transparent"
      document.getElementById("76").style.boxShadow = "none"
    }, 500)
  }
})

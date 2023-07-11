numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.querySelector("h2").textContent;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      var kick = new Audio("sounds/kickbass.mp3");
      kick.play();
      break;

    case "a":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "f":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    default:
      console.log();
  }
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(keypress) {
  var activeButton = document.querySelector("." + keypress);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// before we can see the web page this script will run adding an event addEventListener
//to each button so when clicked they get into the action and work acc. to the function
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {// func for click

    produceSound(this.innerHTML);
    buttonAnimation(this.innerHTML);

    //this.style.color = "white"; // when button is clicked the text on it becomes white
  });

  document.addEventListener("keydown", function(event){ // func for key press
    // event parameter in function tells us what causes the function to trigger
    //gives a lot of information about the key pressed and the html class it triggered
    //in our case it is responding to a keypress but it can be anything mous-click etc
    produceSound(event.key);//.key is built-in function specifies which key is pressed '+, ctrl, a etc'
    buttonAnimation(event.key);
  });


  function produceSound(key){ // func for producing sound
    switch (key) { //w a s d text on button
      case 'w':
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;

      case 'a':
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
        break;

      case 's':
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
        break;

      case 'd':
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
        break;

      case 'j':
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
        break;

      case 'k':
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
        break;

      case 'l':
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
        break;

      default:

    }
  }

function buttonAnimation(key){
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function(){ activeButton.classList.remove("pressed");}, 100);
}

}

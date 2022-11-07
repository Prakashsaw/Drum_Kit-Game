/*
document.querySelector(".set").addEventListener("click", handleClick);

function handleClick() {
     alert("I got Clicked");
 }

//or

document.querySelector(".set").addEventListener("click", function() {
    alert("I got Clicked");
});
*/

//or alert "I got Clicked" when all drum clicked one by one 

var numberOfdrum = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfdrum; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});

// var audio = new Audio('sounds/tom-1.mp3');
//      audio.play();

// document.addEventListener("keypress", function() {
//     alert("key was pressed.");
// });

function makeSound(key) {

    switch(key) {

        case "w" :
            var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
            break;
        
        case "a" :
            var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
            break;

        case "s" :
            var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
            break;

        case "d" :
            var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
            break;

        case "j" :
            var audio = new Audio('sounds/crash.mp3');
                audio.play();
            break;

        case "k" :
            var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();
            break;

        case "l" :
            var audio = new Audio('sounds/snare.mp3');
                audio.play();
            break;
        
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKEy) {

    var activeButton = document.querySelector("." + currentKEy);

    activeButton.classList.add("pressed"); //adding class="pressed" to current button call

    //time map function on java script
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}


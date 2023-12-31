
//creates an object array of buttons assigned the .drum class
var drumButtons = $("button.drum");

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        default: 
            alert("press 'w', 'a', 's', 'd', 'j', 'k', or 'l' buttons to make a sound!");
            break;
    }

}

//detects button clicks - uses html text as input to makeSound()
function handleClick(){
    var buttonChar = $(this).html(); //this gets the letter associate with each button
    makeSound(buttonChar);
    buttonAnimation(buttonChar);
   
}

//detects key press. uses key property of the event as an input to makeSound()
function handleKeyPress(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}

function buttonAnimation(currentKey){
    //gets button by unique letter class
    var activeButton = $("." + currentKey);

    //applies .pressed css style to indicate button has been pressed
    activeButton.addClass("pressed"); 

    //this removes .pressed after 1 sec. note: using anonymous function
    setTimeout(function(){activeButton.removeClass("pressed");}, 100);
}

//calls the handleKeyPress function when the keydown event is active
$("body").on("keydown", handleKeyPress);

//assigns the click event listener to all buttons and handleClick when active
$("button").click(handleClick);

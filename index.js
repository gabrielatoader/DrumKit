var drumButtonsList = document.querySelectorAll(".drum")

for(let i = 0; i< drumButtonsList.length; i++){
    drumButtonsList[i].addEventListener("click", handleButtonClick);
}

function handleButtonClick(){
    var buttonValue = this.innerHTML.toLowerCase();

    makeSound(buttonValue);
    buttonAnimation(buttonValue);
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key.toLowerCase()){
         case "a":
            let kickAudio = new Audio('./sounds/kick.mp3');
            kickAudio.play();
            break;
        case "s":
            let snareAudio = new Audio('./sounds/snare.mp3');
            snareAudio.play();
            break;
        case "j":
            let tom1Audio = new Audio('./sounds/tom1.mp3');
            tom1Audio.play();
            break;
        case "k":
            let tom2Audio = new Audio('./sounds/tom2.mp3');
            tom2Audio.play();
            break;
        case "l":
            let crashAudio = new Audio('./sounds/crash.mp3');
            crashAudio.play();
            break;
        default:
            console.log(buttonValue);
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." +  key);

    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
}
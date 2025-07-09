var drumButtonsList = document.querySelectorAll(".drum")

for(let i = 0; i< drumButtonsList.length; i++){
    drumButtonsList[i].addEventListener("click", handleButtonClick);
}

function handleButtonClick(){
    var buttonValue = this.innerHTML;
    makeSound(buttonValue);
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            let tom1Audio = new Audio('./sounds/tom1.mp3');
            tom1Audio.play();
        case "a":
            let tom2Audio = new Audio('./sounds/tom2.mp3');
            tom2Audio.play();
        case "s":
            let tom3Audio = new Audio('./sounds/tom3.mp3');
            tom3Audio.play();
        case "d":
            let tom4Audio = new Audio('./sounds/tom4.mp3');
            tom4Audio.play();
        break;
        case "j":
            let crashAudio = new Audio('./sounds/crash.mp3');
            crashAudio.play();
        case "k":
            let kickAudio = new Audio('./sounds/kick.mp3');
            kickAudio.play();
        case "l":
            let snareAudio = new Audio('./sounds/snare.mp3');
            snareAudio.play();
        default:
            console.log(buttonValue);
    }
}
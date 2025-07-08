var drumButtonsList = document.querySelectorAll(".drum")

for(let i = 0; i< drumButtonsList.length; i++){
    drumButtonsList[i].addEventListener("click", handleClick);
}

function handleClick(){
    alert("i got clicked");
}
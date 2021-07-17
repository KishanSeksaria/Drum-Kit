var buttonList = document.querySelectorAll("button.drum");

for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener("click", handleClick);
}

function handleClick() {
    // console.log(this);
    // this.style.color = "white";
    // let audioList = ['sounds/tom-1.mp3', 'sounds/tom-2.mp3', 'sounds/tom-3.mp3', 'sounds/tom-4.mp3', 'sounds/crash.mp3', 'sounds/snare.mp3', 'sounds/kick-bass.mp3'];
    var innerHtm = this.innerText;
    // console.log(innerHtm);
    makeSound(innerHtm);
    pressAnimation(innerHtm);
}

document.addEventListener('keydown', (event) => {
    makeSound(event.key);
    pressAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
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
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log(innerHtm);
    }
}

function pressAnimation(key) {
    var button = document.querySelector("." + key);
    // console.log(button);
    button.classList.add("pressed");

    setTimeout(() => {
        button.classList.remove('pressed');
    }, 100);
}
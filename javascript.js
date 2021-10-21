function creatAudio(keyName) {
    const audioObject = new Audio(`audio/${keyName}.mp3`)
    audioObject.play();
}

document.addEventListener("keydown", function (event) {
    creatAudio(event.key.toUpperCase());
})

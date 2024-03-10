var animation;

function enableStartButton() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function enableStopButton() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function moveMemeImage() {
    var image = document.getElementById("memeImage");
    var position = 0;
    var interval = 10;
    var step = 2;

    function animate() {
        position += step;
        image.style.left = position + "px";

        if (position >= window.innerWidth - image.width) {
            position = 0;
        }
    }

    animation = setInterval(animate, interval);
}

function startMoving() {
    enableStopButton();
    enableStartButton();
    moveMemeImage();
}

function stopMoving() {
    clearInterval(animation);
    enableStartButton();
    enableStopButton();
}
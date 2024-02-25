function GetRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function PlayCraps() {
    var die1 = GetRandomNumber(1, 6);
    var die2 = GetRandomNumber(1, 6);

    var sum = die1 + die2;

    var output = "You Rolled" + die1 + "and" + die2 + ". Sum is" + sum + ".";

    if (sum === 7 || sum=== 11){
        output += "CRAPS - You Lose!";
    } else if (die1 === die2 && die1 % 2 === 0){
        output += "You Won!";
    } else {
        output += "You Pushed!";
    }

    document.getElementById("GameOutput").innerHTML = output;
}

document.getElementById("PlayButton").addEventListener("click" , PlayCraps);
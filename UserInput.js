// this is the function to play the audiofile
function playAudoFile() {
    var audio = document.getElementById("audioFile");
    audio.play();
}
// this will pause the news station music
function pauseAudioFile() {
    var audio = document.getElementById("audioFile");
    audio.pause();
}
// this allows the play and pause button the work
document.getElementById("playButton").addEventListener("click", playAudoFile);
document.getElementById("pauseButton").addEventListener("click", pauseAudioFile);

// this will combine the first and last name that is submitted
function combineNames(firstName, lastName){
    return firstName.trim() + " " + lastName.trim();
}
//this will allow a 5 digit number to be inputted
function isValidZip(zipCode) {
    return /^\d{5}$/.test(zipCode);
}
//this displays the secret message once the requirements have been met
function displaySecretMessage(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let zipCode = document.getElementById("zipCodeInput").value;

    let fullName = combineNames(firstName, lastName);
// this wont allow you to submit a name more than 20 characters
    if (fullName.length > 20) {
        alert("Full name should not exceed 20 characters. Please try again.");
        return;
    }
// this checks if the zip is 5 digits
    if (!isValidZip(zipCode)) {
        alert("Please enter a valid 5-digit zip code.");
        return;
    }
// this is the secret message
    let secretMessage = `Hello, ${fullName}! You have unlocked the secret message.
    When in doubt, look intelligent.`;
    document.getElementById("secretMessage").innerText = secretMessage;
}
//this displays the message
document.getElementById("userInfoForm").addEventListener("submit",displaySecretMessage);
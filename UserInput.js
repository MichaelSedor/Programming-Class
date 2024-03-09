function combineNames(firstName, lastName){
    return firstName.trim() + " " + lastName.trim();
}
function isValidZip(zipCode) {
    return /^\d{5}$/.test(zipCode);
}
function displaySecretMessage(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let zipCode = document.getElementById("zipCodeInput").value;

    let fullName = combineNames(firstName, lastName);

    if (fullName.length > 20) {
        alert("Full name should not exceed 20 characters. Please try again.");
        return;
    }

    if (!isValidZip(zipCode)) {
        alert("Please enter a valid 5-digit zip code.");
        return;
    }

    let secretMessage = `Hello, ${fullName}! You have unlocked the secret message.
    When in doubt, look intelligent.`;
    document.getElementById("secretMessage").innerText = secretMessage;
}
document.getElementById("userInfoForm").addEventListener("submit",displaySecretMessage);
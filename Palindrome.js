function isPalindrome(str) {
    str = str.replace(/\s/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

let continueLoop = true;

while (continueLoop) {
    let userInput = prompt("Enter a Word:");
    if (userInput === null || userInput.trim() === '') {
        continueLoop = false;
        alert("Thanks for trying Kyle's Palindrome Checker!");
    } else {

        let isPalindromeResult = isPalindrome(userInput);

        if (isPalindromeResult) {
            alert(`"${userInput}" is a palindrome!`);
        } else {
            alert(`"${userInput}" is not a palindrome.`);
        } 
    }
}
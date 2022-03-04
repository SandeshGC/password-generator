let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialChars = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>./?"
let numbers = "0123456789";
let availableChars = alpha + specialChars + numbers; //string containing all available characters i.e. symbols, alphabets and numbers.
let pw1El = document.getElementById("pw1");
let pw2El = document.getElementById("pw2");
let pw3El = document.getElementById("pw3");
let pw4El = document.getElementById("pw4");
dispPassword(); //displaying random passwords initially

function genPassword() { //generates passwords using all the available characters
    // console.log("Generating Passwords...");
    let password = "";
    let randomText = "";
    for (let i = 0; i <= 8; i++) {
        randomText = availableChars[(Math.floor(Math.random() * availableChars.length))]
        password += randomText;
    }
    return password;
}

function dispPassword() { //displaying passwords as the value of the respective elements
    pw1El.value = genPassword();
    pw2El.value = genPassword();
    pw3El.value = genPassword();
    pw4El.value = genPassword();
}
//copying each password to the clipboard when it is clicked
function copyPw1() {
    navigator.clipboard.writeText(pw1El.value);
}

function copyPw2() {
    navigator.clipboard.writeText(pw2El.value);
}

function copyPw3() {
    navigator.clipboard.writeText(pw3El.value);
}

function copyPw4() {
    navigator.clipboard.writeText(pw4El.value);
}
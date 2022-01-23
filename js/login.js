const logIn=document.querySelector("#logIn")
const logInInput=document.querySelector("#logIn input")
const logOn=document.querySelector("#logOn")

const HiddenCss = "hidden"
const USERNAME_KEY = "username";

function goLogIn(event) {
    event.preventDefault();
    logIn.classList.add(HiddenCss);
    const logInV = logInInput.value;
    localStorage.setItem(USERNAME_KEY, logInV)
    goLogOn(logInV)
}

function goLogOn(username) {
    logOn.innerText = `Hello ${username}`;
    logOn.classList.remove(HiddenCss);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    logIn.classList.remove(HiddenCss);
    logIn.addEventListener("submit", goLogIn);
} else {
    goLogOn(savedUsername);
}
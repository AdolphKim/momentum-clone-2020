const loginForm = document.querySelector("#login-form");
const loginText = loginForm.querySelector("input");
const greetingDiv = document.querySelector("#greeting");
const greetingText = greetingDiv.querySelector("h1")
const logoutBtn = greetingDiv.querySelector("button");
const USERNAME_KEY = "username"
const HIDDEN_CLASSNAME = "hidden"
const savedUserName = localStorage.getItem(USERNAME_KEY);
function paintGrettingDiv(username){
    greetingText.innerText = `반갑습니다 ${username}님`;
    seekObject(greetingDiv);
}
function hideObject(object){
    object.classList.add(HIDDEN_CLASSNAME);
}
function seekObject(object){
    object.classList.remove(HIDDEN_CLASSNAME);
}
function onSubmit(event){
    event.preventDefault();
    username = loginText.value;
    localStorage.setItem(USERNAME_KEY,username);
    hideObject(loginForm);
    paintGrettingDiv(username);
}

function onLogoutBtn(event){
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
}


if(localStorage.getItem(USERNAME_KEY)){
    paintGrettingDiv(savedUserName);
}
else{
    seekObject(loginForm);
}

loginForm.addEventListener("submit",onSubmit);
logoutBtn.addEventListener("click",onLogoutBtn);



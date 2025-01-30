let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let Forgetlink = document.getElementById("Forgetlink");
let password = document.getElementById("password");

signinBtn.onclick = function(){
    nameField.style.maxHeight="0";
    password.style.maxHeight="65px";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function(){
    nameField.style.maxHeight="65px";
    password.style.maxHeight="65px";
    Forgetlink.style.maxHeight="65px";
    title.innerHTML="Sign Up"
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable")
}

Forgetlink.onclick = function(){
    nameField.style.maxHeight="0";
    title.innerHTML="";
    Forgetlink.style.maxHeight="0";
    password.style.maxHeight="0";

}
let Login = document.querySelector(".form-login");
let Singup = document.querySelector(".form-singup");

function login(){
    Login.style.transform = "translateX(-335px)";
    Singup.style.transform = "translateX(-335px)";
}
function singup(){
    Singup.style.transform = "translateX(00px)";
    Login.style.transform = "translateX(00px)";

    console.log("helo");
}
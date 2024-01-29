let Login = document.querySelector(".form-login");
let Singup = document.querySelector(".form-singup");
let line = document.querySelector(".line");

function login() {
  Login.style.transform = "translateX(0)";
  Singup.style.transform = "translateX(0)";
  line.style.transform = "translateX(0)";
}
function singup() {
  Singup.style.transform = "translateX(-335px)";
  Login.style.transform = "translateX(-335px)";
  line.style.transform = "translateX(112px)";
}

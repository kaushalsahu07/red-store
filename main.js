let Login = document.querySelector(".form-login");
let Signin = document.querySelector(".form-signin");
let line = document.querySelector(".line");

function login() {
  Login.style.transform = "translateX(0)";
  Signin.style.transform = "translateX(0)";
  line.style.transform = "translateX(0)";
}
function signin() {
  Signin.style.transform = "translateX(-335px)";
  Login.style.transform = "translateX(-335px)";
  line.style.transform = "translateX(110px)";
}

const loginScreen = document.getElementById("login-screen");
const formScreen = document.getElementById("form-screen");
const thanksScreen = document.getElementById("thanks-screen");
const form = document.getElementById("health-form");

function goToForm() {
  loginScreen.classList.add("hidden");
  formScreen.classList.remove("hidden");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formScreen.classList.add("hidden");
  thanksScreen.classList.remove("hidden");
});

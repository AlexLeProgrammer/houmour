import { auth, database } from "/js/firebase-innit.js";
import { createUserWithEmailAndPassword, setPersistence, browserSessionPersistence, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const pseudoInput = document.querySelector("#input-pseudo");
const emailInput = document.querySelector("#input-email-signin");
const emailInputLogin = document.querySelector("#input-email-login");
const passwordInput = document.querySelector("#input-password-signin");
const passwordInputLogin = document.querySelector("#input-password-login");
const confirmPasswordInput = document.querySelector("#input-confirm-password");
const signinErrorMessage = document.querySelector("#signin .errormsg")
const loginErrorMessage = document.querySelector("#login .errormsg")

function dateInt() {
  return new Date().getFullYear() * 10000 + (new Date().getMonth() + 1) * 100 + new Date().getDate();
}

setPersistence(auth, browserSessionPersistence)
.catch((error) => {
  console.log(error.code);
});

auth.onAuthStateChanged(() => {
  if (auth.currentUser !== null) {
    window.location.href = "./";
  }
});

document.querySelector("#button-create-account").addEventListener("click", () => {
  signinErrorMessage.innerHTML = "";
  if (passwordInput.value !== confirmPasswordInput.value) {
    signinErrorMessage.innerHTML = "Les mots de passe ne sont pas les mêmes";
    return;
  }
  if (pseudoInput.value === "" || pseudoInput.value === null) {
    signinErrorMessage.innerHTML = "Le pseudo ne peut pas être vide";
    return;
  }
  createUserWithEmailAndPassword(auth, emailInput.value, passwordInput.value)
  .then((userCredential) => {
    const user = userCredential.user;
    set(ref(database, "/users/" + user.uid), {
      pseudo: pseudoInput.value,
      score: 0,
      user_since: dateInt()
    });
  })
  .catch((error) => {
    console.log(error.code);
    switch (error.code) {
      case "auth/weak-password":
        signinErrorMessage.innerHTML = "Le mot de passe doit contenir au moins 6 caractères";
        break;
      default:
        signinErrorMessage.innerHTML = "Une erreur s'est produite, réessayez plus tard";
    }
  });
});

document.querySelector("#button-login").addEventListener("click", () => {
  loginErrorMessage.innerHTML = "";
  signInWithEmailAndPassword(auth, emailInputLogin.value, passwordInputLogin.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    signinErrorMessage.innerHTML = "Email ou mot de passe incorrect"
  });
});
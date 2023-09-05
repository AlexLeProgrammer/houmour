function switchPanel() {
  if (document.querySelector("body").className === "signin") {
    document.querySelector("body").className = "login";
    document.querySelector("#top-panel h1").innerHTML = "Pas encore de compte ?";
    document.querySelector("#top-panel p").innerHTML = "Créez un compte pour pouvoir réagir et poster vos meilleures blagues.";
    document.querySelector("#top-panel button").innerHTML = "Créer un compte";
  } else {
    document.querySelector("body").className = "signin";
    document.querySelector("#top-panel h1").innerHTML = "Deja un compte ?";
    document.querySelector("#top-panel p").innerHTML = "Connectez vous.";
    document.querySelector("#top-panel button").innerHTML = "Se connecter";
  }
}
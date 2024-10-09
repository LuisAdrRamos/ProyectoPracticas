const form = document.getElementById("login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let mail = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let modo = document.getElementById("loginModo").value;

  if (mail == "" || pass == "" || modo == ""){
    alert("Llenar todos los campos es obligatorio");
  } else {
    switch (modo) {
      case "estudiante":
        if (mail == "estudiante@epn.edu.ec" && pass == "12345") {
            window.location.href = "index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
        break;

      case "docente":
        if (!mail.endsWith("@epn.edu.ec")) {
            alert("El correo electrónico debe ser institucional (@epn.edu.ec)");
        } else if (mail == "docente@epn.edu.ec" && pass == "12345") {
            window.location.href = "index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
        break;

      case "empresa":
        if (!mail.endsWith("@gmail.com")) {
            alert("El correo electrónico debe ser institucional (@gmail.com)");
        } else if (mail == "empresa@gmail.com" && pass == "12345") {
            window.location.href = "index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
        break;

      default:
        alert("Modo inválido. Por favor, selecciona un modo válido.");
        break;
    }
  }
});

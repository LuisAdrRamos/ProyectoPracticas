const form = document.getElementById("register-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let correo = document.getElementById("regEmail").value;
  let cedula = document.getElementById("regCedula").value;
  let password = document.getElementById("regPassword").value; 
  let modo = document.getElementById("regModo").value;
    
  if (correo == "" || cedula == "" || password == "" || modo == ""){
    alert("Llenar todos los campos es obligatorio")
  }  else{
        switch (modo) {
          case "estudiante":
            if (cedula.length !== 10) {
                alert("La cédula del estudiante debe tener 10 dígitos");
                return;
            } else if (!correo.endsWith("@epn.edu.ec")) {
                alert("El correo electrónico debe ser institucional (@epn.edu.ec)");
                return; 
            } else{
                alert("Usuario registrado con éxito");
                window.location.href = "index.html";

            }
            break;
          case "docente":
            if (cedula.length !== 10) {
                alert("La cedula del docente debe tener 10 dígitos");
                return;
            } else{
                alert("Usuario registrado con éxito");
                window.location.href = "index.html";

            }
          case "empresa":
            if (cedula.length !== 13) {
              alert("El RUC dehe tener 13 digitos");
              return;
            } else{
                alert("Usuario registrado con éxito");
                window.location.href = "index.html";
            }
            break;
          default: 
            alert("Modo inválido. Por favor, selecciona un modo válido.");
            return;
        }
    }

});

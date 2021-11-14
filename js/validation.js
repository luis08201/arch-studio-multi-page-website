/* NAME */

const nombre = document.getElementById("inputName");

nombre.addEventListener("input", () => {
  const nombreText = document.getElementById("span");
  const nombrePattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  if (nombre.value.match(nombrePattern)) {
    nombreText.innerHTML = "";
    nombreText.classList.remove("active");
    nombre.classList.remove("active");
  } else if (nombre.value === "") {
    nombreText.innerHTML = "Can't be empty";
    nombreText.classList.add("active");
    nombre.classList.add("active");
  } else {
    nombreText.innerHTML = "Can't have number";
    nombreText.classList.add("active");
    nombre.classList.add("active");
  }
});

/* EMAIL */
const correo = document.getElementById("inputEmail");

correo.addEventListener("input", () => {
  const correoText = document.getElementById("spanEmail");
  const correoPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

  if (correo.value.match(correoPattern)) {
    correoText.innerHTML = "";
    correo.classList.remove('active');
    correoText.classList.remove('active');
  } else if (correo.value === "") {
    correoText.innerHTML = "Can't be empty";
    correo.classList.add('active');
    correoText.classList.add('active');
  } else {
    correoText.innerHTML = "Looks like this is not an email";
    correo.classList.add('active');
    correoText.classList.add('active');
  }
});

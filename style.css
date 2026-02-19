let score = 0;
const totalFlags = 5;

// XSS
document.getElementById("xss-input").addEventListener("input", function() {
  const value = this.value.toLowerCase();
  if(value.includes("<script>")) {
    alert("¡Flag XSS encontrada! 🛡️");
    score++;
    this.disabled = true;
    updateScore();
  }
});

// SQLi
document.getElementById("login-btn").addEventListener("click", function() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if(user.includes("' or '1'='1") || pass.includes("' or '1'='1")) {
    alert("¡Flag SQLi encontrada! 💻");
    score++;
    document.getElementById("user").disabled = true;
    document.getElementById("pass").disabled = true;
    this.disabled = true;
    updateScore();
  } else {
    alert("Login fallido, prueba otra inyección.");
  }
});

// Contraseña débil
document.getElementById("try-pass").addEventListener("click", function() {
  const pass = document.getElementById("guess").value;
  if(pass === "12345") {
    alert("¡Flag contraseña débil encontrada! 🔑");
    score++;
    document.getElementById("guess").disabled = true;
    this.disabled = true;
    updateScore();
  } else {
    alert("Incorrecto, intenta otra contraseña.");
  }
});

// Headers inseguros
document.getElementById("check-header").addEventListener("click", function() {
  const header = document.getElementById("header-input").value.toLowerCase();
  if(header === "x-frame-options: deny") {
    alert("¡Flag header inseguro encontrada! 🌐");
    score++;
    document.getElementById("header-input").disabled = true;
    this.disabled = true;
    updateScore();
  } else {
    alert("Cabecera incorrecta, prueba otra.");
  }
});

// Función para actualizar puntuación y mostrar mensaje final
function updateScore() {
  document.getElementById("score").textContent = `Flags encontradas: ${score}/${totalFlags}`;
  if(score === totalFlags) {
    alert("¡Felicidades! Has encontrado todas las flags. 🏆");
  }
}

let score = 0;
const totalFlags = 5;

const flags = {
  1: {
    message: "Flag 1: XSS detectado! 🛡️",
    question: "¿Qué significa XSS? (a) Cross-site Scripting, (b) Extra Secure System",
    answer: "a"
  },
  2: {
    message: "Flag 2: Posible SQL Injection! 💻",
    question: "¿Qué busca un ataque SQLi? (a) Inyectar código SQL, (b) Cambiar contraseña",
    answer: "a"
  },
  3: {
    message: "Flag 3: Login vulnerable a fuerza bruta! 🔐",
    question: "¿Qué es una fuerza bruta? (a) Probar múltiples contraseñas, (b) Robar cookies",
    answer: "a"
  },
  4: {
    message: "Flag 4: Headers inseguros detectados! 🌐",
    question: "¿Para qué sirven los headers HTTP? (a) Controlar seguridad y caché, (b) Mostrar imágenes",
    answer: "a"
  },
  5: {
    message: "Flag 5: Contraseña débil encontrada! 🔑",
    question: "¿Qué hace que una contraseña sea segura? (a) Largo + símbolos + números, (b) Solo letras",
    answer: "a"
  }
};

document.querySelectorAll(".flag-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    const flagId = this.getAttribute("data-flag");
    const flag = flags[flagId];

    document.getElementById("quiz").innerHTML = `
      ${flag.message}<br>
      ${flag.question}<br>
      <input type="text" id="answer" placeholder="Escribe a o b">
      <button id="submitAnswer">Responder</button>
    `;

    document.getElementById("submitAnswer").addEventListener("click", function() {
      const userAnswer = document.getElementById("answer").value.toLowerCase();
      if(userAnswer === flag.answer) {
        alert("Correcto! ✅");
        score++;
        document.getElementById("score").textContent = `Flags encontradas: ${score}/${totalFlags}`;
        document.getElementById("quiz").innerHTML = "";
        btn.disabled = true;
        btn.style.backgroundColor = "#28a745";
      } else {
        alert("Incorrecto ❌. Intenta de nuevo!");
      }
    });
  });
});

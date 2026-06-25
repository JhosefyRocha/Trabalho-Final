function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = "Projeto em evolução: aprendendo HTML, CSS e JavaScript na prática.";
}

const botao = document.getElementById("botaoMensagem");

if (botao) {
  botao.addEventListener("click", mostrarMensagem);
}

// Manipulação do DOM no rodapé
const footer = document.getElementById("mensagem-footer");
if (footer) {
  footer.style.color = "#38bdf8";
}

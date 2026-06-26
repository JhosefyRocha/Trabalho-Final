// 1. Pega o formulário e o campo de nome do HTML
const formulario = document.querySelector(".form_contato");
const campoNome = document.querySelector("input[type='text']");

// 2. Cria a ação que acontece quando o usuário envia o formulário
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Impede a página de atualizar
    
    let nome = campoNome.value; // Pega o nome digitado
    
    alert("Olá " + nome + ", sua mensagem foi enviada!"); // Mostra o alerta
});

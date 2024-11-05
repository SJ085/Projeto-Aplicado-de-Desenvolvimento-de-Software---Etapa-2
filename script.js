// Configuração inicial para a integração com o Back4App
const BACK4APP_APP_ID = 'P07Lo1xkiYBpzmDyt07tKd0Z8IWLp9Z9lNSkaJa5'; // Substitua por seu APP ID
const BACK4APP_REST_API_KEY = 'HjifmXBfFlqz7Nx6732qm4wYe78dvIEqAa0aowO9'; // Substitua pela sua REST API Key
const BACK4APP_ENDPOINT = 'https://parseapi.back4app.com/classes/Feedback';

// Função para enviar feedback
async function enviarFeedback(nome, mensagem) {
  try {
    const response = await fetch(BACK4APP_ENDPOINT, {
      method: 'POST',
      headers: {
        'X-Parse-Application-Id': BACK4APP_APP_ID,
        'X-Parse-REST-API-Key': BACK4APP_REST_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: nome,
        mensagem: mensagem
      })
    });

    if (response.ok) {
      alert("Feedback enviado com sucesso!");
    } else {
      throw new Error("Erro ao enviar feedback");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Ocorreu um erro ao enviar o feedback.");
  }
}
// Função para buscar e exibir feedbacks
async function buscarFeedbacks() {
    try {
      const response = await fetch(BACK4APP_ENDPOINT, {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': BACK4APP_APP_ID,
          'X-Parse-REST-API-Key': BACK4APP_REST_API_KEY,
        }
      });
  
      const data = await response.json();
      const feedbackContainer = document.getElementById("feedbacks");
  
      data.results.forEach(feedback => {
        const feedbackElement = document.createElement("div");
        feedbackElement.innerHTML = `<strong>${feedback.nome}</strong>: ${feedback.mensagem}`;
        feedbackContainer.appendChild(feedbackElement);
      });
    } catch (error) {
      console.error("Erro ao buscar feedbacks:", error);
    }
  }
  
  // Chama a função para buscar feedbacks ao carregar a página
  document.addEventListener("DOMContentLoaded", buscarFeedbacks);
  

// Captura o evento de envio do formulário de contato
document.querySelector("#contato form").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;

  enviarFeedback(nome, mensagem);
});

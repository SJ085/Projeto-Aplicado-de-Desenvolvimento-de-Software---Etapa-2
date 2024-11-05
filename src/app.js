// Inicialize o SDK do Back4App
Parse.initialize("7dSGhRME1sWvHdbkzBgxIesJ11zipcHh7P9fJtmU", "HjifmXBfFlqz7Nx6732qm4wYe78dvIEqAa0aowO9");
Parse.serverURL = "https://parseapi.back4app.com/";

function toggleRegister() {
  document.getElementById("loginForm").classList.toggle("hidden");
  document.getElementById("registerForm").classList.toggle("hidden");
}

// Função para registrar um novo usuário
async function signUp() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  if (username && email && password) {
    const user = new Parse.User();
    user.set("username", username);
    user.set("email", email);
    user.set("password", password);

    try {
      await user.signUp();
      alert("Registro realizado com sucesso! Faça login.");
      toggleRegister();
    } catch (error) {
      alert(`Erro ao registrar: ${error.message}`);
    }
  } else {
    alert("Preencha todos os campos!");
  }
}

// Função para login de usuário
async function logIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await Parse.User.logIn(email, password);
    alert("Login realizado com sucesso!");
    // Redirecionar para a página principal ou dashboard
    window.location.href = "main.html";
  } catch (error) {
    alert(`Erro ao fazer login: ${error.message}`);
  }
}

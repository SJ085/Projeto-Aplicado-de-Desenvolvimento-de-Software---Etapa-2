Parse.initialize("7dSGhRME1sWvHdbkzBgxIesJ11zipcHh7P9fJtmU", "HjifmXBfFlqz7Nx6732qm4wYe78dvIEqAa0aowO9");
Parse.serverURL = "https://parseapi.back4app.com/";

// Função para salvar usuários
document.querySelector("#btnCadastrar").addEventListener("click", async function () {
  // Obter os valores dos campos do formulário
  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const password = "senha-padrao"; // Defina ou solicite uma senha no formulário

  // Verificar se os campos estão preenchidos
  if (nome && email) {
    try {
      // Criar um novo usuário
      const user = new Parse.User();
      user.set("username", nome);
      user.set("email", email);
      user.set("password", password);

      // Salvar no Back4App
      await user.signUp();
      alert("Usuário cadastrado com sucesso!");

      // Limpar os campos do formulário após o cadastro
      document.querySelector("#formCadastro").reset();
    } catch (error) {
      alert("Erro ao cadastrar usuário: " + error.message);
    }
  } else {
    alert("Preencha todos os campos!");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav__links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});




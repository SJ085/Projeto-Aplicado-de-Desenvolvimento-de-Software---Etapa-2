// Scroll suave para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validação simples do formulário de busca
document.querySelector("form").addEventListener("submit", function (e) {
    const input = document.querySelector("input");
    if (!input.value) {
        e.preventDefault();
        alert("Por favor, preencha o campo de busca.");
    }
});

// Exibir/ocultar menu suspenso ao clicar no botão de login/cadastro
const loginSignupBtn = document.getElementById('loginSignupBtn');
const loginSignupMenu = document.getElementById('loginSignupMenu');

// Alternar a classe "active" para exibir o menu suspenso
loginSignupBtn.addEventListener('click', function () {
    loginSignupBtn.classList.toggle('active');
    loginSignupMenu.classList.toggle('active');
});

// Controle do menu sanduíche
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('mobile');
  hamburger.classList.toggle('active');
});


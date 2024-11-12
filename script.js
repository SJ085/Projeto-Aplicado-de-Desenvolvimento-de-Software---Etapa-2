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

// Gráfico com Chart.js
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Progresso de Aprendizado',
            data: [10, 20, 30, 40, 50, 60],
            backgroundColor: 'rgba(92, 72, 238, 0.5)',
            borderColor: 'rgba(92, 72, 238, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

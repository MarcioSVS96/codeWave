// JavaScript para alternar a visibilidade das respostas
document.addEventListener("DOMContentLoaded", function () {
    const faqButtons = document.querySelectorAll(".faq-question");
    const faqAnswers = document.querySelectorAll(".faq-answer");

    // Exibe apenas a primeira resposta ao carregar a página
    if (faqAnswers.length > 0) {
        faqAnswers[0].classList.remove("hidden");
        faqAnswers[0].style.display = "block";
    }

    faqButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            faqAnswers.forEach((answer, i) => {
                if (i !== index) {
                    answer.classList.add("hidden");
                    answer.style.display = "none";
                }
            });
            const answer = button.nextElementSibling;
            answer.classList.toggle("hidden");
            answer.style.display = answer.classList.contains("hidden") ? "none" : "block";
        });
    });
    const menuButton = document.querySelector("header button");
    const nav = document.querySelector("header nav");
    
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("nav-open");
    });
    
    document.getElementById('toggle-projects').addEventListener('click', function() {
        const ghostProjects = document.querySelectorAll('.ghost');
        const button = this;
      
        ghostProjects.forEach(project => {
          project.style.display = project.style.display === 'none' ? 'block' : 'none';
        });
      
        if (button.innerText === 'Veja mais Modelos de Projetos') {
          button.innerText = 'Ver menos';
          window.location.href = '#galery';
        } else {
          button.innerText = 'Veja mais Modelos de Projetos';
          window.location.href = '#galery';
        }
      });
      
      // Para garantir que os projetos com a classe 'ghost' sejam inicialmente ocultados:
      document.querySelectorAll('.ghost').forEach(project => {
        project.style.display = 'none';
      });
      
});

